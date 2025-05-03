import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <h1 className="welcome-text">Kamu kembali!</h1>
        
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
            <label htmlFor="email">password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field password-field"
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;