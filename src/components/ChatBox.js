import React from 'react';

const ChatBox = ({ messages, messagesEndRef }) => (
  <div className="chat-box">
    {messages.map((msg, index) => (
      <div key={index} className={`message ${msg.isSentByUser ? 'sent' : 'received'}`}>
        <span className="message-text">{msg}</span>
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatBox;
