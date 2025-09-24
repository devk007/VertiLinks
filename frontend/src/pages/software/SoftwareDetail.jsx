import { Navigate, useParams, Link } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm2 from "../../components/ContactForm2";

export default function SoftwareDetail({ data }) {
  const { slug } = useParams();
  const software = data?.[slug];

  if (!software) return <Navigate to="/404" replace />;

  const page = software.detailPage || {};
  const highlights = page.highlights || [];
  const modules = page.modules || [];
  const integrations = page.integrations || [];
  const metrics = Object.entries(page.metrics || {});

  const related = Object.values(data)
    .filter((item) => item.slug !== slug)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
    }))
    .slice(0, 4);

  return (
    <>
      <Navbar />
      {page.hero ? <Hero type="inner" {...page.hero} /> : null}

      <section className="bg-gradient-to-br from-slate-100 via-white to-slate-100/40 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:px-8">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Software Overview
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              {page.hero?.title || software.title}
            </h1>
            {page.overview ? (
              <p className="text-base leading-7 text-slate-600 md:text-lg">
                {page.overview}
              </p>
            ) : null}
          </div>

          {highlights.length ? (
            <div className="grid gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-sky-700">
                    {highlight.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {highlight.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {modules.length ? (
        <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Solution Modules
            </h2>
            <p className="text-sm text-slate-500">
              Configure the platform with the building blocks that fit your workforce, security posture, and reporting needs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {modules.map((module) => (
              <div
                key={module.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{module.title}</h3>
                </div>
                <ul className="space-y-3">
                  {(module.bullets || []).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <Check className="mt-1 h-4 w-4 text-sky-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {integrations.length || metrics.length ? (
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:px-8">
            {integrations.length ? (
              <div className="space-y-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Integrations & Ecosystem
                </div>
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Connected with the systems you already trust
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {integrations.map((integration) => (
                    <li
                      key={integration}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    >
                      <ChevronRight className="mt-1 h-4 w-4" />
                      <span>{integration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {metrics.length ? (
              <div className="space-y-4 rounded-3xl bg-white/5 p-6 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Delivery Snapshot
                </div>
                <div className="grid gap-4">
                  {metrics.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                        {label}
                      </div>
                      <div className="mt-2 text-sm text-white/90">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Explore Other Platforms</h2>
            <div className="flex flex-wrap gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/softwares/${item.slug}`}
                  className="group flex w-full max-w-xs flex-col gap-2 rounded-3xl border border-slate-200 bg-white/90 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-700">
                    {item.title}
                  </div>
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 group-hover:text-slate-600">
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactForm2 contextLabel={page.hero?.title || software.title} />
      <Footer />
    </>
  );
}
