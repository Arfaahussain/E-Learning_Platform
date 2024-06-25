// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/TestDashboard';
import Profile from './components/Profile';
import Register from './components/Register';
import Course from './components/Courses';
import CourseDetails from './components/CourseDetail';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = (userData) => {
    setUser(null);
  };

  return (
    <Router>
      <div className="background"></div>
      <div className="app-container">
      <Navbar user={user} onLogout={handleLogout} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/TestDashboard"
              element={user ? <Dashboard user={user} /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/profile"
              element={user ? <Profile user={user} /> : <Navigate to="/login" />}
            />
            <Route path="/courses" element={<Course />} />
            <Route path="/course/:id" element={<CourseDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
