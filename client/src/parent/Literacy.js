// src/parent/Math.js
import React, { useState } from 'react';
import './Subject.css'; // Import styles specific to the Math component

const Literacy = () => {
    // State to track which tab is currently active
    const [activeTab, setActiveTab] = useState('lessons');

    // Sample data for lessons, videos, and books
    const [lessons] = useState([]); //  lessons will be populated dynamically
    const [videos] = useState([]); //  videos will be populated dynamically
    const [books] = useState([]); //  books will be populated dynamically

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="math-container">
            <div className="top-menu">
                <button onClick={() => handleTabChange('lessons')} className={activeTab === 'lessons' ? 'active' : ''}>Lessons</button>
                <button onClick={() => handleTabChange('videos')} className={activeTab === 'videos' ? 'active' : ''}>Videos</button>
                <button onClick={() => handleTabChange('books')} className={activeTab === 'books' ? 'active' : ''}>Books</button>
            </div>

            {activeTab === 'lessons' && (
                <div className="lessons-section">
                    <h3>Available Lessons</h3>
                    {lessons.length === 0 ? (
                        <p>No lessons scheduled yet.</p>
                    ) : (
                        <ul>
                            {lessons.map((lesson) => (
                                <li key={lesson.id}>
                                    <span>{lesson.title} by {lesson.teacher}</span>
                                    <button>Enroll</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {activeTab === 'videos' && (
                <div className="videos-section">
                    <h3>Videos</h3>
                    {videos.length === 0 ? (
                        <p>No videos available yet.</p>
                    ) : (
                        <ul>
                            {videos.map((video) => (
                                <li key={video.id}>
                                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                                        {video.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {activeTab === 'books' && (
                <div className="books-section">
                    <h3>Books</h3>
                    {books.length === 0 ? (
                        <p>No books available yet.</p>
                    ) : (
                        <ul>
                            {books.map((book) => (
                                <li key={book.id}>
                                    <a href={book.url} target="_blank" rel="noopener noreferrer">
                                        {book.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default Literacy;
