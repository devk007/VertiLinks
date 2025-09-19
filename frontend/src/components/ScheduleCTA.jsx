import { CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ScheduleCTA() {
  return (
    <section className="relative w-full">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071528] via-[#0b2d52] to-[#093969] pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <div className="flex items-center gap-4 text-white">
          <div className="shrink-0 w-14 h-14 rounded-xl bg-white/10 grid place-items-center">
            <CalendarClock className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Talk to VertiLinks Professional for help.
            </h3>
            <p className="mt-1 text-gray-200 text-sm md:text-base max-w-xl">
              Feel free to call us with your questions; we’re here to help you.
              For bulk requirements, just ask for a quote.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-gray-100 transition"
          >
            Schedule Appointment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
