import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const RoomHistory = () => {
  const history = [
    { room: 'Room 1', date: '2024-11-01' },
    { room: 'Room 2', date: '2024-11-15' },
    { room: 'Room 3', date: '2024-11-20' },
  ]; // This could be dynamic from your backend or socket data

  return (
    <div className="RoomHistory">
      <h1>Room History</h1>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            <strong>{entry.room}</strong> - {entry.date}
          </li>
        ))}
      </ul>
      <Link to="/profile">
        <button>Back to Profile</button>
      </Link>
    </div>
  );
};

export default RoomHistory;
