import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import OverviewGrid from "../../components/OverviewGrid";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhyVertiLinks from "../../components/WhyVertiLinks";
import ScheduleCTA from "../../components/ScheduleCTA";
import images from "../../data/images";

/**
 * Level-0: Tiles of categories (e.g., 9 product categories or solution categories)
 * props:
 *  - data: registry object { [slug]: categoryObj }
 *  - kind: "product" | "solution" | "software"
 */
export default function CatalogIndex({ data, kind = "product" }) {
  const location = useLocation();

  const derivedKind = useMemo(() => {
    if (kind) return kind;
    if (location.pathname.startsWith("/solutions")) return "solution";
    if (location.pathname.startsWith("/softwares")) return "software";
    return "product";
  }, [kind, location.pathname]);

  const config = useMemo(() => {
    const map = {
      product: {
        basePath: "products",
        heroBg: images.products.hero,
        heroTitle: "Our Products",
        heroDescription:
          "Vertilinks offers a cutting edge range of industrial and commercial security products that will help to safeguard your business and facilities. Most of the times the companies get confused in deciding whether to invest in a branded or local security system, but we are here to help you in making things easier.",
        breadcrumb: "Home / Products",
        gridTitle: "Our Products",
        gridIntro: "Explore Vertilinks’ product categories.",
        accent: undefined,
      },
      solution: {
        basePath: "solutions",
        heroBg: images.home.tech.three,
        heroTitle: "Our Solutions",
        heroDescription:
          "At VertiLinks, we develop powerful software platforms that help organizations streamline their processes and improve decision-making. Whether it’s managing employees, engaging customers, or driving growth with ERP and custom applications, our solutions are tailored to meet your business goals.",
        breadcrumb: "Home / Solutions",
        gridTitle: "Our Solutions",
        gridIntro: "Explore Vertilinks’ solution categories.",
        accent: undefined,
      },
      software: {
        basePath: "softwares",
        heroBg: images.home.tech.four,
        heroTitle: "Software Platforms",
        heroDescription:
          "From attendance to ERP, VertiLinks delivers platforms that connect people, processes, and compliance in one command center.",
        breadcrumb: "Home / Softwares",
        gridTitle: "Our Software Platforms",
        gridIntro: "Choose the platform that best fits your workforce, visitor experience, or enterprise roadmap.",
        accent: {
          bg: "bg-violet-50",
          text: "text-violet-700",
          border: "border-violet-100",
          link: "text-violet-600",
        },
      },
    };

    return map[derivedKind] || map.product;
  }, [derivedKind]);

  const items = useMemo(
    () =>
      Object.values(data).map((cat) => ({
        id: cat.slug,
        title: cat.title,
        blurb: cat.categoryPage?.overview?.intro || "",
        icon: cat.categoryPage?.overview?.icon,
        href: `/${config.basePath}/${cat.slug}`,
      })),
    [data, config.basePath]
  );

  return (
    <>
      <Navbar />
      <Hero
        bg={config.heroBg}
        title={config.heroTitle}
        description={config.heroDescription}
        breadcrumb={config.breadcrumb}
        cta={{ label: "Get In Touch", to: "/contact" }}
      />

      <OverviewGrid
        title={config.gridTitle}
        intro={config.gridIntro}
        items={items}
        accent={config.accent || undefined}
      />
      <WhyVertiLinks />
      <ScheduleCTA />

      <Footer />
    </>
  );
}
