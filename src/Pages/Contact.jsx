import React, { useState } from 'react';
import { FaRegCalendarAlt, FaArrowLeft, FaArrowRight, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,  FaFacebookF, FaInstagram, FaTwitter,FaLinkedinIn, FaYoutube, FaGoogle, FaStar,  } from 'react-icons/fa';

// Sample card data
const cardsData = [
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'January 12, 2024' },
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'January 15, 2024' },
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'January 20, 2024' },
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'February 12, 2024' },
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'February 15, 2024' },
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'February 20, 2024' },
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'March 12, 2024' },
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'March 15, 2024' },
  { logoUrl: 'w.png', title: 'Verniçe Realé', date: 'March 20, 2024' },
];

// Card Component
function Card({ logoUrl, title, date }) {
  return (
    <div className="bg-[#EAEAEA] p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
      <img src={logoUrl} alt="logo" className="h-20 w-20 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-black text-center mb-2">{title}</h3>
      <div className="flex items-center justify-center space-x-2 text-gray-600">
        <FaRegCalendarAlt />
        <span>{date}</span>
      </div>
    </div>
  );
}
// Carousel Component
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const totalCards = cardsData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  return (
    <div className="bg-black p-8">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-semibold text-white text-center mb-12">Our Latest Updates</h2>

        {/* Carousel Container */}
        <div className="relative flex justify-center items-center">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 p-4 bg-gray-600 text-white rounded-full transform -translate-y-1/2"
          >
            <FaArrowLeft />
          </button>
          {/* Cards Section */}
          <div className="flex overflow-hidden">
            {/* Cards displayed as a carousel */}
            {cardsData.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
              <div key={index} className="flex-shrink-0 sm:w-80 w-64 mx-3">
                <Card 
                  logoUrl={card.logoUrl}
                  title={card.title}
                  date={card.date}
                />
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 p-4 bg-gray-600 text-white rounded-full transform -translate-y-1/2"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
// ContactUs Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div>
    {/* Contact Us Section */}
    <div
  className="bg-blue-900 text-white py-16 text-center bg-cover bg-center mt-12"
  style={{ backgroundImage: "url('contactbg.jpg')" }}
>
  <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
    
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
      Contact Us
    </h2>
    <p className="text-lg sm:text-xl lg:text-2xl mb-8">
      Contact the Best Accountants Today for Expert Accounting & Taxation
      Solutions!
    </p>
   
  </div>
</div>

      {/* Contact Us Form and Details */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
  <div className="container mx-auto px-0  sm:px-0 md:px-8 lg:px-15 grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
    {/* Left Side: Contact Form */}
    <div className="bg-blue-900 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg h-auto md:h-[660px] flex flex-col justify-between">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
        Contact Us
      </h2>
      <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
        Please complete the following form to ensure we can offer the best professional advice. One of our expert teams will get in touch with you.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="mb-4 sm:mb-6">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            placeholder="Your Message"
            rows="3"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 sm:py-3 bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center space-x-2 sm:space-x-3 rounded-md"
        >
          <FaPaperPlane className="text-white" />
          <span>Send Message</span>
        </button>
      </form>
    </div>

    {/* Right Side: Contact Details */}
    <div className="space-y-4 sm:space-y-6 py-20 sm:py-16 md:py-40">
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold mb-4 text-black ">
        Our Contact Details
      </h2>
      <p className="text-2xl sm:text-xl md:text-2xl mb-6 text-black">
        You can also reach us through the following methods:
      </p>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-blue-900 text-xl sm:text-2xl md:text-3xl transition-transform transform hover:scale-110" />
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-black">Phone</h3>
            <a
              href="tel:+44 7716 419677"
              className="text-black hover:text-blue-600 text-base sm:text-lg transition duration-300"
            >
              +44 7716 419677
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-blue-900 text-xl sm:text-2xl md:text-3xl transition-transform transform hover:scale-110" />
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-black">Email</h3>
            <a
              href="mailto:support@pgesmarttech.com"
              className="text-black hover:text-blue-600 text-base sm:text-lg transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@pgesmarttech.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaWhatsapp className="text-blue-900 text-xl sm:text-2xl md:text-3xl transition-transform transform hover:scale-110" />
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-black">WhatsApp</h3>
            <a
              href="https://wa.me/447716419677"
              className="text-black hover:text-blue-600 text-base sm:text-lg transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              +44 7716 419677
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-4 mt-6  hover:text-blue-600">
          <a
            href="https://www.facebook.com/pgesmarttech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-blue-600 text-3xl hover:scale-110 transition-transform  hover:text-blue-600" />
          </a>
          <a
            href="https://www.instagram.com/pgesmarttech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-blue-600 text-3xl hover:scale-110 transition-transform  hover:text-blue-600" />
          </a>
          <a
            href="https://www.twitter.com/pgesmarttech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-blue-600 text-3xl hover:scale-110 transition-transform  hover:text-blue-600" />
          </a>
          <a
            href="https://www.linkedin.com/pgesmarttech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-blue-600 text-3xl hover:scale-110 transition-transform  hover:text-blue-600" />
          </a>
          <a
            href="https://www.youtube.com/pgesmarttech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-blue-600 text-3xl hover:scale-110 transition-transform  hover:text-blue-600" />
          </a>
        </div>

        {/* Review Icons */}
        <div className="flex justify-center items-center space-x-8 mt-6  hover:text-blue-600">
          {/* Google Reviews */}
          <a
            href="https://www.google.com/maps/place/Taxaccolega+Chartered+Accountants+%26+Tax+Advisors%2FConsultants+Croydon,+London/@51.3823703,-0.1071186,14.66z/data=!4m6!3m5!1s0x48760640814ce7b7:0x4899b8fae2b5b21a!8m2!3d51.3825922!4d-0.1073709!16s%2Fg%2F1tg6pljc?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3Ds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 "
          >
            <FaGoogle className="hover:text-blue-600 text-3xl  text-blue-600" />
            <span className="text-lg font-medium text-black">Reviews 5.0</span>
            <div className="flex space-x-1 hover:text-yellow-600  text-yellow-600 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </a>

          {/* Trustpilot */}
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaStar className="text-blue-600 text-3xl" />
            <span className="text-lg font-medium text-black">Trustpilot</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Addresses and Maps Below the Form */}
  <div className="container mx-auto px-6 sm:px-6 md:px-8 lg:scroll-px-1.5 grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-8 sm:mt-12">
    {/* Left Address and Map */}
    <div>
      <div className="flex items-center space-x-4">
        <FaMapMarkerAlt className="text-blue-900 text-xl sm:text-2xl" />
        <div>
          <h3 className="text-lg font-medium text-black">Dubai Office</h3>
          <p className="text-black text-sm sm:text-base">
            Almas Tower, 66, Lake Avenue street, Jumeirah Lakes Towers, Al Thanyah 5, Hadaeq Mohammed Bin Rashid, Dubai, Dubai Municipality 12484 73843.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps?q=Almas+Tower,+66,+Lake+Avenue+street,+Jumeirah+Lakes+Towers,+Al+Thanyah+5,+Hadaeq+Mohammed+Bin+Rashid,+Dubai,+Dubai+Municipality+12484+73843&output=embed"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>

    {/* Right Address and Map */}
    <div>
      <div className="flex items-center space-x-4">
        <FaMapMarkerAlt className="text-blue-900 text-xl sm:text-2xl" />
        <div>
          <h3 className="text-lg font-medium text-black">Mexico Office</h3>
          <p className="text-black text-sm sm:text-base">
          500 Marquette ave nw suite 1200 Albuquerque, New Mexico          </p>
        </div>
      </div>
      <div className="mt-10">
        <iframe
src="https://www.google.com/maps?q=500+Marquette+Ave+NW+Suite+1200,+Albuquerque,+New+Mexico&output=embed"         
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  </div>
</div>


{/* Card Carousel Section */}
<Carousel />
      {/* Our Recent Reviews Section*/}
      <div className="bg-blue-800 text-white py-16 text-center">
  <h2 className="text-3xl font-semibold text-white mb-7">Our Recent Reviews</h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xl font-bold">
    <div className="hover:scale-110 transform transition duration-300">
      <img src="th.jpeg" alt="logo" className="h-12 w-12 mx-auto mb-2" />
      <h3 className="text-white">587+</h3>
      <p className="text-white">Project Completed</p>
    </div>
    <div className="hover:scale-110 transform transition duration-300">
      <img src="download.png" alt="logo" className="h-12 w-12 mx-auto mb-2" />
      <h3 className="text-white">264+</h3>
      <p className="text-white">Client Satisfaction</p>
    </div>
    <div className="hover:scale-110 transform transition duration-300">
      <img src="BC.png" alt="logo" className="h-12 w-12 mx-auto mb-2" />
      <h3 className="text-white">10+</h3>
      <p className="text-white">Business Consultant</p>
    </div>
    <div className="hover:scale-110 transform transition duration-300">
      <img src="ARWAD.jpeg" alt="logo" className="h-12 w-12 mx-auto mb-2" />
      <h3 className="text-white">5+</h3>
      <p className="text-white">Award</p>
    </div>
  </div>
</div>

<div className="bg-white py-16">
  <h2 className="text-4xl font-semibold text-center text-black mb-8">Our Clients and Collaborative Partners</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
    {/* First Logo */}
    <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg hover:scale-110 transform transition duration-300">
      <img src="1.png" alt="Partner 1" className="w-full h-full object-contain" />
    </div>

    {/* Other Logos */}
    <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg hover:scale-110 transform transition duration-300">
      <img src="2.png" alt="Partner 2" className="w-full h-full object-contain" />
    </div>
    <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg hover:scale-110 transform transition duration-300">
      <img src="13.png" alt="Partner 3" className="w-full h-full object-contain" />
    </div>
    <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg hover:scale-110 transform transition duration-300">
      <img src="14.png" alt="Partner 4" className="w-full h-full object-contain" />
    </div>
    <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg hover:scale-110 transform transition duration-300">
      <img src="15.png" alt="Partner 5" className="w-full h-full object-contain" />
    </div>

    {/* Last Logo */}
    <div className="w-32 h-32 bg-white p-4 flex items-center justify-center rounded-md shadow-lg hover:scale-110 transform transition duration-300">
      <img src="16.png" alt="Partner 6" className="w-full h-full object-contain" />
    </div>
  </div>
</div>
    </div>
  );
}
export default Contact;
