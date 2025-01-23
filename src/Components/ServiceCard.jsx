// import React from "react";
// import { motion } from "framer-motion";

// const styles = {
//   cardContainer: {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//     transformStyle: "preserve-3d",
//     transition: "transform 0.6s",
//   },
//   cardFront: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     borderRadius: "15px",
//     backfaceVisibility: "hidden",
//     backgroundColor: "white", // Changed to white
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "2rem",
//     color: "black", // Changed to black
//     textAlign: "center",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for a clean look
//     border: "1px solid rgba(0, 0, 0, 0.1)",
//   },
//   cardBack: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     borderRadius: "15px",
//     backfaceVisibility: "hidden",
//     backgroundColor: "white", // Changed to white
//     transform: "rotateY(180deg)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "2rem",
//     color: "black", // Changed to black
//     textAlign: "center",
//     fontSize: "1.1rem",
//     border: "1px solid rgba(0, 0, 0, 0.1)",
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
//     WebkitFontSmoothing: "antialiased",
//     MozOsxFontSmoothing: "grayscale",
//   },
// };

// const ServiceCard = ({ title, description, onClick }) => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       className="relative w-full h-72 cursor-pointer"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={cardVariants}
//       onClick={onClick}
//       whileHover={{ scale: 1.05 }}
//     >
//       <div
//         className="w-full h-full"
//         style={styles.cardContainer}
//         onMouseEnter={(e) =>
//           (e.currentTarget.style.transform = "rotateY(180deg)")
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.transform = "rotateY(0deg)")
//         }
//       >
//         {/* Front Side */}
//         <div style={styles.cardFront}>
//           <motion.h2
//             className="text-2xl sm:text-3xl font-bold"
//             variants={cardVariants}
//           >
//             {title}
//           </motion.h2>
//         </div>

//         {/* Back Side */}
//         <div style={styles.cardBack}>
//           <motion.p className="text-sm sm:text-base" variants={cardVariants}>
//             {description}
//           </motion.p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceCard;
// ServiceCard.js
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
