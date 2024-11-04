import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Account from './Account';
import Messages from './Messages';
import Schedule from './Schedule';
import Reviews from './Reviews';

const Dashboard = () => {
    const [menu, setMenu] = useState("");
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="dashboard">
            <Sidebar setMenu={setMenu} />
            <div className="main-content">
                <header>
                    <h1>Teacher's Dashboard</h1>
                    <div className="date">Date: {currentDate}</div>
                </header>
                <hr />
                {menu === "Account" && <Account setMenu={setMenu}/>}  
                {menu === "Messages" && <Messages setMenu={setMenu}/>} 
                {menu === "Schedule" && <Schedule setMenu={setMenu}/>} 
                {menu === "Reviews" && <Reviews setMenu={setMenu}/>}  

                {menu === "" && (
                <div className="grid">
                    <div className="grid-item">Lessons</div>
                    <div className="grid-item">Quizzes</div>
                    <div className="grid-item">Post Videos</div>
                    <div className="grid-item">Post Documents</div>
                </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
