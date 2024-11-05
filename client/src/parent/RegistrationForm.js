// RegisterChildren.js
import React, { useState } from 'react';
import './RegisterChildren.css';

const ChildForm = ({ index, childData, handleInputChange, handleRemoveChild }) => (
  <div className="child-form">
    <h3>Child {index + 1}</h3>
    <label>
      Name:
      <input
        type="text"
        name="name"
        value={childData.name}
        onChange={(e) => handleInputChange(e, index)}
        required
      />
    </label>
    <label>
      Age:
      <input
        type="number"
        name="age"
        value={childData.age}
        onChange={(e) => handleInputChange(e, index)}
        required
      />
    </label>
    <label>
      Preferred Lesson Time:
      <input
        type="time"
        name="lessonTime"
        value={childData.lessonTime}
        onChange={(e) => handleInputChange(e, index)}
      />
    </label>
    <button type="button" onClick={() => handleRemoveChild(index)}>
      Remove Child
    </button>
  </div>
);

const RegistrationForm = () => {
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
        <ChildForm
          key={index}
          index={index}
          childData={child}
          handleInputChange={handleInputChange}
          handleRemoveChild={handleRemoveChild}
        />
      ))}
      <button type="button" onClick={handleAddChild} className="add-button">
        Add Another Child
      </button>
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
};

export default RegistrationForm;
