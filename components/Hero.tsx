import React from 'react';
import { FlipWordsDemo } from './FlipWordsDemo'; // Ensure you import the component

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image or Color */}
      <img
        src="/wedding3.jpeg" // Replace with your hero image
        alt="Hero"
        className="object-cover w-full h-full"
      />
   

      {/* Hero Content */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-start px-6">
        <div className="text-xl sm:text-md text-white">
          <FlipWordsDemo /> {/* Displaying the FlipWordsDemo component for added effect */}
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
