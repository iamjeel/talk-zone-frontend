import React from 'react';

const ChatBox = ({ messages, messagesEndRef }) => (
  <div className="chat-box">
    {messages.map((msg, index) => (
      <div key={index} className={`message ${msg.isSentByUser ? 'sent' : 'received'}`}>
        <span className="message-text">{msg.text}</span>
        <span className="message-time">{msg.time}</span>
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatBox;
