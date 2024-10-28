import React, { useState } from 'react';
import SideMenu from './SideMenu';
import ActivityContent from './ActivityContent';
import './parentDashboard.css';

const ParentDashboard = () => {
  const [selectedActivity, setSelectedActivity] = useState("Overview");

  const handleMenuClick = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="dashboard">
      <SideMenu onMenuClick={handleMenuClick} />
      <ActivityContent activity={selectedActivity} />
    </div>
  );
};

export default ParentDashboard;
