import { io } from 'socket.io-client';


let socket;

export const connectSocket = (latitude, longitude) => {
  socket = io.connect('https://talk-zone-backend.onrender.com', {
    query: { latitude, longitude },
  });

  return socket;
};

export const getSocket = () => socket;
