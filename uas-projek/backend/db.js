const mysql = require('mysql2');
require('dotenv').config();



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tauts',
});

db.connect((err) => {
  if (err) {
    console.error('Gagal konek ke database:', err);
  } else {
    console.log('Berhasil konek ke database MySQL');
  }
});

module.exports = db;
