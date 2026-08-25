"use client";

import { useEffect } from "react";

/**
 * Anime l'apparition des éléments portant [data-reveal] / [data-rule].
 * Un seul IntersectionObserver pour toute la page : plus léger qu'une
 * librairie d'animation, et sans coût au chargement initial.
 */
export function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-rule]",
    );

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => {
        if (el.hasAttribute("data-reveal")) el.dataset.reveal = "in";
        if (el.hasAttribute("data-rule")) el.dataset.rule = "in";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-reveal")) el.dataset.reveal = "in";
          if (el.hasAttribute("data-rule")) el.dataset.rule = "in";
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
