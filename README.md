# Auto Usate SRL — landing page

Production-oriented one-page website for a used-car dealer in Genova. Built with Next.js 16, React 19 and TypeScript, exported as static files for Hetzner shared hosting. The only server-side piece is a small PHP contact endpoint copied into the static export.

## Run locally

Requirements: Node.js 22+ and npm 10+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

> The visual site works in `next dev`, but the PHP email endpoint does not execute inside the Next.js dev server.

## Full checks / production build

```bash
npm run check
```

This runs TypeScript, ESLint and the static production build. The deployable site is generated in `out/`.

Before the final public release, also run:

```bash
npm run client:check
```

That command intentionally fails until the real company/legal data and contact email configuration have replaced the placeholders.

To preview the exact static export:

```bash
npm run start
```

To preview the static export through PHP (useful for exercising `contact.php`):

```bash
npm run build
npm run preview:php
```

Then open `http://127.0.0.1:8080`.

Local PHP `mail()` still requires a locally configured mail transport. The real delivery test should be performed on Hetzner.

## Contact form

`public/api/contact.php` is copied to `out/api/contact.php` during the build.

At the top of that file, set:

```php
const CONTACT_RECIPIENT = 'real-client@example.it';
const MAIL_FROM = 'website@real-domain.it';
```

`MAIL_FROM` should be a mailbox/address on the site's real domain. The visitor's email is used only as `Reply-To`.

The endpoint includes:
- JSON-only POST handling
- same-origin check
- field validation
- header-injection protection
- hidden honeypot
- minimum form-fill time
- lightweight per-IP temporary rate limit
- truthful success/error responses based on PHP `mail()`

No SMTP service, database or paid form provider is required.

## Hetzner deployment

1. Complete the client data listed in `CLIENT-CHECKLIST.md`.
2. Configure the two email constants in `public/api/contact.php`.
3. Run:

```bash
npm install
npm run check
npm run client:check
```

4. Upload the **contents of `out/`** to the site's Hetzner web root (usually the appropriate `public_html` folder).
5. Confirm PHP 8.1+ is enabled for the domain.
6. Submit the real contact form and verify the message arrives.
7. Test a nonexistent URL: Apache should serve the branded `404.html` via `.htaccess`.

Do not upload `node_modules` or the source repository to the web root.

## Client facts that are intentionally not invented

The client supplied only the business name and Genova location. Before public launch, complete in `lib/company.ts`:
- registered office
- VAT number
- tax code
- REA
- share capital
- real domain/email confirmation
- phone, WhatsApp and opening hours if they should be shown

The legal page visibly marks required missing company data instead of publishing fabricated values.

## Privacy / cookies

The delivered site has:
- no analytics
- no profiling/advertising pixels
- no embedded maps/video/chat widgets
- no remote webfonts
- no application-set marketing cookies

Therefore it ships without a consent banner in this configuration. If tracking or optional third-party embeds are added later, reassess the cookie/privacy setup **before** enabling them.

## Project structure

- `app/page.tsx` — one-page commercial experience
- `components/` — header, finder, trade-in, contact and automotive visual components
- `app/privacy/`, `cookie-policy/`, `note-legali/`, `imprint/`, `garanzia-legale/`, `disclaimer/` — legal/support routes
- `public/api/contact.php` — Hetzner PHP mail endpoint
- `public/.htaccess` — 404, caching and basic security headers
- `docs/` — project brief, signature map, legal source notes, acceptance matrix and sign-off
- `CLIENT-CHECKLIST.md` — only facts still required from the client

## Design notes

The site deliberately avoids a generic dealership-template look. Its visual thesis is an illuminated automotive showroom: signal orange, graphite/paper surfaces, oversized editorial typography, custom vector vehicles, lane/headlight motion and varied section composition.

It also deliberately avoids fake vehicle inventory. Until real stock is provided, category visuals are clearly generic and all availability is handled as an enquiry.
