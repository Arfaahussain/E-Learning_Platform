import React from 'react';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="container"><br></br><br></br><br></br>
            <h1>Welcome to the E-Learning</h1>
            <div className="overview-section">
                <h2>Overview</h2>
                <p>The E-Learning Platform is a user-friendly platform designed to streamline the online learning process for students and manage user accounts effectively. This system is perfect for educational institutions, providing a seamless way for students to register, log in, and access their personalized dashboards.</p>
            </div>
            <div className="getting-started-section transperent-section">
                <h2>Getting Started</h2>
                <div className="steps">
                    <h3>Registration</h3>
                    <p>1. Navigate to the Registration Page: Click on the <a href="/register">Register</a> link in the navbar.</p>
                    <p>2. Fill Out the Form: Provide your username, email, password, and any other required details.</p>
                    <p>3. Submit: Click on the 'Register' button to create your account.</p>
                    <h3>Login</h3>
                    <p>1. Navigate to the Login Page: Click on the <a href="/login">Login</a> link in the navbar.</p>
                    <p>2. Enter Credentials: Input your username and password.</p>
                    <p>3. Submit: Click the 'Login' button to access your dashboard.</p>
                    <p>4. Error Handling: If your credentials are incorrect, an error message will be displayed.</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
