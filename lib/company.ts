export type CompanyConfig = {
  name: string;
  shortName: string;
  city: string;
  province: string;
  country: string;
  siteUrl: string;
  domainConfirmed: boolean;
  email: string;
  registeredOffice: string;
  vatNumber: string;
  taxCode: string;
  rea: string;
  shareCapital: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
};

export const company: CompanyConfig = {
  name: "AUTO USATE SRL",
  shortName: "Auto Usate",
  city: "Genova",
  province: "GE",
  country: "Italia",
  siteUrl: "https://www.autousatesrl.it",
  domainConfirmed: false,
  email: "DA COMPLETARE",

  // TODO(client): these values are legally important for an Italian S.r.l.
  // Replace before production publication. They are intentionally not invented.
  registeredOffice: "DA COMPLETARE",
  vatNumber: "DA COMPLETARE",
  taxCode: "DA COMPLETARE",
  rea: "DA COMPLETARE",
  shareCapital: "DA COMPLETARE",
  phone: "",
  whatsapp: "",
  openingHours: "",
};

export const hasClientValue = (value: string) =>
  Boolean(value && value !== "DA COMPLETARE");