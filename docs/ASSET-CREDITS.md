# Asset credits

## Hero vehicle — `public/hero/car-cut-{900,1600,2400}.{avif,webp}`

- Source: Unsplash — "A car is shown in the dark on a black background"
  https://unsplash.com/photos/a-car-is-shown-in-the-dark-on-a-black-background-K8ZtyTUCuPI
- Author: Sunder Muthukumaran (@sunder_2k25) — a 3D render, published 2024-01-05
- License: Unsplash License (https://unsplash.com/license) — free for commercial use, no attribution required (credit kept here as good practice). The license does not allow selling unmodified copies or building a competing image service; this use is neither.
- Changes made: cropped to the vehicle and floor from a 4200 px source; shadows lifted with a global tone curve; the car was cut out onto a transparent background using a silhouette mask built from the rim light, with the floor reflection kept only where it has light; exported as AVIF/WebP (with transparency) at 900/1600/2400 px (2400×973).
- Usage: **decorative only.** The render is based on a production coupé, but no badge or plate is visible. The site never names the model or presents it as stock, a price or availability.
- Considered and rejected (2026-09-30): a front three-quarter Unsplash studio shot (`mzeZvq_dSpE`) — it shows a model-name plate and manufacturer logos, and its light-grey studio would need heavy retouching and compositing.

## Demo stock photos — `public/vehicles/*-{720,1280,2000}.{avif,webp}`

Temporary photos for the **demo** vehicles in `data/vehicles.ts` (`demoInventory = true`). Replace them with the client's own photos of the real stock before release. Each label was checked against the photo: badges, body style and generation are visible.

| File | Shown as | Source | Author | License |
| --- | --- | --- | --- | --- |
| `audi-a3-sedan` | Audi A3 Sedan (8V, front three-quarter) | https://unsplash.com/photos/4a-FCwGXNgA | Александр Бендус (Aleksandr Bendus) | Unsplash License |
| `bmw-x1` | BMW X1 (E84, front three-quarter) | https://unsplash.com/photos/HnYZBW2Sq4s | Vladimir Yelizarov | Unsplash License |
| `byd-seal-u` | BYD Seal U DM-i (rear; model badge visible) | https://unsplash.com/photos/QAXCKxZ4NE4 | Ido l (@ido006) | Unsplash License |

- Unsplash License: free for commercial use, no attribution required (credited here as good practice); stored locally, not hotlinked.
- Changes made: cropped to the car, light consistent grade (slightly lower saturation and brightness), exported as AVIF/WebP at 720/1280/2000 px. The BMW's readable registration plate was blurred; the Audi's plate is blank in the original.
- Year, mileage, price and specs in `data/vehicles.ts` are invented demo values, not facts about the photographed cars. The site marks every demo car as "Esempio dimostrativo" and shows a preview notice above the stock.
- Considered and rejected: an Audi S3 Sportback with a novelty "STABLE" plate, a BMW X1 in front of a dealer's branded logo wall, and other photos whose exact model could not be verified (an A6, an X3 and an X2 that came up in A3 and X1 searches).
