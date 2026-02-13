# Mobile Performance Plan (PageSpeed Insights 66 → target 85+)

Addresses the PageSpeed Insights mobile report: image optimization, unused JS/CSS, payload size, and main-thread work.

---

## 1. Image optimization (biggest impact – LCP/FCP)

**Report:** ~16.5 MiB est. savings; images are 1st-party largest cost.

### 1.1 Hero / LCP images (critical path)

| Current | Size | Displayed (mobile) | Action |
|--------|------|--------------------|--------|
| `IMG_4445_….jpg` (living room) | 11,621 KiB | 1154×451 | WebP/AVIF + srcset (e.g. 640w, 1154w, 1920w) + `sizes="100vw"` |
| `IMG_4448 edit no sky_(2)_….jpg` (LCP hero) | 473 KiB | 100vw | WebP/AVIF + srcset for 640/960/1280/1920 + keep `fetchpriority="high"` / `loading="eager"` |
| `iStock-1458935906_….jpg` (sunset) | 1,882 KiB | 454×239 | WebP/AVIF + srcset (e.g. 480w, 960w) |

**Implementation options (pick one and stick with it):**

- **Option A – vite-imagetools (recommended if dev works):**  
  Re-enable `vite-imagetools` in `vite.config.ts`. Change imports to use query params, e.g.  
  `import hero from '@assets/IMG_4448...jpg?w=640;960;1920&format=webp;avif'`  
  Use generated `srcset` and `sizes` in `<img>`. Keeps one source asset, build-time derivatives.

- **Option B – Pre-built responsive assets:**  
  Export WebP/AVIF (and optionally 1–2 widths) from attached_assets (e.g. with Sharp or Squoosh).  
  Put them in `client/public/` or keep in `attached_assets` and import. Use `<picture>` or `<img srcSet=... sizes=...>` manually.

- **Option C – Cloudflare Images / Image Resizing:**  
  Serve originals or a single optimized format; use Cloudflare URL params to resize.  
  Reduces client build complexity but adds dependency on Cloudflare and URL structure.

**Deliverables:**

- LCP image (`IMG_4448...`) and first hero carousel image: WebP (and AVIF if easy) + responsive `srcset` + correct `sizes` (e.g. `100vw` for full-bleed hero).
- All hero/carousel assets used in hero-section, page-header-carousel, gallery, story-section: same treatment (format + width variants where they’re large).

### 1.2 Other large images

| Asset | Size | Displayed | Action |
|-------|------|-----------|--------|
| `IMG_3403-BnbVmkWq.png` (location) | 1,845 KiB | ~782×735 | WebP/AVIF + srcset (e.g. 800w, 1000w) + `sizes="(max-width: 1024px) 100vw, 55vw"` |
| `rio-grande-gorge.webp` | 318 KiB | 319×239 | Already WebP. Add srcset (e.g. 400w, 800w) or single smaller variant; increase compression if possible. |
| `taos-ski-valley-aerial.png` | 229 KiB | 359×239 | Convert to WebP/AVIF + smaller width variant. |
| `taos-pueblo.jpg` | 149 KiB | 425×239 | WebP + srcset or single ~850w. |
| `casa-benavides-your-front-….png` (logo) | 146 KiB | 140×140 | WebP + single export at ~280×280 or 2x for retina. |
| `reviews-bg.png` (CSS bg) | 215 KiB | full-bleed | WebP/AVIF in `public/`, reference in CSS (e.g. `url('/reviews-bg.webp')`). Consider single max width (e.g. 1920px). |

**Where they’re used:**

- **hero-section.tsx** – heroImage1–4 (IMG_4448, iStock, IMG_4446, IMG_4445).
- **page-header-carousel.tsx** – heroImage1 (IMG_4448).
- **gallery-section.tsx** / **gallery.tsx** – IMG_4445, IMG_3403.
- **location-section.tsx** – IMG_3403.
- **seasonal-section.tsx** / **home-gallery-section.tsx** – iStock, taos-ski-valley, taos-pueblo, rio-grande-gorge.
- **experiences-section.tsx** – taos-ski-valley, taos-pueblo, rio-grande-gorge (paths like `/taos-ski-valley.jpg` – confirm actual file names).
- **navigation.tsx** – logo (casa-benavides-your-front-….png).
- **reviews-section.tsx** – `reviews-bg.png` (inline style).

**Responsive `sizes` guidelines:**

- Full-bleed hero: `sizes="100vw"`.
- Page header carousel: e.g. `(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 90vw`.
- Location/gallery cards: match layout (e.g. `(max-width: 1024px) 100vw, 55vw`).
- Experience cards in a grid: e.g. `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`.

---

## 2. Unused JavaScript (~392 KiB savings)

