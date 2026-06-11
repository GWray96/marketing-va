# Marketing Executive VA — lead-generation website

Conversion-engineered Astro site whose single job is **booking free intro calls**.
Built against `~/Brochure-Lead-Gen-Playbook/PLAYBOOK.md` and the approved wireframe.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # serve the production build locally
```

## Where things live

| What | Where |
|---|---|
| Brand facts, one-liner, CTAs, services list, pricing tiers | `src/config.ts` — **edit once, updates site-wide** |
| Strategy (BrandScript, objection table, voice rules) | `STRATEGY.md` |
| Keyword research + page map | `keyword-map.md`, `research/keyword-data.md` |
| Design rationale ("Copper Momentum") + claude.design/Stitch prompts | `research/design-report.md` |
| Design tokens (palette, type, spacing) | `src/styles/global.css` |
| Shared layout / head / structured data | `src/layouts/Layout.astro`, `src/components/SEO.astro`, `src/components/Schema.astro`, `src/lib/schema.ts` |
| Service page content (8 services) | `src/data/services.ts` |
| Blog articles | `src/content/blog/*.md` (frontmatter: title, description, pubDate, primaryKeyword, pillar, faqs) |
| Case studies | `src/content/work/*.md` — duplicate `_template-first-case.md`, fill with a real engagement, set `placeholder: false` |
| Gated resources | `src/content/resources/*.md` + PDFs in `public/downloads/` |
| Launch blockers / assets you must supply | `TODO-HUMAN.md` |
| CRO scores per page | `cro-scorecard.md` |

## Editing content

- **New blog article:** add a `.md` to `src/content/blog/` with the frontmatter shape used by the
  existing five. Open with a 1–2 sentence direct answer; use question-shaped H2s; link UP to the
  pillar page in `pillar:` and within the body. FAQs in frontmatter render with `FAQPage` schema.
- **Publish a case study:** duplicate the template in `src/content/work/`, fill with real numbers,
  set `placeholder: false`. It appears on `/work` and can be linked from service pages.
- **Change pricing/services:** `src/config.ts` (tiers + nav cards) and `src/data/services.ts`
  (full service-page content). Keep the two service lists in sync.
- **Update a freshness stamp:** service pages/pricing carry a "Last updated" date — update it when
  you genuinely revise the page (AI answer engines favour recently-updated pages).

## Conventions that protect conversion (don't break these)

- One primary CTA per page ("Book my free intro call"), repeated; one transitional ("Get the 1-page plan"). Never "Submit".
- Never fabricate proof. Empty slots are labelled `[… — collect]` on purpose; fill them only with real, named material.
- No `Review`/`AggregateRating` schema until real reviews exist.
- No location pages / LocalBusiness schema — remote, location-agnostic service by design.
- Analytics events are wired through `window.trackEvent` (stub in `Layout.astro`) — swap the stub body for your tool, keep the event names.

## Deploy

Static output — any of Netlify / Vercel / Cloudflare Pages free tiers:

1. Push to a Git repo, connect to the host, build command `npm run build`, output dir `dist`.
2. Set the real domain in `astro.config.mjs` (`SITE_URL`), `src/config.ts` (`url`) and `public/robots.txt`.
3. Work through `TODO-HUMAN.md` (booking tool, ESP, analytics, photos, prices, testimonials).
4. After DNS: submit `sitemap-index.xml` in Google Search Console.
