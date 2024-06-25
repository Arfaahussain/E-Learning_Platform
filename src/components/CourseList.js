// src/components/CourseList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';

const courses = [
  { id: 1, title: 'C Programming' },
  { id: 2, title: 'Data Structures and Algorithm' },
  { id: 3, title: 'Computer Organization and Architecture' },
  { id: 4, title: 'Database Management Systems' },
  { id: 5, title: 'Operating Systems' },
];

const CourseList = () => {
  return (
    <div className="courses-container">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <Link to={`/course/${course.id}`}>
            <h3>{course.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
