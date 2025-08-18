# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Session Start Protocol (REQUIRED)

### Step 1: Review Core Documentation (Required)
Read these files in order to understand the project:

1. **Technical Specification**: `docs/SPECIFICATION.md`
   - Full requirements and architecture
   - Web3 readiness requirements
   - Performance targets and constraints

2. **Architecture Decisions**: Review ALL files in `docs/decisions/`
   - `docs/decisions/001-astro-framework.md` - Why Astro
   - `docs/decisions/002-tailwind-styling.md` - Why Tailwind
   - `docs/decisions/003-content-aggregation.md` - Why Content Layer API
   - `docs/decisions/004-cloudflare-deployment.md` - Why Cloudflare Workers
   - `docs/decisions/005-code-quality-tools.md` - Why deferred

3. **Getting Started**: `docs/GETTING_STARTED.md`
   - Installation instructions
   - Required integrations
   - Directory structure to create

4. **Configuration**: `docs/CONFIGURATION.md`
   - Project-specific settings
   - Validation checklist
   - Required configurations

### Step 2: Understand External Context (Required)
Review these files to understand integration requirements:

1. **External Repositories**: `references/external-repos.md`
   - Knowledge Garden structure and content
   - Governance repository organization
   - Content aggregation strategy

2. **Design System**: `references/design-system.md`
   - Visual consistency requirements
   - Component patterns needed

3. **Content Examples**: Review ALL files in `references/content-examples/`
   - `references/content-examples/homepage-copy.md` - Content structure
   - `references/content-examples/frontmatter-schema.yaml` - Metadata requirements
   - `references/content-examples/external-content-sample.json` - Aggregation format

### Step 3: Research Phase Instructions (REQUIRED BEFORE IMPLEMENTATION)

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

**IMPORTANT**: Always complete the Session Start Protocol. Do not skip the research phase. Getting the foundation right is critical for success.

## Project Context Summary

Building a homepage for SuperBenefit DAO (Web3 social impact organization) to replace current Notion-based site. 

### Current Implementation Status: 70% Complete

**✅ Completed:**
- Complete directory structure (src/components/, src/content/, src/layouts/, src/lib/, src/stores/)
- Technology stack fully configured (Astro 5.13.2, React, MDX, Tailwind CSS 4.1)
- TypeScript with strict mode and path aliases
- Content Layer API foundation (src/content/config.ts)
- Base layout component (src/layouts/BaseLayout.astro)
- Web3 foundations prepared (directories and environment schema)
- Build tools configured (biome.json, wrangler.toml)
- Complete documentation and specifications

**❌ Critical Gaps (Immediate Priority):**
- Tailwind configuration missing SuperBenefit design tokens
- Content Layer API needs external repository loaders
- Homepage needs SuperBenefit content and design implementation
- Component library needs SuperBenefit-specific components
- External content aggregation not configured

### SuperBenefit Context:
- **Current site**: Uses Mirror posts, Discord community, $SPRB token governance
- **Knowledge Garden**: Quartz-based with hierarchical content (Artifacts/Library/Notes), dark/light mode
- **Governance**: Git-based transparency with agreements/policies/proposals structure
- **Focus**: "Systems transformation" through Web3 governance and coordination tools

## Development Commands

```bash
# Development
npm run dev          # Start development server with live reload
npm run build        # Build static site for production
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands

# Project setup (when needed)
npm install          # Install dependencies
```

## Project Architecture

This is a SuperBenefit DAO homepage built with Astro, designed for performance and Web3 readiness. The project follows specific architectural patterns:

### Framework: Astro with Strategic Integrations
- **Astro 5.x**: Zero-JS by default, static site generation
- **TailwindCSS**: Utility-first styling with design tokens matching Knowledge Garden
- **React**: Islands architecture for future Web3 features (foundations only, no current implementation)
- **MDX**: For content with embedded components
- **Nanostores**: Lightweight state management for future Web3 features

### Content Strategy
- **Local content**: Markdown files in `src/content/pages/` with YAML frontmatter
- **External aggregation**: Build-time fetching from Knowledge Garden and Governance repos via Content Layer API
- **No runtime fetching**: All content aggregated at build time for performance

### Directory Structure
```
src/
├── components/
│   ├── layout/       # Structural components (header, footer, nav)
│   ├── content/      # Content display components  
│   ├── interactive/  # Client-side JavaScript components
│   └── web3/         # Future Web3 components (empty initially)
├── content/          # Local markdown content
├── pages/            # File-based routing
├── layouts/          # Page layout templates
├── lib/              # Utilities and helpers
└── stores/           # State management (prepared for Web3)
```

