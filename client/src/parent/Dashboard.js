import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
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
    { name: 'Register a child', route: '/RegistrationForm' },
    { name: 'Enrolled Lessons', route: '/EnrolledLessons' },
    { name: 'Quizzes', route: '/Quizzes' },
    { name: 'Videos', route: '/TeacherVideos' },
    { name: 'Books', route: '/TeacherBooks' },
    { name: "Children's Progress", route: '/ChildProgress' },
    { name: 'Message Teachers', route: '/ParentTeacherMessaging' },
    { name: 'Review Teachers', route: '/TeacherReviews' },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="top-menu">
        <h1>Parent Dashboard</h1>
        <button className="log">Log out</button>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      </div>

      <div className="dashboard-content">
        <div className={`side-menu ${isMenuOpen ? 'expanded' : ''}`}>
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="menu-item"
                onClick={() => navigate(item.route)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="main-content">
          <div className="dashboard-container">
            {/* Message section */}
            <div className="message">
              <p>Select a subject to enroll. Watch videos and read books:</p>
            </div>

            {/* Subjects container */}
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

      <Footer />
    </div>
  );
};

export default Dashboard;
