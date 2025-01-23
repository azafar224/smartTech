
import React from "react";

// HeroSection Component
// const HeroSection = () => {
//   return (
//     <div
//       className="relative h-screen bg-cover bg-center  "
//       style={{ backgroundImage: `url('./background1.avif')`  }} // Ensure d.jpg is in the public folder
    
//     >
      

//       {/* Hero Content */}
//       <div className="container mx-auto px-6 lg:px-20 flex flex-col h-full justify-center items-start">
//         <div className="text-white max-w-lg">
//           <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
//             LETS DIGITALIZE YOUR{" "}
//             <span className="text-blue-400">BUSINESS</span>
//           </h1>
//           <p className="text-lg lg:text-xl mb-6">
//             At SmartTech, we specialize in building customized digital solutions
//             that help your business thrive.
//           </p>
//           <div className="flex space-x-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
//               Let's Get Started
//             </button>
//             <button className="bg-white hover:bg-gray-200 text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="absolute bottom-0 left-0 w-full bg-white shadow-lg py-6">
//         <div className="container mx-auto flex flex-wrap justify-evenly items-center text-center space-y-4 lg:space-y-0 lg:flex-row">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">125K+</h2>
//             <p className="text-gray-600">Happy Client</p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">825M+</h2>
//             <p className="text-gray-600">Technology</p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">0,25%</h2>
//             <p className="text-gray-600">Fraud Probability</p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">125M+</h2>
//             <p className="text-gray-600">Total Customers</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('./bg1.jpeg')`,
        backgroundSize: 'cover', // Make sure the background image covers the entire section
        backgroundPosition: 'center', // Ensure the background image is centered
        width: '100%', // Ensure full width
        height: '100vh', // Ensure full height of the viewport
      }}
    >
      {/* Hero Content */}
      <div className="flex flex-col h-full justify-center items-start px-6 lg:px-20 text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            LET'S DIGITALIZE YOUR{" "}
            <span className="text-blue-400">BUSINESS</span>
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            At SmartTech, we specialize in building customized digital solutions
            that help your business thrive.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
              Let's Get Started
            </button>
            <button className="bg-white hover:bg-gray-200 text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="absolute bottom-0 left-0 w-full bg-white shadow-lg py-6">
        <div className="container mx-auto flex flex-wrap justify-evenly items-center text-center space-y-4 lg:space-y-0 lg:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">125K+</h2>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">825M+</h2>
            <p className="text-gray-600">Technology</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">0.25%</h2>
            <p className="text-gray-600">Fraud Probability</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">125M+</h2>
            <p className="text-gray-600">Total Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const AboutUsSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('./l.jpg')` }} // Ensure new.avif is in the public folder
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center text-white w-full">
          {/* Left Section: Image */}
          <div className="flex justify-center">
            <img
              src="./d.jpg" // Ensure section2.jpg is in the public folder
              alt="Team working"
              className="rounded-lg shadow-lg w-full lg:w-[90%]"
            />
          </div>

          {/* Right Section: Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Where Bold Ideas <br /> Find Their Code
            </h2>
            <p className="text-lg lg:text-xl mb-6 leading-relaxed">
              Your ideas are the spark, our code turns them into pure gold.
              Together, we craft success stories. Your ideas are the spark, our
              code turns them into pure gold. Together, we craft success stories.
            </p>
            <div className="grid grid-cols-2 gap-4 text-base">
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
        </div>
      </div>

      {/* Statistics Section */}
      <div className="absolute bottom-0 left-0 w-full bg-[#081229] py-6">
        <div className="container mx-auto flex flex-wrap justify-evenly items-center text-center text-white">
          <div className="w-1/2 lg:w-auto mb-4 lg:mb-0">
            <h3 className="text-3xl font-bold">125K+</h3>
            <p className="text-gray-300">Project per week</p>
          </div>
          <div className="w-1/2 lg:w-auto mb-4 lg:mb-0">
            <h3 className="text-3xl font-bold">825M+</h3>
            <p className="text-gray-300">Lines of Code</p>
          </div>
          <div className="w-1/2 lg:w-auto">
            <h3 className="text-3xl font-bold">0.25%</h3>
            <p className="text-gray-300">Fraud Probability</p>
          </div>
          <div className="w-1/2 lg:w-auto">
            <h3 className="text-3xl font-bold">125M+</h3>
            <p className="text-gray-300">Satisfied Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  { name: "Web Development", image: "bg.jpg" },
  { name: "Blockchain Solution", image: "/l.jpg" },
  { name: "Python Development", image: "/w.png" },
  { name: "AI Development", image: "/bg2.png" },
  { name: "Mobile App Development", image: "/l.jpg" },
  { name: "E-Commerce Solution", image: "/bg2.png" },
  { name: "Data Analytics", image: "/w.png" },
  { name: "Cybersecurity", image: "/bg2.png" },
];

const ServiceSection = () => {
  const scrollContainerRef = React.useRef(null);
  const intervalRef = React.useRef(null);

  // Function to handle scrolling
  const scrollBy = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll step here
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll functionality
  React.useEffect(() => {
    const autoScroll = () => {
      scrollBy("right");
    };

    intervalRef.current = setInterval(autoScroll, 1300); // Auto-scroll every second

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Where Cutting-Edge Technology Meets Bold Creativity to Build Your Digital Future
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We push the boundaries of what's possible with expert development and creative thinking.
          </p>
        </div>

        {/* Services Section */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollBy("left")}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
          >
            &lt;
          </button>

          {/* Scrollable Services */}
          <div
            className="flex overflow-x-auto gap-8 scroll-smooth"
            ref={scrollContainerRef}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative w-80 h-60 flex-shrink-0 overflow-hidden rounded-lg shadow-md group"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-2xl font-semibold">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollBy("right")}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
          >
            &gt;
          </button>
        </div>

        {/* View More Link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="text-blue-600 hover:underline font-semibold text-sm"
          >
            See more of our services
          </a>
        </div>
      </div>
    </section>
  );
};


// Section2 Component
const Section2 = () => {
  return (
    <div className="container mx-auto py-20">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 md:space-x-20">
        {/* Left Section: About Company */}
        <div className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-lg">
          <div className="about-label text-xs font-bold text-gray-600 uppercase bg-gray-100 py-1 px-4 rounded-full inline-block mb-4">
            About Company
          </div>
          <h1 className="about-title text-4xl font-extrabold text-black mb-6">
            Experience intelligence like never before
          </h1>
          <p className="about-description text-lg text-gray-600 mb-6">
            You can access SaaS applications through a web browser or mobile
            app, as long as you have an internet connection.
          </p>
          <ul className="checklist space-y-4">
            <li className="flex items-center text-gray-700 text-lg">
              <i className="fas fa-check-circle text-blue-600 mr-3"></i>
              Mistakes To Avoid
            </li>
            <li className="flex items-center text-gray-700 text-lg">
              <i className="fas fa-check-circle text-blue-600 mr-3"></i>
              Your Startup Industry Standards
            </li>
          </ul>
          <a
            href="#"
            className="btn-discover inline-block bg-blue-600 text-white py-3 px-6 rounded-full text-sm font-semibold mt-6 hover:bg-blue-700"
          >
            Discover More →
          </a>
        </div>

        {/* Right Section: Technologies Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:shadow-lg transition-shadow">
            <i className="fab fa-android text-green-500 text-3xl mb-2"></i>
            <span className="text-lg font-medium text-gray-700">
              Android Service
            </span>
          </div>
          <div className="tech-item flex flex-col items-center justify-center bg-blue-600 text-white rounded-lg py-6 px-4 shadow-md hover:shadow-lg transition-shadow">
            <i className="fab fa-ionic text-3xl mb-2"></i>
            <span className="text-lg font-medium">Ionic</span>
          </div>
          <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:shadow-lg transition-shadow">
            <i className="fab fa-js-square text-yellow-500 text-3xl mb-2"></i>
            <span className="text-lg font-medium text-gray-700">
              JavaScript
            </span>
          </div>
          <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:shadow-lg transition-shadow">
            <i className="fab fa-react text-blue-400 text-3xl mb-2"></i>
            <span className="text-lg font-medium text-gray-700">React</span>
          </div>
          <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:shadow-lg transition-shadow">
            <i className="fas fa-database text-purple-500 text-3xl mb-2"></i>
            <span className="text-lg font-medium text-gray-700">Hive</span>
          </div>
          <div className="tech-item flex flex-col items-center justify-center bg-gray-100 rounded-lg py-6 px-4 shadow-md hover:shadow-lg transition-shadow">
            <i className="fas fa-tools text-gray-500 text-3xl mb-2"></i>
            <span className="text-lg font-medium text-gray-700">Chopper</span>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Portfolio</h2>

        {/* Two blocks structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Block */}
          <div>
            <div className="mb-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="/bg2.png" // Replace with the correct path to your bg.png
                  alt="Portfolio 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Project Title 1</h3>
                  <p className="text-gray-600 mt-2">Short description about the project.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="/bg2.png" // Replace with the correct path to your bg.png
                  alt="Portfolio 2"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Project Title 2</h3>
                  <p className="text-gray-600 mt-2">Short description about the project.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div>
            <div className="mb-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="/bg2.png" // Replace with the correct path to your bg.png
                  alt="Portfolio 3"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Project Title 3</h3>
                  <p className="text-gray-600 mt-2">Short description about the project.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="/bg2.png" // Replace with the correct path to your bg.png
                  alt="Portfolio 4"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Project Title 4</h3>
                  <p className="text-gray-600 mt-2">Short description about the project.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Clients Say</h2>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 shadow-xl rounded-lg">
            <div className="flex justify-center mb-4">
              <img
                src="/w.png" // Replace with actual path to image
                alt="Profile 1"
                className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
              />
            </div>
            <p className="text-lg font-medium text-gray-800 mb-4">
              "This product has completely transformed the way we work. We couldn't be happier with the results!"
            </p>
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO, CompanyName</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 shadow-xl rounded-lg">
            <div className="flex justify-center mb-4">
              <img
                src="/w.png" // Replace with actual path to image
                alt="Profile 2"
                className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
              />
            </div>
            <p className="text-lg font-medium text-gray-800 mb-4">
              "Excellent customer service and great value. We've seen a dramatic improvement in our business."
            </p>
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Marketing Director, AnotherCompany</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 shadow-xl rounded-lg">
            <div className="flex justify-center mb-4">
              <img
                src="/w.png" // Replace with actual path to image
                alt="Profile 3"
                className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
              />
            </div>
            <p className="text-lg font-medium text-gray-800 mb-4">
              "The best investment we've made in a long time. The results speak for themselves."
            </p>
            <h3 className="text-xl font-semibold text-gray-800">Samuel Lee</h3>
            <p className="text-gray-600">Product Manager, TechCorp</p>
          </div>
        </div>
      </div>
    </section>
  );
};




const Careers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Careers</h2>

        {/* Grid for Job Listings (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Job 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Software Engineer</h3>
            <p className="text-gray-600 mb-4">
              We are looking for a Software Engineer to join our growing tech team.
              You will work on exciting projects and contribute to developing cutting-edge solutions.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full"
            >
              Apply Now
            </a>
          </div>

          {/* Job 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Manager</h3>
            <p className="text-gray-600 mb-4">
              As a Product Manager, you will oversee the development of our product roadmap,
              collaborate with multiple teams, and help launch innovative products.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full"
            >
              Apply Now
            </a>
          </div>

          {/* Job 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">UX/UI Designer</h3>
            <p className="text-gray-600 mb-4">
              We are looking for a creative UX/UI Designer to join our design team.
              You will create engaging user experiences and beautiful designs across our product platforms.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full"
            >
              Apply Now
            </a>
          </div>

          {/* Job 4 */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marketing Specialist</h3>
            <p className="text-gray-600 mb-4">
              Join our marketing team and help us grow our brand presence across multiple channels,
              with a focus on digital marketing strategies and campaigns.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full"
            >
              Apply Now
            </a>
          </div>

          {/* Job 5 */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Data Scientist</h3>
            <p className="text-gray-600 mb-4">
              We are looking for a Data Scientist to analyze large datasets and create machine learning models.
              Join our team to help us improve our product with data-driven insights.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full"
            >
              Apply Now
            </a>
          </div>

          {/* Job 6 */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">DevOps Engineer</h3>
            <p className="text-gray-600 mb-4">
              We are looking for a DevOps Engineer to work on automating processes and ensuring smooth deployment
              of applications in a scalable infrastructure.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



const Home = () => {
  return (
    <div className="container mx-auto mt-12 px-6">
      {/* Hero Section */}
      <div className="mb-12">
        <HeroSection />
      </div>


      <div className="mb-12">
        <AboutUsSection />
      </div>

      {/* Section 2 */}
      <div className="mb-12">
        <Section2 />
      </div>
      <div className="mb-12">
        <ServiceSection />
      </div>
      
      <div className="mb-12">
        <Portfolio />
      </div>
      <div className="mb-12">
        <Careers />
      </div>
      <div className="mb-12">
        <Testimonials />
      </div>
      
    </div>
  );
};

export default Home;
