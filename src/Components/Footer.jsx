
// import React from "react";
// import { Link } from "react-router-dom"; // For internal links

// const Footer = () => {
//   return (
//     <footer className="bg-[#0A1D28] text-white py-8">
//       {/* Container */}
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
//           {/* Phone */}
//           <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left">
//             <a
//               href="tel:+44 7716 419677"
//               className="flex items-center space-x-2 text-sm hover:text-[#FF6F61] transition"
//             >
//               <i className="fas fa-phone-alt text-lg sm:text-xl"></i>
//               <span>+44 7716 419677</span>
//             </a>
//           </div>
//           {/* Email */}
//           <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left">
//             <a
//               href="mailto:support@pgesmarttech.com"
//               className="flex items-center space-x-2 text-sm hover:text-[#FF6F61] transition"
//             >
//               <i className="fas fa-envelope text-lg sm:text-xl"></i>
//               <span>support@pgesmarttech.com</span>
//             </a>
//           </div>
//           {/* Address */}
//           <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left">
//   <a
//     href="https://www.google.com/maps/place/Almas+Tower,+66,+Lake+Avenue+street,+Jumeirah+Lakes+Towers,+Al+Thanyah+5,+Hadaeq+Mohammed+Bin+Rashid,+Dubai,+Dubai+Municipality+12484+73843"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center space-x-2 text-sm hover:text-[#FF6F61] transition"
//   >
//     <i className="fas fa-map-marker-alt text-lg sm:text-xl"></i>
//     <span>Almas Tower, 66, Lake Avenue street, Jumeirah Lakes Towers, Al Thanyah 5, Dubai</span>
//   </a>
// </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-[#4A4A4A] mt-6 pt-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {/* About Section */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold">ABOUT</h4>
//               <p className="text-sm text-[#A4A4A4]">
//                 We are a technology-driven company providing innovative IT
//                 solutions for businesses.
//               </p>
//               <div className="flex space-x-4 mt-4">
//                 <a
//                   href="https://facebook.com/pgesmarttech"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-facebook-square text-xl text-[#3b5998]"></i>
//                 </a>
//                 <a
//                   href="https://instagram.com/pgesmarttech"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-instagram-square text-xl text-[#E1306C]"></i>
//                 </a>
//                 <a
//                   href="https://youtube.com/pgesmarttech"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-youtube-square text-xl text-[#FF0000]"></i>
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links Section */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold">QUICK LINKS</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link to="/" className="hover:text-[#FF6F61]">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className="hover:text-[#FF6F61]">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/services" className="hover:text-[#FF6F61]">
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="hover:text-[#FF6F61]">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Services Section */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold">SERVICES</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link to="/contact" className="hover:text-[#FF6F61]">
//                     Web Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="hover:text-[#FF6F61]"
//                   >
//                     Mobile App Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="hover:text-[#FF6F61]">
//                     Digital Marketing
//                   </Link>
//                 </li>
                
//               </ul>
//             </div>

//             {/* Policy Section */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold">POLICY</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link to="/contact" className="hover:text-[#FF6F61]">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="hover:text-[#FF6F61]">
//                     Refund Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="hover:text-[#FF6F61]"
//                   >
//                     Terms & Conditions
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="border-t border-[#4A4A4A] mt-8 pt-4 text-center text-sm text-[#A4A4A4]">
//           <p>&copy; 2024 SmartTech. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="bg-gray-900 text-white px-4 py-8 md:p-8 lg:p-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center md:justify-start mb-8 lg:mb-10">
          <Link to="/" className="text-3xl md:text-4xl font-bold text-blue-500">SMART TECH</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-5">Contact Info</h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-3">Contact</h4>
                <p className="text-gray-400 text-base hover:text-gray-300">+44 7418397473</p>
                <p className="text-gray-400 text-base hover:text-gray-300">+92 3570208799</p>
                <a href="mailto:info@thetechbucks.com" className="text-blue-400 text-base hover:text-blue-300">
                support@pgesmarttech.com</a>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-3">US Office</h4>
                <p className="text-gray-400 text-base hover:text-gray-300">500 Marquette Ave NW Ste 1203, Albuquerque, NM 87102, USA</p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-3">Dubai Office</h4>
                <p className="text-gray-400 text-base hover:text-gray-300">Almas Tower 66, Lake Avenue street,  37 Floor, Office G</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:pl-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-5">Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 text-base hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 text-base hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 text-base hover:text-white">Portfolio</Link></li>
              <li><Link to="/careers" className="text-gray-400 text-base hover:text-white">Careers</Link></li>
              <li><Link to="/about" className="text-gray-400 text-base hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-base hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-5">SERVICES</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 text-base hover:text-white">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-400 text-base hover:text-white">Full Stack Development</Link></li>
              <li><Link to="/services" className="text-gray-400 text-base hover:text-white">Custom Software Development</Link></li>
              <li><Link to="/services" className="text-gray-400 text-base hover:text-white">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-400 text-base hover:text-white">QA Testing</Link></li>
              <li><Link to="/services" className="text-gray-400 text-base hover:text-white">IT Consultation</Link></li>
              <li><Link to="/services" className="text-gray-400 text-base hover:text-white">UI/UX Design</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-5">Follow Us On:</h3>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;