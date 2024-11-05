// TeacherBooks.js
import React, { useState } from 'react';
import './TeacherBooks.css';

const TeacherBooks = () => {
  const [books] = useState([]); // Placeholder array, without hardcoded data

  return (
    <div className="teacher-books-page">
      <h1>Teacher's Book Library</h1>

      {books.length === 0 ? (
        <p className="no-books-message">No books have been posted by teachers yet. Check back later!</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <div className="book-cover">
                <img src={book.cover} alt={`${book.title} cover`} />
              </div>
              <div className="book-details">
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p className="book-description">{book.description}</p>
                <button
                  className="view-button"
                  onClick={() => window.open(book.url, '_blank')}
                >
                  View or Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeacherBooks;
