import React, { useState } from 'react';
import './SideMenu.css';
import { FaHome, FaBook, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const SideMenu = ({ onMenuClick }) => {
  const [active, setActive] = useState("Overview");

  const handleClick = (activity) => {
    setActive(activity);
    onMenuClick(activity);
  };

  return (
    <div className="side-menu">
      <h2>Activities</h2>
      <ul>
        <li
          className={active === "Overview" ? "active" : ""}
          onClick={() => handleClick("Overview")}
        >
          <FaHome className="icon" /> Overview
        </li>
        <li
          className={active === "Math Activities" ? "active" : ""}
          onClick={() => handleClick("Math Activities")}
        >
          <FaBook className="icon" /> Math Activities
        </li>
        <li
          className={active === "Reading Activities" ? "active" : ""}
          onClick={() => handleClick("Reading Activities")}
        >
          <FaBook className="icon" /> Reading Activities
        </li>
        <li
          className={active === "Art & Craft" ? "active" : ""}
          onClick={() => handleClick("Art & Craft")}
        >
          <FaPaintBrush className="icon" /> Art & Craft
        </li>
        <li
          className={active === "Progress Reports" ? "active" : ""}
          onClick={() => handleClick("Progress Reports")}
        >
          <FaChartLine className="icon" /> Progress Reports
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
