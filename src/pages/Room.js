import React, { useState, useEffect, useRef } from 'react';
import { connectSocket, getSocket } from '../services/socketService';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';

import './Room.css';

const Room = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [coordinates, setCoordinates] = useState(null);
  const [room, setRoom] = useState('');
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      console.error('Geolocation not supported by this browser.');
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.error('Error getting location', error);
        setLoading(false);
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
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.text, timestamp: data.timestamp },
        ]);
      });
  
      socket.on('joined_room', (roomName) => {
        setRoom(roomName);
      });
      
      socket.on('user_count_update', (count) => {
        setUserCount(count);
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
      e.preventDefault();
      sendMessage();
    }
  };

  const onLeaveRoom = () => {
    const socket = getSocket();
    if (socket) {
      socket.disconnect();
    }
    setMessages([]);
    setRoom('');
    setUserCount(0);
    navigate('/home');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Room">
      <Header room={room} userCount={userCount} onLeaveRoom={onLeaveRoom} />
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
