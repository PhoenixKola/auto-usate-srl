# UX / UI Acceptance Matrix

| Requirement | Route / component | Verification | Status |
|---|---|---|---|
| Modern one-page experience | `/` | Rendered visual review | PASS |
| 5-flame hero | `HeroCar`, hero section | 390 / 768 / 1366 / 1920 visual review | PASS |
| Anchor navigation | `Header` | Home anchors + cross-route target review | PASS |
| Useful no-backend car search | `CarFinder` | State + prefill code review | PASS |
| Trade-in flow | `TradeInForm` | Input + contact prefill code review | PASS |
| No fabricated vehicle inventory | Home | Content sweep | PASS |
| PHP contact endpoint | `/api/contact.php` | PHP syntax, method guard, config guard | PASS; live mail blocked until Hetzner email is configured |
| Privacy page | `/privacy/` | Route/source review | PASS; client fields still required |
| Cookie policy | `/cookie-policy/` | Route/source review | PASS |
| Imprint / note legali | `/note-legali/`, `/imprint/` | Route/source review | PASS; client fields still required |
| Legal guarantee page | `/garanzia-legale/` | Route/source review | PASS |
| Vehicle-content disclaimer | `/disclaimer/` | Route/source review | PASS |
| Branded 404 | `app/not-found.tsx`, `.htaccess` | Source + Apache rule review | PASS |
| Nivello footer credit | `Footer` | Render/link review | PASS |
| Responsive | Global | 390 / 768 / 1366 / 1920 screenshot review | PASS |
| Reduced motion | Global CSS | Media-query review | PASS |
| No analytics/cookie profiling | Repository | repository sweep | PASS |
| Accessible semantics/focus | Shared UI | code review | PASS |
| CSS syntax | `app/globals.css` | `tinycss2` parser | PASS |
| TS/TSX syntax | repository | TypeScript parser | PASS |
| Full Next production build | repository | Requires dependency install | BLOCKED in build sandbox by npm registry DNS (`EAI_AGAIN`); run `npm run check` locally |
