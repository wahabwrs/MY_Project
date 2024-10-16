// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar is displayed across all pages */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1">
            {/* Header is displayed across all pages */}
            <Header />
         

            {/* Main content, where routes render specific pages */}
            <main className="p-6">
              <Routes>
                {/* Routes to different pages */}
                <Route path="/" element={<Home />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
