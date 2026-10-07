# CLIENT DATA — fill before going live

The design/code is complete, but the client did not provide several facts that must **not** be invented.
`npm run client:check` fails until every item below is done.

## Stock (`data/vehicles.ts`)
- Replace the three demo cars with the real cars on sale: make, model, year, price, mileage, fuel, transmission, colour.
- Add the client's own photos in `public/vehicles/` (`<id>-720/1280/2000` in `.avif` and `.webp`) and point `image` at them.
- Set `availability` to the real status (e.g. "Disponibile").
- Set `demoInventory = false`.

## Company (`lib/company.ts`)
- real phone number (`phone`) — every "Chiama" button dials it automatically once set
- registered office
- VAT number
- tax code
- REA
- share capital
- optional display fields: WhatsApp, opening hours
- confirm the real domain, set `domainConfirmed: true`, and add the public email

## Contact handler (`public/api/contact.php`)
- `CONTACT_RECIPIENT`
- `MAIL_FROM`

Then have the client's legal/privacy adviser review the final legal wording and business data.
