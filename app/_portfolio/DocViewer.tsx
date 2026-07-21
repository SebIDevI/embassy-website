/* No "use client" here on purpose: this is only ever rendered from
   Portfolio.tsx, which already carries the directive. Marking it again would
   make it a client entry point, and Next then rejects the `onClose` function
   prop as non-serializable. */
import { useCallback, useEffect, useRef, useState } from "react";

export type Doc = {
  id: string;
  /* page images live at `${dir}/01.webp` … zero-padded to two digits */
  dir: string;
  pages: number;
  pdf: string;
  title: string;
};

/* Fullscreen document reader — vertical scroll-snap, so the same gesture works
   as a wheel/trackpad scroll on desktop and a swipe on touch. Pages lazy-load;
   only the current one and its neighbours are given loading priority. */
export default function DocViewer({ doc, onClose }: { doc: Doc | null; onClose: () => void }) {
  const [page, setPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageEls = useRef<(HTMLDivElement | null)[]>([]);

  const go = useCallback((delta: number) => {
    setPage((cur) => {
      const next = Math.min(Math.max(cur + delta, 1), pageEls.current.length || 1);
      pageEls.current[next - 1]?.scrollIntoView({ behavior: "smooth", block: "start" });
      return next;
    });
  }, []);

  /* reset to the cover whenever a different document is opened */
  useEffect(() => {
    if (doc) setPage(1);
  }, [doc]);

  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); go(-1); }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [doc, onClose, go]);

  /* keep the counter in sync with whatever the user scrolled to */
  useEffect(() => {
    if (!doc || !scrollRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = pageEls.current.indexOf(e.target as HTMLDivElement);
            if (i >= 0) setPage(i + 1);
          }
        }
      },
      { root: scrollRef.current, threshold: 0.55 },
    );
    pageEls.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [doc]);

  if (!doc) return null;

  return (
    <div className="docv" role="dialog" aria-modal="true" aria-label={doc.title}>
      <div className="docv-bar">
        <span className="docv-title">{doc.title}</span>
        <span className="docv-count">
          {page} / {doc.pages}
        </span>
        <div className="docv-actions">
          <button className="docv-close" onClick={onClose} aria-label="Închide">
            ×
          </button>
        </div>
      </div>

      {/* backdrop click closes; the pages themselves stop propagation */}
      <div className="docv-scroll" ref={scrollRef} onClick={onClose}>
        {Array.from({ length: doc.pages }, (_, i) => (
          <div
            className="docv-page"
            key={i}
            ref={(el) => {
              pageEls.current[i] = el;
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${doc.dir}/${String(i + 1).padStart(2, "0")}.webp`}
              alt={`${doc.title} — pagina ${i + 1}`}
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        ))}
      </div>

      <button className="docv-nav docv-prev" onClick={() => go(-1)} disabled={page === 1} aria-label="Pagina anterioară">
        ‹
      </button>
      <button
        className="docv-nav docv-next"
        onClick={() => go(1)}
        disabled={page === doc.pages}
        aria-label="Pagina următoare"
      >
        ›
      </button>
    </div>
  );
}
