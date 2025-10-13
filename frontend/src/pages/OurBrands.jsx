import React from "react";
import { Link } from "react-router-dom";
import images from "../data/images";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const brandEntries = [
  {
    name: "HID Fargo",
    logo: images.products.idCardPrinters.fargo.logo,
    description: "Secure credential printers for government, enterprise, and education ID offices with modular encoding options.",
    link: "/products/id-card-printers/hid-fargo",
  },
  {
    name: "Evolis",
    logo: images.products.idCardPrinters.evolis.logo,
    description: "Compact desktop printers delivering eco-friendly card issuance for retail membership and corporate badges.",
    link: "/products/id-card-printers/evolis",
  },
  {
    name: "Hikvision",
    logo: images.products.cctvIpCameras.hikvision.logo,
    description: "AI-ready IP and Turbo HD video surveillance platforms covering campus, retail, and critical infrastructure deployments.",
    link: "/products/cctv-ip-cameras/hkvision-network-cameras",
  },
  {
    name: "Dahua",
    logo: images.products.cctvIpCameras.dahua.logo,
    description: "WizMind and WizSense camera ecosystems with analytics-rich recorders and thermal/industrial form factors.",
    link: "/products/cctv-ip-cameras/dahua-network-cameras",
  },
  {
    name: "CAME",
    logo: images.products.gateBarriers.came.logo,
    description: "Brushless vehicular barriers and chain systems engineered for intensive duty and remote diagnostics.",
    link: "/products/gate-barriers/came",
  },
  {
    name: "BFT",
    logo: images.products.gateBarriers.bft.logo,
    description: "Traffic management and toll-grade barriers with U-Link smart controllers and heavy-cycle mechanics.",
    link: "/products/gate-barriers/bft",
  },
  {
    name: "Dell Technologies",
    logo: images.products.laptopsDesktops.dell.logo,
    description: "Latitude, XPS, and Precision compute platforms backed by global support for enterprise rollouts.",
    link: "/products/laptops-and-desktop-computers/dell",
  },
  {
    name: "HP",
    logo: images.products.laptopsDesktops.hp.logo,
    description: "Wolf Security enabled laptops, desktops, and multifunction print fleets with managed print services.",
    link: "/products/printers-and-scanners/hp",
  },
  {
    name: "Lenovo",
    logo: images.products.laptopsDesktops.lenovo.logo,
    description: "ThinkPad, ThinkCentre, and Legion devices built for hybrid work, engineering, and esports labs.",
    link: "/products/laptops-and-desktop-computers/lenovo",
  },
  {
    name: "ZKTeco",
    logo: images.products.timeAttendance.zkteco.logo,
    description: "Biometric time attendance and access terminals with SpeedFace AI, Horus optics, and rugged portable options.",
    link: "/products/time-attendance/zkteco",
  },
  {
    name: "Timy",
    logo: images.products.timeAttendance.timy.logo,
    description: "Face and fingerprint terminals designed for SMB deployments with cloud-ready attendance workflows.",
    link: "/products/time-attendance/timy",
  },
  {
    name: "ASUS",
    logo: images.products.laptopsDesktops.asus.logo,
    description: "ZenBook, ROG, and ExpertCenter ranges delivering OLED visuals, esports-grade thermals, and compact business desktops.",
    link: "/products/laptops-and-desktop-computers/asus",
  },
];

export default function OurBrands() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50">
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')] opacity-20" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:px-8">
          <div className="space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Trusted OEM Ecosystem
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Why Partner With Our Global Brand Network
            </h1>
            <p className="text-base leading-7 text-white/80 md:text-lg">
              VertiLinks brings together top-tier hardware and software manufacturers so you can deploy proven technology stacks—
              from secure identity issuance and rugged access hardware to compute, print, and surveillance platforms—all supported by
              certified engineers and OEM-backed warranties.
            </p>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-white px-6 py-2 text-sm font-semibold text-sky-900 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Talk to our team
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur">
            <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-white/70">
              How we work with OEMs
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li>
                <span className="font-semibold text-white">Certified deployment</span> – deployment engineers trained on vendor best practices.
              </li>
              <li>
                <span className="font-semibold text-white">Supply continuity</span> – direct distribution relationships for faster fulfillment.
              </li>
              <li>
                <span className="font-semibold text-white">Lifecycle services</span> – imaging, asset tagging, AMC and RMA support under one roof.
              </li>
              <li>
                <span className="font-semibold text-white">Solution design</span> – bundling compute, security, and software to match site requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="brand-roster" className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Our Brand Roster</h2>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            A cross-section of the OEMs we deploy across identity, security, compute, and infrastructure projects. Each partnership is backed by
            vendor certifications, spares stock, and regional support centres.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {brandEntries.map((brand) => (
            <Link
              key={brand.name}
              to={brand.link}
              className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                  <img src={brand.logo} alt={brand.name} className="max-h-10 max-w-[60px] object-contain" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-sky-700">{brand.name}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">{brand.description}</p>
              <span className="mt-auto text-sm font-semibold text-sky-700">Explore brand →</span>
            </Link>
          ))}
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
