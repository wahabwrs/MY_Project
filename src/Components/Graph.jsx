// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Chart from '../components/Chart'; // Import the updated Chart component
import Table from '../components/Table'; // Placeholder for table component
import Stats from './Stats';

const Graph = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [errorPosts, setErrorPosts] = useState('');
  const [errorUsers, setErrorUsers] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        setErrorPosts('Failed to fetch posts');
      } finally {
        setLoadingPosts(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        setErrorUsers('Failed to fetch users');
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchPosts();
    fetchUsers();
  }, []);

  // Prepare data for the chart
  const chartData = users.map((user) => {
    return {
      label: user.name,
      value: posts.filter(post => post.userId === user.id).length // Count posts by user
    };
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Stats Section */}
      <Stats />

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card title="Total Posts" value={posts.length} />
        <Card title="Total Users" value={users.length} />
        <Card title="Comments" value="500" /> {/* Placeholder, you can fetch comments similarly */}
      </div>

      {/* Chart Section */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2">Performance Chart</h3>
        <Chart data={chartData} /> {/* Pass prepared data to Chart */}
      </div>

      {/* Display Fetched Posts */}
      <h3 className="font-bold text-lg mb-2">Posts</h3>
      {loadingPosts ? (
        <p>Loading posts...</p>
      ) : errorPosts ? (
        <p className="text-red-500">{errorPosts}</p>
      ) : (
        <Table data={posts} type="posts" />
      )}

      {/* Display Fetched Users */}
      <h3 className="font-bold text-lg mb-2 mt-6">Users</h3>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : errorUsers ? (
        <p className="text-red-500">{errorUsers}</p>
      ) : (
        <Table data={users} type="users" />
      )}
    </div>
  );
};

export default Graph;
