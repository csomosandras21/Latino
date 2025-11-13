import {Link} from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import vibility_off from '../../public/images/visibility_off.png';
import vibility_on from '../../public/images/visibility_on.png';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const letrehoz = async () => {
        console.log({ username, email, password });

        const response = await fetch('http://localhost:3500/api/new-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nev: username,
                email,
                jelszo: password,
            }),
        });

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            window.location.href = '/accaunt';
        } else {
            window.alert(valasz.msg);
        }
    };

    const handleSubmit = (be) => {
        be.preventDefault();

        if (password != repeatPassword) {
            window.alert('Nem egyeznek a jelszavak!');
            window.location.href = '/register';
        }
        if (password.length < 6) {
            window.alert('Nem elegendő hosszúságú jelszó!');
            return;
        }

        letrehoz();
    };

    return (
        <div className="login-container">
            <form
                className="login-form"
                onSubmit={handleSubmit}
            >
                <h2>Regisztráció</h2>

                <label htmlFor="username">Felhasználó név:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(be) => setUsername(be.target.value)}
                    required
                />

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
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(be) => setPassword(be.target.value)}
                    required
                />

                <label htmlFor="repeat-password">Ismételt jelszó:</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="repeat-password"
                    value={repeatPassword}
                    onChange={(be) => setRepeatPassword(be.target.value)}
                    required
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? (
                        <img
                            src={vibility_on}
                            alt="visible"
                        />
                    ) : (
                        <img src={vibility_off} />
                    )}
                </button>

                <button type="text-box">Regisztráció</button>
            </form>
        </div>
    );
};

export default Register;
