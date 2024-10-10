import { defineCollection, z } from 'astro:content';


const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});


const activity = defineCollection({
	// Schema for frontmatter
	type: 'content',
	schema: z.object({
		id: z.string(),
		milestone: z.string(),
		day: z.string().optional(),
		type: z.string(),
		title: z.string(),
		version: z.string().optional(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		lastUpdated: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		hasExercise: z.boolean(),
		sequence: z.string().optional(),
		next: z.string().optional(),
		previous: z.string().optional(),
		note: z.string().optional(),
		status: z.string().optional(),
		isPublished: z.boolean(),
		author: z.string().optional(),
		dataRef: z.string().optional()
	})

})

export const collections = { blog, activity };
