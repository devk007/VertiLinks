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
import { Link } from "react-router-dom";

function TechCard({ image, title, description, topTags = [], bottomTags = [], href }) {
  const Wrapper = href ? Link : "div";
  return (
    <Wrapper
      className="group block h-full overflow-hidden rounded-2xl bg-[#f3f3f1] shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl"
      to={href || undefined}
    >
      {image ? (
        <img src={image} alt={title} className="h-48 w-full object-cover transition duration-200 group-hover:scale-105" />
      ) : null}

      <div className="p-6">
        <div className="hidden flex-wrap gap-2 pb-4 md:flex">
          {topTags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-sky-700">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="hidden flex-wrap gap-2 pt-4 md:flex">
          {bottomTags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>
      </div>
    </Wrapper>
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
