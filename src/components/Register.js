import React, { useState } from 'react';
import axios from 'axios';

import './Register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState({});

    const validatePassword = (password) => {
        const errors = {};
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const number = /\d/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (!uppercase.test(password)) {
            errors.uppercase = "Password must contain at least one uppercase letter.";
        }
        if (!lowercase.test(password)) {
            errors.lowercase = "Password must contain at least one lowercase letter.";
        }
        if (!number.test(password)) {
            errors.number = "Password must contain at least one number.";
        }
        if (!specialChar.test(password)) {
            errors.specialChar = "Password must contain at least one special character.";
        }
        return errors;
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setErrors(validatePassword(newPassword));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const passwordErrors = validatePassword(password);

        if (Object.keys(passwordErrors).length > 0) {
            setErrors(passwordErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8081/api/register', { name, email, password, address });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} required />
                    {errors.uppercase && <small className="form-text text-danger" htmlFor="password">{errors.uppercase}</small>}
                    {errors.lowercase && <small className="form-text text-danger" htmlFor="password">{errors.lowercase}</small>}
                    {errors.number && <small className="form-text text-danger" htmlFor="password">{errors.number}</small>}
                    {errors.specialChar && <small className="form-text text-danger" htmlFor="password">{errors.specialChar}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="text">Address</label>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;
