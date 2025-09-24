import React from 'react';
import { Link } from 'react-router-dom';

// Yeh component ek single card ka UI banata hai
const SingleCard = ({ title, description, topTags = [], bottomTags = [], imageUrl, href }) => {
  const isExternal = href && /^https?:\/\//i.test(href);
  const Wrapper = href ? (isExternal ? 'a' : Link) : 'div';
  const wrapperProps = {};

  if (href) {
    if (isExternal) {
      wrapperProps.href = href;
      wrapperProps.target = '_blank';
      wrapperProps.rel = 'noopener noreferrer';
    } else {
      wrapperProps.to = href;
    }
  }

  return (
    // Card container
    <Wrapper
      {...wrapperProps}
      className={`group bg-[#f3f3f1] border border-gray-200 rounded-2xl overflow-hidden shadow-xl max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center transition ${
        href ? 'hover:shadow-2xl' : ''
      }`}
    >
    
    {/* Left Content Section */}
    <div className="flex-1 p-6 md:p-8 flex flex-col gap-4 md:gap-5">
      
      {/* Top Tags: Darker background and text color change */}
      <div className="hidden flex-wrap gap-2 md:flex">
        {topTags.map((tag, index) => (
          <span key={`top-${index}`} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium uppercase">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Text colors ko dark background ke liye badla gaya hai */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight transition group-hover:text-blue-600">
        {title}
      </h2>
      
      <p className="text-sm md:text-base leading-relaxed text-gray-600">{description}</p>
      
      {/* Bottom Tags: White background and dark text */}
      <div className="hidden flex-wrap gap-2 md:flex">
        {bottomTags.map((tag, index) => (
          <span key={`bottom-${index}`} className="bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-xs font-medium uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Right Image Section - Tilted and Layered Effect */}
    <div className="flex-1 w-full lg:w-auto p-8 flex items-center justify-center">
        {/* Image ka size max-w-xs se max-w-md kar diya gaya hai */}
        <div className="relative w-full max-w-md">
            {/* Bottom Layer (shadow/background layer) */}
            <div className="absolute inset-0 bg-gray-300/80 rounded-2xl transform -rotate-6"></div>
            
            {/* Top Layer with Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 transition-transform duration-300 ease-in-out hover:-rotate-1 hover:scale-105">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
    </Wrapper>
  );
};

// Yeh component poori list ka layout manage karta hai
const InfoCardList = ({ items = [] }) => {
  if (!items || items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <p className="text-center text-gray-600">No items to display.</p>
      </div>
    );
  }

  // Saari layout classes ab yahin hain
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-10">
        {items.map(item => <SingleCard key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default InfoCardList;
