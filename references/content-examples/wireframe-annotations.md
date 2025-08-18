# Wireframe Implementation Notes

## Component Mapping

### Section 1: Navigation
`<Navigation />` → `src/components/Navigation.astro`
- Logo → `src/components/Logo.astro`
- Desktop menu → `src/components/NavMenu.astro`
- Mobile hamburger → `src/components/MobileMenu.astro`
- Navigation items:
  - Home → Internal route `/`
  - Knowledge Garden → External `https://knowledge.superbenefit.org` ↗
  - Governance → External GitHub repo ↗
  - About → Route `/about` (placeholder)
  - Services → Route `/services` (placeholder)
  - Contribute → Route `/contribute` (placeholder)

### Section 2: Hero
`<Hero />` → `src/components/sections/Hero.astro`
- Headline text: "DAO for Social Impact"
- Subheadline: "Web3 governance for regenerative communities"
- Network Visual → `src/components/NetworkVisual.astro` (SVG or Canvas)
- CTA buttons → `src/components/Button.astro` with primary/secondary variants
- Desktop: 2-column grid, Mobile: single column (no visual)

### Section 3: Mission & Services
`<MissionServices />` → `src/components/sections/MissionServices.astro`
- Mission statement → Centered text block
- Service area 1 → 2-column grid (image left, content right on desktop)
- Service area 2 → 2-column grid (content left, image right on desktop)
- Checkmark lists → Icon + text pairs
- Visual elements → Placeholder boxes (400px height)

### Section 4: DAO Overview
`<DAOOverview />` → `src/components/sections/DAOOverview.astro`
- Background: `#f8f8f8`
- 3-column grid on desktop, single column mobile
- Item cards with padding: 30px
- Centered container max-width: 800px

### Section 5: Latest Posts/Articles
`<LatestPosts />` → `src/components/sections/LatestPosts.astro`
- Grid: `repeat(auto-fit, minmax(300px, 1fr))`
- First 2 cards include icon placeholder (60x60px)
- Desktop shows 6 cards, mobile shows 3
- Cards 4-6 have class `hide-mobile`

### Section 6: Community
`<Community />` → `src/components/sections/Community.astro`
- 2-column grid (max-width: 600px centered)
- Card padding: 40px
- Full-width buttons inside cards

### Section 7: Footer
`<Footer />` → `src/components/Footer.astro`
- Background: `#2a2a2a`, text: `#999`
- Desktop: 4-column grid
- Mobile: Single column
- Email section hidden on mobile
- Social icons: 30x30px circles

## Layout Patterns

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1279px
- Desktop: ≥ 1280px

### Container Widths
- Mobile max: 375px
- Desktop max: 1280px
- Content max: 1200px

### Grid Systems
- `.grid-2`: `grid-template-columns: 1fr 1fr`
- `.grid-3`: `grid-template-columns: repeat(3, 1fr)`
- `.grid-4`: `grid-template-columns: repeat(4, 1fr)`
- Mobile override: All grids become single column

## Implementation Details

### File Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── Logo.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── MissionServices.astro
│   │   ├── DAOOverview.astro
│   │   ├── LatestPosts.astro
│   │   └── Community.astro
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── PostCard.astro
│   │   └── CTACard.astro
│   └── interactive/
│       └── MobileMenu.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
├── content/
│   └── pages/
│       ├── hero.md
│       ├── mission.md
│       └── services.md
└── styles/
    └── global.css
```

### Content Schema
```yaml
---
title: string          # Required
description: string    # Required
draft: boolean        # Default: false
publish: boolean      # Default: true
order: number         # Optional
---
```

### External Content Fetching
```javascript
// scripts/fetch-content.js
import { Octokit } from '@octokit/rest';
import fs from 'fs/promises';

async function fetchExternalContent() {
  const octokit = new Octokit();
  
  const { data } = await octokit.repos.getContent({
    owner: 'superbenefit',
    repo: 'knowledge-garden',
    path: 'content'
  });
  
  // Filter and save to src/data/
}
```

### Astro Configuration
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://superbenefit.org',
  integrations: [tailwind()],
  output: 'static'
});
```

### Tailwind Configuration
```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2a521e',
          dark: 'rgb(177, 132, 55)'
        }
      },
      fontFamily: {
        'display': ['Schibsted Grotesk', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif']
      }
    }
  }
}
```

### Deployment
```bash
# Cloudflare Pages
npm run build
npx wrangler pages deploy dist/
```

## Critical Interactions

### Mobile Menu Toggle
```javascript
const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
toggle?.addEventListener('click', () => {
  menu?.classList.toggle('translate-x-0');
  document.body.classList.toggle('overflow-hidden');
});
```

### Sticky Navigation
```css
nav {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
}
```

### Image Optimization
```astro
<Image 
  src={imageSrc} 
  alt={description}
  loading="lazy"
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Accessibility Requirements

### Semantic Structure
- Single `<h1>` per page
- Sequential heading hierarchy
- Landmark regions: `<header>`, `<main>`, `<footer>`
- Skip link to main content

### ARIA Implementation
```html
<nav aria-label="Main navigation">
<button aria-expanded="false" aria-controls="mobile-menu">
<div role="region" aria-labelledby="section-heading">
```

### Focus Management
- Visible focus rings: `focus-visible:ring-2`
- Tab trapping in mobile menu
- Escape key closes mobile menu

### Color Contrast
- Text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

## Performance Targets

### Core Web Vitals
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### Bundle Sizes
- HTML: < 50KB
- CSS: < 75KB
- JavaScript: < 50KB

### Optimization Techniques
- Critical CSS inline
- Lazy load images
- Preload fonts
- Minify assets