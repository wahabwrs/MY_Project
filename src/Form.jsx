// src/Form.jsx
import  { useEffect, useState } from 'react';
import axios from 'axios';
import './Form.css'; // Optional: You can create a separate CSS file for styling

const Form = () => {
  const [posts, setPosts] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/posts'); // Fetch data from API
      setPosts(response.data); // Set posts data
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to fetch posts. Please try again.'); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div className="form-container"> {/* Optional: CSS class for styling */}
      <h2>Posts Form</h2>
      {posts.map((post) => (
        <form key={post._id} className="post-form"> {/* Use the post ID as the key */}
          <div>
            <label htmlFor={`title-${post._id}`}>Title:</label>
            <input
              type="text"
              id={`title-${post._id}`}
              value={post.title}
              readOnly // Make it read-only if you just want to display
            />
          </div>
          <div>
            <label htmlFor={`body-${post._id}`}>Body:</label>
            <textarea
              id={`body-${post._id}`}
              value={post.body}
              readOnly // Make it read-only if you just want to display
            />
          </div>
          {/* You can add other form controls if needed */}
        </form>
      ))}
    </div>
  );
};

export default Form;
