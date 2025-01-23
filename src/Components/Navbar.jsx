
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigating
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent bg-opacity-40 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-20">
        {/* Logo */}
        <div className="font-bold text-lg">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            SMART TECH
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-current hover:text-blue-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.11 5.7a1 1 0 10-1.41 1.42L10.59 12l-4.89 4.88a1 1 0 001.41 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.42z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 100-2H4a1 1 0 100 2zm16 6H4a1 1 0 100 2h16a1 1 0 100-2zM4 19h16a1 1 0 100-2H4a1 1 0 100 2z"
              />
            )}
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full pb-3 sm:pb-0 md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-6 font-bold shadow-lg md:shadow-none z-40 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Links */}
          <Link
            to="/"
            className={`block py-2 px-4 ${
              isScrolled
                ? "text-black"
                : "md:text-white text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block py-2 px-4 ${
              isScrolled
                ? "text-black"
                : "md:text-white text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`block py-2 px-4 ${
              isScrolled
                ? "text-black"
                : "md:text-white text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`block py-2 px-4 ${
              isScrolled
                ? "text-black"
                : "md:text-white text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/careers"
            className={`block py-2 px-4 ${
              isScrolled
                ? "text-black"
                : "md:text-white text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>

          {/* Button */}
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 px-4 md:px-0">
            <button
              onClick={() => handleButtonClick("/contact")}
              className={`block md:inline-block font-bold py-2 px-6 rounded-full transition-colors ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;