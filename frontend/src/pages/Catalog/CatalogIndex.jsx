import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import OverviewGrid from "../../components/OverviewGrid";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/**
 * Level-0: Tiles of categories (e.g., 9 product categories or solution categories)
 * props:
 *  - data: registry object { [slug]: categoryObj }
 *  - kind: "product" | "solution"
 */
export default function CatalogIndex({ data, kind = "product" }) {
  const location = useLocation();
  const isProducts = location.pathname.startsWith("/products");

  // Build items for OverviewGrid
  const items = useMemo(
    () =>
      Object.values(data).map((cat) => ({
        id: cat.slug,
        title: cat.title,
        blurb: cat.categoryPage?.overview?.intro || "",
        icon: cat.categoryPage?.overview?.icon,
        href: `/${isProducts ? "products" : "solutions"}/${cat.slug}`,
      })),
    [data, isProducts]
  );

  // Optional top hero (use first category's hero as a generic banner if you like)
  const firstHero = Object.values(data)?.[0]?.categoryPage?.hero;

  return (
    <>
        <Navbar/>
      {firstHero ? (
        <Hero type="inner" {...firstHero} />
      ) : null}

      <OverviewGrid
        title={isProducts ? "Our Products" : "Our Solutions"}
        intro={isProducts
          ? "Explore Vertilinks’ product categories."
          : "Explore Vertilinks’ solution categories."
        }
        items={items}
      />

      <Footer/>
    </>
  );
}
