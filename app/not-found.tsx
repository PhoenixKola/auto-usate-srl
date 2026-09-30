import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return <><Header/><main className="not-found"><div className="not-found-road" aria-hidden="true"><span/><span/><span/></div><div className="container not-found-inner"><p className="section-kicker">ERRORE 404</p><div className="not-found-code">4<span>0</span>4</div><h1>Questa strada<br/>non porta da nessuna parte.</h1><p>La pagina che cerchi non esiste o è stata spostata.</p><Link className="button button-primary" href="/">Torna alla home <Icon name="arrow"/></Link></div></main><Footer/></>;
}
