// pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import RoomList from '../components/RoomList';


const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch rooms from your backend or mock data
    setRooms([{ id: 1, name: 'Room 1' }, { id: 2, name: 'Room 2' }]);
  }, []);

  return (
    <div>
      <h1>Welcome to Talk Zone</h1>
      <RoomList rooms={rooms} />
    </div>
  );
};

export default Home;
