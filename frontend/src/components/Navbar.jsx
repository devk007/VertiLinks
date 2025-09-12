import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MegaPanel from "./MegaPanel";
import navData from "../data/navData";
import logo from "../assets/x6ioTZ01.svg"

export default function Navbar({
  durationMs = 320,                           // panel open/close duration
  easing = "cubic-bezier(.2,.8,.2,1)",        // smooth ease
  microFade = true,                            // content micro-fade on change
}) {
  // header & scroll UI
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // measure header height (panel sticks right under it)
  const headerRef = useRef(null);
  const panelRef  = useRef(null);
  const [headerH, setHeaderH] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const h = headerRef.current?.getBoundingClientRect()?.height ?? 0;
      setHeaderH(h);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (headerRef.current) ro.observe(headerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // ---------------- Orchestrated state (close → open like SideDock) ----------------
  const [isOpen, setOpen]       = useState(false);  // visual open/close
  const [activeId, setActive]   = useState(null);   // which panel is mounted
  const [pinned, setPinned]     = useState(false);  // click-lock
  const [contentKey, setCKey]   = useState(0);      // micro fade remount key

  // sequencing & timers
  const hoverDelayRef   = useRef(null); // small close delay on leave
  const seqTimerRef     = useRef(null); // close→open sequencing timer
  const tokenRef        = useRef(0);    // last hover intent token
  const switchingRef    = useRef(false);

  const clearHoverDelay = () => {
    if (hoverDelayRef.current) {
      clearTimeout(hoverDelayRef.current);
      hoverDelayRef.current = null;
    }
  };
  const clearSeqTimer = () => {
    if (seqTimerRef.current) {
      clearTimeout(seqTimerRef.current);
      seqTimerRef.current = null;
    }
  };

  // Outside click / Esc → close & unpin
  useEffect(() => {
    const onDocClick = (e) => {
      const inHeader = headerRef.current?.contains(e.target);
      const inPanel  = panelRef.current?.contains(e.target);
      if (!inHeader && !inPanel) {
        closeNow(true);
      }
    };
    const onKey = (e) => e.key === "Escape" && closeNow(true);
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Core close/open helpers
  const closeNow = (unpin = false) => {
    clearHoverDelay();
    clearSeqTimer();
    switchingRef.current = true;
    setOpen(false);
    // after animation completes, optionally clear content
    seqTimerRef.current = setTimeout(() => {
      if (unpin) setPinned(false);
      setActive(null);
      switchingRef.current = false;
      seqTimerRef.current = null;
    }, durationMs + 20);
  };

  const openWith = (id) => {
    setActive(id);
    if (microFade) setCKey((k) => k + 1);
    setOpen(true);
  };

  // Hover triggers (SideDock-like)
  const handleHoverEnterMenu = (id) => {
    if (pinned) return; // ignore hover when pinned
    clearHoverDelay();
    const t = ++tokenRef.current;

    // If currently closed → open directly
    if (!isOpen && !switchingRef.current) {
      openWith(id);
      return;
    }

    // If same menu & open → do nothing
    if (isOpen && activeId === id && !switchingRef.current) return;

    // If open & different → close first, then open new (sequence)
    switchingRef.current = true;
    setOpen(false);
    clearSeqTimer();
    seqTimerRef.current = setTimeout(() => {
      if (tokenRef.current !== t) return; // a newer hover arrived
      openWith(id);
      switchingRef.current = false;
      seqTimerRef.current = null;
    }, durationMs + 20);
  };

  const handleHoverLeaveBarOrPanel = () => {
    if (pinned) return;
    clearHoverDelay();
    hoverDelayRef.current = setTimeout(() => {
      closeNow(false);
    }, 120);
  };

  // Click toggle (pin/unpin)
  const handleToggleClick = (id) => {
    clearHoverDelay();
    clearSeqTimer();
    if (pinned && activeId === id) {
      // unpin and close
      closeNow(true);
      return;
    }
    // pin on this id
    setPinned(true);
    // if closed → open directly with this id
    if (!isOpen) {
      openWith(id);
      return;
    }
    // if open and same id → keep open & pinned
    if (activeId === id) return;

    // if open on different id → close then open & pin
    switchingRef.current = true;
    setOpen(false);
    seqTimerRef.current = setTimeout(() => {
      openWith(id);
      switchingRef.current = false;
      seqTimerRef.current = null;
    }, durationMs + 20);
  };

  const current = navData.main.find((m) => m.id === activeId);

  // helper for mobile
  const getPanelLinks = (panel) => {
    if (!panel) return [];
    if (Array.isArray(panel.links)) return panel.links;
    if (Array.isArray(panel.columns)) return panel.columns.flatMap((c) => c?.links || []);
    return [];
  };

  // animated panel styles (clip-path + translate + opacity)
  const panelStyle = {
    top: `${headerH}px`,
    transitionProperty: "clip-path, transform, opacity",
    transitionDuration: `${durationMs}ms`,
    transitionTimingFunction: easing,
    clipPath: isOpen ? "inset(0 0 0 0 round 16px)" : "inset(0 0 100% 0 round 16px)",
    transform: isOpen ? "translateY(0)" : "translateY(-8px)",
    opacity: isOpen ? 1 : 0.001,
    willChange: "clip-path, transform, opacity",
  };

  useEffect(() => () => { clearHoverDelay(); clearSeqTimer(); }, []);

  // --------------- MOBILE ( < 900px ) ---------------
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedId, setMobileExpandedId] = useState(null);

  const transformLabel = (label) => {
    if (label === "OEM & ODM Products") return "Products";
    if (label === "Our Brands") return "Brands";
    if (label === "Support Contact") return "Support";
    return label;
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#f3f3f1] text-gray-900" : "bg-transparent text-white"
        }`}
      >
        {/* main bar */}
        <nav className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between py-3">
            <Link to="/">
              <div className="w-30 h-8 -mt-3">
                <img
                  src={logo}
                  alt="Logo"
                />
              </div>
            </Link>

            {/* desktop (>900px) */}
            <ul className="max-[899px]:hidden flex items-center gap-6 text-[15px]">
              {navData.main.map((item) => {
                const active = activeId === item.id && isOpen;
                return (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleHoverEnterMenu(item.id)}
                    onMouseLeave={handleHoverLeaveBarOrPanel}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleClick(item.id);
                      }}
                      className={`inline-flex items-center gap-2 py-2 px-1 font-medium `}
                      aria-haspopup="true"
                      aria-expanded={active}
                    >
                      {item.label}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        className={`transition ${active ? "rotate-180" : ""}`}
                      >
                        <path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* mobile hamburger (<900px) */}
            <button
              type="button"
              className="hidden max-[899px]:inline-flex items-center justify-center p-2 rounded-md"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              {/* simple hamburger svg to avoid extra deps */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* FULL-WIDTH PANEL (desktop) */}
      {activeId && (
        <div
          ref={panelRef}
          style={panelStyle}
          className="max-[899px]:hidden fixed left-0 right-0 z-40 bg-white border-b shadow-xl"
          onMouseEnter={() => { if (!pinned) clearHoverDelay(); }}
          onMouseLeave={handleHoverLeaveBarOrPanel}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6 py-6">
            <section className={microFade ? "animate-contentFade" : ""} key={contentKey}>
              {navData.main.find((m) => m.id === activeId)?.panel && (
                <MegaPanel {...navData.main.find((m) => m.id === activeId).panel} />
              )}
            </section>
          </div>
        </div>
      )}

      {/* MOBILE OVERLAY (no background dim/blur) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 max-[899px]:block hidden">
          {/* transparent click-catcher: no visual change to background */}
          <div
            className="absolute inset-0"
            onClick={() => {
              setMobileExpandedId(null);
              setMobileOpen(false);
            }}
          />

          {/* white panel */}
          <div className="relative z-10 w-full max-w-[100vw] mx-auto my-auto bg-white rounded-xl overflow-y-auto h-[90vh]">
            {/* top bar with logo + close */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Link
                to="/"
                onClick={() => {
                  setMobileExpandedId(null);
                  setMobileOpen(false);
                }}
              >
                <img
                  src="https://vertilinks.com/wp-content/uploads/2024/06/WhatsApp-Image-2025-06-04-at-17.56.18_ea0adaff.jpg"
                  alt="Logo"
                  className="h-8"
                />
              </Link>
              <button
                type="button"
                className="p-2"
                onClick={() => {
                  setMobileExpandedId(null);
                  setMobileOpen(false);
                }}
                aria-label="Close menu"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

            {/* list of groups (collapsible) */}
            <nav className="divide-y divide-gray-200">
              {navData.main.map((item) => (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedId((prev) => (prev === item.id ? null : item.id))
                    }
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-lg font-medium">{transformLabel(item.label)}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className={`transition-transform ${
                        mobileExpandedId === item.id ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>

                  {mobileExpandedId === item.id && (
                    <div className="px-6 pb-4">
                      <MegaPanel {...item.panel} />
                    </div>
                  )}
                </div>
              ))}

              {/* utility links */}
          
            </nav>
          </div>
        </div>
      )}

      {/* tiny fade for content swaps */}
      <style>{`
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-contentFade {
          animation: contentFade 140ms ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-contentFade { animation: none !important; }
        }
      `}</style>
    </>
  );
}
