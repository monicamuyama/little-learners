// TeacherReviews.js
import React, { useState } from 'react';
import './TeacherReviews.css';

const TeacherReviews = () => {
  const [reviews, setReviews] = useState([]); // Placeholder, will populate with actual data
  const [newReview, setNewReview] = useState({ teacher: '', rating: '', comment: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]); // Adds new review to reviews list
    setNewReview({ teacher: '', rating: '', comment: '' }); // Resets form
  };

  return (
    <div>
      <div className='top-menu'>
      <h1>Teacher Reviews</h1>

      </div>
    <div className="teacher-reviews-page">

      <div className="review-list">
        {reviews.length === 0 ? (
          <p className="no-reviews-message">No reviews available. Be the first to review a teacher!</p>
        ) : (
          reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <h3>{review.teacher}</h3>
              <p><strong>Rating:</strong> {review.rating} / 5</p>
              <p>{review.comment}</p>
            </div>
          ))
        )}
      </div>

      <div className="review-form-container">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit} className="review-form">
          <label>
            Teacher:
            <input
              type="text"
              name="teacher"
              value={newReview.teacher}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Rating (1-5):
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Comment:
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">Submit Review</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default TeacherReviews;
