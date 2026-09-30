import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Cookie policy", description: "Cookie policy del sito Auto Usate SRL." };

const sections = [{"id":"tecnici","label":"Cookie tecnici"},{"id":"banner","label":"Banner di consenso"},{"id":"modifiche","label":"Modifiche future"}];
const facts = [{"label":"Cookie facoltativi","value":"Nessuno dal codice del sito"},{"label":"Banner di consenso","value":"Non mostrato oggi"}];

export default function CookiePolicyPage() {
  return <LegalLayout eyebrow="COOKIE" title="Cookie policy" document="Cookie policy" sections={sections} facts={facts}>
    <p>La versione consegnata del sito è stata progettata per funzionare senza cookie di profilazione, analytics, pixel pubblicitari o contenuti incorporati di terze parti.</p>
    <h2 id="tecnici">Cookie e tecnologie tecniche</h2>
    <p>Il sito non imposta cookie facoltativi tramite il codice applicativo. Il server di hosting può utilizzare log o meccanismi tecnici necessari a sicurezza, erogazione e diagnosi del servizio, secondo la configurazione del provider.</p>
    <h2 id="banner">Nessun banner nella configurazione attuale</h2>
    <p>Poiché il progetto non attiva strumenti facoltativi di tracciamento o profilazione, non viene mostrato un banner di consenso. Questo approccio evita di chiedere un consenso che il sito non necessita di raccogliere.</p>
    <h2 id="modifiche">Modifiche future</h2>
    <p>Se in futuro verranno aggiunti analytics, video incorporati, mappe di terze parti, chat, pixel pubblicitari o altri servizi che memorizzano o leggono informazioni dal dispositivo per finalità non strettamente necessarie, la presente policy e il meccanismo di consenso dovranno essere aggiornati prima dell&apos;attivazione.</p>
    <div className="legal-callout"><strong>Nota operativa</strong><p>Non aggiungere Google Analytics, Meta Pixel, mappe embed o widget esterni senza una nuova verifica privacy/cookie.</p></div>
  </LegalLayout>;
}
