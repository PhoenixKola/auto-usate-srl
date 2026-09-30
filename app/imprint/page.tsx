import type { Metadata } from "next";
import NoteLegaliPage from "../note-legali/page";

export const metadata: Metadata = {
  title: "Imprint / Note legali",
  alternates: { canonical: "/note-legali/" },
  robots: { index: false, follow: true },
};

export default NoteLegaliPage;
