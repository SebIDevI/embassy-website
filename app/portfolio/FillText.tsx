"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useInViewport } from "./use-in-view";

/* Outlined word with a liquid fill (see .fx-fill in portfolio.css). On
   hover-capable devices it fills on hover and drains on leave — playful and
   interactive. On touch devices (no hover) it fills when it enters the
   viewport instead. Reduced motion renders it filled (handled in CSS). */
export default function FillText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [ref, inView] = useInViewport<HTMLSpanElement>({ amount: 0.6 });
  const state = useRef({ v: 0 });
  const [canHover, setCanHover] = useState(false);
  const reduce = useReducedMotion();

  const paint = () => ref.current?.style.setProperty("--fill", state.current.v + "%");

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  // touch / no-hover devices: fill on viewport entry, reset on exit (replay)
  useEffect(() => {
    if (canHover || reduce) return;
    if (inView) {
      const tween = gsap.to(state.current, {
        v: 100,
        duration: 1.2,
        ease: "power2.inOut",
        overwrite: true,
        onUpdate: paint,
      });
      return () => {
        tween.kill();
      };
    }
    state.current.v = 0;
    paint();
  }, [canHover, inView, reduce]);

  const fill = (to: number, duration: number, ease: string) => {
    if (!canHover || reduce) return;
    gsap.to(state.current, { v: to, duration, ease, overwrite: true, onUpdate: paint });
  };

  return (
    <span
      ref={ref}
      className={`fx-fill${className ? ` ${className}` : ""}`}
      onMouseEnter={() => fill(100, 0.5, "power3.out")}
      onMouseLeave={() => fill(0, 0.7, "power3.inOut")}
    >
      {children}
    </span>
  );
}
