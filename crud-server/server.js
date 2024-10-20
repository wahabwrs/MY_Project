// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'; // Import dotenv
dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the application on failure
  }
};

connectDB(); // Call the connectDB function to connect to MongoDB

// Routes
const postRoutes = require('./routes/posts');
app.use('/api/posts', postRoutes); // Your API endpoint for CRUD operations

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


