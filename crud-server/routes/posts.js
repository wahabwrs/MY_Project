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


// GET route to fetch all posts
router.get('/test', async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from the database
    res.status(200).json(posts); // Send the posts as a response
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Error fetching posts", error });
  }
});

// DELETE route to delete a post by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id); // Find and delete the post by ID
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Error deleting post", error });
  }
});

// Optionally, you can add a PUT or PATCH route for updating posts
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, body },
      { new: true } // This option returns the updated document
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Error updating post", error });
  }
});

export default router;
