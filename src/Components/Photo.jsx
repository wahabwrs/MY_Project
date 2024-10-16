// src/components/PhotoGallery.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch photos from the API
  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPhotos(response.data.slice(0, 6)); // Increase limit for more display
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (loading) return <p className="text-center">Loading photos...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"> {/* Responsive grid */}
      {photos.map((photo) => (
        <div key={photo.id} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={photo.thumbnailUrl} alt={photo.title} className="w-full h-32 object-cover" />
          <div className="p-2">
            <h4 className="text-sm truncate">{photo.title}</h4> {/* Truncate title if too long */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
