import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Utlitis/Loading";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user,logOut,loading } = useContext(AuthContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    logOut()
  }
  const links = (
    <>
      <Link
        to="/"
        className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </Link>
      <Link
        to="/dokan-list"
        className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        Dokan List
      </Link>
      <Link
        to="/addshop"
        className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        Add Shop
      </Link>
      <Link
        to="/about"
        className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        Contact Us
      </Link>
    </>
  );
  // if(loading) return <Loading/>
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

          {/* Main menu (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">{links}</div>
          </div>

          {/* User Profile Section */}
          <div className="hidden md:flex items-center">
            {user ? (
              <>
                <img
                  className="h-12 w-12 rounded-full"
                  src={user?.photoURL}
                  alt="User Profile"
                />
                <button onClick={handleLogout} className="ml-4 text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                  Logout
                </button>
              </>
            ) : (
              <Link to='/login' className="ml-4 text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
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
                  d={
                    !isMenuOpen
                      ? "M4 6h16M4 12h16m-7 6h7"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col sm:px-3">
            {links}

            <div className="mt-2 flex items-center px-3">
              {user ? (
                <>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={user?.photoURL}
                    alt="User Profile"
                  />
                  <button onClick={handleLogout} className="ml-4 text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                    Logout
                  </button>
                </>
              ) : (
                <Link to='/login' className="ml-4 text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
