import React from 'react';

const MessageInput = ({ message, setMessage, handleKeyDown, sendMessage }) => (
  <div className="message-input-container">
    <textarea
      className="message-input"
      placeholder="Type your message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={handleKeyDown} // Handle Enter key press
    />
    <button className="send-button" onClick={sendMessage} disabled={!message.trim()}>
      <span className="send-button-text">Send</span>
    </button>
  </div>
);

export default MessageInput;
