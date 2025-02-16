import { defineCollection } from 'astro:content';

import { projectFrontmatterSchema } from '@/types';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './src/data/projects' }),
    schema: projectFrontmatterSchema,
});

export const collections = { projects: projectCollection };
