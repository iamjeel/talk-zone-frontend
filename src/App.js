import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';
import Profile from './pages/Profile';   // New Profile page
import RoomHistory from './pages/RoomHistory'; // New RoomHistory page
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/room" element={<Room />} />
      <Route path="/profile" element={<Profile />} />   {/* Profile Page Route */}
      <Route path="/room-history" element={<RoomHistory />} /> {/* RoomHistory Page Route */}
    </Routes>
  </Router>
);

export default App;
