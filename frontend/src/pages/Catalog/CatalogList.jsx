import React from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import Hero from "../../components/Hero";
import SubProductList from "../../components/SubProductList";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SecureAccessFeatures from "../../components/SecureAccessFeatures";
import secureAccess from "../../data/secureAccess";
import ContactForm2 from "../../components/ContactForm2";

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
    features: m.features || m.summaryFeatures || [],
    href: m.to || `/${isProducts ? "products" : "solutions"}/${category}/${level2}/${m.slug}`,
    oem: true, // if you show OEM badge
  }));

  const productName =
    brandPage.hero?.title ||
    brandPage.title ||
    brandPage.name ||
    cat.title ||
    level2;

  return (
    <>
      <Navbar />
      {brandPage.hero && <Hero type="inner" {...brandPage.hero} />}

      {/* Key benefits row (optional) */}
      {brandPage.keyBenefits?.length ? (
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
            Key Benefits of {productName}
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {brandPage.keyBenefits.map((kb, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-4 rounded-3xl border border-slate-200/70 bg-white/90 px-6 py-8 shadow-sm"
              >
                <div className="absolute inset-x-8 top-4 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-500 text-white shadow-lg">
                  {kb.icon ? (
                    <span className="text-2xl">{kb.icon}</span>
                  ) : (
                    <span className="text-xl font-semibold">
                      {kb.title?.slice(0, 1) || i + 1}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{kb.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{kb.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-2">
            <h3 className="text-2xl font-semibold text-slate-900">
              Best {cat.title || productName} in UAE
            </h3>
            <p className="text-sm text-slate-500">Trusted brands, certified performance, and on-ground implementation support.</p>
          </div>
        </section>
      ) : null}

      <SubProductList
        id="models"
        title={`${brandPage.hero?.title || ""} — Models`}
        intro={cat.categoryPage?.overview?.intro}
        products={products}
      />
      <SecureAccessFeatures {...secureAccess} />
      <ContactForm2 contextLabel={productName} />
      <Footer />
    </>
  );
}
