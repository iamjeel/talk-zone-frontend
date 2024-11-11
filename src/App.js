import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

// Connect to the backend server
const socket = io.connect('http://localhost:3001');

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    // Receive messages from the server
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => socket.off('receive_message'); // Clean up on unmount
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) { // Limit image size to 2MB
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("File too large! Please select an image smaller than 2MB.");
    }
  };

  const sendMessage = async () => {
    if (message.trim() || image) {
      const formData = new FormData();
      if (image) formData.append('image', image);
      formData.append('message', message);

      await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      setMessage(''); // Clear message input
      setImage(null); // Clear image input
      setImagePreview(null);
    }
  };

  return (
    <div className="App">
      <h1>Anonymous Chat</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.message}</p>
            {msg.image && <img src={msg.image} alt="uploaded" style={{ maxWidth: '150px' }} />}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type your message (max 200 characters)"
        maxLength="200"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {imagePreview && <img src={imagePreview} alt="Image preview" style={{ maxWidth: '150px' }} />}
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
