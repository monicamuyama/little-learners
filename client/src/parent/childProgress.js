// ChildProgress.js
import React, { useState } from 'react';
import './ChildProgress.css';

const ChildProgress = () => {
  const [children] = useState([]); // Initially no children registered
  const [selectedChild, setSelectedChild] = useState(null);
  const [progressData, setProgressData] = useState([]); // No hardcoded data

  const handleChildSelect = (e) => {
    const child = children.find(child => child.id === e.target.value);
    setSelectedChild(child);
    setProgressData([]); // Clear data (dynamic data can replace this)
  };

  return (
    <div>
      <div className='top-menu'>
      <h1>Track Your Child's Progress</h1>

      </div>
    <div className="child-progress-page">

      {/* Child Selector with a Card Display */}
      <div className="child-selector">
        <h2>You have no Child to select</h2>
        {children.length === 0 ? (
          <p className="no-children-message">You have not registered any children. Start registering to track their progress!</p>
        ) : (
          <select className="child-dropdown" onChange={handleChildSelect} defaultValue="">
            <option value="" disabled>Select a child</option>
            {children.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Progress Section */}
      {selectedChild && (
        <div className="progress-section">
          <h2>{selectedChild.name}'s Progress</h2>
          {progressData.length === 0 ? (
            <p className="no-progress-message">No progress data available for {selectedChild.name} yet.</p>
          ) : (
            <div className="progress-cards">
              {progressData.map((progress, index) => (
                <div className="progress-card" key={index}>
                  <h3>{progress.lesson}</h3>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress.completion}%` }}
                    >
                      {progress.completion}%
                    </div>
                  </div>
                  <p>Status: {progress.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default ChildProgress;
