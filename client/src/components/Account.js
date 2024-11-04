import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Account({ setMenu }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="page-content">
            <h1>My Account</h1>
            <p>Manage your account details and preferences here.</p>
            <div className="account-dropdown">
                <button onClick={toggleDropdown} className="dropdown-button">
                    Account Options
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li><Link to="/account/profile">My Profile</Link></li>
                            <li><Link to="/account/settings">Settings</Link></li>
                            <li><Link to="/logout">Log Out</Link></li>
                        </ul>
                    </div>
                )}
            </div>
            <br></br>
            <button onClick={() => setMenu("")} className="back-button">
                Back to Dashboard
            </button>
        </div>
    );
}

export default Account;
