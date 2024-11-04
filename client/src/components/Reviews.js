import React, { useState } from 'react';

export function Reviews({setMenu}) {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');

    const handleAddReview = () => {
        if (reviewText.trim()) {
            setReviews([...reviews, { id: reviews.length + 1, text: reviewText }]);
            setReviewText('');
        }
    };

    const handleDeleteReview = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
    };

    return (
        <div className="reviews-container">
            <h1>My Reviews</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Enter a new review..."
                />
                <button onClick={handleAddReview}>Add Review</button>
            </div>
            <div>
                <h2>Received Reviews</h2>
                <ul className="reviews-list">
                    {reviews.map((review) => (
                        <li key={review.id}>
                            {review.text}
                            <button className="delete-button" onClick={() => handleDeleteReview(review.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <br></br>
            <button onClick={() => setMenu("")} className="back-button">
                Back to Dashboard
            </button>
        </div>
    );
}

export default Reviews;
