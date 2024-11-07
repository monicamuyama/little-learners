// Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const ChildForm = ({ index, childData, handleInputChange, handleRemoveChild }) => (
  <div className="child-form">
    <h3>Child {index + 1}</h3>
    <label>
      Name:
      <input
        type="text"
        name="name"
        value={childData.name}
        onChange={(e) => handleInputChange(e, index)}
        required
      />
    </label>
    <label>
      Age:
      <input
        type="number"
        name="age"
        value={childData.age}
        onChange={(e) => handleInputChange(e, index)}
        required
      />
    </label>
    <label>
      Preferred Lesson Time:
      <input
        type="time"
        name="lessonTime"
        value={childData.lessonTime}
        onChange={(e) => handleInputChange(e, index)}
      />
    </label>
    <button type="button" onClick={() => handleRemoveChild(index)}>
      Remove Child
    </button>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [children, setChildren] = useState([{ name: '', age: '', lessonTime: '' }]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAddChild = () => {
    setChildren([...children, { name: '', age: '', lessonTime: '' }]);
  };

  const handleRemoveChild = (index) => {
    setChildren(children.filter((_, i) => i !== index));
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedChildren = children.map((child, i) =>
      i === index ? { ...child, [name]: value } : child
    );
    setChildren(updatedChildren);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered Children:', children);
  };

  const menuItems = [
    { name: 'Subjects ', route: '/Subjects' },
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
      <header className="top-menu">
        <h1>Parent Dashboard</h1>
        <Link to="/" className="log">Log out</Link>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      </header>

      <div className="dashboard-content">
        <nav className={`side-menu ${isMenuOpen ? 'expanded' : ''}`}>
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
        </nav>

        <div className="main-content">
          <div className="dashboard-container">
            <form onSubmit={handleSubmit} className="registration-form">
              <h2>Register Your Child(ren)</h2>
              {children.map((child, index) => (
                <ChildForm
                  key={index}
                  index={index}
                  childData={child}
                  handleInputChange={handleInputChange}
                  handleRemoveChild={handleRemoveChild}
                />
              ))}
              <button type="button" onClick={handleAddChild} className="add-button">
                Add Another Child
              </button>
              <button type="submit" className="submit-button">Register</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
