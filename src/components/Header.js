import React from 'react';
import './Header.css'


const Header = ({ room }) => (
  <div className="header">
    <h1>Talk Zone</h1>
    <p className="room-info">Room: {room}</p>
  </div>
);

export default Header;
