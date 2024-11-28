import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  return (
    <div className="Profile">
      <h1>My Profile</h1>
      <p>Here you can update your personal details and settings.</p>
      <ul>
        <li>Name: John Doe</li>
        <li>Email: johndoe@example.com</li>
        <li>Location: Vancouver, BC</li>
        {/* Add more profile details as needed */}
      </ul>
      <Link to="/room">
        <button>Go to Room</button>
      </Link>
      <Link to="/room-history">
        <button>Room History</button>
      </Link>
    </div>
  );
};

export default Profile;
