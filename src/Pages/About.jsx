import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-center group"
        style={{ backgroundImage: `url('new.png')` }}
      >
        <div className="bg-black bg-opacity-50 text-white px-6 sm:px-8 py-8 sm:py-10 rounded-md transform ">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-base sm:text-lg group-hover:text-gray-200 transition duration-300 ease-in-out">
            Transforming ideas into groundbreaking solutions. Together, we drive
            innovation and build success stories.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-6 md:px-16 py-8 sm:py-12 bg-white">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Beliefs Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              What Drives Us
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Pioneering innovation to redefine possibilities.</li>
              <li>Building seamless connections across systems and people.</li>
              <li>Harnessing data to empower smarter decisions.</li>
              <li>Prioritizing sustainability and environmental impact.</li>
              <li>Crafting user-centric designs for maximum accessibility.</li>
              <li>Developing scalable solutions for future growth.</li>
              <li>Ensuring uncompromised security and privacy.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold mt-8">
              Who We Are
            </h3>
            <ul className="space-y-3 list-disc list-inside mt-4">
              <li>Visionaries with a passion for creativity and innovation.</li>
              <li>Relentless learners who thrive on curiosity and growth.</li>
              <li>Result-driven professionals dedicated to excellence.</li>
            </ul>
          </div>

          {/* Mission Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              Moving Forward, Together
            </h2>
            <p className="text-sm sm:text-base mb-6">
              Our mission is to innovate with purpose, deliver efficiency, and
              create meaningful user experiences. We strive to make technology
              accessible, sustainable, secure, and impactful, fostering a future
              of connection, trust, and collaboration.
            </p>
            <p className="text-sm sm:text-base">
              By turning challenges into opportunities, we empower businesses
              and individuals to unlock their full potential. Forward-thinking
              solutions for a connected tomorrow.
            </p>

            {/* Image Layout */}
            <div className="flex flex-col gap-4 md:flex-row md:gap-4 mt-6 sm:mt-8">
              <div className="flex flex-col gap-4">
                <img
                  src="/n1.png"
                  alt="Innovation"
                  className="rounded-lg shadow-lg w-full object-cover h-auto transform hover:scale-110 transition duration-300 ease-in-out"
                />
                <img
                  src="/n2.png"
                  alt="Technology"
                  className="rounded-lg shadow-lg w-full object-cover h-auto transform hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <img
                src="/n3.png"
                alt="Community"
                className="rounded-lg shadow-lg w-full md:w-[60%] object-cover h-auto transform hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
