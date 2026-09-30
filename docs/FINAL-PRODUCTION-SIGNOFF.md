# Final Production Sign-off

## PASS
- Project brief and signature-experience plan
- Custom brand mark / wordmark assets
- One-page commercial experience
- Contact route + contact section
- Finder and trade-in prefill interactions
- Privacy / cookie / note-legali / imprint / guarantee / disclaimer routes
- Branded 404 + Apache `ErrorDocument`
- SEO metadata, sitemap, robots and `AutoDealer` structured data
- Keyboard-visible focus and skip link
- Reduced-motion fallback
- No analytics, profiling pixels, remote fonts or third-party embeds
- Nivello footer credit
- PHP 8.4 syntax check
- PHP GET method guard (405) and unconfigured-mail guard (503)
- CSS parser: zero syntax errors
- TS/TSX parser: zero syntax errors
- `package-lock.json` validated/reconciled offline by npm
- npm lock audit metadata: 0 known vulnerabilities reported
- Screenshot-driven visual review at 390, 768, 1366 and 1920 widths

## ENVIRONMENT BLOCKED
The current execution sandbox could not download npm packages because `registry.npmjs.org` returned DNS `EAI_AGAIN`. Therefore `next build`, ESLint, full TypeScript semantic checking and the Playwright suite could not be executed here. The repository contains the exact commands to run these gates once dependencies are available.

## CLIENT INPUT REQUIRED BEFORE LIVE RELEASE
- Confirm the real website domain and set `domainConfirmed: true`
- Registered office
- VAT number / tax code / REA / share capital
- Public contact/privacy email
- Confirm `CONTACT_RECIPIENT` and `MAIL_FROM` in `public/api/contact.php`
- Phone / WhatsApp / opening hours if these should be displayed
- Final legal/privacy review by the company adviser
- Real Hetzner `mail()` delivery test after upload

`npm run client:check` intentionally fails until these release-blocking facts are supplied.

## INTENTIONALLY DEFERRED
- Real inventory feed/CMS
- Marketplace integration
- Analytics / marketing consent system
- Online purchase or finance flows
