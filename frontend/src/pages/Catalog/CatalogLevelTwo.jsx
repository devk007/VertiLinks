import React from "react";
import { useParams, Navigate, Link, useLocation, Form } from "react-router-dom";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhyVertiLinks from "../../components/WhyVertiLinks";
import WhyVertiLinks2 from "../../components/WhyVertilinks2";
import PlatformFeatures from "../../components/PlatformFeatures";
import ContactForm2 from "../../components/ContactForm2";

/**
 * Level-1: Category → Brands/Packages list
 * Reads: data[category].categoryPage (hero, overview, brands[])
 */
export default function CatalogLevelTwo({ data, kind = "product" }) {
  const { category } = useParams();
  const location = useLocation();
  const isProducts = location.pathname.startsWith("/products");

  const cat = data[category];
  if (!cat) return <Navigate to="/404" replace />;

  const page = cat.categoryPage;
  const brands = page?.brands || []; // for solutions, treat "brands" as "packages"

  return (
    <>
      <Navbar />
      {page?.hero && <Hero type="inner" {...page.hero} />}

      {/* Overview: heading + 2 columns bullets */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
              {kind === "product" ? "Category Overview" : "Solution Overview"}
            </div>
            {page?.overview?.heading && (
              <h2 className="text-3xl font-semibold text-slate-900 md:text-[2.2rem]">
                {page.overview.heading}
              </h2>
            )}
            {page?.overview?.intro && (
              <p className="text-base leading-7 text-slate-600 md:text-lg">
                {page.overview.intro}
              </p>
            )}
          </div>

          <div className="max-w-sm border-l-4 border-sky-500/60 pl-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              {kind === "product" ? "Why it matters" : "Where it fits"}
            </div>
            <div className="mt-4 text-base leading-7 text-slate-600">
              Compare capabilities at a glance, then dive deeper into individual models, specs, and deployment best practices for every option in this category.
            </div>
          </div>
        </div>

        {(page?.overview?.bulletsLeft || page?.overview?.bulletsRight) && (
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <ul className="space-y-4">
              {(page.overview.bulletsLeft || []).map((b, i) => (
                <li key={i} className="flex gap-3 text-base text-slate-700">
                  <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {(page.overview.bulletsRight || []).map((b, i) => (
                <li key={i} className="flex gap-3 text-base text-slate-700">
                  <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Brands/Packages cards */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 pb-16">
        <div className="grid gap-8">
          {brands.map((b, idx) => {
            const linkTo =
              b.to || `/${isProducts ? "products" : "solutions"}/${category}/${b.slug}`;
            const reverse = idx % 2 === 1;

            return (
              <Link
                key={b.slug}
                to={linkTo}
                className="group relative block overflow-hidden rounded-3xl bg-white/95 p-8 shadow-xl ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-sky-500 sm:p-10"
              >
                <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl transition duration-500 group-hover:scale-110" />
                <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

                <div
                  className={[
                    "relative grid items-center gap-10",
                    "lg:grid-cols-2",
                    reverse ? "lg:[&>*:first-child]:order-2" : "",
                  ].join(" ")}
                >
                  {/* Text */}
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                        {b.name}
                      </h3>
                      {b.blurb && (
                        <p className="text-base leading-7 text-slate-600 md:text-lg">
                          {b.blurb}
                        </p>
                      )}
                    </div>

                    {b.highlights?.length ? (
                      <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                        {b.highlights.slice(0, 6).map((h, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500 ring-4 ring-sky-500/20" />
                            <span className="text-base leading-6">{h}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                        View lineup
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Logo / Image */}
                  <div className="relative flex justify-center">
                    <div className="absolute inset-y-6 left-10 right-10 rounded-3xl bg-sky-200/30 blur-3xl" aria-hidden />
                    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                      <div className="absolute -top-12 -right-10 h-32 w-32 rounded-full bg-sky-100 opacity-70 blur-2xl" />
                      {b.banner ? (
                        <img
                          src={b.banner}
                          alt={b.name}
                          className="relative z-10 h-44 w-full object-contain"
                          loading="lazy"
                        />
                      ) : b.logo ? (
                        <div className="relative z-10 flex h-44 items-center justify-center">
                          <img
                            src={b.logo}
                            alt={b.name}
                            className="h-16 object-contain"
                            loading="lazy"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <WhyVertiLinks2/>
      <PlatformFeatures/>
      <ContactForm2 contextLabel={cat?.title || page?.hero?.title || category} />
      <Footer />
    </>
  );
}
