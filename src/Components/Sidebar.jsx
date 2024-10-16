// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white h-screen p-4 w-64 hidden md:block"> {/* Hidden on small screens */}
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li className="mb-4">
            <Link to="/analytics" className="hover:text-gray-400">Analytics</Link>
          </li>
          <li className="mb-4">
            <Link to="/settings" className="hover:text-gray-400">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
