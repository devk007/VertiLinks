import React from 'react';
import WhyVertiLinks from './WhyVertiLinks';

// Arrow icon ko update kar diya gaya hai
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5 flex-shrink-0 mt-1" // Thoda sa upar se margin diya hai alignment ke liye
    aria-hidden="true"
  >
    <path fill="#2563eb" d="M8 5v14l11-7z" />
  </svg>
);

// Data waisa hi hai
const featuresData = [
  { text: "In-house hardware design and production." },
  { text: "RFID solution expertise across 20+ industries." },
  { text: "Nationwide service network and global deployments." },
  { text: "Custom software development and integration services." },
  { text: "Long-term support and scalable upgrade plans." },
];

const WhyVertiLinks2 = () => {
  return (
    // Nayi background image laga di hai
    <div
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content Container - Height (padding) kam kar di hai */}
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-left mb-10">
          Why Choose VertiLinks?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <ArrowIcon />
              <p className="text-base font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyVertiLinks2;
