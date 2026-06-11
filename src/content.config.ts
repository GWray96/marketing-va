import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    primaryKeyword: z.string(),
    /** URL of the money page this article internal-links UP to (playbook 2.3) */
    pillar: z.string(),
    faqs: z.array(faq).default([]),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    sector: z.string(),
    year: z.string(),
    /** the quantified headline result, e.g. "+180% qualified leads in 6 months" */
    result: z.string(),
    services: z.array(z.string()).default([]),
    /** true while the slot is awaiting a real client win — placeholder cases are
        excluded from hubs/sitemaps and never presented as real proof */
    placeholder: z.boolean().default(false),
    quote: z.object({ text: z.string(), name: z.string(), role: z.string() }).optional(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    benefit: z.string(),
    /** file delivered after email capture — [TODO-HUMAN] supply real assets */
    fileName: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, work, resources };
