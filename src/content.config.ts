import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// ---------------------------------------------------------------------------
// Blog posts: markdown files in src/content/blog/
// To write a new post, drop a file there and it appears on /blog automatically.
// Required frontmatter: title, description, pubDate. Optional: tags, hero image.
// ---------------------------------------------------------------------------
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// ---------------------------------------------------------------------------
// Projects: markdown files in src/content/projects/
// Each one gets a detail page at /projects/<file-name>/.
// `plain` is a jargon-free summary for recruiters; `metrics` are headline numbers.
// ---------------------------------------------------------------------------
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    category: z.enum(['AI / Agents', 'Backend', 'Full Stack', 'Platform', 'Side Project']),
    featured: z.boolean().default(false),
    order: z.number().default(100), // lower sorts first within the same year
    role: z.string().optional(),
    plain: z.string().optional(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    repo: z.string().optional(),
    demo: z.string().optional(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, projects };
