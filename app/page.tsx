import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCar } from "@/components/HeroCar";
import { CarFinder } from "@/components/CarFinder";
import { TypeSelector } from "@/components/TypeSelector";
import { TradeInForm } from "@/components/TradeInForm";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { company, hasClientValue } from "@/lib/company";

export const metadata: Metadata = {
  title: "Auto usate a Genova",
  description: "Auto Usate SRL: cerca la tua prossima auto usata a Genova, chiedi disponibilità e parlaci del tuo usato da permutare.",
};

const process = [
  { number: "01", title: "Raccontaci cosa cerchi", copy: "Budget, tipologia, alimentazione e priorità. Bastano poche informazioni utili." },
  { number: "02", title: "Verifichiamo la disponibilità", copy: "Il parco auto cambia: il contatto serve a capire cosa è realmente disponibile in quel momento." },
  { number: "03", title: "Vieni a vederla", copy: "Definiamo insieme i dettagli pratici per visionare l'auto e approfondire le informazioni che ti interessano." },
];

const processVisuals = [
  <div key="needs" className="process-visual">
    <span className="process-visual-label">Ci bastano</span>
    <ul className="process-tags">{["Budget", "Tipologia", "Alimentazione", "Priorità"].map(tag => <li key={tag}>{tag}</li>)}</ul>
  </div>,
  <div key="check" className="process-visual">
    <span className="process-visual-label">La tua richiesta</span>
    <div className="process-rail" aria-hidden="true"><span className="process-rail-scan" /></div>
    <ol className="process-states"><li>Ricevuta</li><li className="is-current">In verifica</li><li>Risposta</li></ol>
  </div>,
  <div key="visit" className="process-visual">
    <span className="process-visual-label">Dove</span>
    <div className="process-visit">
      <span><Icon name="map" />{company.city} ({company.province})</span>
      <a href="#contatti">Parla con noi <Icon name="arrow" /></a>
    </div>
  </div>,
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: company.name,
  url: company.siteUrl,
  ...(hasClientValue(company.email) ? { email: company.email } : {}),
  areaServed: { "@type": "City", name: "Genova" },
  address: { "@type": "PostalAddress", addressLocality: "Genova", addressRegion: "GE", addressCountry: "IT" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section id="top" className="hero-section">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="signal-dot"/>GENOVA · AUTO USATE</div>
              <h1 className="hero-title">
                <span className="hero-word"><span>Usato.</span></span>
                <span className="hero-accent">Scelto con più criterio.</span>
              </h1>
              <div className="hero-lower">
                <p>Dicci cosa cerchi. <span>Verifichiamo cosa è disponibile.</span></p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#auto">Trova la tua auto <Icon name="arrow"/></a>
                  <a className="button button-ghost" href="#permuta">Hai un usato? <span>Permutalo</span></a>
                </div>
              </div>
            </div>
            <HeroCar />
            <div className="hero-rail">
              <p><span>Genova</span><span>Contatto diretto</span><span>Disponibilità da verificare</span></p>
              <a className="hero-rail-scroll" href="#auto">Scorri <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section id="auto" className="finder-section">
          <div className="container">
            <div className="section-heading split-heading" data-reveal>
              <div><p className="section-kicker">01 · TROVA LA DIREZIONE</p><h2>Non serve sfogliare<br/><em>cento schede.</em></h2></div>
              <p>Parti da ciò che conta davvero. Questa ricerca non inventa stock: prepara una richiesta precisa da inviarci in pochi secondi.</p>
            </div>
            <CarFinder />
          </div>
        </section>

        <section className="category-section" aria-labelledby="category-title">
          <TypeSelector />
        </section>

        <section id="come-funziona" className="process-section">
          <div className="process-backdrop" aria-hidden="true"><span>A</span><span>→</span><span>B</span></div>
          <div className="container">
            <div className="section-heading process-heading" data-reveal><p className="section-kicker">03 · COME FUNZIONA</p><h2>Dalla ricerca<br/>alla <em>visione.</em></h2></div>
            <div className="process-track" data-reveal>
              <div className="process-line" aria-hidden="true"><span/></div>
              {process.map((step, index) => <article key={step.number} className="process-step"><span className="process-node">{step.number}</span><div className="process-step-copy"><h3>{step.title}</h3><p>{step.copy}</p>{processVisuals[index]}</div>{index < process.length - 1 ? <Icon name="arrow"/> : null}</article>)}
            </div>
          </div>
        </section>

        <section id="permuta" className="trade-section">
          <div className="container trade-layout">
            <div className="trade-copy" data-reveal>
              <p className="section-kicker">04 · IL TUO USATO</p>
              <h2>Un&apos;auto entra.<br/><em>Un&apos;auto esce.</em></h2>
              <p>Se hai un veicolo da permutare o vuoi semplicemente parlarci della sua possibile valutazione, lasciaci i dati essenziali. La valutazione non viene simulata dal sito: viene approfondita dopo il contatto.</p>
              <div className="trade-badges"><span><Icon name="check"/>Nessun prezzo automatico</span><span><Icon name="check"/>Valutazione dopo verifica</span></div>
            </div>
            <TradeInForm />
          </div>
        </section>

        <section className="info-section" aria-labelledby="info-title">
          <div className="container info-layout">
            <div className="info-intro" data-reveal>
              <p className="section-kicker">05 · COMPRARE INFORMATI</p>
              <h2 id="info-title">Prima di scegliere,<br/><em>sai cosa conta.</em></h2>
              <p className="info-lead">Tre cose da avere chiare prima di acquistare un&apos;auto usata. Qui in breve, per esteso nelle pagine dedicate.</p>
              <p className="info-disclaimer">Sintesi informativa generale: non sostituisce le condizioni del singolo contratto né una consulenza legale.</p>
            </div>
            <ol className="info-rail" data-reveal>
              <li className="info-item">
                <span className="info-node">01</span>
                <div className="info-main">
                  <span className="info-kind">Prima di tutto</span>
                  <h3>Disponibilità e condizioni</h3>
                  <p>Il parco auto cambia rapidamente: una categoria o un&apos;immagine sul sito non garantisce che un veicolo sia disponibile. I dati di ogni auto si confermano sulla sua documentazione.</p>
                </div>
                <div className="info-side">
                  <span className="info-side-label">Da confermare sul singolo veicolo</span>
                  <ul className="info-chips"><li>Prezzo</li><li>Chilometraggio</li><li>Dotazioni</li><li>Stato d&apos;uso</li><li>Condizioni di vendita</li></ul>
                  <Link className="info-link" href="/disclaimer/">Leggi le avvertenze <Icon name="arrow"/></Link>
                </div>
              </li>
              <li className="info-item">
                <span className="info-node">02</span>
                <div className="info-main">
                  <span className="info-kind">La tua tutela</span>
                  <h3>Garanzia legale</h3>
                  <p>Quando un professionista vende un&apos;auto usata a un consumatore si applica la garanzia legale di conformità. Per i difetti di conformità il riferimento è il venditore.</p>
                </div>
                <div className="info-side">
                  <div className="info-fact"><strong>1 anno</strong><span>Per l&apos;usato la durata può essere ridotta per accordo, ma non sotto un anno.</span></div>
                  <p className="info-sub"><b>Garanzia commerciale:</b> se offerta, è facoltativa e si aggiunge a quella legale. Non la sostituisce e non la limita.</p>
                  <Link className="info-link" href="/garanzia-legale/">La nota sulla garanzia legale <Icon name="arrow"/></Link>
                </div>
              </li>
              <li className="info-item">
                <span className="info-node">03</span>
                <div className="info-main">
                  <span className="info-kind">Prima di firmare</span>
                  <h3>Informazioni prima dell&apos;acquisto</h3>
                  <p>Le condizioni specifiche della vendita devono risultare dalla documentazione. Chiedi sempre chiarimenti su ciò che per te è determinante, prima di assumere impegni.</p>
                </div>
                <div className="info-side">
                  <span className="info-side-label">Verifica nei documenti</span>
                  <ul className="info-checks"><li><Icon name="check"/>Durata della garanzia applicabile</li><li><Icon name="check"/>Eventuali esclusioni consentite dalla legge</li><li><Icon name="check"/>Caratteristiche dichiarate del veicolo</li></ul>
                  <a className="info-link" href="#contatti">Chiedi chiarimenti <Icon name="arrow"/></a>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section id="contatti" className="contact-section">
          <div className="contact-ticker" aria-hidden="true"><span>PARLIAMONE · PARLIAMONE · PARLIAMONE · PARLIAMONE ·</span></div>
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal>
              <p className="section-kicker">06 · CONTATTO DIRETTO</p>
              <h2>La prossima mossa<br/>è <em>semplice.</em></h2>
              <p>Scrivici cosa cerchi o parlaci del tuo usato. Il messaggio viene inviato direttamente all&apos;indirizzo configurato per Auto Usate SRL.</p>
              <div className="contact-meta">
                <div><Icon name="map"/><span>Dove</span><strong>{company.city} ({company.province})</strong></div>
                <div><Icon name="mail"/><span>Contatto</span><strong>{hasClientValue(company.email) ? company.email : "Modulo diretto"}</strong></div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
