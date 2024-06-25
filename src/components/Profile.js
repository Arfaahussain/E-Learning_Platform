import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
    if (!user) {
        return <div>Please log in to see your profile information.</div>;
    }

    return (
        <div className="profile-container">
            <h2>Profile Information</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Status:</strong> {user.status}</p>
            <p><strong>Admission Fee:</strong> {user.admission_fee}</p>
            <h3>Course Information</h3>
            <p><strong>Course Name:</strong> {user.course.name}</p>
            <p><strong>Course Fee:</strong> {user.course.fee}</p>
            <p><strong>Course Status:</strong> {user.course.status}</p>
        </div>
    );
};

export default Profile;
