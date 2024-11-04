import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';


function Signup() {
  const navigate = useNavigate();
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
    console.log('User type:', formData.userType); // Log the user type for debugging

    // Check if the user type is Parent and navigate accordingly
    if (formData.userType === 'Parent') {
      navigate('/parent/dashboard');
    }
    // Add additional logic here for other user types like "Teacher"
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
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

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
