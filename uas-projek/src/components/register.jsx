import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
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
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="Unsername">Unsername</label>
            <input
              type="text"
              id="Unsername"
              value={password}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field unsername-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field password-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">confirm password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field confirm-password-field"
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
          <small>sudah punya akun.? <button style={{border:'none', color:'blue', fontFamily:'Anton'}} onClick={() => navigate('/login')}>masuk</button></small>
        </form>
      </div>
    </div>
  );
}

export default Register;