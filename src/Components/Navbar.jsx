// import React, { useState, useEffect } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom"; // Import useLocation

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation(); // Get the current location
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0); // Check if the user has scrolled
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Function to handle button clicks
//   const handleButtonClick = (path) => {
//     navigate(path); // Navigate to the specified path
//   };

//   // Determine if the current route is the home page
//   const isHomePage = location.pathname === "/";

//   return (
//     <div
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         isHomePage
//           ? isScrolled
//             ? "bg-white text-black shadow-md"
//             : "bg-transparent bg-opacity-40 text-white"
//           : "bg-white text-black shadow-md" // Always white background for other pages
//       }`}
//     >
//       <div className="container mx-auto flex justify-between h-[8vh] items-center py-4 px-6 lg:px-20">
//         {/* Logo */}
//         <div className="font-bold text-lg">
//           <Link to="/" className="hover:text-blue-600 transition-colors">
//             SMART TECH
//           </Link>
//         </div>

//         {/* Navbar Links */}
//         <div className="hidden md:flex space-x-6 font-bold">
//           {/* Home Link */}
//           <Link to="/" className="hover:text-blue-600 transition-colors">
//             Home
//           </Link>
//           <Link to="/about" className="hover:text-blue-600 transition-colors">
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="hover:text-blue-600 transition-colors"
//           >
//             Services
//           </Link>
//           <Link
//             to="/portfolio"
//             className="hover:text-blue-600 transition-colors"
//           >
//             Portfolio
//           </Link>
//           <Link to="/careers" className="hover:text-blue-600 transition-colors">
//             Careers
//           </Link>
//           <Link to="/contact" className="hover:text-blue-600 transition-colors">
//             Contact
//           </Link>
//         </div>

//         {/* Buttons: Login & Sign Up */}
//         <div className="space-x-4">
//           {/* Let's Get Started Button (Navigate to Contact Page on click) */}
//           <button
//             onClick={() => handleButtonClick("/contact")}
//             className="font-bold py-2 px-6 border border-black rounded-full text-black hover:border-transparent hover:bg-blue-600 hover:text-white transition-colors"
//           >
//             Let's Get Started
//           </button>

//           {/* Learn More Button (Navigate to About Page on click) */}
//           <button
//             onClick={() => handleButtonClick("/about")}
//             className="font-bold py-2 px-6 border border-transparent rounded-full text-white bg-blue-600 hover:bg-transparent hover:border-black hover:text-black transition-colors"
//           >
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
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

  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent bg-opacity-40 text-white"
          : "bg-white text-black shadow-md"
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
          className="md:hidden block text-black hover:text-blue-600 focus:outline-none"
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
              isHomePage
                ? isScrolled
                  ? "text-black"
                  : "md:text-white text-black" /* Black text for mobile */
                : "text-black"
            } hover:text-blue-600   md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block py-2 px-4 ${
              isHomePage
                ? isScrolled
                  ? "text-black"
                  : "md:text-white text-black" /* Black text for mobile */
                : "text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`block py-2 px-4 ${
              isHomePage
                ? isScrolled
                  ? "text-black"
                  : "md:text-white text-black" /* Black text for mobile */
                : "text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`block py-2 px-4 ${
              isHomePage
                ? isScrolled
                  ? "text-black"
                  : "md:text-white text-black" /* Black text for mobile */
                : "text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/careers"
            className={`block py-2 px-4 ${
              isHomePage
                ? isScrolled
                  ? "text-black"
                  : "md:text-white text-black" /* Black text for mobile */
                : "text-black"
            } hover:text-blue-600 md:inline`}
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>

          {/* Buttons */}
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 px-4 md:px-0">
            <button
              onClick={() => handleButtonClick("/contact")}
              className="block md:inline font-bold py-2 px-6 border border-black rounded-full text-black hover:border-transparent hover:bg-blue-600 hover:text-white transition-colors"
            >
              Let's Get Started
            </button>
            {/* <button
              onClick={() => handleButtonClick("/about")}
              className="block md:inline font-bold py-2 px-6 border border-transparent rounded-full text-white bg-blue-600 hover:bg-transparent hover:border-black hover:text-black transition-colors"
            >
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
