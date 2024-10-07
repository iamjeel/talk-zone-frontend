import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

// Connect to the backend server
const socket = io.connect('http://localhost:3001');

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Receive messages from the server
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => socket.off('receive_message'); // Clean up on unmount
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      // Emit the message to the server
      socket.emit('send_message', message);
      setMessage(''); // Clear input field
    }
  };

  return (
    <div className="App">
      <h1>Anonymous Chat</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
