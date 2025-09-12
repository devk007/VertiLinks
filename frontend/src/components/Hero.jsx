import React from "react";

/**
 * Full-page Hero section
 */
export default function Hero({ bg, title, breadcrumb, description, cta }) {
  return (
    <section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl ml-15 px-6 text-white">
        {breadcrumb && (
          <div className="text-sm mb-4 opacity-90">{breadcrumb}</div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        )}
        {cta && (
          <a
            href={cta.to}
            className="inline-block mt-8 rounded-lg bg-white text-blue-600 font-semibold px-6 py-3 hover:bg-gray-100"
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
