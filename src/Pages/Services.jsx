import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "Web Development",
      description: "Build modern, responsive websites.",
      image: "/bg3.png",
      link: "/web-development", // Link for the Web Development page
    },
    {
      name: "Python Development",
      description: "Create robust backend applications with Python.",
      image: "/bg4.png",
      link: "/python-development",
    },
    {
      name: "Blockchain Solution",
      description: "Decentralized applications and blockchain solutions.",
      image: "/bg5.png",
      link: "/blockchain-development",
    },
    {
      name: "AI Development",
      description: "Leverage AI to automate and enhance your business.",
      image: "/bg6.png",
      link: "/ai-development",
    },
    {
      name: "Data Analytics",
      description: "Analyze data and uncover actionable insights.",
      image: "/bg7.png",
      link: "/data-analytics",
    },
    {
      name: "Mobile App Development",
      description: "Develop mobile apps for Android and iOS.",
      image: "/mad.jpg",
      link: "/mobile-app-development",
    },
    {
      name: "E-Commerce Solution",
      description: "Build scalable e-commerce platforms.",
      image: "/bg9.png",
      link: "/ecommerce-solutions",
    },
    {
      name: "Cyber Security",
      description: "Ensure security for your systems and data.",
      image: "/bg10.png",
    },
  ];

  return (
    <div>
      {/* Responsive Header Section with Image */}
      <div
        className="text-center mb-12 relative"
        style={{
          backgroundImage: `url('/Rectangle 4.png')`,
          backgroundSize: "cover",
          height: "auto",
          minHeight: "500px",
          paddingTop: "56.25%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Our Expert Services
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto text-sm sm:text-base lg:text-lg">
            We push the boundaries of what's possible with expert development
            and creative thinking.
          </p>
        </div>
      </div>

      {/* Responsive Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-[395px] flex-shrink-0 overflow-hidden rounded-lg shadow-md group mx-auto"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {service.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg sm:text-2xl font-semibold mb-4">
                  {service.name}
                </h3>
                <p className="text-white text-xs sm:text-sm mb-4 text-center px-4">
                  {service.description}
                </p>
                {service.link ? (
                  <Link to={service.link}>
                    <button className="text-white text-3xl sm:text-4xl font-bold bg-gray-900 p-3 sm:p-4 rounded-full shadow-md hover:bg-gray-800 transition duration-300">
                      &rarr;
                    </button>
                  </Link>
                ) : (
                  <button className="text-white text-3xl sm:text-4xl font-bold bg-gray-900 p-3 sm:p-4 rounded-full shadow-md cursor-not-allowed opacity-50">
                    &rarr;
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Recent Reviews Section */}
      <div className="bg-blue-800 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold text-white mb-7">
          Our Recent Reviews
        </h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="hover:scale-110 transform transition duration-300 w-full max-w-xs">
              <img src="PC.png" alt="logo" className="h-14 w-14 mx-auto mb-2" />
              <h3 className="text-white">587+</h3>
              <p className="text-white">Project Completed</p>
            </div>
            <div className="hover:scale-110 transform transition duration-300 w-full max-w-xs">
              <img src="CS.png" alt="logo" className="h-16 w-16 mx-auto mb-2" />
              <h3 className="text-white">264+</h3>
              <p className="text-white">Client Satisfaction</p>
            </div>
            <div className="hover:scale-110 transform transition duration-300 w-full max-w-xs">
              <img src="BC.png" alt="logo" className="h-16 w-16 mx-auto mb-2" />
              <h3 className="text-white">10+</h3>
              <p className="text-white">Business Consultant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients and Collaborative Partners Section */}
      <div className="bg-white py-16">
        <h2 className="text-4xl font-semibold text-center text-black mb-8">
          Our Clients and Collaborative Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg">
            <img
              src="1.png"
              alt="Partner 1"
              className="w-full h-full object-contain"
              style={{
                width: "60%",
                aspectRatio: "3/2",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg">
            <img
              src="2.png"
              alt="Partner 2"
              className="w-full h-full object-contain"
              style={{
                width: "60%",
                aspectRatio: "3/2",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg">
            <img
              src="13.png"
              alt="Partner 3"
              className="w-full h-full object-contain"
              style={{
                width: "60%",
                aspectRatio: "3/2",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg">
            <img
              src="14.png"
              alt="Partner 4"
              className="w-full h-full object-contain"
              style={{
                width: "60%",
                aspectRatio: "3/2",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg">
            <img
              src="15.png"
              alt="Partner 5"
              className="w-full h-full object-contain"
              style={{
                width: "60%",
                aspectRatio: "3/2",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg">
            <img
              src="16.png"
              alt="Partner 6"
              className="w-full h-full object-contain"
              style={{
                width: "60%",
                aspectRatio: "3/2",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
