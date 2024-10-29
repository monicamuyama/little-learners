import React from 'react';
import './Dashboard.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Footer from '../Footer.js'; 
import Math from './Math.js';


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
        <p>Welcome parent</p>
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
      <Route path="/literacy" element={<div>Literacy Content</div>} />
      <Route path="/reading" element={<div>Reading Content</div>} />
      <Route path="/english" element={<div>English Content</div>} />
      <Route path="/music" element={<div>English Content</div>} />
      <Route path="/science" element={<div>English Content</div>} />
      <Route path="/spanish" element={<div>English Content</div>} />
      <Route path="/writing" element={<div>English Content</div>} />

    </Routes>
  </Router>
);

export default DashboardWithRouter;
