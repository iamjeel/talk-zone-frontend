import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [room, setRoom] = useState(''); // Room state to display the room name
  const socketRef = useRef(null);

  // Get user location on component mount
  useEffect(() => {
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
  }, []);

  // Establish socket connection once coordinates are available
  useEffect(() => {
    if (coordinates) {
      socketRef.current = io.connect('http://localhost:3001', {
        query: {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        },
      });

      // Listen for incoming messages
      socketRef.current.on('receive_message', (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
      });

      // Listen for the room name after joining
      socketRef.current.on('joined_room', (roomName) => {
        console.log("roomname", roomName)

        setRoom(roomName); // Set the room name in the state
      });
      return () => socketRef.current.disconnect();
    }
  }, [coordinates]);

  // Send message to the backend
  const sendMessage = () => {
    if (message.trim()) {
      socketRef.current.emit('send_message', message);
      setMessage(''); // Clear input field
    }
  };

  return (
    <div className="App">
      <h1>Anonymous Chat - Location Based</h1>
      <p>Room: {room}</p> {/* Display room name */}
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
};

export default App;
