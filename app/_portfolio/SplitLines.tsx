"use client";

import { useEffect } from "react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useInViewport } from "./use-in-view";

/* Project title that reveals line-by-line — each line rises out of its own
   mask (overflow-hidden) with a staggered GSAP slide. Re-plays every time it
   re-enters the viewport. Respects reduced motion. */
export default function SplitLines({
  items,
  className,
  as: Tag = "div",
}: {
  items: string[];
  className?: string;
  /* Project titles are real headings, not decorative text — rendering them as
     <h3> under each chapter's <h2> gives the page a proper h1→h2→h3 outline
     instead of one h1 followed by nine anonymous divs. */
  as?: "div" | "h2" | "h3";
}) {
  const [ref, inView] = useInViewport<HTMLDivElement>({
    amount: 0.25,
    rootMargin: "0px 0px -12% 0px",
  });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lines = el.querySelectorAll<HTMLElement>(".ln-in");
    if (reduce) {
      gsap.set(lines, { yPercent: 0 });
      return;
    }
    if (!inView) {
      gsap.set(lines, { yPercent: 115 }); // parked below the mask, ready to replay
      return;
    }
    const tween = gsap.fromTo(
      lines,
      { yPercent: 115 },
      { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.11 },
    );
    return () => {
      tween.kill();
    };
  }, [inView, reduce]);

  return (
    <Tag ref={ref} className={className}>
      {items.map((t, i) => (
        <span className="ln-mask" key={i}>
          <span className="ln-in">{t}</span>
        </span>
      ))}
    </Tag>
  );
}
