import React from 'react';
import './ActivityContent.css';

const ActivityContent = ({ activity }) => {
  return (
    <div className="activity-content">
      <h2>{activity}</h2>
      <div className="content">
        <p>Welcome to the {activity} section. Here you'll find engaging materials to help your child learn and grow.</p>
        <div className="activity-cards">
          <div className="card">Activity 1</div>
          <div className="card">Activity 2</div>
          <div className="card">Activity 3</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityContent;
