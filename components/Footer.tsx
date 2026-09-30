import Link from "next/link";
import { company, hasClientValue } from "@/lib/company";
import { BrandLockup } from "@/components/Brand";
import { SectionLink } from "@/components/SectionLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-marquee" aria-hidden="true"><span>AUTO USATE · GENOVA · AUTO USATE · GENOVA · AUTO USATE · GENOVA ·</span></div>
      <div className="container footer-grid">
        <div>
          <SectionLink section="top" className="footer-logo" aria-label="Auto Usate SRL, torna all'inizio"><BrandLockup /></SectionLink>
          <p className="footer-copy">Auto usate a Genova. Ricerca semplice, contatto diretto e disponibilità da verificare sul veicolo reale.</p>
        </div>
        <div>
          <p className="footer-label">Naviga</p>
          <SectionLink section="auto">Le auto</SectionLink>
          <SectionLink section="come-funziona">Come funziona</SectionLink>
          <SectionLink section="permuta">Permuta</SectionLink>
          <SectionLink section="contatti">Contatti</SectionLink>
        </div>
        <div>
          <p className="footer-label">Legale</p>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/cookie-policy/">Cookie policy</Link>
          <Link href="/note-legali/">Note legali</Link>
          <Link href="/garanzia-legale/">Garanzia legale</Link>
          <Link href="/disclaimer/">Disclaimer</Link>
        </div>
        <div>
          <p className="footer-label">Sede</p>
          <span>{company.city} ({company.province}), {company.country}</span>
          {hasClientValue(company.registeredOffice) ? <span>{company.registeredOffice}</span> : null}
          {company.phone ? <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a> : null}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <span className="nivello-credit">Realizzato con <svg className="nivello-bolt" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><linearGradient id="nivello-bolt-fill" x1="6" y1="2" x2="18" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#ffd84d"/><stop offset=".55" stopColor="#ffa531"/><stop offset="1" stopColor="#ff5b32"/></linearGradient></defs><path d="M13.6 2 4.8 13.4h6.1L9.7 22l9.5-12.1h-6.3L13.6 2Z" fill="url(#nivello-bolt-fill)"/></svg> da <a href="https://www.nivello.it" target="_blank" rel="noopener noreferrer">Nivello</a></span>
      </div>
    </footer>
  );
}