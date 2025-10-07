import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [repeatPassword, setRepeatPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
    
      const handleSubmit = (be) => {
        be.preventDefault();

        if (password != repeatPassword) {
            window.alert('Nem egyeznek a jelszavak!');
            window.location.href = "/register"
        }
        if(password.length < 6){
          window.alert('Nem elegendő hosszúságú jelszó!');
          return
        }
        console.log('Bejelentkezés:', { email, password, repeatPassword, showPassword });
      };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Regisztráció</h2>
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
        
        <label htmlFor="repeat-password">Ismételt jelszó:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="repeat-password"
          value={repeatPassword}
          onChange={(be) => setRepeatPassword(be.target.value)}
          required
        />

        <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? "Elrejt" : "Mutat"}
      </button>

        <button type="submit">Regisztráció</button>
      </form>
    </div>
  )
}

export default Register