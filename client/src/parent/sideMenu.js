import React, { useState } from 'react';
import './sideMenu.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-menu ${isOpen ? 'expanded' : ''}`}>
      {/* Toggle button for small screens */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Icon representing a hamburger menu */}
      </button>

      {/* Menu items */}
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        {['Register child', 'Enrolled Lessons', 'Quizzes', 'Videos', 'Books', 'Children\'s Progress', 'Message Teachers', 'Review Teachers'].map((item, index) => (
          <div key={index} className="menu-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
