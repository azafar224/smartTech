import React from "react";

const TechSlider = ({ technologies, icons, animationDirection }) => {
  const animationClass =
    animationDirection === "reverse"
      ? "animate-infiniteScrollReverse"
      : "animate-infiniteScroll";

  return (
    <div className="overflow-hidden relative w-full">
      <div className={`flex gap-4 ${animationClass}`}>
        {[...technologies, ...technologies, ...technologies].map(
          (tech, index) => (
            <div
              key={`tech-${index}`}
              className="flex-shrink-0 bg-[#1A2333] px-8 py-5 rounded-lg flex items-center gap-3 hover:bg-[#252D3F] transition-colors"
            >
              <img src={icons[tech]} alt={tech} className="w-6 h-6" />
              <span className="whitespace-nowrap">{tech}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TechSlider;
