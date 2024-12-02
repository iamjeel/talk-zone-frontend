import React from 'react';

const Header = ({ room, userCount, onLeaveRoom }) => {
  return (
    <div className="header">
      <div className="users-online">
        <span>
          {userCount === 0
            ? 'No users online'
            : `Online ${userCount} ${userCount === 1 ? 'user' : 'users'}`}
        </span>
      </div>
      <h1 className="room-info">
        Welcome to <span className="room-name">{room || 'Loading...'}</span>!
      </h1>
      <button 
        className="leave-room-button" 
        onClick={onLeaveRoom} 
        aria-label="Leave room"
      >
        Leave Room
      </button>
    </div>
  );
};

export default Header;
