
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const JobCard = ({ title, description }) => {
  return (
    <div
      className="shadow-lg rounded-lg p-8 w-80 h-64 flex-shrink-0 mb-4 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-8 z-10"
      style={{ backgroundColor: "#001F3F", color: "#FFFFFF" }} // Navy blue color
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="mb-4 h-20">{description}</p>
      {/* Link to the Contact Page */}
      <Link
        to="/contact"
        className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default JobCard;
