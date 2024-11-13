import React from 'react';
import TopBar from './TopBar';
import './StylesTopBarPage.css';


const TopBarPage = () => {
  return (
    <div>
      {/* Include TopBar at the top of the page */}
      <TopBar />

      {/* Page content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold">Welcome to the Teacher Dashboard</h2>
        <p className="mt-4 text-lg">Manage your learning materials, track student progress, and interact with parents and children.</p>

        {/* Add more content as needed */}
        <div className="mt-6">
          <h3 className="text-2xl">Your Classes</h3>
          {/* Display list of classes, materials, etc. */}
        </div>
      </div>
    </div>
  );
};

export default TopBarPage;
