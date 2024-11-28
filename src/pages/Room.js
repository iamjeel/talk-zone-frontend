import React, { useState, useEffect, useRef } from 'react';
import { connectSocket, getSocket } from '../services/socketService';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';


const Room = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [room, setRoom] = useState('');
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (coordinates) {
      const socket = connectSocket(coordinates.latitude, coordinates.longitude);

      socket.on('receive_message', (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
      });

      socket.on('joined_room', (roomName) => {
        setRoom(roomName);
      });

      return () => socket.disconnect();
    }
  }, [coordinates]);

  const sendMessage = () => {
    if (message.trim()) {
      getSocket().emit('send_message', message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent newline
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="Room">
      <Header room={room} />
      <ChatBox messages={messages} messagesEndRef={messagesEndRef} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        handleKeyDown={handleKeyDown}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Room;
