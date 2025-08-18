# SuperBenefit Homepage Agent Context

## Session Start Protocol

### Step 1: Review Core Documentation (Required)
Read these files in order to understand the project:

1. **Technical Specification**: `/docs/SPECIFICATION.md`
   - Full requirements and architecture
   - Web3 readiness requirements
   - Performance targets and constraints

2. **Architecture Decisions**: Review ALL files in `/docs/decisions/`
   - `/docs/decisions/001-astro-framework.md` - Why Astro
   - `/docs/decisions/002-tailwind-styling.md` - Why Tailwind
   - `/docs/decisions/003-content-aggregation.md` - Why Content Layer API
   - `/docs/decisions/004-cloudflare-deployment.md` - Why Cloudflare Workers
   - `/docs/decisions/005-code-quality-tools.md` - Why deferred

3. **Getting Started**: `/docs/GETTING_STARTED.md`
   - Installation instructions
   - Required integrations
   - Directory structure to create

4. **Configuration**: `/docs/CONFIGURATION.md`
   - Project-specific settings
   - Validation checklist
   - Required configurations

### Step 2: Understand External Context (Required)
Review these files to understand integration requirements:

1. **External Repositories**: `/references/external-repos.md`
   - Knowledge Garden structure and content
   - Governance repository organization
   - Content aggregation strategy

2. **Design System**: `/references/design-system.md`
   - Visual consistency requirements
   - Component patterns needed

3. **Content Examples**: Review ALL files in `/references/content-examples/`
   - `/references/content-examples/homepage-copy.md` - Content structure
   - `/references/content-examples/frontmatter-schema.yaml` - Metadata requirements
   - `/references/content-examples/external-content-sample.json` - Aggregation format

### Step 3: Research Phase Instructions

#### 3.1 Analyze Current SuperBenefit Sites
**REQUIRED RESEARCH TASKS:**

1. **Visit and analyze**: https://superbenefit.org (current Notion site)
   - Document: What content sections exist?
   - Identify: What messaging is featured?
   - Note: What CTAs are present?
   - Assess: What needs improvement?

2. **Visit and analyze**: https://knowledge.superbenefit.org
   - Document: Visual design elements (colors, fonts, spacing)
   - Identify: Navigation patterns
   - Note: Content organization approach
   - Capture: Specific hex colors and font names

3. **Examine GitHub repositories**:
   - https://github.com/superbenefit/knowledge-garden
     * Check: `quartz.config.ts` for theme configuration
     * Review: Content structure in `/content` directory
     * Note: Frontmatter patterns in actual content files
   
   - https://github.com/superbenefit/governance
     * Check: Directory structure
     * Review: Markdown formatting patterns
     * Note: Types of content present

#### 3.2 Technical Research Requirements
**MUST VERIFY before implementation:**

1. **Astro Documentation Research**:
   - Content Layer API syntax for GitHub sources
   - TypeScript configuration for strict mode
   - Tailwind CSS integration specifics
   - React integration for islands

2. **Cloudflare Workers Research**:
   - Static Assets configuration
   - Wrangler.toml structure for Astro
   - Environment variable handling
   - Deployment commands

3. **Content Aggregation Research**:
   - GitHub API rate limits
   - Content caching strategies
   - Build-time vs runtime tradeoffs
   - Schema validation approaches

### Step 4: Pre-Implementation Checklist

Before writing ANY code, confirm:

- [ ] Reviewed all architecture decisions
- [ ] Analyzed existing SuperBenefit properties
- [ ] Identified design tokens from Knowledge Garden
- [ ] Understood content aggregation requirements
- [ ] Clear on Web3 readiness (foundations only, no implementation)

## Configuration Checklist

After Astro installation, complete the requirements in `/docs/CONFIGURATION.md`:
- [ ] Project-specific Astro settings applied
- [ ] Design tokens added to Tailwind
- [ ] TypeScript configured for strict mode
- [ ] Build tools configured
- [ ] Environment variables set up
- [ ] All validation checks pass

## Project Context

### Overview
Building a homepage for SuperBenefit DAO, a Web3 organization focused on social impact and governance. Using Astro, Tailwind CSS, and markdown-first content management.

### Implementation Priorities
1. Get basic site structure working
2. Deploy to Cloudflare Workers
3. Implement content aggregation
4. Apply design system
5. Optimize performance

