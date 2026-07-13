"use client";

import { useEffect } from "react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useInViewport } from "./use-in-view";

type Detail = { label: string; value: string; text: string; tags: string[] };

/* Detail cards that spawn as a chain: the first pops in, the second emerges
   from it and slides to its column, the third emerges from the second. The
   horizontal offset is measured from the grid, so on a stacked layout (mobile)
   the step is 0 and it degrades to a clean sequential fade. Re-plays on
   re-entry; respects reduced motion. */
export default function DetailCards({ details }: { details: Detail[] }) {
  const [ref, inView] = useInViewport<HTMLDivElement>({ amount: 0.3 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = gsap.utils.toArray<HTMLElement>(el.children);
    if (!cards.length) return;
    if (reduce) {
      gsap.set(cards, { opacity: 1, x: 0, scale: 1 });
      return;
    }
    if (!inView) {
      gsap.set(cards, { opacity: 0 });
      return;
    }
    // column step (previous card's home) → each card emerges from the one before
    const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 0;
    gsap.set(cards, { opacity: 0, x: 0, scale: 1 });
    gsap.set(cards[0], { scale: 0.92 });
    if (cards[1]) gsap.set(cards[1], { x: -step });
    if (cards[2]) gsap.set(cards[2], { x: -step });

    const tl = gsap.timeline();
    tl.to(cards[0], { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }, 0);
    if (cards[1]) tl.to(cards[1], { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" }, 0.32);
    if (cards[2]) tl.to(cards[2], { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" }, 0.64);
    return () => {
      tl.kill();
    };
  }, [inView, reduce]);

  return (
    <div className="det">
      <div className="det-in" ref={ref}>
        {details.map((d) => (
          <div className="db" key={d.label}>
            <div className="dl">{d.label}</div>
            <div className="dv">{d.value}</div>
            <p className="ds">{d.text}</p>
            <div className="dtags">
              {d.tags.map((t) => (
                <span className="dt" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
