import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';
import './App.css';
import Landing from './pages/Landing';
import About from './pages/About';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/room" element={<Room />} />
      <Route path="/about" element={<About />} />

    </Routes>
  </Router>
);

export default App;
