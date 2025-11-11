import React, { useState } from 'react';
import './Accaunt.css';
import vibility_off from '../../public/images/visibility_off.png';
import vibility_on from '../../public/images/visibility_on.png';


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
         {showPassword ? <img src={vibility_on} alt="visible" /> : <img src={vibility_off} />}
      </button>

      <a href="/"><button type="submit"> Belépés</button></a>
        
   

    
    <div>
        <a className='ha' href="/register"><p>Ha még nem regisztrált</p></a>
    </div>
       
      </form>

    </div>
  );
};

export default Login;