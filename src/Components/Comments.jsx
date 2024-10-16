// src/components/CommentsFeed.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentsFeed = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetching the comments from the API
    const fetchComments = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setComments(response.data.slice(0, 10)); // Displaying only the first 10 comments for simplicity
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Recent Comments</h2>
      <ul className="divide-y divide-gray-200">
        {comments.map((comment) => (
          <li key={comment.id} className="py-2">
            <p className="font-bold">{comment.name}</p>
            <p>{comment.body}</p>
            <p className="text-sm text-gray-500">{comment.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsFeed;
