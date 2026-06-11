# TODO-HUMAN — real-world facts and assets only you can supply

> The site builds and runs without these, but each one makes it stronger.
> Search the codebase for `[TODO-HUMAN]`, `[ESP TODO]`, `[ANALYTICS TODO]`, `[FORM BACKEND TODO]`
> to find every insertion point. Central config: `src/config.ts` (most facts live there once).

## Identity & legal
- [ ] **Founder's real name** → `src/config.ts` (`founderName`) — used in Person schema, About, author boxes
- [ ] **Legal/trading name + company number (if registered)** → footer (`Footer.astro`), `/privacy`, `/terms`
- [ ] **Real domain** → `astro.config.mjs` (`SITE_URL`), `src/config.ts` (`url`), `public/robots.txt` (sitemap line)
- [ ] **Real contact email** → `src/config.ts` (`email`)
- [ ] **LinkedIn (and any other) profile URL** → `src/config.ts` (`socials`)

## Photos (never stock, never AI faces)
- [ ] **Founder photo (just one needed), warm natural light, candid working pose, 4:5** → homepage hero
      (`ImageSlot` in `index.astro`) AND reused on `/about` sidebar — same photo on two different
      pages is fine. The homepage About block deliberately uses the 9-in-10 stat card instead of a
      second photo, so one photo covers the whole site.
- [ ] Optional, later: a second candid working shot to vary `/about`
- [ ] **OG image 1200×630** → replace placeholder `public/og-default.png` (currently auto-generated text-only)

## Offer & pricing
- [x] **Real tier prices** → set in `src/config.ts` (`TIERS[].price`): Starter £500, Growth £1,000, Executive £2,000 /month. Adjust here if they change.
- [ ] Confirm tier names/inclusions match what you'll actually deliver (edit `TIERS` in `src/config.ts`)
- [ ] Confirm which of the 8 services you genuinely offer — delete any you don't from `src/config.ts` (`SERVICES`) and `src/data/services.ts` (both lists must match)

## Proof (the highest-value items on this list)
For EVERY testimonial: name, role, business, specific result if known, and a photo.
The collection questions that work (playbook 5.3):
1. *"What almost stopped you from working with me — and what happened instead?"*
2. *"What specific result have you seen?"* (forces a number)
3. *"How would you describe this to a friend?"*
- [ ] **Real testimonial #1–3** → homepage `index.astro` (Testimonial slots), `/contact` sidebar slot
- [ ] **Per-service testimonials** as they land → service pages (`[service].astro` proof section)
- [ ] **First case study** — capture BASELINE NUMBERS AT KICK-OFF (enquiries/mo, traffic, cost per lead), then duplicate `src/content/work/_template-first-case.md`, fill, set `placeholder: false`
- [ ] Client logos: only when you have several real, recognisable ones — the trust strip currently (correctly) uses your verifiable stats instead
- [ ] **Hero social-proof widget** (avatar circles + 5 stars under the hero CTA): swap the gradient circles for real client photos, and confirm the star rating + caption (`socialProof` in `src/config.ts`) reflect genuine reviews. Until then it's a placeholder — and no `Review`/`AggregateRating` schema is emitted. Once real reviews exist, consider adding that schema.

## Tools & wiring
- [ ] **Booking tool** (Cal.com / Calendly / other) → `src/config.ts` (`booking.url`); optionally embed on `/contact` (marked slot)
- [ ] **ESP / email provider** (MailerLite, ConvertKit, Brevo…) → replace `[ESP TODO]` stubs in `LeadMagnetForm.astro` and `resources/[resource].astro`; wire a simple nurture sequence for lead-magnet subscribers
- [ ] **Contact form backend** (Formspree / Basin / Netlify Forms / ESP) → `[FORM BACKEND TODO]` in `contact.astro`
- [ ] **Analytics tool** (recommendation: Plausible — cookieless, no banner needed) → replace `window.trackEvent` stub in `src/layouts/Layout.astro`; update `/cookies` + `/privacy` to name the tool
- [ ] **Hosting** (Netlify / Vercel / Cloudflare Pages — all free-tier fine for static Astro)

## Lead magnet & resources (the actual files)
- [ ] **Create the 1-Page Marketing Plan PDF** → `public/downloads/one-page-marketing-plan.pdf`
- [ ] **Create the Marketing Audit Checklist PDF** → `public/downloads/marketing-audit-checklist.pdf`
- [ ] Decide delivery: email via ESP (preferred) or direct link on `/thanks`

## Verify before launch
- [ ] **Salary/cost claims** on `/pricing` and the salary article — refresh against current UK job-board salary guides and update the cited ranges + "Last updated" dates
- [ ] **Legal pages** (`/privacy`, `/terms`, `/cookies`) — fill bracketed entity details; have a qualified person review
- [ ] eBay SUSU programme: confirm you're comfortable naming the programme publicly (it appears on /, /about, blog articles); if not, swap to "a major marketplace's startup support programme"

## Content roadmap (not blockers — from keyword-map.md)
- [ ] Remaining 10 mapped articles (see keyword-map.md blog table) — priorities: "what does a Marketing Executive VA do" (entity), "how much does a marketing agency cost UK", "90-day marketing strategy", "AI marketing automation"
- [ ] Internal-link rule 2.3 is only fully satisfied for /pricing and /services/marketing-strategy so far — each remaining service page needs ≥2 supporting articles, which the roadmap provides
- [ ] Late-August content refresh (keyword data shows a September search spike in the outsourced-marketing cluster)
