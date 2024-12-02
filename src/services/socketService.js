import { io } from 'socket.io-client';

let socket;

export const connectSocket = (latitude, longitude) => {
  if (!socket || !socket.connected) {
    socket = io('https://talk-zone-backend.onrender.com', {
      query: { latitude, longitude },
    });
  }

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null; // Reset the socket instance
  }
};