### Design System Requirements
Must match Knowledge Garden visual consistency using SuperBenefit design system:
- **Fonts**: Schibsted Grotesk (headings), Source Sans Pro (body), IBM Plex Mono (code)
- **Colors** (Source of Truth - references/design-system.md):
  - **Primary Sage**: #7FA568 (--sb-sage)
  - **Secondary Orange**: #EA8D3C (--sb-orange)
  - **Tertiary Rust**: #D04A26 (--sb-rust)
  - **Background Cream**: #F5D5B3 (--sb-cream)
  - **Charcoal**: #2F2F2F (--sb-charcoal)
- **Approach**: CSS custom properties with --sb prefix for all design tokens

### Performance Targets
- Lighthouse scores: 95+ across all metrics
- Homepage JS bundle: <50KB
- Static generation by default with progressive enhancement

### Web3 Readiness (Foundations Only)
Architecture includes prepared foundations for future Web3 features:
- React islands configured but unused
- Environment variables structured for blockchain integration  
- Component organization ready for Web3 additions
- State management stores initialized
- **Critical**: NO Web3 implementation in initial build

### Deployment
- **Platform**: Cloudflare Workers with Static Assets
- **Build output**: Static files optimized for edge delivery
- **Commands**: `npm run build` then deploy via Wrangler

## Development Guidelines

### Code Quality Tools
- **Biome**: Preferred for formatting and linting (configuration deferred to implementation)
- **TypeScript**: Strict mode configuration extending astro/tsconfigs/strict

### Content Aggregation
- Uses Astro Content Layer API to fetch from GitHub repositories
- Aggregates Knowledge Garden posts marked with `publish: true`
- Fetches recent governance updates and policies
- Graceful fallbacks with cached content if external sources fail

### Critical Constraints
1. **Simplicity**: No complex patterns or exotic dependencies
2. **Performance**: Must maintain 95+ Lighthouse scores
3. **Pragmatic approach**: Working software over perfect code
4. **No premature abstraction**: Use established patterns
5. **No Web3 implementation**: Foundations only in v1

### Next Implementation Steps
Based on current 70% completion status (foundation complete):
1. **Implement design tokens** - Configure Tailwind with SuperBenefit colors and fonts
2. **Build component library** - Create Header, Footer, Navigation with SuperBenefit styling  
3. **Configure external content** - Set up Content Layer API loaders for Knowledge Garden
4. **Implement homepage sections** - Replace default content with SuperBenefit messaging
5. **Add content aggregation** - Display external content from repositories
6. **Performance optimization** - Ensure 95+ Lighthouse scores

### Anti-Patterns to Avoid
- ❌ Complex build processes
- ❌ Premature abstractions
- ❌ Over-engineering for future features
- ❌ Web3 implementation in v1
- ❌ Runtime content fetching (use build-time aggregation)

### Implementation Guidelines
When implementing features:
1. **Start with the simplest working version**
2. **Test each component in isolation**
3. **Verify external content aggregation early**
4. **Check Lighthouse scores frequently**
5. **Document any decisions or blockers**

### Success Metrics
The homepage is successful when:
- ✅ Lighthouse scores 95+ across all metrics
- ✅ Easy to add new pages (just markdown files)
- ✅ Visual consistency with Knowledge Garden
- ✅ External content aggregating properly
- ✅ Web3 foundations ready (not implemented)
- ✅ Deployed to production URL

### Key Files to Reference
- `docs/SPECIFICATION.md`: Complete technical requirements
- `docs/decisions/*.md`: All architectural decision records
- `agents.md`: Detailed development context and research requirements
- `CONTRIBUTING.md`: Development workflow and standards

## Astro Documentation Resources

**Always reference current Astro documentation** when implementing features. Key documentation sets available:

