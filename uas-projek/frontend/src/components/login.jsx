import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Login berhasil:', data.user);
        // Simpan user ke localStorage/sessionStorage jika perlu
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        alert(data.message || 'Email atau password salah');
      }
    } catch (err) {
      console.error('Gagal login:', err);
      alert('Terjadi kesalahan saat login.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <div className="logo">
            <img src="/src/assets/LOGO.png" alt="Logo" />
          </div>
        </div>
        <h1 className="welcome-text">Kamu kembali!</h1>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field password-field"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <small>
          Belum punya akun?{' '}
          <button
            type="button"
            style={{ border: 'none', color: 'blue', background: 'none' }}
            onClick={() => navigate('/register')}
          >
            Daftar
          </button>
        </small>
      </div>
    </div>
  );
}

export default Login;
