"use client";

import { useEffect, useRef } from "react";

const widths = [900, 1600, 2400];
const srcSet = (format: "avif" | "webp") => widths.map(w => `/hero/car-cut-${w}.${format} ${w}w`).join(", ");
const sizes = "(max-width: 600px) 175vw, (max-width: 1120px) 104vw, 74vw";

export function HeroCar() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const hero = stage?.closest("section");
    if (!stage || !hero) return;
    const pointer = window.matchMedia("(pointer: fine) and (min-width: 1121px) and (prefers-reduced-motion: no-preference)");
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let pointerFrame = 0;
    let scrollFrame = 0;

    const onMove = (event: PointerEvent) => {
      if (!pointer.matches) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        stage.style.setProperty("--px", ((event.clientX - rect.left) / rect.width - .5).toFixed(3));
        stage.style.setProperty("--py", ((event.clientY - rect.top) / rect.height - .5).toFixed(3));
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(pointerFrame);
      stage.style.setProperty("--px", "0");
      stage.style.setProperty("--py", "0");
    };
    const onScroll = () => {
      if (!motion.matches) return;
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const progress = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
        stage.style.setProperty("--sy", progress.toFixed(3));
      });
    };

    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(pointerFrame);
      cancelAnimationFrame(scrollFrame);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="hero-stage" ref={stageRef} aria-hidden="true">
      <div className="hero-env-wall" />
      <div className="hero-env-arc" />
      <div className="hero-env-beam" />
      <div className="hero-env-floor"><span /></div>
      <div className="hero-car-scroll">
        <div className="hero-car-parallax">
          <div className="hero-car-drift">
            <div className="hero-car-enter">
              <picture>
                <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
                <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
                <img className="hero-car-img" src="/hero/car-cut-1600.webp" alt="" width={2400} height={973} decoding="async" fetchPriority="high" />
              </picture>
              <span className="hero-car-sweep"><span /></span>
              <span className="hero-car-headlight"><span /></span>
              <span className="hero-car-taillight" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
