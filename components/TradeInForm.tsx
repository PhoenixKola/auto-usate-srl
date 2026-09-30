"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";

export function TradeInForm() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");

  const go = () => {
    const values = [brand && `Marca ${brand}`, model && `modello ${model}`, year && `anno ${year}`, km && `${km} km`].filter(Boolean).join(", ");
    window.dispatchEvent(new CustomEvent("auto-usate:prefill", { detail: { message: `Vorrei informazioni per la permuta/valutazione del mio usato${values ? `: ${values}` : ""}.` } }));
    document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="trade-form" data-reveal>
      <div className="trade-form-top"><span><Icon name="swap"/> Dati essenziali</span><small>Nessuna quotazione automatica</small></div>
      <div className="trade-fields">
        <label><span>Marca</span><input value={brand} onChange={e => setBrand(e.target.value)} placeholder="es. Fiat" maxLength={60}/></label>
        <label><span>Modello</span><input value={model} onChange={e => setModel(e.target.value)} placeholder="es. 500X" maxLength={60}/></label>
        <label><span>Anno</span><input value={year} onChange={e => setYear(e.target.value.replace(/\D/g, "").slice(0,4))} inputMode="numeric" placeholder="2021"/></label>
        <label><span>Chilometri</span><input value={km} onChange={e => setKm(e.target.value.replace(/\D/g, "").slice(0,7))} inputMode="numeric" placeholder="45000"/></label>
      </div>
      <button type="button" className="trade-submit" onClick={go}>Parliamo del tuo usato <Icon name="arrow"/></button>
    </div>
  );
}
