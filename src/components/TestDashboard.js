// src/components/Dashboard.js

import React from 'react';
import './TestDashboard.css';
import Courses from './Courses'; // Import Courses component

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <br></br><br></br><br></br>
      {user && (
        <div className="user-info">
            <h1>Welcome, {user.name}</h1>
        </div>
      )}
      <br></br><br></br><br></br><br></br>

      <div className="courses-container">
        <br></br><br></br>
        <Courses /> 
      </div>
    </div>
  );
};

export default Dashboard;
