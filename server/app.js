const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
// const chatRoutes = require('./routes/chatRoutes');
// const pathRoutes = require('./routes/pathRoutes');
// const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
// app.use('/api/chat', chatRoutes);
// app.use('/api/paths', pathRoutes);
// app.use('/api/leaderboard', leaderboardRoutes);

module.exports = app;
