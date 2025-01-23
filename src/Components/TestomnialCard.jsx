
const TestimonialCard = ({ imgSrc, quote, name, role }) => {
  return (
    <div className="bg-white p-6 sm:p-8 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src={imgSrc}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-blue-500"
        />
      </div>
      {/* Quote Section */}
      <p className="text-base sm:text-lg font-medium text-gray-800 mb-4 text-center">
        {quote}
      </p>
      {/* Name Section */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
        {name}
      </h3>
      {/* Role Section */}
      <p className="text-gray-600 text-center">{role}</p>
    </div>
  );
};

export default TestimonialCard;
