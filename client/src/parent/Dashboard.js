import React from 'react';
import './Dashboard.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Footer from '../Footer.js'; 
import Math from './Math.js';
import English from './English.js';
import Spanish from './Spanish.js';
import Writing from './Writing.js';
import Literacy from './Literacy.js';
import Music from './Music.js';
import Reading from './Reading.js';
import Science from './Science.js';




const Dashboard = () => {
  const navigate = useNavigate();

  // Subjects with associated color classes
  const subjects = [
    { name: 'Maths', cssClass: 'subject-maths', route: 'maths' },
    { name: 'Literacy', cssClass: 'subject-literacy', route: 'literacy' },
    { name: 'Reading', cssClass: 'subject-reading', route: 'reading' },
    { name: 'English', cssClass: 'subject-english', route: 'english' },
    { name: 'Music', cssClass: 'subject-music', route: 'music' },
    { name: 'Science', cssClass: 'subject-science', route: 'science' },
    { name: 'Spanish', cssClass: 'subject-spanish', route: 'spanish' },
    { name: 'Writing', cssClass: 'subject-writing', route: 'writing' },




  ];

  return (
    <div className="dashboard-wrapper">
      <div className="top-menu">
        <h1>Parent Dashboard</h1>
      </div>

      <div className="dashboard-container">
        <div className="subjects-container">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className={`subject-box ${subject.cssClass}`}
              onClick={() => navigate(`/${subject.route}`)}
            >
              <span>{subject.name}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {}

    </div>
  );
};

const DashboardWithRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/maths" element={<Math/>} />
      <Route path="/literacy" element={<Literacy/>} />
      <Route path="/reading" element={<Reading/>} />
      <Route path="/english" element={<English/>} />
      <Route path="/music" element={<Music/>} />
      <Route path="/science" element={<Science/>} />
      <Route path="/spanish" element={<Spanish/>} />
      <Route path="/writing" element={<Writing/>} />

    </Routes>
  </Router>
);

export default DashboardWithRouter;
