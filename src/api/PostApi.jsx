// src/api/PostApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/posts'; // Replace with your backend URL

export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const postData = async (post) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

export const updatePost = async (id, post) => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
