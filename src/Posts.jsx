import { useEffect, useState } from 'react';
import { getPosts, postData, updatePost, deletePost } from './api/PostApi'; 
import './Posts.css';// Adjust the import path as necessary

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [updateData, setUpdateData] = useState(null);

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (newPost.title && newPost.body) {
      const addedPost = await postData(newPost);
      setPosts((prev) => [...prev, addedPost]);
      setNewPost({ title: '', body: '' }); // Reset form
    }
  };

  const handleDeletePost = async (id) => {
    await deletePost(id);
    setPosts((prev) => prev.filter((post) => post._id !== id)); // Assuming MongoDB ID
  };

  const handleEditPost = async (id) => {
    const updatedPost = await updatePost(id, updateData);
    setPosts((prev) => prev.map((post) => (post._id === id ? updatedPost : post)));
    setUpdateData(null); // Reset update data
  };

  return (
    <div>
      <h2></h2>
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder="Post Title"
          required
        />
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={handleInputChange}
          placeholder="Post Body"
          required
        />
        <button type="submit">Add Post</button>
      </form>

      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleDeletePost(post._id)}>Delete</button>
            {/* You can add edit functionality as needed */}
            <button onClick={() => handleEditPost(post._id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
