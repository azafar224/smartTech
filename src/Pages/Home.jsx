import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import JobCard from "../Components/JobCard";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Function to handle button click for navigation
  const handleButtonClick = (path) => {
    navigate(path);
  };
  const services = [
    {
      name: "Web Development",
      description: "Build modern, responsive websites.",
      image: "/bg3.png",
      link: "/web-development",
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
      link: "/cyber-security",
    },
  ];

  const jobs = [
    {
      title: "Software Engineer",
      description:
        "Join our tech team to work on exciting projects and cutting-edge solutions.",
    },
    {
      title: "Product Manager",
      description:
        "Oversee product development and help launch innovative solutions.",
    },
    {
      title: "UX/UI Designer",
      description:
        "Create beautiful designs and engaging user experiences across our platforms.",
    },
    {
      title: "Marketing Specialist",
      description:
        "Help grow our brand through effective digital marketing campaigns.",
    },
    {
      title: "Data Scientist",
      description:
        "Analyze large datasets and build data-driven models to improve our product.",
    },
    {
      title: "DevOps Engineer",
      description:
        "Automate processes and ensure smooth application deployments.",
    },
  ];
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollSlider = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setScrollPosition(scrollPosition + scrollAmount);
  };

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const [isPaused, setIsPaused] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    const container = testimonialsRef.current;

    const animateScroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += 1;
      }
      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section>
      <div
        className="relative w-full h-screen bg-cover bg-center mt-[-4vh]"
        style={{
          backgroundImage: `url('./bg1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="  relative z-10 mt-6 flex flex-col h-full justify-center items-start text-left text-white py-30 px-8 sm:px-10 lg:px-20 w-full sm:w-[75%] lg:w-[50%]">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-0">
            LET'S DIGITALIZE YOUR{" "}
            <span className="text-blue-400">BUSINESS</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6">
            At SmartTech, we create custom digital solutions to help your
            business thrive in a fast-paced, digital-first world. Our innovative
            strategies address unique challenges, streamline operations, and
            enhance customer experiences. With scalable and cutting-edge
            technology, we ensure your business stays ahead of the competition.
            Let us turn your vision into reality and drive long-term success. We
            work closely with you to bring your ideas to life. Let us turn your
            vision into reality.
          </p>

          <div className="flex flex-wrap space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              onClick={() => handleButtonClick("/about")}
              className="block md:inline font-bold py-2 px-6 border border-transparent rounded-full text-white bg-blue-600 hover:bg-transparent hover:border-black hover:text-black transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full bg-white">
        {/* Statistics Container */}
        <div className="relative flex bg-white justify-center items-center w-[90%] sm:w-[75%] lg:w-[50%] h-auto sm:h-[80%] lg:h-auto mx-auto gap-y-6 py-6  px-4 sm:px-2 rounded-3xl shadow-2xl mt-[-6%] mb-8 lg:mb-2 md:mb-12 z-20">
          <div className="flex flex-wrap justify-evenly gap-y-6 sm:gap-y-0 w-full">
            <div className="flex flex-col items-center space-y-2 hover:scale-105 transform transition duration-300 ease-in-out w-[40%] sm:w-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                1000+
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center space-y-2 hover:scale-105 transform transition duration-300 ease-in-out w-[40%] sm:w-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                50+
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">Technology</p>
            </div>
            <div className="flex flex-col items-center space-y-2 hover:scale-105 transform transition duration-300 ease-in-out w-[40%] sm:w-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
                5000+
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Total Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className=" relative w-full h-screen  bg-cover bg-center mt-[-8vh]"
        style={{
          backgroundColor: "#0B1934",
        }}
      >
        {/* Overlay for darkening the background */}
        <div className=" absolute inset-0 bg-black opacity-50"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center h-full w-full px-12 pb-1 lg:pb-0">
          {/* Right Section: Text with Heading, Blue Line, and Bullets */}
          <div className=" lg:pt-3 pt-16 w-full lg:w-1/2 text-white text-center lg:text-left px-6 lg:order-first">
            <h2 className="sm:pt-30 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ">
              Where Bold Ideas <br /> Find Their Code
            </h2>
            <div className="mb-4 border-t-4 border-blue-500 w-24 mx-auto lg:text-left lg:mx-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
              <ul className="space-y-2">
                <li>● Your Vision, Our Mission</li>
                <li>● Transform Ideas into Reality</li>
              </ul>
              <ul className="space-y-2">
                <li>● Digital Mastery, Done Right</li>
                <li>● Where Code Meets Creativity</li>
              </ul>
            </div>
          </div>

          {/* Left Section: Technologies Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 px-6 mb-9  lg:mb-0">
            <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-0 px-9 shadow-md hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-lg group">
              <i className="fas fa-globe text-blue-500 text-3xl mb-2 transition-all duration-300 ease-in-out group-hover:text-white"></i>
              <span className="text-lg font-medium text-gray-700 group-hover:text-white transition-all duration-300 ease-in-out">
                Website Development
              </span>
            </div>
            <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-lg group">
              <i className="fas fa-mobile-alt text-blue-500 text-3xl mb-2 transition-all duration-300 ease-in-out group-hover:text-white"></i>
              <span className="text-lg font-medium text-gray-700 group-hover:text-white transition-all duration-300 ease-in-out">
                Mobile App Development
              </span>
            </div>
            <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-lg group">
              <i className="fas fa-chart-line text-blue-500 text-3xl mb-2 transition-all duration-300 ease-in-out group-hover:text-white"></i>
              <span className="text-lg font-medium text-gray-700 group-hover:text-white transition-all duration-300 ease-in-out">
                Data Analysis
              </span>
            </div>
            <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-lg group">
              <i className="fas fa-shield-alt text-blue-500 text-3xl mb-2 transition-all duration-300 ease-in-out group-hover:text-white"></i>
              <span className="text-lg font-medium text-gray-700 group-hover:text-white transition-all duration-300 ease-in-out">
                Cyber Security
              </span>
            </div>
            <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-lg group">
              <i className="fas fa-shopping-cart text-blue-500 text-3xl mb-2 transition-all duration-300 ease-in-out group-hover:text-white"></i>
              <span className="text-lg font-medium text-gray-700 group-hover:text-white transition-all duration-300 ease-in-out">
                E-Commerce Solutions
              </span>
            </div>
            <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-lg group">
              <i className="fas fa-brain text-blue-500 text-3xl mb-2 items-center justify-center transition-all duration-300 ease-in-out group-hover:text-white"></i>
              <span className="text-lg font-medium text-gray-700 items-center justify-center group-hover:text-white transition-all duration-300 ease-in-out">
                AI Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Service Cards Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Expert Services
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Discover the range of services we offer to take your business to
              the next level.
            </p>
          </div>
          <div className="relative">
            {/* Left Arrow Button */}
            <button
              onClick={() => {
                const slider = sliderRef.current;
                if (slider) {
                  const cardWidth = 300;
                  const currentScroll = slider.scrollLeft;
                  const totalScroll = slider.scrollWidth;

                  slider.scrollTo({
                    left: currentScroll - cardWidth,
                    behavior: "smooth",
                  });

                  // If we're at the start, jump to the second set without animation
                  if (currentScroll < cardWidth) {
                    requestAnimationFrame(() => {
                      slider.style.scrollBehavior = "auto";
                      slider.scrollLeft =
                        totalScroll - cardWidth * services.length * 2;
                      slider.style.scrollBehavior = "smooth";
                    });
                  }
                }
              }}
              className="arrow-button left-arrow"
            >
              &lt;
            </button>

            {/* Scrollable Services Container */}
            <div
              className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-hidden"
              ref={sliderRef}
              style={{
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {[
                ...services,
                ...services,
                ...services,
                ...services,
                ...services,
              ].map((service, index) => (
                <div
                  key={index}
                  className="relative w-full h-[395px] flex-shrink-0 overflow-hidden rounded-lg shadow-md group mx-auto"
                  style={{
                    width: "90%",
                    maxWidth: "300px",
                  }}
                  onClick={() => handleButtonClick(service.link)}
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
                    <button className="text-white text-3xl sm:text-4xl font-bold bg-gray-900 p-3 sm:p-4 rounded-full shadow-md hover:bg-gray-800 transition duration-300">
                      &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={() => {
                const slider = sliderRef.current;
                if (slider) {
                  const cardWidth = 300;
                  const currentScroll = slider.scrollLeft;
                  const maxScroll = slider.scrollWidth - slider.clientWidth;

                  slider.scrollTo({
                    left: currentScroll + cardWidth,
                    behavior: "smooth",
                  });

                  // If we're near the end, jump to the second set without animation
                  if (currentScroll > maxScroll - cardWidth * 2) {
                    requestAnimationFrame(() => {
                      slider.style.scrollBehavior = "auto";
                      slider.scrollLeft = cardWidth * services.length;
                      slider.style.scrollBehavior = "smooth";
                    });
                  }
                }
              }}
              className="arrow-button right-arrow"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">
            Empowering Your Project Journey
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="relative rounded-lg overflow-hidden shadow-md bg-cover bg-center group transform transition-transform duration-300 ease-in-out hover:scale-95"
            style={{
              height: "70vh",
              backgroundImage: `url('./bg11.png')`,
              opacity: "1.00",
            }}
          >
            {/* Header Text with Hover Effect */}
            <div
              className="absolute top-0 left-0 w-full p-6 text-white text-center group-hover:bg-grey-500 group-hover:text-white transition-all duration-300 ease-in-out"
              style={{ zIndex: 2 }}
            >
              <h3 className="text-3xl font-bold leading-tight relative">
                Scalable Solutions for Tomorrow
                {/* Star effect */}
                <span className="absolute top-0 right-0 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse">
                  ★
                </span>
              </h3>
            </div>

            {/* Footer Text with Hover Effect */}
            <div
              className="absolute bottom-0 left-0 w-full p-6 text-white text-center group-hover:bg-grey-500 group-hover:text-white transition-all duration-300 ease-in-out"
              style={{ zIndex: 2 }}
            >
              <p className="text-base leading-relaxed max-w-md mx-auto relative">
                We don’t just develop for today—we build solutions that grow
                with your business.
                {/* Star effect */}
                <span className="absolute bottom-0 right-0 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse">
                  ★
                </span>
              </p>
            </div>

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(
            180deg,
            rgba(11, 25, 52, 0.87) 13.72%,
            rgba(11, 25, 52, 0.71) 29.79%,
            rgba(11, 25, 52, 0.45) 45.53%,
            rgba(11, 25, 52, 0) 56.23%,
            rgba(11, 25, 52, 0.36) 64.6%,
            rgba(11, 25, 52, 0.64) 72.63%,
            rgba(11, 25, 52, 0.85) 88.03%,
            rgba(11, 25, 52, 1) 100%
          )`,
                zIndex: 1,
              }}
            ></div>
          </div>

          {/* Right Card */}
          <div
            className="bg-[#0B1934] text-white p-8 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-95"
            style={{
              height: "70vh",
              opacity: "1.00",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start", // Align bullets to the left
              position: "relative",
            }}
          >
            {/* Bullet List with Hover Effects */}
            <div className="flex flex-col space-y-8 w-full">
              {/* First Bullet */}
              <div className="flex items-center space-x-4">
                <div className="sm:w-10 sm:h-10 w-12 h-6 rounded-full bg-blue-400 text-white flex justify-center items-center">
                  <span className="text-lg">→</span>
                </div>
                <div className="relative">
                  <h4 className="font-semibold text-xl">
                    End-to-End Expertise
                  </h4>
                  <p className="text-gray-300">
                    From concept to deployment, we manage every step of your
                    digital journey.
                  </p>
                  {/* Star effect */}
                  <span className="absolute top-0 right-0 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse">
                    ★
                  </span>
                </div>
              </div>

              {/* Second Bullet */}
              <div className="flex items-center space-x-4">
                <div className="sm:w-10 sm:h-10 w-8 h-6   rounded-full bg-blue-400 text-white flex justify-center items-center">
                  <span className="text-lg">→</span>
                </div>
                <div className="relative">
                  <h4 className="font-semibold text-xl">
                    User-Centered Approach
                  </h4>
                  <p className="text-gray-300">
                    Your users are at the heart of everything we build.
                  </p>
                  {/* Star effect */}
                  <span className="absolute top-0 right-0 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse">
                    ★
                  </span>
                </div>
              </div>

              {/* Third Bullet */}
              <div className="flex items-center space-x-4">
                <div className="sm:w-12 sm:h-10 w-14 h-6 rounded-full bg-blue-400 text-white flex justify-center items-center">
                  <span className="text-lg">→</span>
                </div>
                <div className="relative">
                  <h4 className="font-semibold text-xl">
                    Proven Success Across Industries
                  </h4>
                  <p className="text-gray-300">
                    From startups to enterprises, we’ve helped clients in
                    diverse industries achieve digital success.
                  </p>
                  {/* Star effect */}
                  <span className="absolute top-0 right-0 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse">
                    ★
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 text-left overflow-visible">
        <div className="relative">
          {/* Scroll Arrow Left */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow hover:bg-blue-700 z-10 "
          >
            &lt;
          </button>

          <div className="my-4 sm:my-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
              Job Listings
            </h2>

            <div
              ref={scrollContainerRef}
              className="flex space-x-4 sm:space-x-6 pb-4 overflow-x-auto scrollbar-hidden ml-4 sm:ml-[9%] w-[90%] sm:w-[85%]"
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-80 overflow-hidden  "
                >
                  <JobCard title={job.title} description={job.description} />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Arrow Right */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow hover:bg-blue-700 z-10"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        {/* Testimonial Cards Grid */}

        <div
          className="testimonial-scroll-container overflow-hidden relative w-full"
          ref={testimonialsRef}
          onMouseEnter={() => setIsPaused(true)} // Stops on hover
          onMouseLeave={() => setIsPaused(false)} // Resumes on mouse leave
        >
          <div
            className={`scroll-animation flex space-x-12 ${
              isPaused ? "" : "animate-scroll"
            }`}
            onAnimationIteration={() => testimonialsRef.current.scrollTo(0, 0)} // Restart when animation iteration ends
            style={{
              animationDuration: "280s", // Slow transition speed
            }}
          >
            {[...Array(3)].map((_, index) => (
              <React.Fragment key={index}>
                {/* Testimonial 1 */}
                <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(33.333%_-_1rem)] lg:w-[calc(25%_-_0.5rem)] xl:w-[calc(20%_-_0.5rem)]">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/w.png" // Replace with actual path to image
                      alt="Profile 1"
                      className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    "This product has completely transformed the way we work. We
                    couldn't be happier with the results!"
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    John Doe
                  </h3>
                  <p className="text-gray-600">CEO, CompanyName</p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(33.333%_-_1rem)] lg:w-[calc(25%_-_0.5rem)] xl:w-[calc(20%_-_0.5rem)]">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/w.png" // Replace with actual path to image
                      alt="Profile 2"
                      className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    "Excellent customer service and great value. We've seen a
                    dramatic improvement in our business."
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">
                    Marketing Director, AnotherCompany
                  </p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(33.333%_-_1rem)] lg:w-[calc(25%_-_0.5rem)] xl:w-[calc(20%_-_0.5rem)]">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/w.png" // Replace with actual path to image
                      alt="Profile 3"
                      className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    "The best investment we've made in a long time. The results
                    speak for themselves."
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Samuel Lee
                  </h3>
                  <p className="text-gray-600">Product Manager, TechCorp</p>
                </div>

                {/* Testimonial 4 */}
                <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(33.333%_-_1rem)] lg:w-[calc(25%_-_0.5rem)] xl:w-[calc(20%_-_0.5rem)]">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/w.png" // Replace with actual path to image
                      alt="Profile 4"
                      className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    "I was amazed at how easy it was to integrate this product
                    into our workflow. Highly recommended!"
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Lisa Brown
                  </h3>
                  <p className="text-gray-600">
                    Operations Manager, BusinessCo
                  </p>
                </div>

                {/* Testimonial 5 */}
                <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(33.333%_-_1rem)] lg:w-[calc(25%_-_0.5rem)] xl:w-[calc(20%_-_0.5rem)]">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/w.png" // Replace with actual path to image
                      alt="Profile 5"
                      className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    "Our team can't stop talking about how great this product
                    is. It's been a game changer for us."
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Michael Johnson
                  </h3>
                  <p className="text-gray-600">CTO, Innovate Inc.</p>
                </div>

                {/* Testimonial 6 */}
                <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(33.333%_-_1rem)] lg:w-[calc(25%_-_0.5rem)] xl:w-[calc(20%_-_0.5rem)]">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/w.png" // Replace with actual path to image
                      alt="Profile 6"
                      className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    "This product has exceeded our expectations. The quality and
                    performance are top-notch."
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Emily Wilson
                  </h3>
                  <p className="text-gray-600">Founder, StartupX</p>
                </div>

                {/* Testimonial 7 */}
                <div className="bg-white p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(33.333%_-_1rem)] lg:w-[calc(25%_-_0.5rem)] xl:w-[calc(20%_-_0.5rem)]">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/w.png" // Replace with actual path to image
                      alt="Profile 7"
                      className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    "Absolutely fantastic! This has streamlined our operations
                    and increased productivity."
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Chris Taylor
                  </h3>
                  <p className="text-gray-600">VP, Global Corp</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
