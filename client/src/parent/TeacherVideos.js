// TeacherVideos.js
import React, { useState } from 'react';
import './TeacherVideo.css';

const TeacherVideos = () => {
  const [videos] = useState([]); 

  return (
    <div>
      <div>
        <h1>Teacher's Video Library</h1>
      </div>

      <div className="teacher-videos-page">

      {videos.length === 0 ? (
        <p className="no-videos-message">No videos have been posted by teachers yet. Check back later!</p>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.id}>
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={`${video.title} thumbnail`} />
              </div>
              <div className="video-details">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <button
                  className="watch-button"
                  onClick={() => window.open(video.url, '_blank')}
                >
                  Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default TeacherVideos;
