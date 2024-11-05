import React from 'react';
import SideMenu from './sideMenu';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const Dashboard = () => {
  const navigate = useNavigate();

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
        <button className="log">Log out</button>
      </div>
      
      <div className="dashboard-content">
        <SideMenu />
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
