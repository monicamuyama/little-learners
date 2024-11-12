// ParentTeacherMessaging.js
import React, { useState } from 'react';
import './ParentTeacherMessaging.css';

const ParentTeacherMessaging = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState({}); // Stores messages by teacher name

  const teachers = ["Ms. Smith", "Mr. Johnson", "Mrs. Lee"]; // Sample teacher list

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSelectTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setMessageText('');
  };

  const handleMessageChange = (e) => setMessageText(e.target.value);

  const handleSendMessage = () => {
    if (selectedTeacher && messageText.trim()) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedTeacher]: [...(prevMessages[selectedTeacher] || []), { sender: "Parent", text: messageText }]
      }));
      setMessageText('');
    }
  };

  const filteredTeachers = teachers.filter(teacher => 
    teacher.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
      <h1>Parent-Teacher Messaging</h1>

      </div>
      <div className="parent-teacher-messaging">

      <div className="search-teacher">
        <input
          type="text"
          placeholder="Search for a teacher..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="teacher-list">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher}
            className={`teacher-item ${teacher === selectedTeacher ? 'selected' : ''}`}
            onClick={() => handleSelectTeacher(teacher)}
          >
            {teacher}
          </div>
        ))}
      </div>

      <div className="message-box">
        {selectedTeacher ? (
          <>
            <h2>Conversation with {selectedTeacher}</h2>
            <div className="messages-container">
              {messages[selectedTeacher] ? (
                messages[selectedTeacher].map((msg, index) => (
                  <div key={index} className={`message ${msg.sender === "Parent" ? "sent" : "received"}`}>
                    <p>{msg.text}</p>
                  </div>
                ))
              ) : (
                <p>No messages yet.</p>
              )}
            </div>
            <div className="message-input">
              <textarea
                placeholder="Type your message here..."
                value={messageText}
                onChange={handleMessageChange}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <p className="select-teacher-message">Select a teacher to start messaging.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default ParentTeacherMessaging;
