import React from 'react';

const SideMenu = ({ onMenuClick }) => {
  return (
    <div className="side-menu">
      <h2>Activities</h2>
      <ul>
        <li onClick={() => onMenuClick("Overview")}>Overview</li>
        <li onClick={() => onMenuClick("Math Activities")}>Math Activities</li>
        <li onClick={() => onMenuClick("Reading Activities")}>Reading Activities</li>
        <li onClick={() => onMenuClick("Art & Craft")}>Art & Craft</li>
        <li onClick={() => onMenuClick("Progress Reports")}>Progress Reports</li>
      </ul>
    </div>
  );
};

export default SideMenu;
