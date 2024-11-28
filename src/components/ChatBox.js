import React from 'react';

const ChatBox = ({ messages, messagesEndRef }) => (
  <div className="chat-box">
    {messages.map((msg, index) => (
      <div key={index} className="message">
        {msg}
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatBox;
