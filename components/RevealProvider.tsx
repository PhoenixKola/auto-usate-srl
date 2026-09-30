"use client";

import { useEffect } from "react";

export function RevealProvider() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("motion-ready", "reduce-motion");
      return;
    }
    document.documentElement.classList.add("motion-ready");
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}
