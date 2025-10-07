import React, { useState } from 'react';
import './Accaunt.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (be) => {
    be.preventDefault();
    console.log('Bejelentkezés:', { email, password, showPassword });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Bejelentkezés</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(be) => setEmail(be.target.value)}
          required
        />

        <label htmlFor="password">Jelszó:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(be) => setPassword(be.target.value)}
          required
        />

        <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? "Elrejt" : "Mutat"}
      </button>

        <button type="submit">Belépés</button>
        <a href="/register">Ha még nem regisztrált</a>
      </form>
    </div>
  );
};

export default Login;