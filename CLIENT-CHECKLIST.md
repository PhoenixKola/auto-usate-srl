# CLIENT DATA — fill before going live

The design/code is complete, but the client did not provide several facts that must **not** be invented.

Edit `lib/company.ts`:
- registered office
- VAT number
- tax code
- REA
- share capital
- real phone / WhatsApp / opening hours (optional display fields)
- confirm the real domain, set `domainConfirmed: true`, and add the public email

Edit the two constants at the top of `public/api/contact.php`:
- `CONTACT_RECIPIENT`
- `MAIL_FROM`

Then have the client's legal/privacy adviser review the final legal wording and business data.
