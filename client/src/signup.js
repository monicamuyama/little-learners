import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'Parent' // Default to 'Parent'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box"> {/* Added signup-box here */}
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Name Input */}
          <div className="input-group">
            <label>
              Full Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* User Type Dropdown */}
          <div className="input-group">
            <label>
              I am a:
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="Parent">Parent</option>
                <option value="Teacher">Teacher</option>
              </select>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
