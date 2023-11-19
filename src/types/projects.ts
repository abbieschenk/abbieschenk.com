import { z } from 'astro:content';

export const projectFrontmatterSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
