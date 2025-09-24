import { useEffect, useLayoutEffect, useRef, useState } from "react";
import dockData from "../data/sideDockData";

/**
 * SideDock
 * Hover switch behavior:
 *  - If closed and you hover an item => open that item
 *  - If open and you hover a different item => CLOSE current fully, then OPEN new
 *  - Rapid hovers are sequenced; only the latest hover wins (race-safe)
 */
export default function SideDock({
  overlap = 12,                         // px: hide seam under rail curve
  topLock = null,                       // number (px) to lock top under navbar; else align to rail
  durationMs = 400,                     // slide duration (close + open each take this)
  easing = "cubic-bezier(.2,.8,.2,1)",  // smooth ease
  microFade = true,                     // small fade on content swap
  clearOnClose = true,                  // clear content after close completes
}) {
  // layout anchors
  const railRef = useRef(null);
  const panelRef = useRef(null);

  const [left, setLeft] = useState(120);
  const [top, setTop] = useState(120);
  const [height, setH] = useState(0);

  // behavior
  const [isOpen, setOpen] = useState(false);
  const [activeId, setActive] = useState(null);   // id currently rendered
  const [contentKey, setCKey] = useState(0);      // remount key for micro-fade

  // sequencing / race safety
  const closeTimerRef = useRef(null);
  const switchTokenRef = useRef(0);     // increments on every hover intent
  const pendingIdRef = useRef(null);    // next id to open after close
  const isSwitchingRef = useRef(false); // we're in close→open sequence

  // measure rail → place panel (no gap + same height)
  const measure = () => {
    const r = railRef.current?.getBoundingClientRect();
    if (!r) return;
    setLeft(Math.round(r.right) - overlap);
    setTop(topLock != null ? topLock : Math.round(r.top));
    setH(Math.round(r.height));
  };

  useLayoutEffect(() => {
    measure();
    const onResize = () => measure();
    const onScroll = () => measure();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [overlap, topLock]);

  // outside click / Esc → close
  useEffect(() => {
    const onDocClick = (e) => {
      const rail = railRef.current;
      const panel = panelRef.current;
      if (!rail?.contains(e.target) && !panel?.contains(e.target)) {
        requestClose({ clear: true });
      }
    };
    const onKey = (e) => e.key === "Escape" && requestClose({ clear: true });
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --------- helpers: close/open orchestration ---------

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const requestClose = ({ clear = clearOnClose } = {}) => {
    clearCloseTimer();
    isSwitchingRef.current = true;
    setOpen(false);
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null;
      if (clear) {
        setActive(null); // remove content after close completes
      }
      isSwitchingRef.current = false;
    }, durationMs + 20); // small buffer
  };

  const requestOpen = (id) => {
    // mount content right before opening
    setActive(id);
    if (microFade) setCKey((k) => k + 1);
    // open
    setOpen(true);
  };

  // --------- rail hover handlers ---------

  const handleEnterIcon = (id) => {
    // new intent token
    const token = ++switchTokenRef.current;

    // same item + already open → do nothing
    if (isOpen && activeId === id && !isSwitchingRef.current) return;

    // If closed → open directly with this id
    if (!isOpen && !isSwitchingRef.current) {
      clearCloseTimer();
      requestOpen(id);
      return;
    }

    // If open and different id → close first, then open new
    pendingIdRef.current = id;
    clearCloseTimer();
    isSwitchingRef.current = true;
    setOpen(false);

    // After close completes, if this intent is still latest, open pending
    closeTimerRef.current = setTimeout(() => {
      if (switchTokenRef.current !== token) {
        // a newer hover came in; let that sequence handle it
        return;
      }
      // mount new content & open
      requestOpen(pendingIdRef.current);
      isSwitchingRef.current = false;
      closeTimerRef.current = null;
    }, durationMs + 20);
  };

  const handleLeaveRail = () => {
    // Delay closing to allow cursor to move into the panel
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      requestClose({ clear: true });
    }, 200);
  };

  // keep open while panel hovered; close on leave
  const handleEnterPanel = () => {
    // cancel any pending close when hovering panel and ensure it stays open
    clearCloseTimer();
    if (!isOpen) {
      setOpen(true);
    }
  };
  const handleLeavePanel = () => {
    requestClose({ clear: true });
  };

  const current = dockData.items.find((x) => x.id === activeId);

  // container animation styles
  const closedClip = "inset(0 100% 0 0 round 24px)";
  const openClip = "inset(0 0 0 0 round 24px)";
  const panelStyle = {
    left,
    top,
    height: height || undefined,
    zIndex: 20, // under rail & mega menu
    transitionProperty: "clip-path, transform, opacity",
    transitionDuration: `${durationMs}ms`,
    transitionTimingFunction: easing,
    clipPath: isOpen ? openClip : closedClip,
    transform: isOpen ? "translateX(0)" : "translateX(-8px)",
    opacity: isOpen ? 1 : 0.001,
  };

  // cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* RAIL (z-40) */}
      <aside
        ref={railRef}
        className="
          fixed top-4/7 -translate-y-1/2 z-30
          hidden md:flex flex-col
          w-16 rounded-tr-3xl rounded-br-3xl bg-white/95 backdrop-blur shadow-xl border border-gray-200 overflow-hidden
        "
        onMouseLeave={handleLeaveRail}
      >
        {dockData.items.map((it, idx) => {
          const active = activeId === it.id && isOpen;
          const Icon = it.icon;
          return (
            <div key={it.id} className="relative">
              <button
                type="button"
                title={it.label}
                onMouseEnter={() => handleEnterIcon(it.id)}
                className={`w-full h-18 grid place-items-center transition-colors ${
                  active ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {Icon ? <Icon className="w-7 h-7" /> : null}
              </button>
              {/* dashed divider (non-interactive to avoid flicker) */}
              {idx < dockData.items.length - 1 && (
                <div className="px-4 pointer-events-none">
                  <div className="border-t border-dashed border-gray-300" />
                </div>
              )}
            </div>
          );
        })}
      </aside>

      {/* PANEL (independent fixed; under rail) */}
      <div
        ref={panelRef}
        id="sidedock-instant-panel"
        style={panelStyle}
        className="
          fixed w-[min(1100px,78vw)]
          rounded-3xl bg-white shadow-2xl border border-gray-200 overflow-hidden
        "
        onMouseEnter={handleEnterPanel}
        onMouseLeave={handleLeavePanel}
      >
        {/* Mount content only when we have an active section */}
        {activeId && current && (
          <section key={contentKey} className={microFade ? "animate-contentFade" : ""}>
            <header className="px-8 pt-6 pb-2">
              <h3 className="text-3xl font-semibold text-blue-700">
                {current.panel.title}
              </h3>
            </header>

            <div className="px-6 md:px-8 pb-8 pt-4 overflow-y-auto h-[calc(100%-72px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10">
                {current.panel.products.map((p) => (
                  <article key={p.slug} className="text-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-40 h-28 object-contain mx-auto"
                      loading="lazy"
                    />
                    <h4 className="mt-4 font-extrabold tracking-tight">{p.code}</h4>
                    <p className="text-gray-700 text-lg leading-snug">{p.title}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* tiny fade for content swaps (doesn't block switching) */}
      <style>{`
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-contentFade {
          animation: contentFade 140ms ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          #sidedock-instant-panel { transition: none !important; }
          .animate-contentFade { animation: none !important; }
        }
      `}</style>
    </>
  );
}
