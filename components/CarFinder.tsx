"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/Icons";

const types = ["Compatta", "SUV / Crossover", "Berlina", "Sportiva"];
const budgets = ["Fino a 10k", "10–20k", "20–30k", "30k+"];
const fuels = ["Benzina", "Diesel", "Ibrida", "Elettrica", "Indifferente"];

export function CarFinder() {
  const [type, setType] = useState(types[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [fuel, setFuel] = useState(fuels[4]);
  const summary = useMemo(() => `${type} · ${budget} · ${fuel}`, [type, budget, fuel]);

  const sendToContact = () => {
    window.dispatchEvent(new CustomEvent("auto-usate:prefill", { detail: { message: `Sto cercando: ${summary}. Vorrei sapere quali auto avete disponibili.` } }));
    document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="finder-panel" data-reveal>
      <div className="finder-status"><span className="finder-status-dot"/>RICERCA RAPIDA <span>01 / 03</span></div>
      <div className="finder-row">
        <div className="finder-question">
          <span className="finder-number">01</span>
          <div><p>Che tipo di auto cerchi?</p><div className="choice-strip">{types.map(item => <button type="button" key={item} className={type === item ? "is-active" : ""} onClick={() => setType(item)}>{item}</button>)}</div></div>
        </div>
        <div className="finder-question">
          <span className="finder-number">02</span>
          <div><p>Budget indicativo</p><div className="choice-strip">{budgets.map(item => <button type="button" key={item} className={budget === item ? "is-active" : ""} onClick={() => setBudget(item)}>{item}</button>)}</div></div>
        </div>
        <div className="finder-question">
          <span className="finder-number">03</span>
          <div><p>Alimentazione</p><div className="choice-strip choice-strip-wrap">{fuels.map(item => <button type="button" key={item} className={fuel === item ? "is-active" : ""} onClick={() => setFuel(item)}>{item}</button>)}</div></div>
        </div>
      </div>
      <div className="finder-result">
        <div><span>La tua ricerca</span><strong>{summary}</strong></div>
        <button type="button" onClick={sendToContact}>Chiedi disponibilità <Icon name="arrow" /></button>
      </div>
    </div>
  );
}
