import { io } from 'socket.io-client';


let socket;

export const connectSocket = (latitude, longitude) => {
  socket = io.connect('http://localhost:3001/', {
    query: { latitude, longitude },
  });

  return socket;
};

export const getSocket = () => socket;
