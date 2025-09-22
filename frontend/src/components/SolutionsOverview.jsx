// src/components/SolutionsOverview.jsx
import {
  IdCard,
  Shield,
  GraduationCap,
  Gavel,
  Package,
  HandCoins,
  HeartPulse,
} from "lucide-react";

const solutions = [
  {
    id: "citizen-id",
    title: "Citizen & National ID",
    description:
      "Citizen registration is the stepping stone of identity management programs.",
    icon: IdCard,
    href: "/solutions/citizen-id",
  },
  {
    id: "healthcare",
    title: "Health Care Protection",
    description:
      "Ensuring safety in healthcare with biometric access and patient identification.",
    icon: HeartPulse,
    href: "/solutions/healthcare",
  },
  {
    id: "education",
    title: "Engaged Education",
    description:
      "Education is a powerful pillar of progress — secured with smart access & monitoring.",
    icon: GraduationCap,
    href: "/solutions/education",
  },
  {
    id: "law",
    title: "Law Enforcement",
    description:
      "Empowering agencies with reliable biometric verification and surveillance.",
    icon: Gavel,
    href: "/solutions/law-enforcement",
  },
  {
    id: "commodity",
    title: "Commodity Distribution",
    description:
      "Fair distribution powered by identification and secure tracking.",
    icon: Package,
    href: "/solutions/commodity",
  },
  {
    id: "microfinance",
    title: "Microfinance",
    description:
      "Inclusive financial systems with strong authentication for every user.",
    icon: HandCoins,
    href: "/solutions/microfinance",
  },
];

export default function SolutionsOverview() {
  return (
    <section className="max-w-full mx-auto px-20 py-12 bg-[#f3f3f1]">
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-3xl md:text-3xl font-bold">
          Our Product Based Solutions
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl ">
          Vertilinks provides scalable solutions across industries. From
          citizen ID to microfinance, our technologies ensure secure
          enrollment, authentication, and management tailored to your needs.
        </p>
      </header>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col gap-3 border-l-2 border-blue-600 p-4 hover:shadow-md transition hover:bg-white"
            >
              <Icon className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <a
                href={item.href}
                className="mt-2 inline-block text-blue-600 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