### Critical Constraints
1. **Simplicity**: No complex patterns or exotic dependencies
2. **Performance**: Must achieve 95+ Lighthouse scores
3. **Approach**: Pragmatic over perfect
4. **Scope**: Homepage with room for expansion

### Technical Stack (Decided)
- **Framework**: Astro 5.1+ (zero JS by default)
- **Styling**: Tailwind CSS 3.4 (utility-first)
- **Content**: Markdown with YAML frontmatter
- **Aggregation**: Astro Content Layer API (NOT Velite)
- **Deployment**: Cloudflare Workers with Static Assets
- **State**: Nanostores (for future Web3)
- **Code Quality**: Biome (fast, zero-config)

### Web3 Readiness Requirements
**Foundations only - NO implementation in initial build:**
- React islands configured but unused
- Environment variables structured for blockchain
- Component directories prepared (`src/components/web3/`)
- Data provider interfaces defined
- State stores initialized

### Design System Requirements
Must match Knowledge Garden (knowledge.superbenefit.org):
- **Fonts**: 
  - Headings: Schibsted Grotesk
  - Body: Source Sans Pro
  - Code: IBM Plex Mono
- **Colors** (from Knowledge Garden):
  - Primary Light: #2a521e
  - Primary Dark: rgb(177, 132, 55)
  - Background Light: #faf8f8
  - Background Dark: #161618
- **Approach**: CSS custom properties for all tokens

### Content Strategy
1. **Local Content**: Markdown files in `src/content/pages/`
2. **External Content**: 
   - Knowledge Garden: Recent posts with `publish: true`
   - Governance: Recent policies and updates
3. **Build-time Fetching**: No runtime API calls
4. **Graceful Fallbacks**: Cache content, don't break builds

## Implementation Guidelines

### Code Standards
- **Clarity over cleverness**: Code should be obvious
- **Patterns over abstractions**: Use established patterns
- **Performance first**: Every decision affects Lighthouse scores
- **Working software**: Functional beats perfect

### Anti-Patterns to Avoid
- ❌ Complex build processes
- ❌ Premature abstractions
- ❌ Over-engineering for future features
- ❌ Web3 implementation in v1
- ❌ Runtime content fetching

## Decision Log References

All architectural decisions are documented in `/docs/decisions/`:
- Framework choice: Astro (not Next.js)
- Styling: Tailwind (not vanilla CSS)
- Content: Content Layer API (not Velite)
- Deployment: Cloudflare Workers (not Vercel)

## Quick Command Reference

```bash
# Project initialization
npm create astro@latest -- --template minimal --typescript strict
npm install -D tailwindcss @astrojs/tailwind
npm install @astrojs/react nanostores
npx wrangler init

# Development
npm run dev
npm run build
npm run preview

# Deployment
npx wrangler deploy
```

## Success Metrics

The homepage is successful when:
- ✅ Lighthouse scores 95+ across all metrics
- ✅ Easy to add new pages (just markdown files)
- ✅ Visual consistency with Knowledge Garden
- ✅ External content aggregating properly
- ✅ Web3 foundations ready (not implemented)
- ✅ Deployed to production URL

## File References

### Documentation to Review
- `/docs/SPECIFICATION.md` - Complete technical specification
- `/docs/decisions/*.md` - All architecture decisions
- `/docs/GETTING_STARTED.md` - Installation and setup
- `/docs/CONFIGURATION.md` - Project-specific configuration

### Examples to Study
- `/references/content-examples/homepage-copy.md` - Homepage content structure
- `/references/content-examples/frontmatter-schema.yaml` - Metadata schema
- `/references/content-examples/external-content-sample.json` - Aggregation format
- `/references/content-examples/wireframe.html` - Visual wireframe
- `/references/content-examples/visual-directions.md` - Design directions

### References to Consult
- `/references/design-system.md` - Design requirements
- `/references/external-repos.md` - External dependencies

### Configuration Templates
- `.env.example` - Environment variables structure
- `.gitignore.example` - Git ignore patterns

## Session Work Protocol

When implementing:
1. Start with the simplest working version
2. Test each component in isolation
3. Verify external content aggregation early
4. Check Lighthouse scores frequently
5. Document any decisions or blockers

---

**IMPORTANT**: Always complete the Session Start Protocol. Do not skip the research phase. Getting the foundation right is critical for success.