const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Allow requests from your React app
    methods: ['GET', 'POST'],
  },
});

// Handle real-time connection
io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  socket.on('send_message', (message) => {
    // Broadcast message to all connected users
    io.emit('receive_message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
