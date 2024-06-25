// src/components/Courses.js

import React from 'react';
import {Link} from 'react-router-dom';
import './Courses.css';
import cProgrammingImage from './images/Cprogram.jpeg';
import dsaImage from './images/dsa.jpg';
import coaImage from './images/coa.jpg';
import dbmsImage from './images/dbms.jpg';
import osImage from './images/os.jpg';

const courses = [
  {
    id: 1,
    name: "C Programming",
    status: "ACTIVE",
    fee: 1500,
    instructor: {
      name: "Mr. Sanddep Kulkkarni",
      status: "ACTIVE",
      assigned_batches: 3
    },
    image: cProgrammingImage,
  },
  {
    id: 2,
    name: "Data Structure and Algorithm",
    status: "ACTIVE",
    fee: 2000,
    instructor: {
      name: "Mr. Prakash Hegade",
      status: "ACTIVE",
      assigned_batches: 3
    },
    image: dsaImage,
  },
  {
    id: 3,
    name: "Computer Organization and Architecture",
    status: "ACTIVE",
    fee: 1000,
    instructor: {
      name: "Mrs. Aruna Nayak",
      status: "ACTIVE",
      assigned_batches: 3
    },
    image: coaImage,
  },
  {
    id: 4,
    name: "Database Management System",
    status: "ACTIVE",
    fee: 2500,
    instructor: {
      name: "Mr. Manjunath Gonal",
      status: "ACTIVE",
      assigned_batches: 3
    },
    image: dbmsImage,
  },
  {
    id: 5,
    name: "Operating System",
    status: "ACTIVE",
    fee: 1800,
    instructor: {
      name: "Mr. Shrinivas Desai",
      status: "ACTIVE",
      assigned_batches: 3
    },
    image: osImage,
  }
];

const Courses = () => {
  return (
    <div className="courses-container">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <Link to={`/course/${course.id}`}>
          <img src={course.image} alt={course.name} className="course-image" />
          <div className="course-info">
            <h3>{course.name}</h3>
            <p>Status: {course.status}</p>
            <p>Fee: ${course.fee}</p>
            <p>Instructor: {course.instructor.name}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
