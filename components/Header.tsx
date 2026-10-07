"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";
import { BrandLockup } from "@/components/Brand";
import { SectionLink } from "@/components/SectionLink";

const nav = [
  ["#auto", "Le auto"],
  ["#come-funziona", "Come funziona"],
  ["#info", "Info"],
  ["#contatti", "Contatti"],
] as const;

export function Header() {
  const pathname = usePathname();
  const sectionHref = (hash: string) => pathname === "/" ? hash : `/${hash}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-header-inner">
        <SectionLink section="top" className="brand-lockup" aria-label="Auto Usate SRL, torna all'inizio">
          <BrandLockup />
        </SectionLink>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          {nav.map(([href, label]) => <a key={href} href={sectionHref(href)}>{label}</a>)}
        </nav>

        <a className="header-cta" href={sectionHref("#contatti")}>Parliamone <Icon name="arrow" /></a>
        <button className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Chiudi menu" : "Apri menu"} onClick={() => setOpen(v => !v)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? "mobile-nav-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav-inner">
          {nav.map(([href, label], index) => <a key={href} href={sectionHref(href)} style={{"--nav-index": index} as React.CSSProperties} onClick={() => setOpen(false)}>{label}<span>0{index + 1}</span></a>)}
          <a className="mobile-nav-cta" href={sectionHref("#contatti")} onClick={() => setOpen(false)}>Scrivici adesso <Icon name="arrow" /></a>
        </div>
      </div>
    </header>
  );
}
