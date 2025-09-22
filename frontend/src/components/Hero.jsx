import React from "react";

/**
 * Full-page Hero section
 */
export default function Hero({ bg, title, breadcrumb, description, cta, type = "inner" }) {
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
      {type === "home" ? (
        // home: full subtle overlay
        <div className="absolute inset-0 bg-black/40" />
      ) : (
        // inner: left 60% dark (lighter than before), fade out to right
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.9)_60%,rgba(0,0,0,0)_100%)]" />
      )}



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
