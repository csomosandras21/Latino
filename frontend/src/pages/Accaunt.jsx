import React, { useState } from 'react';
import './Accaunt.css';
import vibility_off from '../../public/images/visibility_off.png';
import vibility_on from '../../public/images/visibility_on.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (be) => {
    be.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3500/api/new-user-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // sikeres válasz
        const data = await response.json();
        if (data.success) {
          localStorage.setItem('isLoggedIn', 1);          
          localStorage.setItem('user', JSON.stringify(data.existingUser));          
          window.location.href = '/home';
        } else {
          setError('Helytelen email vagy jelszó!');
        }
      } else {
        setError('Helytelen email vagy jelszó!');
      }
    } catch (err) {
      console.error(err);
      setError('Hiba történt a bejelentkezés során.');
    }
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
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(be) => setPassword(be.target.value)}
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <img src={vibility_on} alt="visible" />
          ) : (
            <img src={vibility_off} alt="hidden" />
          )}
        </button>

        <button type="submit">Belépés</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div>
          <a className="ha" href="/register">
            <p>Ha még nem regisztrált</p>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
