"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";

type Kind = "city" | "suv" | "sedan";

const types: { key: Kind; number: string; title: string; tag: string; fits: string; copy: string; traits: string[] }[] = [
  { key: "city", number: "01", title: "Compatte", tag: "Agili", fits: "Per chi si muove soprattutto in città.", copy: "Tragitti quotidiani e parcheggi che a Genova non regalano centimetri.", traits: ["Città", "Parcheggio facile", "Uso quotidiano"] },
  { key: "suv", number: "02", title: "SUV & Crossover", tag: "Versatili", fits: "Per famiglie e per chi vuole più spazio.", copy: "Posizione di guida alta, senza trasformare la scelta in un catalogo infinito.", traits: ["Spazio a bordo", "Guida alta", "Weekend e viaggi"] },
  { key: "sedan", number: "03", title: "Berline & sportive", tag: "Dinamiche", fits: "Per chi fa molti chilometri o cerca più carattere.", copy: "Una guida più coinvolgente o una presenza più decisa su strada.", traits: ["Lunghe percorrenze", "Comfort", "Carattere"] },
];

// Abstract proportion drawings (length × height), not vehicles.
const bodies: Record<Kind, { x: number; y: number; w: number; h: number; r: number }> = {
  city: { x: 70, y: 60, w: 96, h: 52, r: 16 },
  suv: { x: 42, y: 40, w: 152, h: 72, r: 12 },
  sedan: { x: 20, y: 76, w: 194, h: 36, r: 18 },
};

function TypeGlyph({ kind, className }: { kind: Kind; className?: string }) {
  const b = bodies[kind];
  const dimY = b.y - 16;
  const dimX = b.x + b.w + 14;
  return (
    <svg className={`type-glyph ${className ?? ""}`} viewBox="0 0 240 132" aria-hidden="true" focusable="false">
      <path className="type-glyph-base" d="M6 112h228" />
      <rect className="type-glyph-body" x={b.x} y={b.y} width={b.w} height={b.h} rx={b.r} />
      <g className="type-glyph-dim type-glyph-dim-l">
        <path d={`M${b.x} ${dimY}h${b.w}`} />
        <path d={`M${b.x} ${dimY - 5}v10M${b.x + b.w} ${dimY - 5}v10`} />
      </g>
      <g className="type-glyph-dim type-glyph-dim-h">
        <path d={`M${dimX} ${b.y}V112`} />
        <path d={`M${dimX - 5} ${b.y}h10`} />
      </g>
    </svg>
  );
}

export function TypeSelector() {
  const [active, setActive] = useState(0);

  const ask = (title: string) => {
    window.dispatchEvent(new CustomEvent("auto-usate:prefill", { detail: { message: `Mi interessa un'auto del tipo ${title}. Cosa avete disponibile in questo momento?` } }));
    document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container types-layout">
      <div className="types-intro" data-reveal>
        <p className="section-kicker">02 · IL TIPO GIUSTO</p>
        <h2 id="category-title">Il parco auto cambia.<br /><span>La tua esigenza no.</span></h2>
        <p className="types-lead">Parti dal tipo di auto che si adatta alla tua giornata. Cosa è disponibile in quel momento lo verifichiamo insieme.</p>
        <div className="types-stage" aria-hidden="true">
          {types.map((type, index) => (
            <div key={type.key} className={`types-stage-item ${index === active ? "is-active" : ""}`}>
              <span className="types-stage-index">{type.number}</span>
              <TypeGlyph kind={type.key} />
              <span className="types-stage-caption">{type.title} · proporzioni indicative</span>
            </div>
          ))}
        </div>
      </div>

      <ol className="types-list" data-reveal>
        {types.map((type, index) => (
          <li key={type.key} className={`type-row ${index === active ? "is-active" : ""}`} onPointerEnter={() => setActive(index)} onFocus={() => setActive(index)}>
            <div className="type-row-head"><span className="type-index">{type.number}</span><span className="type-tag">{type.tag}</span></div>
            <h3>{type.title}</h3>
            <TypeGlyph kind={type.key} className="type-row-glyph" />
            <div className="type-row-body">
              <div><span className="type-label">Per chi</span><p><strong>{type.fits}</strong> {type.copy}</p></div>
              <div><span className="type-label">Ideale per</span><ul className="type-traits">{type.traits.map(trait => <li key={trait}>{trait}</li>)}</ul></div>
            </div>
            <button type="button" className="type-cta" onClick={() => ask(type.title)}>Chiedi disponibilità <Icon name="arrow" /></button>
          </li>
        ))}
      </ol>

      <p className="types-note" data-reveal><Icon name="spark" /><span><strong>Disponibilità reale, non un catalogo statico.</strong> Il parco auto può cambiare: contattaci per verificare quali veicoli sono disponibili in questo momento.</span></p>
    </div>
  );
}
