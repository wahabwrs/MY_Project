import  { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="list-disc pl-5 space-y-2">
        {users.map(user => (
          <li key={user.id} className="bg-white border rounded-lg shadow-md p-3 transition-transform transform hover:scale-105">
            <strong className="block text-lg">{user.name}</strong>
            <span className="text-sm text-gray-600">{user.email}</span>
            <span className="text-sm text-gray-600"> - {user.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
