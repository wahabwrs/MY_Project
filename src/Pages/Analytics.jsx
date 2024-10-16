import  { useEffect, useState } from 'react';
import { fetchComments } from '../api/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Analytics = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const fetchedComments = await fetchComments();
        setComments(fetchedComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  const data = comments.slice(0, 10).map(comment => ({
    id: comment.id,
    name: comment.name,
    email: comment.email,
  }));

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <div className="overflow-x-auto"> {/* Allow horizontal scrolling on small screens */}
        <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="id" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
