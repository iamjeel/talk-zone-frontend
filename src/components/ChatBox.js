import React from 'react';
import { parseISO, format } from 'date-fns';

const ChatBox = ({ messages, messagesEndRef }) => (
  <div className="chat-box">
    {messages.map((msg, index) => (
      <div key={index} className={`message ${msg.isSentByUser ? 'sent' : 'received'}`}>
        <span className="message-text">{msg.text}</span>
        <span className="message-timestamp">
          {msg.timestamp ? format(parseISO(msg.timestamp), 'p') : ''} {/* Formats to local time */}
        </span>
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatBox;
