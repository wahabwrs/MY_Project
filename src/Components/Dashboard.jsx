import { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from '../components/Chart';
import Table from '../components/Table';
import Stats from './Stats';

const Dashboard = () => {
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
        // Slice the first 10 posts from the fetched data
        setPosts(response.data.slice(0, 10));
      // eslint-disable-next-line no-unused-vars
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
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setErrorUsers('Failed to fetch users');
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchPosts();
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      {/* Stats Section */}
      <Stats />

      {/* Chart Section */}
      <div className="w-full mb-8">
        <h3 className="font-bold text-lg mb-2">Performance Chart</h3>
        <div className="h-80 w-full">
          <Chart 
            postCount={posts.length} 
            commentCount={500} // Placeholder for comments
            userCount={users.length} 
            todoCount={200} // Placeholder for todos
          />
        </div>
      </div>

      {/* Users and Posts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Increased gap size */}
        {/* Users Table */}
        <div className="mb-6 mx-auto max-w-full"> {/* Max width for responsive design */}
          <h3 className="font-bold text-lg mb-2">Users</h3>
          {loadingUsers ? (
            <p>Loading users...</p>
          ) : errorUsers ? (
            <p className="text-red-500">{errorUsers}</p>
          ) : (
            <div className="overflow-x-auto"> {/* Allow horizontal scrolling on small screens */}
              <Table data={users} type="users" />
            </div>
          )}
        </div>

        {/* Posts Table */}
        <div className="mx-auto max-w-full"> {/* Max width for responsive design */}
          <h3 className="font-bold text-lg mb-2">Posts</h3>
          {loadingPosts ? (
            <p>Loading posts...</p>
          ) : errorPosts ? (
            <p className="text-red-500">{errorPosts}</p>
          ) : (
            <div className="overflow-x-auto"> {/* Allow horizontal scrolling on small screens */}
              <Table data={posts} type="posts" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
