import React, { useState } from 'react';

export function Schedules({setMenu}) {
    const [schedule, setSchedule] = useState([]);
    const [eventText, setEventText] = useState('');
    const [eventDate, setEventDate] = useState('');

    const handleAddEvent = () => {
        if (eventText.trim() && eventDate) {
            setSchedule([...schedule, { id: schedule.length + 1, text: eventText, date: eventDate }]);
            setEventText('');
            setEventDate('');
        }
    };

    return (
        <div className="schedules-container">
            <h1>Schedule</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={eventText}
                    onChange={(e) => setEventText(e.target.value)}
                    placeholder="Enter event title (e.g., 'Math Lesson')"
                />
                <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                />
                <button onClick={handleAddEvent}>Add to Schedule</button>
            </div>
            <div>
                <h2>Upcoming Events</h2>
                <ul className="event-list">
                    {schedule.map((event) => (
                        <li key={event.id}>
                            <span className="event-date">{event.date}</span>
                            <span className="event-text">{event.text}</span>
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

export default Schedules;
