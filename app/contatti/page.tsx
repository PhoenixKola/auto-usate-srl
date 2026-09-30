import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Contatti", description: "Contatta Auto Usate SRL a Genova." };

export default function ContattiPage() {
  return <><Header/><main className="standalone-contact"><div className="container standalone-contact-grid"><div><Link href="/" className="legal-back">← Torna al sito</Link><p className="section-kicker">CONTATTI</p><h1>Scrivici.<br/><em>Senza giri.</em></h1><p>Raccontaci che auto cerchi o quale usato vuoi valutare. Siamo a {company.city}.</p></div><ContactForm compact/></div></main><Footer/></>;
}
