import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        draft: z.boolean(),
        title: z.string(),
        summary: z.string().optional(),
        icon: z.string().optional(),
        tags: z.array(z.string()).optional(),
        published: z.date()
    })
});

export const collections = {
  "blog": blogCollection,
};
