import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>Welcome to the Chat App</h1>
      <p>Click the button below to join a room:</p>
      <button onClick={() => navigate('/room')}>Go to Room</button>

      <div className="navigation-links">
        <Link to="/profile">
          <button>My Profile</button>
        </Link>
        <Link to="/room-history">
          <button>Room History</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
