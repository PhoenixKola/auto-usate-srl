"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icons";

type State = "idle" | "sending" | "success" | "error";

type Fields = { name: string; email: string; phone: string; message: string; consent: boolean; website: string };
const empty: Fields = { name: "", email: "", phone: "", message: "", consent: false, website: "" };

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [fields, setFields] = useState<Fields>(empty);
  const [state, setState] = useState<State>("idle");
  const [notice, setNotice] = useState("");
  const startedAt = useRef<number>(0);

  useEffect(() => {
    startedAt.current = Date.now();

    const handler = (event: Event) => {
      const custom = event as CustomEvent<{message?: string}>;
      if (custom.detail?.message) setFields(current => ({ ...current, message: custom.detail.message ?? current.message }));
    };
    window.addEventListener("auto-usate:prefill", handler as EventListener);
    return () => window.removeEventListener("auto-usate:prefill", handler as EventListener);
  }, []);

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => setFields(current => ({ ...current, [key]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim() || !fields.consent) {
      setState("error");
      setNotice("Controlla i campi obbligatori e conferma di aver letto l'informativa privacy.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      setState("error");
      setNotice("Inserisci un indirizzo email valido.");
      return;
    }
    setState("sending");
    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...fields, startedAt: startedAt.current }),
      });
      const data = await response.json().catch(() => null) as {message?: string} | null;
      if (!response.ok) throw new Error(data?.message || "Invio non riuscito.");
      setState("success");
      setNotice(data?.message || "Messaggio inviato. Ti ricontatteremo appena possibile.");
      setFields(empty);
      startedAt.current = Date.now();
    } catch (error) {
      setState("error");
      const isLocal = typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname);
      setNotice(isLocal ? "Il form PHP funziona solo tramite un server PHP. Esegui npm run build e poi npm run preview:php per provarlo in locale." : error instanceof Error ? error.message : "Invio non riuscito. Riprova tra poco.");
    }
  }

  return (
    <form className={`contact-form ${compact ? "contact-form-compact" : ""}`} onSubmit={submit} noValidate>
      <div className="contact-form-grid">
        <label><span>Nome e cognome *</span><input value={fields.name} onChange={e => update("name", e.target.value)} autoComplete="name" maxLength={120} placeholder="Mario Rossi" required/></label>
        <label><span>Email *</span><input type="email" value={fields.email} onChange={e => update("email", e.target.value)} autoComplete="email" maxLength={180} placeholder="mario@email.it" required/></label>
        <label><span>Telefono</span><input type="tel" value={fields.phone} onChange={e => update("phone", e.target.value)} autoComplete="tel" maxLength={40} placeholder="+39 ..."/></label>
        <label className="contact-message"><span>Come possiamo aiutarti? *</span><textarea value={fields.message} onChange={e => update("message", e.target.value)} rows={compact ? 4 : 5} maxLength={5000} placeholder="Raccontaci che auto cerchi o quale usato vuoi valutare." required/></label>
      </div>
      <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={fields.website} onChange={e => update("website", e.target.value)}/></label>
      <label className="consent-row">
        <input type="checkbox" checked={fields.consent} onChange={e => update("consent", e.target.checked)} />
        <span>Confermo di aver letto l&apos;<Link href="/privacy/">informativa privacy</Link>. *</span>
      </label>
      {notice ? <div className={`form-notice ${state === "success" ? "form-notice-success" : "form-notice-error"}`} role={state === "error" ? "alert" : "status"}>{notice}</div> : null}
      <button type="submit" className="contact-submit" disabled={state === "sending"}>{state === "sending" ? <span className="spinner"/> : null}{state === "sending" ? "Invio…" : "Invia la richiesta"}<Icon name="arrow"/></button>
      <p className="form-footnote">Niente newsletter, niente profilazione: i dati servono solo a gestire la richiesta.</p>
    </form>
  );
}