import React from 'react';
import './signin.css';
import Footer from './Footer';

const Signin = () => {
  return (
    <div>
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="signin-button">Login</button>
        </form>
      </div>

    </div>
    <Footer/>

    </div>
  );
  
};

export default Signin;
