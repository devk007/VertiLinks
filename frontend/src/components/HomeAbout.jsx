import React from 'react'
import img from "../assets/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg"

function HomeAbout() {
  return (
    <div>
        <section className="relative w-full flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071528] via-[#0b2d52] to-[#093969] pointer-events-none" />

      {/* Left: text content */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="max-w-lg text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Our
            <br />
            <span className="text-blue-400">Innovation That Counts</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed">
            Founded in 2006, Vertilinks is an undisputed leader in Biometrics &amp; RFID
            industry in India. Fingerprint Scanners and IRIS Sensors are the primary
            products of Vertilink.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed">
            Our focus is to provide innovative products and solutions with a set of
            innovation. We emphasizes to promote intellectual qualities in an
            individual and amongst the team to provide the best solutions before
            various clients in a cost effective manner.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-blue-300 font-medium hover:underline"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Right: fingerprint image */}
      <div className="relative z-0 w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={img}
          alt="Fingerprint scanning"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
    </div>
  )
}

export default HomeAbout