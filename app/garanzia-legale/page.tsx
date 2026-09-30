import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Garanzia legale", description: "Informazioni generali sulla garanzia legale per beni usati." };

const sections = [{"id":"conformita","label":"Conformità"},{"id":"venditore","label":"Il venditore"},{"id":"commerciale","label":"Garanzia commerciale"},{"id":"prima-acquisto","label":"Prima dell'acquisto"}];
const facts = [{"label":"Durata minima per l'usato","value":"1 anno"},{"label":"Riferimento","value":"Il venditore"}];

export default function GaranziaPage() {
  return <LegalLayout eyebrow="TUTELA DEL CONSUMATORE" title="Garanzia legale per i beni usati" document="Tutela del consumatore" sections={sections} facts={facts}>
    <p>Questa pagina fornisce una sintesi informativa generale e non sostituisce le condizioni applicabili al singolo contratto né una consulenza legale.</p>
    <h2 id="conformita">Garanzia legale di conformità</h2>
    <p>Quando un professionista vende un bene a un consumatore, il venditore risponde dei difetti di conformità secondo la disciplina del Codice del Consumo. Per i beni usati, venditore e consumatore possono concordare un periodo di responsabilità più breve rispetto a quello ordinario previsto per i beni nuovi, ma non inferiore a un anno.</p>
    <h2 id="venditore">Il venditore resta il riferimento</h2>
    <p>Per i difetti di conformità il consumatore si rivolge al venditore, cioè al soggetto con cui ha concluso il contratto. La concreta applicazione dei rimedi dipende dal caso e dalle condizioni previste dalla legge.</p>
    <h2 id="commerciale">Garanzia commerciale</h2>
    <p>Un&apos;eventuale garanzia commerciale o convenzionale è facoltativa e, quando offerta, si aggiunge ai diritti previsti dalla garanzia legale senza sostituirli o limitarli.</p>
    <h2 id="prima-acquisto">Prima dell&apos;acquisto</h2>
    <p>Le condizioni specifiche del veicolo, la durata applicabile, le eventuali esclusioni consentite dalla legge e le caratteristiche dichiarate devono risultare dalla documentazione relativa alla vendita. Chiedi sempre chiarimenti prima di concludere l&apos;acquisto.</p>
    <div className="legal-callout"><strong>Fonti da verificare</strong><p>Ministero delle Imprese e del Made in Italy — sezioni “Garanzia legale” e “Garanzia commerciale”, oltre al Codice del Consumo nella versione vigente.</p></div>
  </LegalLayout>;
}
