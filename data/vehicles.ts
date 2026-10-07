// TEMPORARY DEMO STOCK.
// These three records are placeholders so the showroom can be previewed. They are NOT the client's cars.
// To go live: replace `vehicles` with the real stock (photos in public/vehicles/), then set `demoInventory` to false.
// `npm run client:check` fails while `demoInventory` is true.
export const demoInventory = true;

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  color?: string;
  /** Base path of the optimized photo set: `${image}-{720,1280,2000}.{avif,webp}`. */
  image: string;
  imageAlt: string;
  /** CSS object-position used when the photo is cropped. */
  focus?: string;
  availability: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "audi-a3-sedan",
    make: "Audi",
    model: "A3 Sedan",
    year: 2019,
    price: 18900,
    mileage: 64000,
    fuel: "Benzina",
    transmission: "Automatico",
    color: "Grigio",
    image: "/vehicles/audi-a3-sedan",
    imageAlt: "Audi A3 Sedan grigia, vista anteriore di tre quarti",
    focus: "45% 60%",
    availability: "Esempio dimostrativo",
  },
  {
    id: "bmw-x1",
    make: "BMW",
    model: "X1",
    year: 2014,
    price: 12900,
    mileage: 118000,
    fuel: "Diesel",
    transmission: "Manuale",
    color: "Beige metallizzato",
    image: "/vehicles/bmw-x1",
    imageAlt: "BMW X1 beige metallizzata, vista anteriore di tre quarti",
    focus: "50% 55%",
    availability: "Esempio dimostrativo",
  },
  {
    id: "byd-seal-u",
    make: "BYD",
    model: "Seal U DM-i",
    year: 2024,
    price: 32900,
    mileage: 9800,
    fuel: "Ibrida plug-in",
    transmission: "Automatico",
    color: "Bianco",
    image: "/vehicles/byd-seal-u",
    imageAlt: "BYD Seal U DM-i bianca, vista posteriore",
    focus: "50% 40%",
    availability: "Esempio dimostrativo",
  },
];

export const vehicleName = (vehicle: Vehicle) => `${vehicle.make} ${vehicle.model}`;

const euro = new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const km = new Intl.NumberFormat("it-IT", { useGrouping: "always" });
export const formatPrice = (value: number) => euro.format(value);
export const formatMileage = (value: number) => `${km.format(value)} km`;
