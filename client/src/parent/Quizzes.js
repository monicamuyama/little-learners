// Quizzes.js
import React, { useState } from 'react';
import './Quizzes.css';

const Quizzes = () => {
  const [quizzes] = useState([]); // Initially no quizzes

  return (
    <div>
      <div>
      <h1>Available Quizzes</h1>


      </div>
      <div className="quizzes-page">
      {quizzes.length === 0 ? (
        <div className="no-quizzes">
          <p>No quizzes available at the moment.</p>
          <button onClick={() => alert("Stay tuned! More quizzes coming soon!")}>
            Check Back Later
          </button>
        </div>
      ) : (
        <div className="quizzes-list">
          {quizzes.map((quiz, index) => (
            <div className="quiz-item" key={index}>
              <h2>{quiz.title}</h2>
              <p>{quiz.description}</p>
              <button>Take Quiz</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Quizzes;
