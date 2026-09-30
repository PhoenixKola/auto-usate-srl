"use client";

import { useEffect, useRef } from "react";

const widths = [760, 1200, 2000];
const srcSet = (format: "avif" | "webp") => widths.map(w => `/hero/showroom-car-${w}.${format} ${w}w`).join(", ");
const sizes = "(max-width: 1120px) min(112vw, 980px), 64vw";

export function HeroCar() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const hero = stage?.closest("section");
    if (!stage || !hero) return;
    const allowed = window.matchMedia("(pointer: fine) and (min-width: 1121px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const setVars = (x: number, y: number) => {
      stage.style.setProperty("--px", x.toFixed(3));
      stage.style.setProperty("--py", y.toFixed(3));
    };
    const onMove = (event: PointerEvent) => {
      if (!allowed.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        setVars((event.clientX - rect.left) / rect.width - .5, (event.clientY - rect.top) / rect.height - .5);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      setVars(0, 0);
    };
    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="hero-stage" ref={stageRef} aria-hidden="true">
      <div className="hero-stage-beam" />
      <div className="hero-stage-glow" />
      <div className="hero-stage-floor"><span /></div>
      <div className="hero-car-parallax">
        <div className="hero-car-drift">
          <div className="hero-car-enter">
            <picture>
              <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
              <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
              <img className="hero-car-img" src="/hero/showroom-car-1200.webp" alt="" width={2000} height={856} decoding="async" fetchPriority="high" />
            </picture>
            <span className="hero-car-sweep"><span /></span>
            <span className="hero-car-headlight"><span /></span>
            <span className="hero-car-taillight" />
          </div>
        </div>
      </div>
    </div>
  );
}
