import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>Welcome to Unsaid.</h1>
      <p>Click the button below to join a room:</p>
      <button onClick={() => navigate('/room')}>Join Nearby Room</button>
    </div>
  );
};

export default Home;
