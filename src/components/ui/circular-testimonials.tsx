"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export const CircularTestimonials: React.FC<CircularTestimonialsProps> = ({
  testimonials,
  autoRotate = true,
  rotationInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, testimonials.length]);

  const getPositionStyles = (index: number) => {
    const angle = (index * 360) / testimonials.length;
    const radius = 120;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  const handleTestimonialClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
      {/* Central testimonial display */}
      <div className="text-center mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
              "{testimonials[activeIndex]?.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[activeIndex]?.src}
                alt={testimonials[activeIndex]?.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
              />
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[activeIndex]?.name}
                </h4>
                <p className="text-blue-600 font-medium">
                  {testimonials[activeIndex]?.designation}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Circular arrangement of testimonial avatars */}
      <div className="relative flex items-center justify-center">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={getPositionStyles(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTestimonialClick(index)}
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 transition-all duration-300 ${
                  index === activeIndex
                    ? "border-blue-500 shadow-lg scale-110"
                    : "border-gray-300 hover:border-blue-300"
                }`}
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {index === activeIndex && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTestimonialClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-blue-500 scale-125"
                : "bg-gray-300 hover:bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CircularTestimonials;