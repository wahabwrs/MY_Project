// routes/posts.js
import express from 'express';
import Post from '../models/Post.js'; // Assuming this is the path to your Post model

const router = express.Router();

// POST route to add a new post
router.post('/', async (req, res) => {
  const { title, body } = req.body;

  try {
    // Create a new post instance
    const newPost = new Post({ title, body });

    // Save the post to MongoDB Atlas
    const savedPost = await newPost.save();

    // Send the saved post as a response
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error saving post:", error);
    res.status(500).json({ message: "Error saving post", error });
  }
});

export default router;
