
const Settings = () => {
  return (
    <div className="container mx-auto p-4"> {/* Centered container with padding */}
      <h2 className="text-2xl font-bold mb-4 text-center">Settings</h2> {/* Centered title */}
      <p className="text-center text-gray-700">Manage your account settings here.</p> {/* Centered paragraph with styling */}
      <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"> {/* Card style for settings section */}
        <h3 className="text-lg font-semibold mb-2">Account Preferences</h3>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
