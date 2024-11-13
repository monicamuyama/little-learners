// ChildForm.js
import React, { useState } from 'react';
import './Dashboard.css';

const ChildForm = () => {
  const [children, setChildren] = useState([{ name: '', age: '', lessonTime: '' }]);

  const handleAddChild = () => {
    setChildren([...children, { name: '', age: '', lessonTime: '' }]);
  };

  const handleRemoveChild = (index) => {
    setChildren(children.filter((_, i) => i !== index));
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedChildren = children.map((child, i) =>
      i === index ? { ...child, [name]: value } : child
    );
    setChildren(updatedChildren);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered Children:', children);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Register Your Child(ren)</h2>
      {children.map((child, index) => (
        <div key={index} className="child-form">
          <h3>Child {index + 1}</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={child.name}
              onChange={(e) => handleInputChange(e, index)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={child.age}
              onChange={(e) => handleInputChange(e, index)}
              required
            />
          </label>
          <label>
            Preferred Lesson Time:
            <input
              type="time"
              name="lessonTime"
              value={child.lessonTime}
              onChange={(e) => handleInputChange(e, index)}
            />
          </label>
          <button type="button" onClick={() => handleRemoveChild(index)}>
            Remove Child
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddChild} className="add-button">
        Add Another Child
      </button>
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
};

export default ChildForm;
