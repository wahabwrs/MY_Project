// src/Pages/Home.js
import Dashboard from "../Components/Dashboard";
import StatsCard from "../Components/StatsCard"; // Correct the import case for StatsCard
import Photo from "../Components/Photo"; // Assuming Photo is a single photo component
import AlbumGallery from "../Components/AlbumGallery"; // Import the PhotoGallery component

const Home = () => {
  return (
    <div className="container mx-auto p-4"> {/* Center content and add padding */}
      <h2 className="text-2xl font-bold mb-6 text-center">Home Page</h2> {/* Centered heading with larger size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Responsive grid layout */}
      
        <div className="mb-4">
          <Dashboard />
        </div>
        <div>
        <AlbumGallery /> {/* Add the PhotoGallery component */}
      </div>
        <div className="mb-4">
          <StatsCard />
        </div>
      </div>
      <div className="mb-4">
        <Photo /> {/* Assuming this is a single photo component */}
      </div>
      
    </div>
  );
};

export default Home;
