"use client";

import { useEffect, useRef } from "react";

const widths = [900, 1600, 2400];
const srcSet = (format: "avif" | "webp") => widths.map(w => `/hero/car-cut-${w}.${format} ${w}w`).join(", ");
const sizes = "(max-width: 600px) 172vw, (max-width: 1120px) 104vw, 74vw";

// Traced from the cut-out's alpha, in a 1000×406 box matching the image.
const ROOFLINE = "M1.7 164.2 L10.8 156.1 L20.0 140.1 L29.2 135.1 L38.3 130.7 L47.5 126.8 L56.7 123.1 L65.8 119.3 L75.0 115.7 L84.2 112.5 L93.3 109.7 L102.5 107.5 L111.7 105.6 L120.8 104.0 L130.0 102.5 L139.2 101.1 L148.3 99.7 L157.5 98.5 L166.7 97.2 L175.8 96.1 L185.0 95.1 L194.2 94.3 L203.3 93.6 L212.5 92.9 L221.7 92.2 L230.8 91.5 L240.0 90.8 L249.2 90.3 L258.3 89.7 L267.5 88.3 L276.7 87.1 L285.8 86.0 L295.0 86.9 L304.2 86.1 L313.3 83.5 L322.5 78.0 L331.7 72.6 L340.8 67.3 L350.0 62.0 L359.2 56.9 L368.3 51.7 L377.5 46.7 L386.7 41.7 L395.8 36.9 L405.0 32.3 L414.2 27.8 L423.3 23.5 L432.5 19.2 L441.7 15.4 L450.8 12.2 L460.0 9.9 L469.2 7.8 L478.3 6.1 L487.5 4.6 L496.7 3.5 L505.8 2.5 L515.0 1.8 L524.2 1.3 L533.3 0.8 L542.5 0.6 L551.7 0.3 L560.8 0.1 L570.0 0.1 L579.2 0.4 L588.3 0.8 L597.5 1.3 L606.7 1.7 L615.8 2.2 L625.0 2.9 L634.2 3.8 L643.3 4.7 L652.5 5.7 L661.7 6.8 L670.8 7.9 L680.0 7.9 L689.2 7.0 L698.3 5.8 L707.5 8.8 L716.7 13.6 L725.8 18.9 L735.0 21.8 L744.2 24.2 L753.3 26.7 L762.5 29.2 L771.7 31.9 L780.8 34.5 L790.0 37.4 L799.2 40.3 L808.3 43.4 L817.5 46.3 L826.7 49.4 L835.8 52.6 L845.0 55.8 L854.2 59.0 L863.3 62.2 L872.5 65.1 L881.7 65.8 L890.8 65.1 L900.0 63.7 L909.2 61.8 L918.3 59.0 L927.5 55.9 L936.7 53.7 L945.8 52.7 L955.0 52.9 L964.2 54.1 L973.3 90.4 L982.5 130.5 L991.7 167.9";

const parts = ["wheel-front", "wheel-rear", "lower", "front", "cabin", "rear"] as const;

function CarPicture({ priority = false }: { priority?: boolean }) {
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img className="hero-car-img" src="/hero/car-cut-1600.webp" alt="" width={2400} height={973} decoding="async" fetchPriority={priority ? "high" : "auto"} />
    </picture>
  );
}

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
      <div className="hero-stage-inner">
        <div className="hero-env">
          <div className="hero-env-wall" />
          <div className="hero-env-arc" />
          <div className="hero-env-beam" />
          <div className="hero-env-floor"><span /></div>
        </div>
        <svg className="hero-blueprint" viewBox="0 0 1000 406" preserveAspectRatio="none" focusable="false">
          <path className="hero-blueprint-ground" d="M0 287.5H1000" pathLength={1} />
          <circle className="hero-blueprint-wheel" cx="175" cy="221" r="68" pathLength={1} />
          <circle className="hero-blueprint-wheel" cx="788" cy="223" r="68" pathLength={1} />
          <path className="hero-blueprint-roof" d={ROOFLINE} pathLength={1} />
        </svg>
        <div className="hero-car-scroll">
          <div className="hero-car-assembly">
            {parts.map(part => <div key={part} className={`hero-part hero-part-${part}`}><CarPicture /></div>)}
          </div>
          <div className="hero-car-final">
            <CarPicture priority />
            <span className="hero-car-sweep"><span /></span>
            <span className="hero-car-spec"><span /></span>
            <span className="hero-car-headlight"><span /></span>
            <span className="hero-car-taillight" />
          </div>
        </div>
      </div>
    </div>
  );
}
