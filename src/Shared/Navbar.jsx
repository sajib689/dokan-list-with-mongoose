import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-2xl">
              Logo
            </Link>
          </div>
          
          {/* Main menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/dokan-list" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Dokan List</a>
              <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
              <button className="bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">Login</button>
            </div>
          </div>
          
          {/* User Profile Section */}
          <div className="hidden md:flex items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/40"
              alt="User Profile"
            />
            <button className="ml-4 text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={!isMenuOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/dokan-list" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Dokan List</a>
            <a href="/about" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="/contact" className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
            <button className="bg-blue-700 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">Login</button>
            <div className="mt-2 flex items-center px-3">
              <img
                className="h-8 w-8 rounded-full"
                src="https://via.placeholder.com/40"
                alt="User Profile"
              />
              <button className="ml-4 bg-red-500 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">Logout</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
