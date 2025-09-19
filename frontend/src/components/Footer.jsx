import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/x6ioTZ01.svg"
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#2E76A9] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* 5 Sections */}
        <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Section 1: Logo + Tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="VertiLinks"
                className="h-17 w-auto"
              />
            </div>
            <p className="leading-relaxed opacity-95">
              <span className="font-semibold">Leading IT solution provider in UAE.</span>{" "}
              We strive to provide the best IT, Security and Identification solutions.
              For Retail Product Requirement, please checkout{" "}
              <a
                href="https://posinuae.ae"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                POSinUAE
              </a>
              . Visit{" "}
              <a
                href="https://infomeksa.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                InfomeKSA
              </a>{" "}
              to avail our service in Saudi Arabia.
            </p>

            {/* Social */}
            {/* <div className="mt-8 flex items-center gap-4">
              <a
                href="https://facebook.com/vertilinks"
                aria-label="Facebook"
                className="w-11 h-11 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/vertilinks"
                aria-label="Twitter"
                className="w-11 h-11 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/vertilinks"
                aria-label="LinkedIn"
                className="w-11 h-11 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Section 2: Our Products */}
          <div className="col-span-1">
            <h3 className="text-2xl mb-5 font-semibold">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/server-storage" className="hover:underline">
                  Server &amp; Storage Solutions
                </Link>
              </li>
              <li>
                <Link to="/products/id-card-printers" className="hover:underline">
                  ID Card Printers
                </Link>
              </li>
              <li>
                <Link to="/products/attendance-access" className="hover:underline">
                  Attendance &amp; Access Control
                </Link>
              </li>
              <li>
                <Link to="/products/networking-security" className="hover:underline">
                  Networking &amp; Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-2xl mb-5 font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Help Support */}
          <div className="col-span-1">
            <h3 className="text-2xl mb-5 font-semibold">Help Support</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 shrink-0" />
                <a
                  href="mailto:services@vertilinks.com"
                  className="hover:underline"
                >
                  services@vertilinks.com
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 5: Our Location */}
          <div className="col-span-1">
            <h3 className="text-2xl mb-5 font-semibold">Our Location</h3>
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 mt-1 shrink-0" />
              <p className="opacity-95">
                Office 1204, XYZ Tower, Sheikh Zayed Road,
                Dubai, United Arab Emirates
              </p>
            </div>
            {/* Optional phones */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 shrink-0" />
              <p>+971-4-000-0000</p>
            </div>

            {/* Social (secondary) */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://facebook.com/vertilinks"
                aria-label="Facebook"
                className="w-9 h-9 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/vertilinks"
                aria-label="Twitter"
                className="w-9 h-9 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/vertilinks"
                aria-label="LinkedIn"
                className="w-9 h-9 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* dashed divider */}
        <div className="mt-10 border-t border-dashed border-white/50" />

        {/* copyright */}
        <div className="pt-6 text-center text-lg">
          <span className="opacity-95">
            © 2025 <span className="font-semibold">VertiLinks</span>. All Rights Reserved.
          </span>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-30 grid h-12 w-12 place-items-center rounded-xl
          bg-white text-[#2E76A9] shadow-lg border transition
          ${showTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
