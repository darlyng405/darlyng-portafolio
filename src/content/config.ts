import { defineCollection, z } from 'astro:content';

/**
 * Journal collection (currently empty for V1, see section 12).
 * No fictitious entries may be created.
 */
const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = { journal };
