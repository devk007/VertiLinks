import React from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import Hero from "../../components/Hero";
import SubProductList from "../../components/SubProductList";

/**
 * Level-2: Brand/Package → Models/Items list
 * Reads: data[category].brandPages[level2] (hero, keyBenefits, models[])
 */
export default function CatalogList({ data, kind = "product" }) {
  const { category, level2 } = useParams();
  const location = useLocation();
  const isProducts = location.pathname.startsWith("/products");

  const cat = data[category];
  const brandPage = cat?.brandPages?.[level2]; // for solutions, it's still brandPages (acts as "packagePages")
  if (!cat || !brandPage) return <Navigate to="/404" replace />;

  const products = (brandPage.models || []).map((m) => ({
    id: m.slug,
    title: m.name,
    image: m.image,
    description: m.brief,
    features: m.features,
    href: m.to || `/${isProducts ? "products" : "solutions"}/${category}/${level2}/${m.slug}`,
    oem: true, // if you show OEM badge
  }));

  return (
    <>
      {brandPage.hero && <Hero type="inner" {...brandPage.hero} />}

      {/* Key benefits row (optional) */}
      {brandPage.keyBenefits?.length ? (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandPage.keyBenefits.map((kb, i) => (
            <div key={i} className="rounded-xl border p-5 bg-white">
              <div className="text-sm font-semibold">{kb.title}</div>
              <div className="text-gray-600 mt-1">{kb.desc}</div>
            </div>
          ))}
        </section>
      ) : null}

      <SubProductList
        id="models"
        title={`${brandPage.hero?.title || ""} — Models`}
        intro={cat.categoryPage?.overview?.intro}
        products={products}
      />
    </>
  );
}
