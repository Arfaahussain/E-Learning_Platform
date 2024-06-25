import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [batch, setBatch] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };

        const userResponse = await axios.get('http://localhost:8081/api/user/me', { headers });
        setUser(userResponse.data);

        if (userResponse.data.role === 'ADMIN') {
          setIsAdmin(true);
        }

        const coursesResponse = await axios.get('http://localhost:8081/api/courses', { headers });
        setCourses(coursesResponse.data);

        const batchResponse = await axios.get('http://localhost:8081/api/batches/current', { headers });
        setBatch(batchResponse.data);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard-container"><br></br><br></br>
        <h1>Welcome, {user.name}</h1>
        <h2>My Courses</h2>
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id} className="course-item">
              {course.name}
            </li>
          ))}
        </ul>
        {batch && (
          <div className="batch-info">
            <h2>Current Batch</h2>
            <p>{batch.name}</p>
            <p>{batch.schedule}</p>
          </div>
        )}
        {isAdmin && (
          <div className="admin-section">
            <h2>Admin Section</h2>
            <p>Manage students, courses, instructors, and batches.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
