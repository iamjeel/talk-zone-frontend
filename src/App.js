import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [room, setRoom] = useState('');
  const socketRef = useRef(null);

  // Helper function for handling geolocation
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      console.error('Geolocation not supported by this browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting location', error);
      }
    );
  };

  // Get user location on component mount
  useEffect(() => {
    getUserLocation();
  }, []);

  // Establish socket connection once coordinates are available
  useEffect(() => {
    if (coordinates) {
      const socket = io.connect(process.env.REACT_APP_SOCKET_SERVER_URL || 'http://localhost:3001', {
        query: {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        },
      });

      socketRef.current = socket;

      // Listen for incoming messages
      socket.on('receive_message', (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
      });

      // Listen for the room name after joining
      socket.on('joined_room', (roomName) => {
        setRoom(roomName);
      });

      return () => socket.disconnect();
    }
  }, [coordinates]);

  // Send message to the backend
  const sendMessage = () => {
    if (message.trim()) {
      socketRef.current.emit('send_message', message);
      setMessage('');
    }
  };

  // Handle Enter key press to send message
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent newline from being inserted
      sendMessage();
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="header">
          <h1>Anonymous Chat - Location Based</h1>
          <p className="room-info">Room: {room}</p>
        </div>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
        <div className="message-input-container">
          <textarea
            className="message-input"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown} // Handle Enter key press
          />
          <button className="send-button" onClick={sendMessage} disabled={!message.trim()}>
            <span className="send-button-text">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
