import React from 'react';

const Sidebar = ({ setMenu }) => {
    return (
        <div className="sidebar">
            <p onClick={() => setMenu("Account")}>My Account</p>
            <p onClick={() => setMenu("Messages")}>Messages</p>
            <p onClick={() => setMenu("Schedule")}>Schedule</p>
            <p onClick={() => setMenu("Reviews")}>My Reviews</p>
        </div>
    );
};

export default Sidebar;
