/**
 * Schema builders — Organization (NOT LocalBusiness: remote, location-agnostic
 * service by design), WebSite, Service, FAQPage, BreadcrumbList, Person, Article.
 */
import { SITE } from '../config';

export const organization = () => ({
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.definition,
  email: SITE.email,
  founder: { '@type': 'Person', name: SITE.founderName },
  areaServed: SITE.country,
  knowsAbout: [
    'marketing strategy',
    'SEO',
    'paid advertising',
    'email marketing',
    'social media management',
    'content marketing',
    'marketing analytics',
  ],
});

export const website = () => ({
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': `${SITE.url}/#organization` },
});

export const person = () => ({
  '@type': 'Person',
  name: SITE.founderName,
  jobTitle: 'Marketing Executive VA',
  worksFor: { '@id': `${SITE.url}/#organization` },
  knowsAbout: ['small business marketing', 'marketing strategy', 'SEO', 'paid advertising'],
});

export const service = (opts: { name: string; description: string; path: string }) => ({
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: `${SITE.url}${opts.path}`,
  provider: { '@id': `${SITE.url}/#organization` },
  serviceType: opts.name,
  areaServed: SITE.country,
});

export const faqPage = (faqs: ReadonlyArray<{ q: string; a: string }>) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbs = (crumbs: ReadonlyArray<{ name: string; path: string }>) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE.url}${c.path}`,
  })),
});

export const article = (opts: {
  title: string;
  description: string;
  path: string;
  pubDate: Date;
  updatedDate?: Date;
}) => ({
  '@type': 'Article',
  headline: opts.title,
  description: opts.description,
  url: `${SITE.url}${opts.path}`,
  datePublished: opts.pubDate.toISOString(),
  dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
  author: person(),
  publisher: { '@id': `${SITE.url}/#organization` },
});

export const contactPage = () => ({
  '@type': 'ContactPage',
  url: `${SITE.url}/contact`,
  name: `Contact ${SITE.name}`,
});
