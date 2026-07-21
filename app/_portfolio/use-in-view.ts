"use client";

import { useEffect, useRef, useState } from "react";

/* Small IntersectionObserver hook. Flips `inView` true on enter / false on
   leave so animations can replay each time they scroll back into the viewport.
   On phone (≤900px, matching the CSS breakpoint) reveals fire once and never
   replay — repeat animations on touch scroll are janky and distracting.
   StrictMode-safe: an `alive` guard + disconnect on cleanup means no setState
   ever fires after unmount (motion's useInView warns about this with once:false). */
export function useInViewport<T extends Element>({
  amount = 0.5,
  rootMargin = "0px",
  once = false,
}: { amount?: number; rootMargin?: string; once?: boolean } = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onceEffective = once || window.matchMedia("(max-width: 900px)").matches;
    let alive = true;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!alive) return;
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && onceEffective) obs.disconnect();
      },
      { threshold: amount, rootMargin },
    );
    obs.observe(el);
    return () => {
      alive = false;
      obs.disconnect();
    };
  }, [amount, rootMargin, once]);

  return [ref, inView] as const;
}
