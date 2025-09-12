import React from "react";

// Tag component for small rounded labels
function Tag({ label }) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
      {label}
    </span>
  );
}

// Technology Card
function TechCard({ image, title, description, topTags, bottomTags }) {
  return (
    <div className="bg-[#f3f3f1] rounded-2xl shadow-md overflow-hidden border">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-6">
        {/* Top tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {topTags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

        {/* Bottom tags */}
        <div className="flex flex-wrap gap-2">
          {bottomTags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Section wrapper
export default function TechnologySection({ cards }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Technology in Which We Are Working
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our tailor-made solutions are designed to enhance your system and integrate
            cutting-edge advanced innovative technology.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <TechCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
