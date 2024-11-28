import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Room from './pages/Room'; // Ensure the path is correct
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Room />} />
    </Routes>
  </Router>
);

export default App;
