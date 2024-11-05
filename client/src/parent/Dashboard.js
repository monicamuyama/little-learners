import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';  // Import Footer component
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const menuItems = [
    'Register child', 'Enrolled Lessons', 'Quizzes', 'Videos', 'Books', 
    'Children\'s Progress', 'Message Teachers', 'Review Teachers'
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="top-menu">
        <h1>Parent Dashboard</h1>
        <button className="log">Log out</button>
      </div>

      <div className="dashboard-content">
        <div className={`side-menu ${isMenuOpen ? 'expanded' : ''}`}>
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item">{item}</div>
            ))}
          </div>
        </div>

        <div className="main-content">
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
        </div>
      </div>

      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default Dashboard;
