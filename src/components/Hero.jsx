import React from "react";
import heroImage from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-[90vh] sm:h-screen">
      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg dark:text-gray-100">
          Discover Your Next Favorite Product
        </h1>
        <button className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-base sm:text-lg font-semibold transition-shadow shadow-md hover:shadow-lg">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;
