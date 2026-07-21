"use client";

import { useEffect } from "react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useInViewport } from "./use-in-view";

/* Splits text into words and blurs + rises them in on a stagger when the line
   scrolls into view. Scroll-driven, so it works on touch (no hover needed).
   Replays on re-entry; respects reduced motion. */
export default function SplitWords({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [ref, inView] = useInViewport<HTMLSpanElement>({ amount: 0.5 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".wd");
    if (reduce) {
      gsap.set(words, { opacity: 1, y: 0, filter: "blur(0px)" });
      return;
    }
    if (!inView) {
      gsap.set(words, { opacity: 0, y: "0.5em", filter: "blur(6px)" });
      return;
    }
    const tween = gsap.to(words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.06,
    });
    return () => {
      tween.kill();
    };
  }, [inView, reduce]);

  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <span
          className="wd"
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            willChange: "transform, filter, opacity",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
