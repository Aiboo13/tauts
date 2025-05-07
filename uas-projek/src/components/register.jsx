import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      alert('Email tidak valid');
      return;
    }

    if (password.length < 6) {
      alert('Password harus memiliki minimal 6 karakter');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || 'Gagal mendaftar');
        console.log('Error dari backend:', errorData);
        console.log('Data yang dikirim:', { username, email, password });
        return;
      }

      const data = await res.json();
      alert('Pendaftaran berhasil!');
      console.log('Data dari backend:', data);
      localStorage.setItem('user', JSON.stringify(data.user));
      console.log('Data yang dikirim:', { username, email, password });
      navigate('/login');
    } catch (err) {
      console.error('Error saat register:', err);
      alert('Terjadi kesalahan saat mendaftar.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <div className="logo">
            <img src="/src/assets/LOGO.png" alt="" />
          </div>
        </div>
        <h1 className="welcome-text">Daftarkan tautanmu</h1>

        <form onSubmit={handleRegister} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Konfirmasi Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Daftar
          </button>
          <small>
            Sudah punya akun?{' '}
            <button
              type="button"
              style={{ border: 'none', color: 'blue', fontFamily: 'Anton', background: 'none' }}
              onClick={() => navigate('/login')}
            >
              Masuk
            </button>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Register;
