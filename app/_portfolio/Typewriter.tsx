"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useInViewport } from "./use-in-view";

/* Types the text out once, character by character, the first time it scrolls
   into view (once = never replays). A blinking caret shows while typing and
   vanishes when done. Reduced motion shows the full text immediately. */
export default function Typewriter({
  text,
  className,
  cps = 32,
}: {
  text: string;
  className?: string;
  cps?: number; // characters per second
}) {
  const [ref, inView] = useInViewport<HTMLParagraphElement>({ amount: 0.5, once: true });
  const reduce = useReducedMotion();
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;
    if (reduce) {
      el.textContent = text;
      el.classList.add("tw-done");
      started.current = true;
      return;
    }
    if (!inView) {
      el.textContent = ""; // wait with an empty line + blinking caret
      return;
    }
    started.current = true;
    const obj = { i: 0 };
    const tween = gsap.to(obj, {
      i: text.length,
      duration: text.length / cps,
      ease: "none",
      onUpdate: () => {
        el.textContent = text.slice(0, Math.ceil(obj.i));
      },
      onComplete: () => {
        el.textContent = text;
        el.classList.add("tw-done");
      },
    });
    return () => {
      tween.kill();
    };
  }, [inView, reduce, text, cps]);

  return (
    <p ref={ref} className={`tw${className ? ` ${className}` : ""}`}>
      {text}
    </p>
  );
}
