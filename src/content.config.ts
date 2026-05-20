import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const subsidiaries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/subsidiaries' }),
  schema: z.object({
    name:         z.string(),
    sector:       z.enum(['construction', 'property', 'hospitality', 'services']),
    tagline:      z.string(),
    accentColor:  z.string().default('#6E1019'),
    established:  z.number().optional(),
    keyFacts:     z.array(z.string()).optional(),
    externalUrl:  z.string().url().optional(),
    contact:      z.object({
      phone: z.string().optional(),
      email: z.string().optional(),
      address: z.string().optional(),
    }).optional(),
    order:        z.number().default(99),
  }),
});

export const collections = { subsidiaries };
