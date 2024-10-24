/* eslint-disable no-undef */
// server.js
import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';
import dotenv from 'dotenv'; // Import dotenv
import postRoutes from './routes/posts.js'; // Use import instead of require

dotenv.config(); // Load environment variables from .env

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5001;


// Middleware
app.use(cors());
app.use(express.json())
app.use('/api/get', postRoutes);
// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the application on failure
  }
};

connectDB(); // Call the connectDB function to connect to MongoDB

// Routes
app.use('/api/posts', postRoutes); 
// for get data http://localhost:5001/api/posts/test
// for post data http://localhost:5001/api/posts
// for put(update) data http://localhost:5001/api/posts/6717e4877207749ed4acf3d4
//  delete  http://localhost:5000/api/posts/64b7f927e

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
