// src/components/OverviewGrid.jsx
import { Link } from "react-router-dom";

/**
 * Reusable 2-col overview grid.
 * items: Array<{ id, title, icon, href?, blurb? }>
 */
export default function OverviewGrid({
  title = "Overview",
  intro = "",
  items = [],
  // optional styling variants
  accent = {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-100",
    link: "text-blue-600",
  },
  className = "",
}) {
  return (
    <section className={`relative max-w-7xl mx-auto px-6 md:px-8 py-12 ${className}`}>
      <header className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {intro ? <p className="mt-3 text-gray-600 max-w-3xl">{intro}</p> : null}
      </header>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
        {items.map((item) => {
          const Icon = item.icon || (() => null);
          return (
            <article key={item.id} className="flex items-start gap-4 border-l pl-4">
              <div className="shrink-0">
                <div
                  className={`w-12 h-12 grid place-items-center rounded-xl ${accent.bg} ${accent.text} border ${accent.border}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <div className="grow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.blurb ? (
                  <p className="mt-2 text-gray-700 leading-relaxed">{item.blurb}</p>
                ) : null}

                {item.href ? (
                  <Link
                    to={item.href}
                    className={`mt-3 inline-block font-medium hover:underline ${accent.link}`}
                  >
                    Read More
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
