import React, { useState } from 'react';

export function Messages({setMenu}) {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');

    const handleSendMessage = () => {
        if (messageText.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: messageText }]);
            setMessageText('');
        }
    };

    return (
        <div className="messages-container">
            <h1>Messages</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button onClick={handleSendMessage}>Send Message</button>
            </div>
            <div>
                <h2>Received Messages</h2>
                <ul className="messages-list">
                    {messages.map((message) => (
                        <li key={message.id}>{message.text}</li>
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

export default Messages;
