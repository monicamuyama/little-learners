// RegistrationForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const subjects = [
  { name: 'Maths', cssClass: 'subject-maths', route: 'maths' },
  { name: 'Literacy', cssClass: 'subject-literacy', route: 'literacy' },
  { name: 'Reading', cssClass: 'subject-reading', route: 'reading' },
  { name: 'English', cssClass: 'subject-english', route: 'english' },
  { name: 'Music', cssClass: 'subject-music', route: 'music' },
  { name: 'Science', cssClass: 'subject-science', route: 'science' },
  { name: 'Spanish', cssClass: 'subject-spanish', route: 'spanish' },
  { name: 'Writing', cssClass: 'subject-writing', route: 'writing' },
];

const Subjects = () => {
  const navigate = useNavigate(); // Use useNavigate directly here

  return (
    <div className='main-contente'>
      <div className="message">
        <p>Select to enroll for lessons, Watch videos and read books in that particular subject:</p>
      </div>


    <div className="subjects-container">
      {subjects.map((subject) => (
        <div
          key={subject.name}
          className={`subject-box ${subject.cssClass}`}
          onClick={() => navigate(`/${subject.route}`)}
        >
          <span>{subject.name}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Subjects;
