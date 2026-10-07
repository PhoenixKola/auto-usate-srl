# Auto Usate SRL — Project brief

## Product
One-page, Italian-language landing site for a used-car dealer in Genova, with supporting legal/contact routes and a minimal PHP email endpoint for Hetzner shared hosting.

## Primary users
People in/around Genova looking for a used vehicle or considering a trade-in.

## Primary journeys
1. Understand the offer and location.
2. Describe the type of car wanted and send a focused enquiry.
3. Start a trade-in/valuation enquiry.
4. Read consumer/legal/privacy information.
5. Contact the business.

## Business model
Offline sale of used vehicles. The website is lead-generation and information only; it does not complete vehicle purchases online.

## Visual direction
**Illuminated showroom.** Dark graphite, warm paper, signal orange, large editorial type, headlight/signal-sweep motion, technical lane markings and restrained metallic surfaces. Premium, current and automotive without carbon-fibre clichés, fake speedometers or generic neon-blue dealership visuals.

## Truthfulness rules
- Never invent specific stock, prices, mileage, reviews, company age, warranties or inspection claims.
- The showroom lists the actual stock from `data/vehicles.ts`; demo records are labelled as such until replaced.
- Missing legal/company data must remain explicitly marked as missing until supplied.
- The contact form must not claim successful delivery unless PHP `mail()` returns success.

## Scope
- Home one-pager
- Contact route + contact section
- Privacy, cookie, legal/imprint, legal-guarantee pages
- 404
- Static export
- PHP contact endpoint
- Responsive, keyboard, reduced-motion and SEO basics

## Out of scope
- Inventory CMS/database
- Online checkout/finance application
- User accounts
- Analytics/marketing pixels
- SMTP service/API
