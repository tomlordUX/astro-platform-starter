import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// These fields must match the ones in .pages.yml
const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        summary: z.string().nullish(),
        cover: z.string().nullish()
    })
});

const pages = defineCollection({
    loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        portrait: z.string().nullish()
    })
});

export const collections = { projects, pages };
