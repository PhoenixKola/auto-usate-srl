import type { SVGProps } from "react";

type IconName =
  | "arrow"
  | "chevron"
  | "check"
  | "mail"
  | "map"
  | "menu"
  | "close"
  | "search"
  | "shield"
  | "spark"
  | "car"
  | "swap"
  | "clock";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    chevron: <path d="m8 10 4 4 4-4"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    map: <><path d="M12 21s6-4.3 6-11a6 6 0 1 0-12 0c0 6.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>,
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.7 2.9 8.1 7 10 4.1-1.9 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    spark: <><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="m5.6 5.6 2.8 2.8"/><path d="m15.6 15.6 2.8 2.8"/><path d="m18.4 5.6-2.8 2.8"/><path d="m8.4 15.6-2.8 2.8"/></>,
    car: <><path d="m5 14 1.8-5.3A2 2 0 0 1 8.7 7h6.6a2 2 0 0 1 1.9 1.7L19 14"/><path d="M4 14h16v4a1 1 0 0 1-1 1h-1v2h-2v-2H8v2H6v-2H5a1 1 0 0 1-1-1v-4Z"/><path d="M7 16h.01"/><path d="M17 16h.01"/></>,
    swap: <><path d="M7 7h12l-3-3"/><path d="m19 7-3 3"/><path d="M17 17H5l3 3"/><path d="m5 17 3-3"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}>{paths[name]}</svg>;
}
