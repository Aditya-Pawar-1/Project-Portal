import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#5500FF] bg-opacity-70 text-white px-14 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Project Portal</h1>
        <div className="space-x-8 text-lg">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
