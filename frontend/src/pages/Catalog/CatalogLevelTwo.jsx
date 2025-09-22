import React from "react";
import { useParams, Navigate, Link, useLocation } from "react-router-dom";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
      <Navbar/>
      {page?.hero && <Hero type="inner" {...page.hero} />}

      {/* Overview: heading + 2 columns bullets */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        {page?.overview?.heading && (
          <h2 className="text-2xl md:text-3xl font-bold">{page.overview.heading}</h2>
        )}
        {page?.overview?.intro && (
          <p className="mt-3 text-gray-700 max-w-4xl">{page.overview.intro}</p>
        )}

        {(page?.overview?.bulletsLeft || page?.overview?.bulletsRight) && (
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <ul className="space-y-2">
              {(page.overview.bulletsLeft || []).map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span><span>{b}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {(page.overview.bulletsRight || []).map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Brands/Packages cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((b) => (
          <Link
            key={b.slug}
            to={b.to || `/${isProducts ? "products" : "solutions"}/${category}/${b.slug}`}
            className="border rounded-xl p-5 hover:shadow transition bg-white"
          >
            {b.logo ? <img src={b.logo} alt={b.name} className="h-8 mb-3" loading="lazy" /> : null}
            <h3 className="text-lg font-semibold">{b.name}</h3>
            {b.blurb && <p className="text-gray-600 mt-2">{b.blurb}</p>}

            {b.highlights?.length ? (
              <ul className="mt-3 text-sm text-gray-700 space-y-1 list-disc list-inside">
                {b.highlights.slice(0, 3).map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            ) : null}

            {b.preview?.length ? (
              <div className="mt-4 flex gap-3">
                {b.preview.slice(0,2).map((p) => (
                  <img key={p.name} src={p.image} alt={p.name} className="h-10 w-14 object-contain rounded border" loading="lazy" />
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </section>
      <Footer/>
    </>
  );
}
