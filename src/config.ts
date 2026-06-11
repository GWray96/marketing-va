/**
 * Single source of truth for brand facts and entities.
 * Anything marked [TODO-HUMAN] is a real-world fact only the founder can supply —
 * the full list lives in TODO-HUMAN.md at the repo root.
 */

export const SITE = {
  /** [TODO-HUMAN] real production domain */
  url: 'https://www.marketingexecutiveva.co.uk',
  /** [TODO-HUMAN] confirm trading name */
  name: 'Marketing Executive VA',
  category: 'Marketing Executive VA',
  tagline: 'Your whole marketing department. One person.',
  oneLiner:
    'I help small business owners who know marketing matters but never have time for it get one experienced operator to own their whole marketing function — so they grow without hiring a team or paying agency prices.',
  /** Short, punchy hero subline (the full StoryBrand oneLiner still runs in the footer). */
  heroSub:
    'One experienced operator runs your whole marketing function — without hiring a team or paying agency prices.',
  /** Answer-first entity definition — used verbatim for AEO on key pages. */
  definition:
    'A Marketing Executive VA is an experienced marketing operator who runs a small business’s entire marketing function on a monthly subscription — strategy, execution, and reporting — without the cost of an agency or a full-time hire.',
  /** [TODO-HUMAN] founder's real full name */
  founderName: '[FOUNDER NAME]',
  /** [TODO-HUMAN] real contact email */
  email: 'hello@marketingexecutiveva.co.uk',
  /** Country only — remote, location-agnostic service. No NAP block by design. */
  country: 'United Kingdom',
  /** [TODO-HUMAN] real social profile URLs (LinkedIn priority) */
  socials: {
    linkedin: '[LINKEDIN URL]',
  },
  booking: {
    /** [TODO-HUMAN] booking tool URL (Cal.com / Calendly / other). All CTAs route through /contact until set. */
    url: '/contact',
    callLength: '30 minutes',
    promise: 'No pitch, no obligation — a straight read on whether this is the right fit.',
  },
  leadMagnet: {
    title: "The Time-Poor Founder's 1-Page Marketing Plan",
    slug: 'one-page-marketing-plan',
    benefit:
      'Work out what your business should actually be doing about marketing — on one page, in under 20 minutes.',
  },
  responseTime: 'within one working day',
} as const;

/** Direct (macro) CTA — repeated 3–4× per page. Never "Submit". */
export const CTA = {
  direct: 'Book my free intro call',
  directShort: 'Book a free call',
  transitional: 'Get the 1-page plan',
} as const;

/** Core services — one money page each. Keep in sync with keyword-map.md. */
export const SERVICES = [
  {
    slug: 'marketing-strategy',
    name: 'Marketing strategy & planning',
    short: 'A 90-day plan with an owner — priorities, channels, and what gets done first.',
    keyword: 'marketing strategy for small business',
  },
  {
    slug: 'seo',
    name: 'SEO',
    short: 'Show up when the people who’ll actually buy from you are searching.',
    keyword: 'seo marketing for small business',
  },
  {
    slug: 'paid-ads',
    name: 'Paid advertising',
    short: 'Google and Meta campaigns that pay back instead of burning budget.',
    keyword: 'ppc for small business',
  },
  {
    slug: 'email-marketing',
    name: 'Email marketing & automation',
    short: 'Sequences that turn one-time enquiries into repeat customers.',
    keyword: 'outsourced email marketing',
  },
  {
    slug: 'social-media',
    name: 'Social media management',
    short: 'A consistent presence that builds your brand instead of chasing trends.',
    keyword: 'outsourced social media marketing',
  },
  {
    slug: 'website-design',
    name: 'Website design & build',
    short: 'A site built to convert visitors into enquiries — not just to look modern.',
    keyword: 'website design for small business',
  },
  {
    slug: 'content',
    name: 'Content & blogging',
    short: 'Writing that ranks, reads well, and sounds like you — not a template.',
    keyword: 'outsourced content marketing',
  },
  {
    slug: 'reporting',
    name: 'Analytics & reporting',
    short: 'One clear monthly report: what worked, what didn’t, what changes next.',
    keyword: 'marketing reporting for small business',
  },
] as const;

/** Pricing tiers. Inclusions are real; prices are [TODO-HUMAN]. */
export const TIERS = [
  {
    name: 'Starter',
    price: '[PRICE — confirm]',
    sub: 'For founders getting marketing off the ground.',
    includes: [
      'Marketing audit & 90-day plan',
      'One channel run end to end',
      'Monthly report in plain English',
      '2 strategy calls a month',
      'Unlimited revisions on every piece of work',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '[PRICE — confirm]',
    sub: 'For businesses ready to grow on more than one front.',
    includes: [
      'Everything in Starter',
      'Up to three channels managed',
      'Website & conversion improvements',
      'Weekly check-ins',
      'Unlimited revisions on every piece of work',
    ],
    highlighted: true,
  },
  {
    name: 'Executive',
    price: '[PRICE — confirm]',
    sub: 'Your full marketing function, handled.',
    includes: [
      'Every channel owned and run',
      'Quarterly strategy sessions',
      'CRM & lead follow-up included',
      'Priority support',
      'Unlimited revisions on every piece of work',
    ],
    highlighted: false,
  },
] as const;
