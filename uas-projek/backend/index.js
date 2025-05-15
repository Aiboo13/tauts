const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
const bcrypt = require('bcrypt');

// Register
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const created_t = new Date();
  console.log('Data diterima:', req.body.username, req.body.email);


  if (!password) {
    return res.status(400).json({error : "password tidak boleh kosong"})
    // return res.status(400).json({ error: 'Password tidak boleh kosong' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    if (err) return res.status(500).json({ error: err.message });

    // Lanjutkan proses registrasi
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ error: 'Gagal mengenkripsi password' });

      db.query(
        'INSERT INTO users (username, email, password, created_t) VALUES (?, ?, ?, ?)',
        [username, email, hashedPassword, created_t],
        (err, result) => {
          if (err) return res.status(500).json({ error: err.message });
          res.json({ message: 'Registrasi berhasil', userId: result.insertId });
        }
      );
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      if (results.length === 0) {
        return res.status(401).json({ message: 'Email tidak ditemukan' });
      }

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.json({ message: 'Login berhasil', user });
      } else {
        res.status(401).json({ message: 'Password salah' });
      }
    }
  );
});

// Get semua user (opsional)
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.send('Server berjalan dengan baik!');
});

app.listen(PORT, () => {
  console.log(`Backend berjalan di http://localhost:${PORT}`);
});
