// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { projectFrontmatterSchema } from '../types';

const projectCollection = defineCollection({
    type: 'content',
    schema: projectFrontmatterSchema,
});

export const collections = {
    projects: projectCollection,
};
