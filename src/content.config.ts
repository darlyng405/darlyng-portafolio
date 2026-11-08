import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Nota: esta sintaxis corresponde a Astro 5 en adelante. Verificar contra la versión instalada.

// Un archivo por proyecto e idioma: src/content/projects/{en,es}/<proyecto>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.string(),
    order: z.number(),
    technologies: z.array(z.string()).default([]),
    repository: z.string().url().optional(),
    // false hasta contrastar los datos con material original (ver docs/PENDIENTES.md)
    verified: z.boolean().default(false),
  }),
});

// Un archivo por artículo e idioma: src/content/journal/{en,es}/<slug>.md
// El Journal está temporalmente vacío: no crear artículos ficticios.
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    category: z.string().optional(), // categorías todavía no definidas
  }),
});

export const collections = { projects, journal };
