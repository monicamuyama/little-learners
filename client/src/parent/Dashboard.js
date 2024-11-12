// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Subjects from './Subjects'
import ChildForm from './ChildForm'; 
import EnrolledLessons from './EnrolledLessons.js';
import Quizzes from './Quizzes.js';
import ChildProgress from './childProgress.js';
import TeacherVideos from './TeacherVideos.js';
import TeacherBooks from './TeacherBooks.js';
import TeacherReviews from './TeacherReviews.js';
import ParentTeacherMessaging from './ParentTeacherMessaging.js';


const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('ChildForm'); // default to ChildForm
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const menuItems = [
    { name: 'Register Child', component: 'ChildForm' },
    { name: 'Subjects', component: 'Subjects' },
    { name: 'Enrolled Lessons', component: 'EnrolledLessons' },
    { name: 'Quizzes', component: 'Quizzes' },
    { name: 'Videos', component: 'TeacherVideos' },
    { name: 'Books', component: 'TeacherBooks' },
    { name: "Children's Progress", component: 'ChildProgress' },
    { name: 'Message Teachers', component: 'ParentTeacherMessaging' },
    { name: 'Review Teachers', component: 'TeacherReviews' },
  ];

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'ChildForm':
        return <ChildForm />;
      case 'Subjects':
        return <Subjects />;
      case 'EnrolledLessons':
        return <EnrolledLessons />;
      case 'Quizzes':
        return <Quizzes />;
      case 'ChildProgress':
        return <ChildProgress />;
      case 'ParentTeacherMessaging':
        return <ParentTeacherMessaging/>
      case 'TeacherVideos':
        return <TeacherVideos/>
      case 'TeacherBooks':
        return <TeacherBooks/>
      case 'TeacherReviews':
        return <TeacherReviews/>
        
  
      // Add cases for other components as needed
      default:
        return <div>Select an item from the menu</div>;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dashboard-wrapper">
      <header className="top-menu">
        <h1>Parent Dashboard</h1>
        <Link to="/" className="log">Log out</Link>
        <button className="menu-toggle" onClick={toggleMenu}>Menu ☰</button>
      </header>

      <div className="dashboard-content">
        <nav className={`side-menu ${isMenuOpen ? 'expanded' : ''}`}>
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`menu-item ${selectedMenuItem === item.component ? 'active' : ''}`}
                onClick={() => {
                  setSelectedMenuItem(item.component);
                  if (isMenuOpen) setIsMenuOpen(false); // Close menu after selecting an item on small devices
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </nav>

        <div className="main-content">
          {renderContent()} {}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
