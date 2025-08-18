# Astro Documentation Sitemap Reference

This file provides a structured reference to the comprehensive Astro documentation sitemap for the astro-docs-specialist agent. The complete sitemap is maintained in `.claude/astro-sitemap.md` and MUST be consulted before making any MCP searches.

## MANDATORY Usage Instructions for astro-docs-specialist

1. **ALWAYS read sitemap first** - Read `.claude/astro-sitemap.md` completely before ANY MCP searches
2. **Map queries to sections** - Identify 2-3 relevant sitemap sections for each query
3. **Extract precise terms** - Use exact section titles and URLs for targeted MCP queries
4. **Reference URLs** - Include specific documentation URLs from sitemap in all responses

## Comprehensive Documentation Categories (113 sections total)

### **Core Categories:**
- **Basics** (4): Components, Pages, Layouts, Project Structure
- **Concepts** (2): Islands, Why Astro
- **Guides** (72): Implementation guides, integrations, configuration, styling, testing
- **Recipes** (6): Practical implementation examples
- **Reference** (29): Complete API documentation, modules, configuration

### **Key Reference Sections (29 total):**
- Configuration Reference, API Reference, CLI Commands
- Content Layer API, Content Loader Reference, Content Collection APIs
- All astro: modules (actions, assets, config, content, env, i18n, middleware, transitions)
- Experimental Flags, Legacy Flags, TypeScript Reference
- Error Reference, Directives Reference, Routing Reference

### **Critical Guides for SuperBenefit:**
- **Configuration**: Configuring Astro, Content Collections, Data Fetching
- **Styling**: Styling, Tailwind Integration, Syntax Highlighting
- **Content**: Content Collections, Markdown Content, View Transitions
- **Performance**: Testing, Troubleshooting, TypeScript
- **Deployment**: Cloudflare deployment (only deployment guide included)

### **Strategic Exclusions Maintained:**
- CMS guides (except main CMS page) - not using CMS
- All deployment guides except Cloudflare - only relevant platform

## SuperBenefit Project Documentation Priorities

When agents request documentation, prioritize searches in this order:

1. **Reference sections** - For API syntax and configuration details
2. **Configuration guides** - For setup and integration questions  
3. **Specific feature guides** - For implementation guidance
4. **Recipes** - For practical examples and patterns
5. **Troubleshooting** - For debugging and issues

## Search Strategy for astro-docs-specialist

For any documentation request:
1. Read full sitemap to understand available sections
2. Identify 2-3 most relevant sections based on query
3. Use section titles as search terms in MCP queries
4. Reference specific sitemap URLs in responses
5. Cross-reference multiple relevant sections

This comprehensive reference ensures efficient, targeted documentation searches that support all other agents' implementation work with precise, current Astro documentation.