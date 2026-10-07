import type { Metadata, Viewport } from "next";
import "./globals.css";
import { RevealProvider } from "@/components/RevealProvider";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: { default: "Auto Usate SRL | Auto usate a Genova", template: "%s | Auto Usate SRL" },
  description: "Auto usate disponibili a Genova. Guarda le auto in vetrina e contatta Auto Usate SRL per telefono o dal modulo.",
  applicationName: "Auto Usate SRL",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Auto Usate SRL",
    title: "Auto Usate SRL | Auto usate a Genova",
    description: "Le auto usate disponibili a Genova, con i dati essenziali e un contatto diretto.",
    url: company.siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0e10",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        <a className="skip-link" href="#main-content">Salta al contenuto</a>
        <RevealProvider />
        {children}
      </body>
    </html>
  );
}
