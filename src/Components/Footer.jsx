
import React from "react";
import { Link } from "react-router-dom"; // For internal links

const Footer = () => {
  return (
    <footer className="bg-[#0A1D28] text-white py-8">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Phone */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left">
            <a
              href="tel:+44 7716 419677"
              className="flex items-center space-x-2 text-sm hover:text-[#FF6F61] transition"
            >
              <i className="fas fa-phone-alt text-lg sm:text-xl"></i>
              <span>+44 7716 419677</span>
            </a>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left">
            <a
              href="mailto:support@pgesmarttech.com"
              className="flex items-center space-x-2 text-sm hover:text-[#FF6F61] transition"
            >
              <i className="fas fa-envelope text-lg sm:text-xl"></i>
              <span>support@pgesmarttech.com</span>
            </a>
          </div>
          {/* Address */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left">
  <a
    href="https://www.google.com/maps/place/Almas+Tower,+66,+Lake+Avenue+street,+Jumeirah+Lakes+Towers,+Al+Thanyah+5,+Hadaeq+Mohammed+Bin+Rashid,+Dubai,+Dubai+Municipality+12484+73843"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-sm hover:text-[#FF6F61] transition"
  >
    <i className="fas fa-map-marker-alt text-lg sm:text-xl"></i>
    <span>Almas Tower, 66, Lake Avenue street, Jumeirah Lakes Towers, Al Thanyah 5, Dubai</span>
  </a>
</div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#4A4A4A] mt-6 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">ABOUT</h4>
              <p className="text-sm text-[#A4A4A4]">
                We are a technology-driven company providing innovative IT
                solutions for businesses.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com/pgesmarttech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square text-xl text-[#3b5998]"></i>
                </a>
                <a
                  href="https://instagram.com/pgesmarttech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram-square text-xl text-[#E1306C]"></i>
                </a>
                <a
                  href="https://youtube.com/pgesmarttech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube-square text-xl text-[#FF0000]"></i>
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-[#FF6F61]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#FF6F61]">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#FF6F61]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FF6F61]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">SERVICES</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contact" className="hover:text-[#FF6F61]">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#FF6F61]"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FF6F61]">
                    Digital Marketing
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Policy Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">POLICY</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contact" className="hover:text-[#FF6F61]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FF6F61]">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#FF6F61]"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-[#4A4A4A] mt-8 pt-4 text-center text-sm text-[#A4A4A4]">
          <p>&copy; 2024 SmartTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
