import type { Metadata, Viewport } from "next";
import "./globals.css";
import { RevealProvider } from "@/components/RevealProvider";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: { default: "Auto Usate SRL | Auto usate a Genova", template: "%s | Auto Usate SRL" },
  description: "Auto usate a Genova. Raccontaci cosa cerchi, verifica la disponibilità e contatta Auto Usate SRL in modo diretto.",
  applicationName: "Auto Usate SRL",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Auto Usate SRL",
    title: "Auto Usate SRL | Auto usate a Genova",
    description: "Un modo più semplice e diretto per cercare la tua prossima auto usata a Genova.",
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
