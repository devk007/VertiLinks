// src/components/SolutionsOverview.jsx
import { Camera, Clock, KeyRound, MonitorPlay, Cable, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "time-attendance",
    title: "Time Attendance System",
    description:
      "Automate workforce tracking with biometric, RFID, and mobile-first check-ins.",
    icon: Clock,
    href: "/solutions/time-attendance-system",
  },
  {
    id: "access-control",
    title: "Access Control System",
    description:
      "Layered door, elevator, and visitor controls secured by modern credentials.",
    icon: KeyRound,
    href: "/solutions/access-control-system",
  },
  {
    id: "cctv",
    title: "CCTV Security & Surveillance",
    description:
      "IP cameras and analytics delivering 24/7 visibility for every premises.",
    icon: Camera,
    href: "/solutions/cctv-security-surveillance",
  },
  {
    id: "audio-video",
    title: "Audio Video Solutions",
    description:
      "Meeting rooms and command centers engineered for crystal-clear collaboration.",
    icon: MonitorPlay,
    href: "/solutions/audio-video-solutions",
  },
  {
    id: "cabling",
    title: "Structured Cabling Solution",
    description:
      "High-speed copper and fiber backbones designed for resilient networks.",
    icon: Cable,
    href: "/solutions/structured-cabling-solution",
  },
  {
    id: "pabx",
    title: "PABX Solution",
    description:
      "Unified voice platforms integrating desk phones, soft clients, and IVR flows.",
    icon: Phone,
    href: "/solutions/pabx-solution",
  },
];

export default function SolutionsOverview() {
  return (
    <section className="bg-[#f3f3f1] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <header className="mb-12 max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Tailored platforms for secured workplaces
          </h2>
          <p className="text-sm leading-6 text-slate-600 md:text-base">
            Discover how Vertilinks architects time, access, surveillance, voice, and cabling solutions to fit your deployment scale and compliance needs.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f3f1] text-slate-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  Explore solution
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
