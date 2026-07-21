"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useInViewport } from "./use-in-view";

/* Parse a display stat ("21K", "+340%", "4.6%", "3,5M", "5K€", "-38%") into an
   animatable number + its fixed prefix/suffix. Both decimal marks are accepted
   and the counter renders back in whichever one was written, so the Romanian
   stats ("3,5M") don't drift to a dot mid-count. Anything that doesn't start
   with an optional sign followed by a digit (e.g. "B2B", "Global") stays
   static — no weird mid-string counting. */
const NUM_RE = /^([+-]?)(\d[\d.,]*)(.*)$/;

function parse(value: string) {
  const m = NUM_RE.exec(value.trim());
  if (!m) return null;
  const [, sign, digits, suffix] = m;
  const comma = digits.includes(",");
  const clean = comma ? digits.replace(",", ".") : digits;
  const dot = clean.indexOf(".");
  const decimals = dot === -1 ? 0 : clean.length - dot - 1;
  const target = parseFloat(clean);
  if (!isFinite(target)) return null;
  return { sign, target, decimals, suffix, comma };
}

const fmt = (v: number, decimals: number, comma = false) => {
  const s = v.toFixed(decimals);
  return comma ? s.replace(".", ",") : s;
};

/* Number that counts up (GSAP) with a springy pop-in (motion) when it scrolls
   into view. Staggered by `index` so a row cascades. Respects reduced motion. */
export default function CountUp({
  value,
  index = 0,
}: {
  value: string;
  index?: number;
}) {
  const [wrapRef, inView] = useInViewport<HTMLSpanElement>({
    amount: 0.55,
    rootMargin: "0px 0px -10% 0px",
  });
  const numRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parse(value), [value]);
  const delay = index * 0.08;

  useEffect(() => {
    const el = numRef.current;
    if (!parsed || !el) return;
    if (reduce) {
      el.textContent = fmt(parsed.target, parsed.decimals, parsed.comma);
      return;
    }
    if (!inView) {
      el.textContent = fmt(0, parsed.decimals, parsed.comma); // reset so it re-counts on re-entry
      return;
    }
    el.textContent = fmt(0, parsed.decimals, parsed.comma); // start from 0, no target flash
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: parsed.target,
      duration: 1.4,
      delay,
      ease: "power3.out",
      onUpdate: () => {
        el.textContent = fmt(obj.v, parsed.decimals, parsed.comma);
      },
    });
    return () => {
      tween.kill();
    };
  }, [inView, reduce, parsed, delay]);

  return (
    <motion.span
      ref={wrapRef}
      style={{ display: "inline-block", willChange: "transform" }}
      initial={reduce ? false : { scale: 0.55, rotate: -4 }}
      animate={
        reduce ? undefined : inView ? { scale: 1, rotate: 0 } : { scale: 0.55, rotate: -4 }
      }
      transition={{ type: "spring", stiffness: 240, damping: 12, delay }}
    >
      {parsed ? (
        <>
          {parsed.sign}
          <span ref={numRef}>{fmt(parsed.target, parsed.decimals, parsed.comma)}</span>
          {parsed.suffix}
        </>
      ) : (
        value
      )}
    </motion.span>
  );
}
