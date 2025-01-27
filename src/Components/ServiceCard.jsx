
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative w-[291px] h-[395px] flex-shrink-0 overflow-hidden rounded-lg shadow-md group">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Default Service Name (at the footer) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        <h3 className="text-white text-xl font-semibold">
          {service.name}
        </h3>
      </div>

      {/* Hover Effect - Description and Arrow */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-white text-2xl font-semibold mb-4">
          {service.name}
        </h3>
        <p className="text-white text-sm mb-4 text-center px-4">
          {service.description}
        </p>
        {/* Hover Arrow */}
        <button className="text-white text-4xl font-bold bg-gray-900 p-4 rounded-full shadow-md hover:bg-gray-800 transition duration-300 opacity-0 group-hover:opacity-100">
          &rarr; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