- **Route-level code splitting:** Already using `lazy()` for pages. Ensure every route is lazy and that heavy components (e.g. gallery, reviews, seasonal) are only loaded on the routes that need them.
- **Third-party and heavy libs:** Identify large dependencies (e.g. Radix, TanStack Query, icons). Ensure tree-shaking (named imports, not `import *`) and that no unused components are pulled in.
- **Defer non-critical JS:** Any analytics or non-essential scripts: load after `load` or `requestIdleCallback` so they don’t block LCP.
- **Audit:** Use Coverage in DevTools (or build with source maps + bundle analyzer) to see which chunks are used on the mobile “home” path; trim or lazy-load the rest.

---

## 3. Unused CSS (~10 KiB)

- **Tailwind:** Confirm production build purges unused classes (Tailwind’s content paths include all `client/src` templates).
- **Component libraries:** If using Radix/shadcn, ensure only used components are imported so their CSS is included; avoid importing whole-library CSS.
- **Optional:** Route-based CSS chunks (Vite’s `cssCodeSplit: true` is already on) – verify that only CSS for the current route (and shared layout) loads on first paint.

---

## 4. Minify JavaScript (~2 KiB)

- Build is already `minify: "esbuild"`. If report still flags “minify,” confirm the tested URL is the production build (not a dev server). Optionally try `terser` for a bit more savings; usually not worth the extra build time unless every KiB matters.

---

## 5. Avoid enormous network payloads (17,924 KiB total)

- Most of this will drop after **image optimization** (Section 1). Re-run PageSpeed after images are fixed.
- Keep **lazy loading** for below-the-fold images (`loading="lazy"`) and ensure no large hero/LCP image is lazy-loaded.
- Ensure **preload** only for the single LCP image (e.g. hero at index 0), not every carousel image.

---

## 6. Long main-thread tasks (5 long tasks)

- **Defer/async scripts:** All non-critical JS (analytics, chat, etc.) load after first paint or idle.
- **Break up work:** If any component does heavy computation on mount, consider `requestIdleCallback` or `setTimeout(..., 0)` to chunk it, or move to a worker if applicable.
- **Reduce JS parse/compile:** Smaller bundles (images → less bytes; unused JS/CSS removed) directly reduce main-thread time. Focus on Sections 1 and 2 first.

---

## 7. Suggested order of work

1. **Images (Section 1)** – Single biggest win. Start with LCP hero (`IMG_4448...`) and the 11.6 MiB living-room image (`IMG_4445...`): WebP/AVIF + responsive srcset + correct `sizes`. Then do the rest of the table.
2. **Unused JS (Section 2)** – After images, re-run PageSpeed; then tackle 392 KiB unused JS with code-split and tree-shake.
3. **Unused CSS (Section 3)** – Quick check on Tailwind purge and component CSS.
4. **Main-thread (Section 6)** – Largely improved by 1 and 2; then defer non-critical scripts and avoid heavy sync work on load.

---

## 8. Files to touch (checklist)

- [ ] `vite.config.ts` – Optional: re-enable / fix vite-imagetools for build-time srcset/WebP.
- [ ] `client/src/components/hero-section.tsx` – LCP + hero images: srcset, sizes, format.
- [ ] `client/src/components/page-header-carousel.tsx` – Same for header hero image.
- [ ] `client/src/components/gallery-section.tsx` – IMG_4445, location image.
- [ ] `client/src/pages/gallery.tsx` – Same.
- [ ] `client/src/components/location-section.tsx` – IMG_3403.
- [ ] `client/src/components/seasonal-section.tsx` – iStock, taos-ski-valley, taos-pueblo, rio-grande-gorge.
- [ ] `client/src/components/home-gallery-section.tsx` – Same set.
- [ ] `client/src/components/experiences-section.tsx` – Experience images (paths may point to `public/`).
- [ ] `client/src/components/navigation.tsx` – Logo: WebP + appropriate width.
- [x] Hero, page-header, location, gallery, seasonal, story, navigation, logo – **done** (vite-imagetools WebP + srcset).
- [ ] `client/src/components/reviews-section.tsx` – reviews-bg: optional manual WebP in public + update URL for extra savings.
- [ ] `client/public/` – Optional: add reviews-bg.webp (manual convert) for ~100 KiB savings.
- [ ] `client/index.html` – Structured data `image` URLs: point to final optimized URLs or keep as-is if URLs are build-generated.

---

## 9. Success criteria

- PageSpeed Insights **mobile Performance** score ≥ 85 (target 90+ if possible).
- **LCP** and **FCP** in the green; “Properly size images” and “Use modern image formats” resolved or greatly reduced.
- Total **network payload** (mobile) significantly lower (e.g. &lt; 5 MiB for the main document + critical assets).
- No new **layout shifts** from image sizing (use explicit width/height or aspect-ratio on all images).

Once you’re ready to implement, start with Section 1 (images) and the LCP image + largest assets first; that will move the score the most.
