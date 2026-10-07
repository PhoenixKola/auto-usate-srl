import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCar } from "@/components/HeroCar";
import { Showroom } from "@/components/Showroom";
import { ContactForm } from "@/components/ContactForm";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icons";
import { company, hasClientValue, phoneContact } from "@/lib/company";
import { vehicles } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Auto usate a Genova",
  description: "Auto Usate SRL: le auto usate disponibili a Genova, con anno, chilometri e prezzo. Chiamaci o scrivici per l'auto che ti interessa.",
};

const process = [
  { number: "01", title: "Guarda le auto disponibili", copy: "Le auto che vedi in vetrina sono quelle che abbiamo. Per ognuna trovi i dati essenziali." },
  { number: "02", title: "Chiamaci o scrivici", copy: "Chiedi direttamente dell'auto che ti interessa: per telefono o dal modulo, con il veicolo già indicato." },
  { number: "03", title: "Vieni a vederla", copy: "Definiamo insieme i dettagli pratici per vedere l'auto di persona e chiarire ciò che ti interessa." },
];

const processVisuals = [
  <div key="facts" className="process-visual">
    <span className="process-visual-label">Per ogni auto</span>
    <ul className="process-tags">{["Anno", "Chilometri", "Alimentazione", "Prezzo"].map(tag => <li key={tag}>{tag}</li>)}</ul>
  </div>,
  <div key="contact" className="process-visual">
    <span className="process-visual-label">Due strade</span>
    <div className="process-paths">
      <PhoneLink className="process-path" label="Chiamaci"><Icon name="phone" />Telefono</PhoneLink>
      <a className="process-path" href="#modulo-contatto"><Icon name="mail" />Modulo</a>
    </div>
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
  ...(phoneContact.ready ? { telephone: phoneContact.display } : {}),
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
                <p>Auto usate disponibili a Genova. <span>Guarda cosa c&apos;è oggi.</span></p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#auto">Vedi le auto <Icon name="arrow"/></a>
                  <PhoneLink className="button button-ghost" label="Chiamaci"><Icon name="phone"/>Chiamaci</PhoneLink>
                </div>
              </div>
            </div>
            <HeroCar />
            <div className="hero-rail">
              <p><span>Genova</span><span>Auto disponibili</span><span>Telefono o modulo</span></p>
              <a className="hero-rail-scroll" href="#auto">Scorri <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section id="auto" className="showroom-section" aria-labelledby="auto-title">
          <div className="container">
            <div className="showroom-heading" data-reveal>
              <div>
                <p className="section-kicker">01 · AUTO DISPONIBILI</p>
                <h2 id="auto-title">In vetrina<br/><em>adesso.</em></h2>
              </div>
              <div className="showroom-intro">
                <p className="showroom-count"><strong>{String(vehicles.length).padStart(2, "0")}</strong> auto in vetrina</p>
                <p>Poche auto, una per una. Per ognuna trovi i dati essenziali: se ti interessa, chiamaci o scrivici.</p>
              </div>
            </div>
            <Showroom />
          </div>
        </section>

        <section id="come-funziona" className="process-section">
          <div className="process-backdrop" aria-hidden="true"><span>A</span><span>→</span><span>B</span></div>
          <div className="container">
            <div className="section-heading process-heading" data-reveal><p className="section-kicker">02 · COME FUNZIONA</p><h2>Dalla vetrina<br/>alla <em>visione.</em></h2></div>
            <div className="process-track" data-reveal>
              <div className="process-line" aria-hidden="true"><span/></div>
              {process.map((step, index) => <article key={step.number} className="process-step"><span className="process-node">{step.number}</span><div className="process-step-copy"><h3>{step.title}</h3><p>{step.copy}</p>{processVisuals[index]}</div>{index < process.length - 1 ? <Icon name="arrow"/> : null}</article>)}
            </div>
          </div>
        </section>

        <section id="info" className="info-section" aria-labelledby="info-title">
          <div className="container info-layout">
            <div className="info-intro" data-reveal>
              <p className="section-kicker">03 · COMPRARE INFORMATI</p>
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
                  <p>Un&apos;auto in vetrina può essere venduta da un momento all&apos;altro. Prima di decidere, conferma con noi la disponibilità dell&apos;auto che ti interessa: i suoi dati si confermano sulla sua documentazione.</p>
                </div>
                <div className="info-side">
                  <span className="info-side-label">Da confermare sull&apos;auto che scegli</span>
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
                  <p>Le condizioni specifiche della vendita devono risultare dalla documentazione dell&apos;auto. Chiedi sempre chiarimenti su ciò che per te è determinante, prima di assumere impegni.</p>
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
              <p className="section-kicker">04 · CONTATTO DIRETTO</p>
              <h2>La prossima mossa<br/>è <em>semplice.</em></h2>
              <p>Chiamaci o scrivici per l&apos;auto che ti interessa: scegli la strada più comoda per te.</p>
              <div className="contact-paths">
                {phoneContact.ready ? (
                  <a className="contact-path" href={phoneContact.href}>
                    <span className="contact-path-label"><Icon name="phone"/>Telefono</span>
                    <strong>Chiamaci direttamente</strong>
                    <span className="contact-path-value">{phoneContact.display}</span>
                  </a>
                ) : (
                  <div className="contact-path contact-path-pending">
                    <span className="contact-path-label"><Icon name="phone"/>Telefono</span>
                    <strong>Chiamaci direttamente</strong>
                    <span className="contact-path-value">{phoneContact.display}</span>
                    <small>Numero in arrivo</small>
                  </div>
                )}
                <a className="contact-path" href="#modulo-contatto">
                  <span className="contact-path-label"><Icon name="mail"/>Messaggio</span>
                  <strong>Scrivici dal modulo</strong>
                  <span className="contact-path-value">Compila il modulo <Icon name="arrow"/></span>
                </a>
              </div>
              <p className="contact-where"><Icon name="map"/>{company.city} ({company.province})</p>
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
