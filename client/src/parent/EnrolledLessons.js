import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EnrolledLessons.css';

const EnrolledLessons = () => {
  const [lessons] = useState([]); // Lessons will be populated dynamically in the future
  const [date, setDate] = useState(new Date());

  // Handler for date change in calendar
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Filter lessons based on selected date
  const filteredLessons = lessons.filter((lesson) =>
    new Date(lesson.date).toDateString() === date.toDateString()
  );

  return (
    <div className="enrolled-lessons">
      <h1>Enrolled Lessons</h1>

      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>

      <div className="lessons-list">
        <h2>Lessons on {date.toDateString()}</h2>
        {filteredLessons.length === 0 ? (
          <p>No lessons scheduled for this date.</p>
        ) : (
          <ul>
            {filteredLessons.map((lesson) => (
              <li key={lesson.id}>
                <strong>{lesson.title}</strong>
                <p>{lesson.description}</p>
                <p>
                  Date: {new Date(lesson.date).toLocaleDateString()} <br />
                  Time: {new Date(lesson.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EnrolledLessons;
