import fs from "node:fs";

const company = fs.readFileSync(new URL("../lib/company.ts", import.meta.url), "utf8");
const php = fs.readFileSync(new URL("../public/api/contact.php", import.meta.url), "utf8");

const problems = [];
if (company.includes('"DA COMPLETARE"')) problems.push("lib/company.ts contiene ancora dati societari DA COMPLETARE");
if (company.includes("domainConfirmed: false")) problems.push("conferma il dominio in lib/company.ts e imposta domainConfirmed: true");
if (php.includes("@esempio.invalid")) problems.push("public/api/contact.php contiene ancora indirizzi email di configurazione");

if (problems.length) {
  console.error("\nRelease bloccata: servono ancora dati reali del cliente.\n");
  for (const problem of problems) console.error(`- ${problem}`);
  console.error("\nVedi CLIENT-CHECKLIST.md.\n");
  process.exit(1);
}
console.log("Client data check: PASS");
