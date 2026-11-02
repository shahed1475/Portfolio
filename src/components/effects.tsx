"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement only: content is fully visible without JS.
 * Adds scroll-reveal to [data-reveal], a pointer spotlight to .card and a scroll-progress value.
 */
export function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let io: IntersectionObserver | undefined;
    if (!reduce) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io?.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top > window.innerHeight * 0.92) {
          el.classList.add("will-reveal");
          io?.observe(el);
        }
      });
    }

    const onMove = (ev: PointerEvent) => {
      const card = (ev.target as HTMLElement).closest<HTMLElement>(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", String(ev.clientX - r.left) + "px");
      card.style.setProperty("--my", String(ev.clientY - r.top) + "px");
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    const nav = document.querySelector<HTMLElement>(".nav");
    const root = document.documentElement;
    const onScroll = () => {
      nav?.classList.toggle("is-stuck", window.scrollY > 12);
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--p", max > 0 ? String(Math.min(1, window.scrollY / max)) : "0");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io?.disconnect();
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
