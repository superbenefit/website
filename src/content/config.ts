import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { githubFileLoader } from "astro-github-file-loader";
import type { AstroConfig } from "astro";

// Define schema for local blog posts
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default("SuperBenefit Team"),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Define schema for local pages
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    layout: z.string().default("BaseLayout"),
    noindex: z.boolean().default(false),
  }),
});

// Markdown processor for the GitHub loader
async function markdownProcessor(text: string, config: AstroConfig) {
  // Simple markdown processor that returns the content with basic frontmatter parsing
  const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  let frontmatter: Record<string, any> = {};
  let html = text;
  
  if (frontmatterMatch) {
    try {
      // Basic YAML parsing for frontmatter
      const yamlContent = frontmatterMatch[1];
      const lines = yamlContent.split('\n');
      for (const line of lines) {
        const match = line.match(/^(\w+):\s*(.+)$/);
        if (match) {
          const [, key, value] = match;
          // Handle different value types with proper typing
          if (value === 'true') frontmatter[key] = true;
          else if (value === 'false') frontmatter[key] = false;
          else if (value.match(/^\d{4}-\d{2}-\d{2}/)) frontmatter[key] = new Date(value);
          else if (value.startsWith('[') && value.endsWith(']')) {
            frontmatter[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
          }
          else frontmatter[key] = value.replace(/^["']|["']$/g, '');
        }
      }
      html = frontmatterMatch[2];
    } catch (e) {
      console.warn(`Failed to parse frontmatter`);
    }
  }
  
  return {
    html,
    metadata: {
      frontmatter,
      headings: [], // Could be enhanced to extract headings
      imagePaths: [], // Could be enhanced to extract images
    }
  };
}

// Define schema for Knowledge Garden content (temporarily disabled due to API rate limits)
const knowledgeGarden = defineCollection({
  loader: async () => {
    // Return empty array for now to avoid GitHub API issues during development
    return [];
  },
  schema: z.object({
    id: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

// Define schema for Governance content (temporarily disabled due to API rate limits)
const governance = defineCollection({
  loader: async () => {
    // Return empty array for now to avoid GitHub API issues during development
    return [];
  },
  schema: z.object({
    id: z.string(),
    title: z.string().optional(),
    type: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  blog,
  pages,
  knowledgeGarden,
  governance,
};
