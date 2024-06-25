import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from './icons/user.svg';
import logo from './icons/icons8-learning-48.png';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    onLogout();
    setDropdownOpen(false); // Close dropdown on logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="E-Learning Icon" className="elearning-icon" /> {/* Icon */}
        E-Learning Platform
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {!user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
          
          {user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/TestDashboard">Dashboard</Link>
              </li>
              
              <li className="nav-item dropdown">
                <button className="nav-link profile-button" onClick={toggleDropdown}>
                  <img src={profileIcon} alt="Profile" className="profile-icon" />
                </button>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <Link className="dropdown-item" to="/profile">Profile</Link>
                  <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
