// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
// import react from '@astrojs/react'; // Temporarily disabled to reduce bundle size
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://superbenefit.org',
  output: 'static',
  trailingSlash: 'ignore',
  
  // Vite configuration for Tailwind and build optimization
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0, // Prevent inlining to optimize for Cloudflare Workers
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,
    },
    ssr: {
      noExternal: ['nanostores'], // Bundle nanostores for SSR compatibility
    },
  },

  // Integrations configuration
  integrations: [
    // React integration temporarily disabled to reduce bundle size
    // Will be re-enabled when React components are actually needed
    // react({
    //   experimentalReactChildren: true, // Enable React 19 features
    // }),
    mdx({
      syntaxHighlight: 'prism',
      remarkPlugins: [],
      rehypePlugins: [],
    }),
  ],

  // Build configuration optimized for performance
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto',
    format: 'directory', // SEO-friendly URLs
  },

  // Image optimization settings
  image: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.github.com',
      },
      {
        protocol: 'https', 
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  // Security headers for deployment
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },

  // Prefetch configuration for better performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Experimental features for performance - using stable features in Astro 5.x

});