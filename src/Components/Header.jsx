// src/components/Header.js
const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl">Dashboard</h1>
      <div className="text-sm md:text-base">
        {/* Placeholder for a user icon or additional information */}
        <span className="hidden md:inline">Welcome, User</span>
        <span className="md:hidden">Hi!</span>
      </div>
    </header>
  );
};

export default Header;
