import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>Welcome to Unsaid.</h1>
      <p>
  Experience true connection without boundaries. Join a room near you and share your thoughts freely, 
  without the weight of names—just unfiltered conversation, right where you are.
</p>

      <div className="button-container">
        <button onClick={() => navigate('/room')} className="primary-button">
          Join Nearby Room
        </button>
        <button onClick={() => navigate('/about')} className="secondary-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
