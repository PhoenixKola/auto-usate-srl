import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";

export type LegalSection = { id: string; label: string };
export type LegalFact = { label: string; value: string };

const pad = (n: number) => String(n).padStart(2, "0");

export function LegalLayout({ eyebrow, title, document, updated = "30 settembre 2026", sections, facts, children }: {
  eyebrow: string;
  title: string;
  document: string;
  updated?: string;
  sections: LegalSection[];
  facts?: LegalFact[];
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-hero-grid" aria-hidden="true" />
          <div className="container legal-hero-layout">
            <div className="legal-hero-copy">
              <Link className="legal-back" href="/">← Torna al sito</Link>
              <p className="section-kicker">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="legal-updated">Ultimo aggiornamento: {updated}</p>
            </div>
            <nav className="legal-index" aria-label="Indice della pagina">
              <div className="legal-index-head">
                <span className="legal-doc" aria-hidden="true">§</span>
                <div><span>Documento</span><strong>{document}</strong></div>
                <span className="legal-index-count">{pad(sections.length)} sezioni</span>
              </div>
              {facts?.length ? (
                <dl className="legal-facts">
                  {facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
                </dl>
              ) : null}
              <ol className="legal-index-list">
                {sections.map((section, index) => (
                  <li key={section.id} style={{ "--i": index } as CSSProperties}>
                    <a href={`#${section.id}`}><span>{pad(index + 1)}</span>{section.label}<Icon name="arrow" /></a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>
        <section className="legal-body"><div className="container legal-container">{children}</div></section>
      </main>
      <Footer />
    </>
  );
}
