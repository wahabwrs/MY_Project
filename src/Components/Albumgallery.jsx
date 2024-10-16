// src/components/AlbumGallery.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlbumGallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch albums from the API
  const fetchAlbums = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setAlbums(response.data.slice(0, 8)); // Limit to 4 albums for display
      setLoading(false);
    } catch (error) {
      console.error("Error fetching albums:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading albums...</p>;

  return (
    <div className="container mx-auto p-4"> {/* Centered container with padding */}
      <h2 className="text-2xl font-bold mb-12 text-center">Album Gallery</h2> {/* Centered title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Responsive grid layout */}
        {albums.map((album) => (
          <div key={album.id} className="border rounded-lg overflow-hidden shadow-lg p-4 bg-white transition-transform transform hover:scale-105"> {/* Hover effect for cards */}
            <h4 className="text-lg font-bold">{album.title}</h4>
            <p className="text-sm text-gray-600">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGallery;
