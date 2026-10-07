"use client";

import { Icon } from "@/components/Icons";
import { PhoneLink } from "@/components/PhoneLink";
import { demoInventory, formatMileage, formatPrice, vehicleName, vehicles, type Vehicle } from "@/data/vehicles";

const pad = (n: number) => String(n).padStart(2, "0");
const sizes = (featured: boolean) => featured ? "(max-width: 1480px) 100vw, 1480px" : "(max-width: 820px) 100vw, 64vw";

function askAbout(vehicle: Vehicle) {
  const name = vehicleName(vehicle);
  const message = `Sono interessato a: ${name} (${vehicle.year}, ${formatMileage(vehicle.mileage)}, ${formatPrice(vehicle.price)}).\nVorrei ricevere maggiori informazioni.`;
  window.dispatchEvent(new CustomEvent("auto-usate:prefill", { detail: { message, vehicle: name } }));
  document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" });
}

export function Showroom() {
  return (
    <div className="showroom">
      {demoInventory ? (
        <p className="showroom-demo" role="note"><strong>Anteprima del sito.</strong> Le auto qui sotto sono esempi dimostrativi, non veicoli in vendita: lo stock reale verrà pubblicato a breve.</p>
      ) : null}
      <ol className="showroom-list">
        {vehicles.map((vehicle, index) => {
          const featured = index === 0;
          const name = vehicleName(vehicle);
          const specs = [
            ["Anno", String(vehicle.year)],
            ["Chilometri", formatMileage(vehicle.mileage)],
            ["Alimentazione", vehicle.fuel],
            ["Cambio", vehicle.transmission],
            ...(vehicle.color ? [["Colore", vehicle.color]] : []),
          ];
          return (
            <li key={vehicle.id} className={`vehicle ${featured ? "vehicle-featured" : ""}`} data-reveal>
              <article aria-labelledby={`vehicle-${vehicle.id}`}>
                <figure className="vehicle-media">
                  <picture>
                    <source type="image/avif" srcSet={`${vehicle.image}-720.avif 720w, ${vehicle.image}-1280.avif 1280w, ${vehicle.image}-2000.avif 2000w`} sizes={sizes(featured)} />
                    <source type="image/webp" srcSet={`${vehicle.image}-720.webp 720w, ${vehicle.image}-1280.webp 1280w, ${vehicle.image}-2000.webp 2000w`} sizes={sizes(featured)} />
                    <img src={`${vehicle.image}-1280.webp`} alt={vehicle.imageAlt} width={1280} height={853} loading={featured ? "eager" : "lazy"} decoding="async" style={vehicle.focus ? { objectPosition: vehicle.focus } : undefined} />
                  </picture>
                </figure>
                <div className="vehicle-body">
                  <div className="vehicle-top">
                    <span className="vehicle-index"><b>{pad(index + 1)}</b> / {pad(vehicles.length)}</span>
                    <span className="vehicle-status">{vehicle.availability}</span>
                  </div>
                  <div className="vehicle-identity">
                    <h3 id={`vehicle-${vehicle.id}`}><span className="vehicle-make">{vehicle.make}</span> <span className="vehicle-model">{vehicle.model}</span></h3>
                    <p className="vehicle-price"><span>Prezzo</span>{formatPrice(vehicle.price)}</p>
                  </div>
                  <dl className="vehicle-specs">
                    {specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                  </dl>
                  <div className="vehicle-actions">
                    <button type="button" className="button button-primary" onClick={() => askAbout(vehicle)} aria-label={`Chiedi informazioni su ${name}`}>Chiedi informazioni <Icon name="arrow" /></button>
                    <PhoneLink className="button button-ghost vehicle-call" label={`Chiama per ${name}`}><Icon name="phone" />Chiama</PhoneLink>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
