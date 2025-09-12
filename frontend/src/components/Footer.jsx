import React, { useEffect, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";

/**
 * Footer – Mantra-style (same-to-same)
 * Tailwind required.
 * Put your badge images in /public/assets/... or CDN and update the src below.
 */
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
      {/* content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-3xl mb-6">About Our Company</h3>
            <p className="leading-relaxed opacity-95">
              Mantra is a leading STQC certified manufacturer of the key
              Biometric product for Aadhaar project in India. We provide
              Fingerprint scanner &amp; Iris scanner for Aadhaar enrollment
              center.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-11 h-11 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-3xl mb-6">Our Contact</h3>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 mt-1 shrink-0" />
              <p className="opacity-95">
                B203, Shapath Hexa, Opp. Gujarat High Court, S.G. Highway, Sola,
                Ahmedabad - 380060, Gujarat.
              </p>
            </div>

            <div className="flex items-start gap-3 mb-1">
              <Mail className="w-5 h-5 mt-1 shrink-0" />
              <p>
                <span className="font-semibold">Sales:</span>{" "}
                <a
                  href="mailto:sales@mantratec.com"
                  className="underline-offset-2 hover:underline"
                >
                  sales@mantratec.com
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3 mt-2">
              <Mail className="w-5 h-5 mt-1 shrink-0" />
              <p>
                <span className="font-semibold">Support:</span>{" "}
                <a
                  href="mailto:servico@mantratec.com"
                  className="underline-offset-2 hover:underline"
                >
                  servico@mantratec.com
                </a>
              </p>
            </div>

            {/* (Optional) phone line – keep for parity if you ever need */}
            <div className="hidden items-start gap-3 mt-2">
              <Phone className="w-5 h-5 mt-1 shrink-0" />
              <p>+91-00000 00000</p>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-3xl mb-6">Our Policies</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
            </ul>

            {/* badges */}
            <div className="mt-6 flex flex-col gap-3">
              <img
                src="/assets/dmca-protected.png"
                alt="DMCA Protected"
                className="h-8 w-auto"
              />
              <img
                src="/assets/copyscape-protected.png"
                alt="Copyscape Protected"
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Useful Link */}
          <div>
            <h3 className="text-3xl mb-6">Useful Link</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Inquiry Form
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>

            {/* CMMI badge */}
            <div className="mt-6">
              <img
                src="/assets/cmmi-l3-badge.png"
                alt="CMMI Appraised L3"
                className="h-16 w-auto rounded-md"
              />
            </div>
          </div>
        </div>

        {/* dashed divider */}
        <div className="mt-10 border-t border-dashed border-white/50" />

        {/* copyright */}
        <div className="pt-6 text-center text-lg">
          <span className="opacity-95">
            Copyrights 2025{" "}
            <span className="font-semibold">
              Mantra Softech (India) Pvt. Ltd.
            </span>{" "}
            All Rights Reserved.
          </span>
        </div>
      </div>

      {/* Scroll to top (bottom-right) */}
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