### Essential Documentation Links
- **[Abridged Documentation](https://docs.astro.build/llms-small.txt)**: Compact version with essential content
- **[Complete Documentation](https://docs.astro.build/llms-full.txt)**: Full official documentation  
- **[API Reference](https://docs.astro.build/_llms-txt/api-reference.txt)**: Structured API descriptions
- **[Configuration Guide](https://docs.astro.build/en/guides/configuring-astro/)**: Configuration best practices

### Implementation-Specific Guides
- **[How-to Recipes](https://docs.astro.build/_llms-txt/how-to-recipes.txt)**: Feature implementation examples
- **[Content Collections](https://docs.astro.build/en/guides/content-collections/)**: Content management setup
- **[Integrations](https://docs.astro.build/en/guides/integrations-guide/)**: Adding frameworks and tools
- **[Deployment Guides](https://docs.astro.build/_llms-txt/deployment-guides.txt)**: Platform-specific deployment

### SuperBenefit-Specific Requirements
- **[Cloudflare Workers](https://docs.astro.build/en/guides/deploy/cloudflare/)**: Our deployment target
- **[Content Layer API](https://docs.astro.build/en/reference/content-layer-api/)**: External content integration
- **[TypeScript](https://docs.astro.build/en/guides/typescript/)**: Type safety implementation

**Note**: Astro documentation is automatically generated and always current. When implementing any Astro feature, consult these resources first to ensure you're using the latest APIs and best practices.

When implementing features, always prioritize the existing patterns documented in the specification and decision records. The project emphasizes shipping functional features over engineering perfection.

## Specialized Agent Handoff Instructions

This project uses multiple specialized agents for different phases of development. **Claude Code MUST use these agents proactively based on the task context.**

### PROACTIVE AGENT USAGE REQUIREMENTS

**Claude Code must automatically engage the appropriate specialized agent when:**

1. **astro-docs-specialist**: ANY mention of Astro features, configuration, or implementation questions
2. **astro-config-specialist**: Configuration files need modification (astro.config.mjs, tsconfig.json, package.json, tailwind.config.js)
3. **sb-customization-specialist**: SuperBenefit-specific design, components, or branding work
4. **code-audit-specialist**: Code quality, performance, security, or accessibility review needed
5. **spec-compliance-reviewer**: Verification against project specifications required

**DO NOT ask the user which agent to use - automatically select based on the task type.**

### Agent Descriptions

Always use the appropriate agent for each task:

### 1. astro-docs-specialist (Green/Sonnet)
**Use For**: Documentation access and knowledge management through MCP servers
**When**: Supporting other agents with current documentation and implementation guidance
**Responsibilities**:
- Access Astro and Cloudflare documentation through MCP servers using structured sitemap guidance
- Use `.claude/astro-sitemap.md` (curated English-only, excludes CMS) to identify relevant documentation sections before searching
- Provide current API references and implementation guides with specific URL references
- Manage fallback access to .claude/llms.txt resources when MCP unavailable
- Support other agents with just-in-time documentation access
- **CRITICAL**: Always research documentation BEFORE other agents implement features

**Documentation Search Strategy**:
1. **Consult sitemap first**: Review `.claude/astro-sitemap.md` to identify relevant sections
2. **Targeted MCP searches**: Use `mcp__astro-docs__search_astro_docs` with specific terms from sitemap
3. **Fallback resources**: Use .claude/llms.txt files if MCP fails
4. **Cross-reference**: Verify information across multiple documentation sources

**Works With**: All other agents as documentation support specialist

### 2. astro-config-specialist (Blue/Sonnet)
**Use For**: Comprehensive Astro configuration including integrations, content, and deployment
**When**: After basic structure is established, before feature implementation
**Responsibilities**:
- **FIRST**: Request astro-docs-specialist research on all configuration topics
- Configure astro.config.mjs with all integrations and settings (using current docs)
- Set up Tailwind CSS with SuperBenefit design tokens (verify latest Tailwind integration)
- Configure Content Layer API and external content loaders (confirm current API syntax)
- Set up TypeScript configuration and path aliases (validate current patterns)
- Configure deployment settings for Cloudflare Workers (check latest adapter requirements)
- Optimize performance and development environment

**CRITICAL**: Never configure without first consulting astro-docs-specialist for current documentation

**Handoff To**: sb-customization-specialist for implementing features and components

### 3. sb-customization-specialist (Pink/Sonnet)
**Use For**: SuperBenefit-specific features and customization
**When**: After foundation and content systems are established
**Responsibilities**:
- **FIRST**: Request astro-docs-specialist research on component patterns, layouts, and responsive design
- Implement SuperBenefit design system and design tokens (verify current Astro + Tailwind patterns)
- Build layout components (Header, Footer, Navigation) using validated Astro component syntax
- Create homepage sections and content display (confirm current content handling best practices)
- Configure Web3 foundations (without implementation) using current Astro islands patterns
- Apply responsive design and dark mode (verify latest CSS and component approaches)
- Integrate external content display (validate Content Layer API usage)

**CRITICAL**: Never implement components without first consulting astro-docs-specialist for current Astro patterns

**Handoff To**: code-audit-specialist for quality review

### 4. code-audit-specialist (Red/Opus)
**Use For**: Comprehensive code quality and security auditing
**When**: After implementation phases, before deployment
**Responsibilities**:
- Performance analysis (95+ Lighthouse scores, <50KB JS bundle)
- Security vulnerability scanning
- Accessibility compliance (WCAG 2.1 AA)
- Best practices adherence
- Code quality and maintainability review

**Handoff To**: spec-compliance-reviewer for final specification compliance

### 5. spec-compliance-reviewer (Orange/Opus)
**Use For**: Technical specification compliance and final review
**When**: Final review before deployment or major milestones
**Responsibilities**:
- Verify implementation against docs/SPECIFICATION.md
- Check compliance with all architecture decision records
- Validate Web3 readiness foundations (not implementation)
- Ensure performance targets are met
- Final compliance scoring and gap analysis

### Agent Workflow (Current Project State - 70% Complete)

**Current Phase - Configuration Completion** (Immediate next step):
```
1. astro-config-specialist
   ↓ (Complete Tailwind config with design tokens and Content Layer API external loaders)
   
2. sb-customization-specialist
   ↓ (Implement SuperBenefit design system, content display, and features)
   
3. code-audit-specialist
   ↓ (Review implementation quality, performance, security)
   
4. spec-compliance-reviewer
   ↓ (Final compliance verification and deployment readiness)
```

**Supporting Agents** (Available as needed):
- **astro-docs-specialist**: Documentation support for all agents
- **astro-config-specialist**: Additional configuration if needed

**Alternative Entry Points** (For different project states):
- **New Project**: Start with astro-config-specialist → sb-customization-specialist
- **Configuration Issues**: Use astro-config-specialist for fixes
- **Documentation Needs**: Use astro-docs-specialist for research

### CRITICAL: Documentation Research Requirement

**MANDATORY FOR ALL AGENTS**: Before implementing ANY Astro feature, configuration, or integration:
1. **MUST use astro-docs-specialist first** to research current Astro documentation
2. **NO EXCEPTIONS**: Never implement based on assumptions or outdated knowledge
3. **NEVER use Astro docs MCP directly**: Only astro-docs-specialist has sitemap context for proper Astro documentation queries
4. **Verify syntax and APIs**: Always confirm current Astro patterns and best practices through astro-docs-specialist
5. **Reference specific documentation**: Include source URLs provided by astro-docs-specialist in implementation decisions

**CRITICAL**: Only astro-docs-specialist should use `mcp__astro-docs__search_astro_docs` - all other agents must request Astro documentation through astro-docs-specialist

**NOTE**: This restriction applies ONLY to Astro documentation MCP servers. Agents may use other MCP servers as appropriate for their roles.

**Workflow**: `astro-docs-specialist` → (research complete) → implementation agent

### Agent Selection Guidelines & Boundaries

**Clear Responsibility Boundaries:**

- **astro-docs-specialist**: Documentation research and MCP server access ONLY
  - Does NOT implement code or configurations
  - Provides information to other agents
  - Maintains knowledge index and fallback strategies

- **astro-config-specialist**: Core Astro configuration files ONLY
  - astro.config.mjs, tsconfig.json, package.json
  - Integration setup (when not SuperBenefit-specific)
  - Does NOT handle design tokens or SuperBenefit customization

- **sb-customization-specialist**: SuperBenefit-specific implementation ONLY
  - Design system tokens and Tailwind configuration
  - SuperBenefit branding and content
  - Component implementation and layout
  - Content Layer API external loaders
  - Does NOT handle generic Astro configuration

- **code-audit-specialist**: Quality review ONLY
  - Performance, security, accessibility analysis
  - Does NOT check specification compliance
  - Focus on implementation quality, not requirements alignment

- **spec-compliance-reviewer**: Requirements verification ONLY  
  - Alignment with docs/SPECIFICATION.md
  - Does NOT perform code quality audits
  - Focus on requirements compliance, not code quality

### Documentation Support Integration

The **astro-docs-specialist** works as a supporting agent for all implementation agents:
- **MCP Server Access**: Astro Docs and Cloudflare Docs through official servers
- **Knowledge Index**: Maintains comprehensive topic index for quick reference
- **Fallback Strategy**: Uses .claude/llms.txt resources when MCP unavailable
- **Chain Work**: Can fetch multiple related documentation sections in sequence

**Usage Pattern**: Other agents can request specific documentation from astro-docs-specialist to ensure they're using current APIs and best practices.

Each agent has specific expertise and should be used for their designated responsibilities. The astro-docs-specialist supports all agents with current documentation access.