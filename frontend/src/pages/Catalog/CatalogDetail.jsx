import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ChevronRight, Download } from "lucide-react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm2 from "../../components/ContactForm2";

/**
 * Level-3: Model/Item detail page
 * Reads: data[category].modelPages[level2][slug]
 */
export default function CatalogDetail({ data }) {
  const { category, level2, slug } = useParams();
  const cat = data[category];
  const page = cat?.modelPages?.[level2]?.[slug];
  if (!page) return <Navigate to="/404" replace />;

  const primaryImage = page.gallery?.[0];
  const galleryThumbs = page.gallery?.slice(1) || [];
  const specs = Object.entries(page.specs || {});
  const detailTitle = page.hero?.title || slug;
  const categoryTitle = cat?.title || level2;

  const relatedItems = (page.related || []).slice(0, 4);

  return (
    <>
      <Navbar />
      {page.hero && <Hero type="inner" {...page.hero} />}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-100/60 py-14">
        <div className="absolute inset-x-0 top-20 h-40 bg-gradient-to-r from-transparent via-sky-100/60 to-transparent blur-3xl" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[minmax(0,1fr)_320px] md:px-8">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Our {categoryTitle}
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              {detailTitle}
            </h1>
            {page.overview ? (
              <p className="text-base leading-7 text-slate-600 md:text-lg">
                {page.overview}
              </p>
            ) : null}

            {page.features?.length ? (
              <div className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key Highlights
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {page.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-700 shadow-sm"
                    >
                      <ChevronRight className="mt-1 h-4 w-4 text-sky-600" />
                      <span className="text-sm leading-6">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {galleryThumbs.length ? (
              <div className="pt-3">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Additional Views
                </div>
                <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                  {galleryThumbs.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt={`gallery-thumb-${index}`}
                      className="h-20 w-28 flex-shrink-0 rounded-2xl border border-slate-200 bg-white object-contain shadow-sm"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-sky-200/30 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="absolute -right-16 -top-14 h-36 w-36 rounded-full bg-sky-100 opacity-70 blur-3xl" />
              {primaryImage ? (
                <img
                  src={primaryImage}
                  alt={detailTitle}
                  className="relative z-10 mx-auto h-64 w-auto object-contain"
                  loading="lazy"
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {specs.length ? (
        <section className="mx-auto max-w-6xl px-6 py-14 md:px-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Our Specifications
              </h2>
              <p className="text-sm text-slate-500">
                Detailed technical specifications to help you evaluate fit and performance.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.downloads?.length ? (
        <section className="mx-auto max-w-6xl px-6 pb-14 md:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-100 px-8 py-10 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_260px] md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Our Downloads</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Access brochures and guides for deeper product insights and deployment best practices.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {page.downloads.map((download) => (
                  <a
                    key={download.href}
                    href={download.href}
                    className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                  >
                    <Download className="h-4 w-4" />
                    {download.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {relatedItems.length ? (
        <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
          <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Related Products
          </h3>
          <div className="mt-6 flex gap-6 overflow-x-auto pb-2">
            {relatedItems.map((related) => (
              <Link
                key={related.href || related.to}
                to={related.href || related.to || '#'}
                className="group flex w-56 flex-col items-center rounded-3xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-32 w-full items-center justify-center">
                  <img
                    src={related.image}
                    alt={related.name}
                    className="h-28 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-sm font-semibold text-slate-800 group-hover:text-sky-700">
                  {related.name}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      <ContactForm2 contextLabel={detailTitle} />
      <Footer />
    </>
  );
}
