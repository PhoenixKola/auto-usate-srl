import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Disclaimer", description: "Avvertenze sui contenuti e sulla disponibilità dei veicoli." };

const sections = [{"id":"disponibilita","label":"Disponibilità"},{"id":"dati-veicolo","label":"Dati del veicolo"},{"id":"immagini","label":"Immagini"},{"id":"collegamenti","label":"Link di terzi"}];

export default function DisclaimerPage() {
  return <LegalLayout eyebrow="AVVERTENZE" title="Disclaimer sui contenuti del sito" document="Avvertenze" sections={sections}>
    <p>Il sito ha finalità informative e di contatto. Non conclude contratti di acquisto online e non costituisce, da solo, conferma della disponibilità o delle condizioni di vendita di uno specifico veicolo.</p>
    <h2 id="disponibilita">Disponibilità dei veicoli</h2>
    <p>Il parco auto può cambiare rapidamente. La presenza di un veicolo in vetrina, di un riferimento testuale o di un&apos;immagine non garantisce che un determinato veicolo sia disponibile. La disponibilità deve essere verificata direttamente con Auto Usate SRL.</p>
    <h2 id="dati-veicolo">Dati del singolo veicolo</h2>
    <p>Prezzo, chilometraggio, allestimento, dotazioni, stato d&apos;uso, provenienza, caratteristiche tecniche e condizioni applicabili alla vendita devono essere confermati sulla documentazione relativa al veicolo interessato. In caso di differenze, fanno fede le informazioni verificate e formalizzate nel processo di vendita.</p>
    <h2 id="immagini">Immagini e illustrazioni</h2>
    <p>Le fotografie dei veicoli presentano l&apos;auto a cui sono associate; le immagini decorative del sito hanno funzione grafica e non rappresentano veicoli in vendita. Dati, condizioni e dotazioni del singolo veicolo restano da confermare come indicato sopra.</p>
    <h2 id="collegamenti">Collegamenti di terzi</h2>
    <p>Eventuali link a marketplace, social network o altri servizi esterni portano a piattaforme autonome. Auto Usate SRL non controlla le loro condizioni, disponibilità o informative privacy.</p>
    <div className="legal-callout"><strong>Prima di decidere</strong><p>Per ogni veicolo, chiedi sempre la conferma delle informazioni che per te sono determinanti prima di assumere impegni.</p></div>
  </LegalLayout>;
}
