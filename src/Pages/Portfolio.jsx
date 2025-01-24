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
      <div className="container mx-auto px-6 md:px-12 py-12 bg-black">
        <div>
          <h2 className="text-6xl font-bold text-white mb-8 text-center">
            Our Approach
          </h2>
          <div className="flex justify-center items-center mb-16">
            <img
              src="/portfolio1.svg"
              alt="Our approach illustration"
              className="w-full max-w-3xl rounded-lg" // Increased max-width and centered using flex container
            />
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
