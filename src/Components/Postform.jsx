// src/components/PostForm.js
import React, { useState } from 'react';
import { createPost } from '../api/api';

const PostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body };

    try {
      const createdPost = await createPost(newPost);
      onPostCreated(createdPost); // Pass the newly created post back to the parent component
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 max-w-lg mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Create a Post</h2>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border border-gray-300 p-2 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Create Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
