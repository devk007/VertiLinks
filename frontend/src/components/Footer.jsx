import images from "../data/images";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";

const LOGO_SRC = images.branding.logo;

const productLinks = [
  { label: "Server & Storage Solutions", to: "/products/server-storage" },
  { label: "ID Card Printers", to: "/products/id-card-printers" },
  { label: "Attendance & Access Control", to: "/products/attendance-access" },
  { label: "Networking & Security", to: "/products/networking-security" },
];

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

const supportLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "FAQs", to: "/faqs" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Sitemap", to: "/sitemap" },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com/vertilinks", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/vertilinks", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/vertilinks", label: "LinkedIn" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#2E76A9] text-white">
      <div className="relative mx-auto flex w-full max-w-none flex-col gap-10 px-17 py-12 lg:flex-row lg:items-start">
        <div className="max-w-sm space-y-4 lg:max-w-xs">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="VertiLinks" className="h-12 w-auto" />
          </div>
          <p className="text-sm leading-6 opacity-95">
            <span className="font-semibold text-white">Leading IT solution provider in UAE.</span> We strive to provide the best IT, Security and Identification solutions. For Retail Product Requirement, please checkout
            {" "}
            <a
              href="https://posinuae.ae"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white underline underline-offset-2"
            >
              POSinUAE
            </a>
            . Visit
            {" "}
            <a
              href="https://infomeksa.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white underline underline-offset-2"
            >
              InfomeKSA
            </a>
            {" "}
            to avail our service in Saudi Arabia.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/20 text-white transition hover:-translate-y-0.5 hover:bg-white/30"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid flex-1 gap-x-12 gap-y-8 sm:grid-cols-4 lg:flex lg:flex-1 lg:justify-between">
          <div className="space-y-3 lg:w-[22%]">
            <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-white">Products</h3>
            <ul className="space-y-2  text-white/90">
              {productLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 lg:w-[22%]">
            <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-white">Quick Links</h3>
            <ul className="space-y-2 text-white/90">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 lg:w-[22%]">
            <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-white">Help Support</h3>
            <ul className="space-y-2  text-white/90">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-white" />
                <a href="mailto:services@vertilinks.com" className="transition hover:text-white">
                  services@vertilinks.com
                </a>
              </li>
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 lg:w-[22%]">
            <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-white">Our Location</h3>
            <div className="flex items-start gap-3 text-white/90">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-white" />
              <p>Sharjah Media City, UAE</p>
            </div>
            <div className="flex items-start gap-3 text-[0.95rem] text-white/90">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-white" />
              <p>0505810499</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/20">
        <div className="mx-auto flex w-full max-w-none flex-col gap-3 px-10 py-7 text-sm text-white/90 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VertiLinks. All rights reserved.</p>
          <p className="text-white/80">Trusted IT, security, and identification solutions across the GCC.</p>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-20 grid h-12 w-12 place-items-center rounded-full bg-white text-[#2E76A9] shadow-lg transition hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </footer>
  );
}
