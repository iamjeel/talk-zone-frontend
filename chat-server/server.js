import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import multer from 'multer';
import path from 'path';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(cors());

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'), // Save to /uploads folder
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage, limits: { fileSize: 2 * 1024 * 1024 } }); // 2MB limit

// Rate limiter to prevent spamming
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // Limit to 10 requests per minute per IP
  message: 'Too many messages, please try again later.',
});
app.use(limiter);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.post('/upload', upload.single('image'), (req, res) => {
  const message = req.body.message;
  const imagePath = req.file ? `http://localhost:3001/uploads/${req.file.filename}` : null;

  io.emit('receive_message', { message, image: imagePath });
  res.status(200).send('Message sent');
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('send_message', (message) => {
    io.emit('receive_message', { message });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Serve static files in the /uploads directory
app.use('/uploads', express.static('uploads'));

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
