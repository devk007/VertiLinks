import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Hero from "../../components/Hero";

/**
 * Level-3: Model/Item detail page
 * Reads: data[category].modelPages[level2][slug]
 */
export default function CatalogDetail({ data }) {
  const { category, level2, slug } = useParams();
  const cat = data[category];
  const page = cat?.modelPages?.[level2]?.[slug];
  if (!page) return <Navigate to="/404" replace />;

  return (
    <>
      {page.hero && <Hero type="inner" {...page.hero} />}

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          {page.gallery?.[0] ? (
            <img
              src={page.gallery[0]}
              alt={page.hero?.title}
              className="rounded-lg border bg-white"
              loading="lazy"
            />
          ) : null}

          {page.gallery?.length > 1 ? (
            <div className="mt-3 flex gap-3">
              {page.gallery.slice(1).map((g, i) => (
                <img key={i} src={g} alt={`thumb-${i}`} className="h-16 w-24 object-contain rounded border" loading="lazy" />
              ))}
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div>
          {page.overview && (
            <>
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700">{page.overview}</p>
            </>
          )}

          {page.features?.length ? (
            <>
              <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {page.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </>
          ) : null}

          {page.specs ? (
            <>
              <h3 className="text-xl font-semibold mt-6 mb-2">Specifications</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {Object.entries(page.specs).map(([k, v]) => (
                  <div key={k}>
                    <div className="text-sm text-gray-500">{k}</div>
                    <div className="font-medium">{v}</div>
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {page.downloads?.length ? (
            <>
              <h3 className="text-xl font-semibold mt-6 mb-2">Downloads</h3>
              <div className="flex flex-wrap gap-3">
                {page.downloads.map((d) => (
                  <a key={d.href} href={d.href} className="px-3 py-2 rounded border hover:bg-gray-50">
                    {d.label}
                  </a>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* Related */}
      {page.related?.length ? (
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-14">
          <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.related.map((r) => (
              <a key={r.href} href={r.href} className="block border rounded-lg p-3 hover:shadow">
                <img src={r.image} alt={r.name} className="h-28 w-full object-contain" loading="lazy" />
                <div className="mt-2 text-sm font-medium">{r.name}</div>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
