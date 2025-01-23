import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('/p2.png')`, // Replace with your actual background image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <p className="mt-4 text-lg">
            We don’t just develop for today—we build solutions that grow with
            your business.
          </p>
        </div>
      </div>

      {/* Scalable Solutions Section */}
      <div className="container mx-auto px-6 md:px-12 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Scalable Solutions for Tomorrow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-lg">
                  User-Centered Approach
                </h3>
                <p className="text-gray-700">
                  Your users are at the heart of everything we build. Proven
                  success across industries.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-lg">
                  Proven Success Across Industries
                </h3>
                <p className="text-gray-700">
                  From startups to enterprises, we’ve helped clients in diverse
                  industries achieve digital success.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-lg">End-to-End Expertise</h3>
                <p className="text-gray-700">
                  From concept to deployment, we manage every step of your
                  digital journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {/* First Column */}
            <div className="col-span-1 flex flex-col space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg h-[200px] group">
                <img
                  src="/p1.png" // Replace with your actual image
                  alt="Image 1"
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                  Web developement
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg h-[200px] group">
                <img
                  src="/p3.png" // Replace with your actual image
                  alt="Image 2"
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                  App Developement
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center">
              <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-[400px] group">
                <img
                  src="/p4.png" // Replace with your actual image
                  alt="Image 3"
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white text-center">
                  cybersecurity
                </div>
              </div>
            </div>

            {/* Last Column */}
            <div className="col-span-1 flex flex-col space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg h-[200px] group">
                <img
                  src="/p5.png" // Replace with your actual image
                  alt="Image 4"
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                  wordpress
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg h-[200px] group">
                <img
                  src="/PORT.png" // Replace with your actual image
                  alt="Image 5"
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                  shopify
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
