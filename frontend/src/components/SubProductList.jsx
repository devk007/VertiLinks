// components/listing/AlternatingProductBlock.jsx
import { Link } from "react-router-dom";

export default function AlternatingProductBlock({ products = [] }) {
  return (
    <section className="mx-auto max-w-7xl">
      {products.map((p, idx) => {
        const reverse = idx % 2 === 1;

        const wrapperTone = "bg-gradient-to-br from-white via-slate-50 to-slate-100";
        const innerTone = "bg-white/90 ring-slate-200";
        const titleTone = "text-slate-900";
        const descTone = "text-slate-600";
        const dotTone = "bg-sky-500 ring-4 ring-sky-500/20";
        const primaryButtonTone = "bg-sky-600 text-white shadow-sm hover:bg-sky-700";
        const secondaryButtonTone = "border border-slate-200 text-slate-700 hover:bg-white";
        const imageCardTone = "border-slate-200 bg-white";

        return (
          <div key={p.id || idx} className={`${wrapperTone} py-14 transition-colors duration-500`}>
            <div className="relative mx-auto max-w-6xl px-6 md:px-10">
              <div
                className={`relative overflow-hidden rounded-3xl p-6 shadow-2xl backdrop-blur-sm ring-1 transition duration-300 hover:shadow-[0_20px_38px_rgba(15,23,42,0.16)] lg:p-10 ${innerTone}`}
              >
                <div className="pointer-events-none absolute -left-24 top-1/3 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 -top-10 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />

                <div className="relative space-y-8">
                  {/* Title + Description */}
                  <header className="space-y-4">
                    <h3 className={`text-3xl font-semibold leading-tight ${titleTone}`}>
                      {p.title}
                    </h3>
                    {p.description && (
                      <p className={`max-w-3xl text-base leading-7 ${descTone}`}>
                        {p.description}
                      </p>
                    )}
                  </header>

                  {/* Content Row */}
                  <div
                    className={[
                      "grid items-start gap-10",
                      "lg:grid-cols-2",
                      reverse ? "lg:[&>*:first-child]:order-2" : "",
                    ].join(" ")}
                  >
                    {/* Image */}
                    <div className="relative flex justify-center">
                      <div className="absolute inset-y-6 left-6 right-6 rounded-3xl bg-sky-200/30 blur-3xl" aria-hidden />
                      <div
                        className={`relative overflow-hidden rounded-2xl border p-5 shadow-xl ${imageCardTone}`}
                      >
                        <div className="absolute -top-14 -right-10 h-32 w-32 rounded-full bg-sky-100 opacity-60 blur-2xl" />
                        <img
                          src={p.image}
                          alt={p.title}
                          className="relative z-10 h-60 w-auto object-contain drop-shadow-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Features + Buttons */}
                    <div className="space-y-6">
                      <div>
                        <div className={`text-lg font-semibold tracking-wide ${titleTone}`}>
                          Key Highlights
                        </div>
                        {p.features?.length ? (
                          <ul className="mt-4 space-y-3">
                            {p.features.map((f, i) => (
                              <li
                                key={i}
                                className={`flex items-start gap-3 text-base leading-6 ${descTone}`}
                              >
                                <span
                                  className={`mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${dotTone}`}
                                />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {p.href && (
                          <Link
                            to={p.href}
                            className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${primaryButtonTone}`}
                          >
                            Explore Product
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </Link>
                        )}
                        {p.brochure && (
                          <a
                            href={p.brochure}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition duration-200 ${secondaryButtonTone}`}
                          >
                            Download Brochure
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
