import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const events = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		end: z.coerce.date().optional(),
		location: z.string(),
		summary: z.string(),
		// Set to true to hide an entry without deleting the file.
		draft: z.boolean().default(false),
	}),
});

export const collections = { events };
