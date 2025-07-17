import React, { useState, useEffect } from 'react';

const AnimatedSlogan: React.FC = () => {
  const slogans = [
    "Shaping Healthcare Careers",
    "Job-Ready Training",
    "Gateway to a Healthcare Profession"
  ];
  
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-6 overflow-hidden">
      {slogans.map((slogan, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentSlogan 
              ? 'translate-x-0 opacity-100' 
              : index < currentSlogan 
                ? '-translate-x-full opacity-0' 
                : 'translate-x-full opacity-0'
          }`}
        >
          <span className="font-poppins text-sm text-white hover:scale-105 hover:font-semibold transform inline-block transition-all duration-300">
            {slogan}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AnimatedSlogan;