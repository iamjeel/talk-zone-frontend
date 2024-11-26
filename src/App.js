import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [room, setRoom] = useState('');
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null); // Reference to scroll to the bottom of the chat

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

  // Scroll to the bottom of the chat box whenever a new message is added
  useEffect(() => {
    // Scroll to the bottom smoothly whenever messages are updated
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // This will trigger every time the messages array is updated

  return (
    <div className="App">
      <div className="chat-container">
        <div className="header">
          <h1>Talk Zone</h1>
          <p className="room-info">Room: {room}</p>
        </div>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
          {/* This div ensures the page scrolls to the bottom */}
          <div ref={messagesEndRef} />
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
