import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { company, hasClientValue } from "@/lib/company";

export const metadata: Metadata = { title: "Privacy", description: "Informativa privacy del sito Auto Usate SRL." };

const sections = [{"id":"titolare","label":"Titolare"},{"id":"dati","label":"Dati trattati"},{"id":"finalita","label":"Finalità e base giuridica"},{"id":"conservazione","label":"Conservazione"},{"id":"destinatari","label":"Destinatari"},{"id":"extra-see","label":"Extra SEE"},{"id":"diritti","label":"I tuoi diritti"},{"id":"conferimento","label":"Conferimento"}];

export default function PrivacyPage() {
  return <LegalLayout eyebrow="PRIVACY" title="Informativa sul trattamento dei dati personali" document="Informativa privacy" sections={sections}>
    <p>Questa informativa descrive il trattamento dei dati personali raccolti tramite questo sito, in particolare attraverso il modulo di contatto. Deve essere verificata e completata con i dati societari definitivi prima della pubblicazione.</p>
    <h2 id="titolare">1. Titolare del trattamento</h2>
    <p><strong>{company.name}</strong>, con sede legale da completare prima della pubblicazione. {hasClientValue(company.email) ? <>Contatto privacy: <a href={`mailto:${company.email}`}>{company.email}</a>.</> : <>Il recapito privacy deve essere completato con il contatto ufficiale del titolare prima della pubblicazione.</>}</p>
    <h2 id="dati">2. Dati trattati</h2>
    <p>Il modulo può raccogliere nome e cognome, indirizzo email, eventuale numero di telefono e il contenuto del messaggio. Il server può inoltre trattare dati tecnici necessari alla sicurezza e al corretto funzionamento, come indirizzo IP, data e ora della richiesta e informazioni tecniche della connessione.</p>
    <h2 id="finalita">3. Finalità e base giuridica</h2>
    <p>I dati inviati volontariamente servono esclusivamente a gestire e rispondere alla richiesta dell&apos;utente, incluse richieste relative alla disponibilità di veicoli o alla valutazione/permuta di un usato. Per le richieste relative a veicoli, disponibilità, permuta o valutazione, il trattamento è basato sull&apos;esecuzione di misure precontrattuali adottate su richiesta dell&apos;interessato. Per eventuali richieste che non abbiano natura precontrattuale, il titolare valuterà la base giuridica appropriata in relazione al contenuto della comunicazione.</p>
    <h2 id="conservazione">4. Modalità e conservazione</h2>
    <p>I dati vengono trattati con misure adeguate alla natura del servizio. I messaggi vengono conservati per il tempo necessario a gestire la richiesta e gli eventuali rapporti che ne derivano, salvo obblighi di legge che richiedano una conservazione diversa. Il sistema antispam può applicare un limite temporaneo alle richieste provenienti dallo stesso indirizzo IP.</p>
    <h2 id="destinatari">5. Destinatari</h2>
    <p>I dati possono essere trattati da soggetti che forniscono servizi tecnici necessari al funzionamento del sito o della posta elettronica, nei limiti delle rispettive funzioni. Il sito non utilizza i dati del modulo per newsletter, profilazione o pubblicità comportamentale.</p>
    <h2 id="extra-see">6. Trasferimenti extra SEE</h2>
    <p>Nella configurazione consegnata il sito non integra strumenti di analytics, mappe embed, font remoti o pixel pubblicitari. Eventuali future integrazioni che comportino trasferimenti di dati dovranno essere valutate e descritte prima dell&apos;attivazione.</p>
    <h2 id="diritti">7. Diritti dell&apos;interessato</h2>
    <p>L&apos;interessato può esercitare, nei casi previsti, i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, nonché proporre reclamo al Garante per la protezione dei dati personali. Le richieste possono essere inviate al recapito email indicato sopra.</p>
    <h2 id="conferimento">8. Natura del conferimento</h2>
    <p>I campi contrassegnati come obbligatori sono necessari per consentirci di rispondere alla richiesta. Il mancato conferimento impedisce l&apos;invio del modulo.</p>
    <div className="legal-callout"><strong>Prima della messa online</strong><p>Inserire sede legale completa, eventuale PEC o contatto privacy dedicato, tempi di conservazione adottati dall&apos;azienda e verificare l&apos;informativa con il consulente privacy dell&apos;azienda.</p></div>
  </LegalLayout>;
}
