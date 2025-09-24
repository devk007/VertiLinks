// ScrollToTop.jsx
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    const prev = window.history.scrollRestoration;
    try { window.history.scrollRestoration = "manual"; } catch {}
    return () => { try { window.history.scrollRestoration = prev || "auto"; } catch {} };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0; // safety
    document.body.scrollTop = 0;            // safety
  }, [location.pathname, location.search, location.hash, location.key]);

  return null;
}
