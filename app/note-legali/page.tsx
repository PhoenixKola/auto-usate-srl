import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { company, hasClientValue } from "@/lib/company";

export const metadata: Metadata = { title: "Note legali", description: "Dati societari e note legali di Auto Usate SRL." };

const sections = [{"id":"impresa","label":"Dati dell'impresa"},{"id":"finalita","label":"Finalità del sito"},{"id":"contenuti","label":"Contenuti"},{"id":"proprieta","label":"Proprietà intellettuale"},{"id":"collegamenti","label":"Link esterni"}];

export default function NoteLegaliPage() {
  return <LegalLayout eyebrow="INFORMAZIONI SOCIETARIE" title="Note legali" document="Note legali" sections={sections}>
    <p>Questa pagina raccoglie le informazioni societarie e le condizioni generali di utilizzo del sito. I dati societari mancanti non vengono sostituiti con valori di esempio.</p>
    <h2 id="impresa">Dati dell&apos;impresa</h2>
    <dl className="legal-data">
      <div><dt>Ragione sociale</dt><dd>{company.name}</dd></div>
      <div><dt>Sede legale</dt><dd className={!hasClientValue(company.registeredOffice) ? "needs-data" : ""}>{company.registeredOffice}</dd></div>
      <div><dt>P. IVA</dt><dd className={!hasClientValue(company.vatNumber) ? "needs-data" : ""}>{company.vatNumber}</dd></div>
      <div><dt>Codice fiscale</dt><dd className={!hasClientValue(company.taxCode) ? "needs-data" : ""}>{company.taxCode}</dd></div>
      <div><dt>REA</dt><dd className={!hasClientValue(company.rea) ? "needs-data" : ""}>{company.rea}</dd></div>
      <div><dt>Capitale sociale</dt><dd className={!hasClientValue(company.shareCapital) ? "needs-data" : ""}>{company.shareCapital}</dd></div>
      <div><dt>Email</dt><dd className={!hasClientValue(company.email) ? "needs-data" : ""}>{hasClientValue(company.email) ? <a href={`mailto:${company.email}`}>{company.email}</a> : company.email}</dd></div>
    </dl>
    <h2 id="finalita">Finalità del sito</h2>
    <p>Il sito presenta l&apos;attività di Auto Usate SRL e consente di inviare richieste informative. Salvo diversa indicazione esplicita, la presenza di un&apos;immagine, categoria o descrizione generale non costituisce conferma della disponibilità di uno specifico veicolo né offerta contrattuale.</p>
    <h2 id="contenuti">Contenuti e disponibilità</h2>
    <p>La disponibilità dei veicoli deve essere verificata direttamente con l&apos;azienda. Prezzi, chilometraggi, dotazioni e condizioni di un veicolo devono essere riferiti esclusivamente a dati reali messi a disposizione dall&apos;azienda e non sono generati automaticamente dal sito.</p>
    <h2 id="proprieta">Proprietà intellettuale</h2>
    <p>Marchio, interfaccia, testi e componenti grafici originali del sito non possono essere riutilizzati in modo da generare confusione circa la titolarità o l&apos;origine del servizio. Restano salvi i diritti su eventuali marchi di terzi citati esclusivamente a fini descrittivi.</p>
    <h2 id="collegamenti">Collegamenti esterni</h2>
    <p>Eventuali collegamenti verso piattaforme di terzi aprono servizi autonomi, soggetti alle rispettive condizioni e informative.</p>
    <div className="legal-callout warning"><strong>Dati mancanti</strong><p>La pagina non è idonea alla pubblicazione definitiva finché i campi societari evidenziati non vengono completati con i dati ufficiali dell&apos;azienda.</p></div>
  </LegalLayout>;
}
