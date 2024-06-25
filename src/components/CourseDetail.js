// src/components/CourseDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';

const courseVideos = {
  1: [
    { title: 'Basic Structure of C Program', url: 'https://www.youtube.com/embed/5SIBB589fAg?si=k8Xj3xatcm2ZZuYe' },
    { title: 'Basic Syntax of C Program', url: 'https://www.youtube.com/embed/PrVOM7M5nEY?si=tTiNCdABWqu__DL4' },
    { title: 'Variables and Data Types in C', url: 'https://www.youtube.com/embed/EcUGDTs4RyY?si=CfE90aYzf7VKMbNu' },
    { title: 'Operators in C', url: 'https://www.youtube.com/embed/V4Wwuu05_t4?si=NE9lgBTAntAjmzGL' },
    { title: 'If Else Control Statements in C', url: 'https://www.youtube.com/embed/D0ACZ0uU_2g?si=9S35kT3x7jl9tfW7' },
  ],
  2: [
    { title: 'Introduction to Algorithms', url: 'https://www.youtube.com/embed/0IAPZzGSbME?si=SIhUj5K9fus6T1KY' },
    { title: 'Characterstics of Algorithm', url: 'https://www.youtube.com/embed/FbYzBWdhMb0?si=g0Lb5vKx7AmCiq0v' },
    { title: 'How to Write and Analyze Algorithm', url: 'https://www.youtube.com/embed/xGYsEqe9Vl0?si=vhdCxNZZwuoxloNW' },
    { title: 'Shortest Path Algorithms (Dijkstra and Bellman-Ford)', url: 'https://www.youtube.com/embed/2raV0H9KqY8?si=oUzWvoFeULlTISF7' },
    { title: 'Towers of Hanoi Problem', url: 'https://www.youtube.com/embed/q6RicK1FCUs?si=mro7CTUbLVftLYtq' },
  ],
  3: [
    { title: 'Various General Purpose Registers', url: 'https://www.youtube.com/embed/2mowjC3dCqk?si=l2l_6_fvCOe8ijaP' },
    { title: 'Types of Buses', url: 'https://www.youtube.com/embed/xBYhHC8_A6o?si=IdLFxpF4K6a0carc' },
    { title: 'Types of Instructions in General Purpose Register', url: 'https://www.youtube.com/embed/r6PChksvxp8?si=NLglAA9WHL5K2EvJ' },
    { title: 'What is Instruction Format', url: 'https://www.youtube.com/embed/WAO_W6Hpzyk?si=kU7YJ4RVXqVnTveG' },
    { title: 'What is Addressing Mode', url: 'https://www.youtube.com/embed/_CH4cm5PhK8?si=IXb9TRsXPn2_fNiG' },
  ],
  4: [
    { title: 'Introduction to DBMS', url: 'https://www.youtube.com/embed/3EJlovevfcA?si=OAeTw9dyCrR7oUV1' },
    { title: 'Three Schema Architecture', url: 'https://www.youtube.com/embed/5fs1ldO6B5c?si=qrMGa2-gGlliqgjW' },
    { title: 'What is Data Independence', url: 'https://www.youtube.com/embed/upUSGUSK5k0?si=xBSGNLz1_AHvTmvY' },
    { title: 'Integrity Constraints in Database', url: 'https://www.youtube.com/embed/YTJdBA9wZro?si=pEA5OtrpzltNvidN' },
    { title: 'Inroduction to ER model', url: 'https://www.youtube.com/embed/gbVev8RuZLg?si=tqhL2YspmJ8L43Jc' },
  ],
  5: [
    { title: 'Introduction to Operating System', url: 'https://www.youtube.com/embed/WJ-UaAaumNA?si=9p5mFaZLmQ8YkHq0' },
    { title: 'Batch Operating System', url: 'https://www.youtube.com/embed/povNcHSasgs?si=M51v2SteMh8HgxiL' },
    { title: 'MultiProgramming and MultiTasking Operating System', url: 'https://www.youtube.com/embed/3MqyDWDpZoI?si=yOIXYE8N7rp-WPr0' },
    { title: 'Types of Operating System', url: 'https://www.youtube.com/embed/YQZbIT9FcUk?si=yAYkDvPVjHYnEQqC' },
    { title: 'Process State in Operating System', url: 'https://www.youtube.com/embed/2dJdHMpCLIg?si=JQmIYMAzaHSWsDSP' },
  ],
};


const CourseDetails = () => {
  const { id } = useParams();
  const videos = courseVideos[id];

  return (
    <div className="course-details-container">
      <h2>Course {id} Videos</h2>
      {videos.map((video, index) => (
        <div key={index} className="video-section">
          <div className="video-wrapper">
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="video-title">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
