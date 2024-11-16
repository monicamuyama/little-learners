import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import Footer from './Footer';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    paymentMethod: 'Credit Card', // Default payment method
    paymentNumber: '', // Field for payment number
    userType: 'Parent', // Default to 'Parent'
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
    if (formData.userType === 'Teacher') {
      navigate('/TeacherDashboard/Components/LearningMaterialsPage');
    }

    // Add additional logic here for other user types like "Teacher"
    console.log('Form submitted:', formData);
  };

  return (
    <div>
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
                Payment Method:
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="Mobile Money">Mobile Money</option>
                </select>
              </label>
            </div>

            <div className="input-group">
              <label>
                {formData.paymentMethod === 'Credit Card' ? 'Credit Card Number:' : 'Mobile Money Number:'}
                <input
                  type="text"
                  name="paymentNumber"
                  value={formData.paymentNumber}
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
      <Footer />
    </div>
  );
}

export default Signup;
