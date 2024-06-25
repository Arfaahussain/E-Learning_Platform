// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import users from '../userData'
import './Login.css';


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find(user => user.name === username && user.password === password);

        if (user) {
            onLogin(user); // Call parent function with user data
            navigate('/TestDashboard'); // Redirect to dashboard
        } else {
            
            setError('Invalid username or password');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                />
            </div>
            {error && <p className="form-text text-danger">{error}</p>}
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    );
};

export default Login;



