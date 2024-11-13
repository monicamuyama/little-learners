import React, { useState } from 'react';
import './Styles/Materials.css';


const Materials = () => {
  const [materials, setMaterials] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMaterial, setNewMaterial] = useState({
    title: '',
    category: '',
    type: '',
    file: null,
    description: ''
  });

  // Add Material handler
  const handleAddMaterial = (e) => {
    e.preventDefault();
    setMaterials([...materials, newMaterial]);
    setNewMaterial({
      title: '',
      category: '',
      type: '',
      file: null,
      description: ''
    });
  };

  return (
    <div className="materials-page">
      <div className="page-header">
        <h1>Manage Learning Materials</h1>
        <button className="add-btn" onClick={() => document.getElementById("add-material-form").style.display = 'block'}>Add New Material</button>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search Materials"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="materials-list">
        {materials.filter(material => material.title.toLowerCase().includes(searchQuery.toLowerCase())).map((material, index) => (
          <div key={index} className="material-card">
            <h3>{material.title}</h3>
            <p>Category: {material.category}</p>
            <p>Type: {material.type}</p>
            <div className="material-actions">
              <button>Edit</button>
              <button>Delete</button>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Material Form */}
      <div id="add-material-form" className="modal-overlay">
        <div className="modal-content">
          <h2>Add New Material</h2>
          <form onSubmit={handleAddMaterial}>
            <input
              type="text"
              placeholder="Title"
              value={newMaterial.title}
              onChange={(e) => setNewMaterial({ ...newMaterial, title: e.target.value })}
            />
            <select
              value={newMaterial.category}
              onChange={(e) => setNewMaterial({ ...newMaterial, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="Reading">Reading</option>
            </select>
            <select
              value={newMaterial.type}
              onChange={(e) => setNewMaterial({ ...newMaterial, type: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
              <option value="quiz">Quiz</option>
            </select>
            <input
              type="file"
              onChange={(e) => setNewMaterial({ ...newMaterial, file: e.target.files[0] })}
            />
            <textarea
              placeholder="Description"
              value={newMaterial.description}
              onChange={(e) => setNewMaterial({ ...newMaterial, description: e.target.value })}
            ></textarea>
            <div className="modal-actions">
              <button type="submit">Save</button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => document.getElementById("add-material-form").style.display = 'none'}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Materials;
