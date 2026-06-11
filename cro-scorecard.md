# CRO Scorecard — Playbook Part 11.1 (scored 2026-06-11)

> 1 point per criterion; ◐ = half. **8+ = launch-ready.** Scored honestly:
> the recurring half-points are (5) proof — real testimonials/case studies are
> still being collected (slots are honest placeholders, nothing fabricated) —
> and (10) tracking — the event layer is built but stubbed until a tool is chosen.
> Both are TODO-HUMAN items, not build defects. Re-score after proof lands.

| # | Criterion | Home | Services hub | Service pages ×8 | How-it-works | Pricing | Work | About | Contact | Lead-magnet LP |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 7-second test (what/why/how, no scroll) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 2 | ONE primary goal, no competing CTAs | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 3 | Headline = desire, clear, customer language | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 4 | Big-5 objections at point of friction | ✓ | ✓ | ✓ | ✓ | ✓ | ◐ | ✓ | ✓ | ✓ |
| 5 | Proof present, hierarchy order, not generic | ◐ | ◐ | ◐ | ✓ | ◐ | ✗ | ✓ | ◐ | ✓ |
| 6 | Risk reversal visible near a CTA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 7 | Direct CTA 3–4×, action verb; transitional present | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 8 | Fast + mobile-first (CWV budget, CTA reachable) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 9 | Art-directed to quadrant, distinct from competitors | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 10 | Schema + tracking live | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ |
| | **Score** | **9** | **9** | **9** | **9.5** | **9** | **8** | **9.5** | **9** | **9.5** |

Notes per the two recurring half-points:
- **(5) Proof:** every page uses the strongest *real* proof available — the founder's verifiable
  SUSU-year statistics — and clearly-labelled collection slots instead of fabricated quotes/logos/numbers.
  Scores rise to 10s as TODO-HUMAN proof items land. `/work` deliberately scores lowest: it refuses
  to fake its own subject matter and instead sells the measurement method.
- **(10) Tracking:** schema is live and validated (Organization, WebSite, Service, FAQPage,
  BreadcrumbList, Person, Article, ContactPage — no Review/AggregateRating anywhere, per integrity
  rules). Event layer (`cta_click` per location, `form_start/submit`, `lead_magnet_download`,
  `call_click`, `scroll_depth`) is implemented but logs to console until an analytics tool is chosen.

## Part 11.2 per-page QA

**Homepage** — hero 5-second test ✓ · trust strip under hero ✓ (real stats, no fake logos) ·
problem block ext+int+villain ✓ · guide = empathy+authority ✓ (SUSU story) · 4-step plan ✓ ·
benefits = transformation ✓ · deep proof ◐ (labelled slots) · FAQ answers real objections + schema ✓ ·
guarantee near CTA ✓ · lead magnet present, secondary ✓ · stakes ✓ · final CTA repeats primary ✓ ·
footer contact/legal ✓ (no NAP by design — remote service) · one goal ✓

**Service pages (×8)** — self-contained ✓ · outcome-led hero + CTA ✓ · service-specific problem ✓ ·
what's-included ✓ · segmented proof ◐ (labelled slots per service) · service FAQ + schema ✓ ·
pricing posture + risk reversal ✓ · internal links up (hub/pricing/how-it-works) and across ✓

**About** — empathy-first headline ✓ · authority: real numbers, honest arithmetic (≈50k–125k dials
→ "tens of thousands") ✓ · guide-not-hero ✓ · values map to philosophical problem ✓ ·
Person/Organization schema ✓ · drives to CTA ✓

**Contact** — minimal fields (name, email, one line) ✓ · what-happens-next + response time ✓ ·
multiple contact options ✓ · trust element beside form ✓ (+1 testimonial slot) · ContactPage schema ✓

**Lead-magnet LP** — single goal, nav/footer stripped ✓ · benefit-led headline + bullets ✓ ·
email-only field ✓ · one proof element (real stat) ✓ · nurture sequence = [ESP TODO] ◐ ·
indexed deliberately (KD 1–2 keyword — see keyword-map.md)

**Case study** — template enforces: quantified-result headline, situation→problem→action→result,
before→after numbers, named quote. No entries published until real (placeholder excluded from build).

## Master pre-launch checklist (Part 11.3)

- SEO: unique titles/metas ✓ · one intent per URL (keyword-map.md) ✓ · internal links wired ✓
  (2.3 article-coverage completes with the content roadmap) · sitemap + robots ✓ · schema validated ✓
- TECHNICAL: static build, 30 pages, zero errors ✓ · fonts self-hosted (fontsource woff2) ✓ ·
  explicit aspect-ratios on media slots (CLS) ✓ · JS ≈ one small inline script + nav toggle ✓ ·
  HTTPS/redirects = hosting-time ◐ · forms tested end-to-end after backend wiring ◐
- CONTENT: strategy-sourced copy ✓ · 7 Sweeps run ✓ · proof at friction points (real or labelled) ✓ ·
  no fabricated claims ✓ · stats hedged + flagged for citation refresh ✓
- CONVERSION: scorecard ≥8 every money page ✓ · events implemented (stubbed) ◐
- ACCESS: WCAG AA palette variants (copper-deep/teal-deep for text) ✓ · semantic HTML + skip link ✓ ·
  keyboard nav + visible focus ✓ · labelled fields ✓ · reduced-motion respected ✓
