# ADR-001: Use Astro as Primary Framework

## Status
Accepted

## Context
We need a static site generator that:
- Ships minimal JavaScript
- Supports markdown content
- Enables future Web3 features
- Has gentle learning curve
- Achieves 95+ Lighthouse scores

## Decision
Use Astro 5.1+ as the primary framework.

## Rationale
- **Zero JS by default**: Perfect for performance requirements
- **Island architecture**: Add interactivity selectively
- **Content Layer API**: Native external content aggregation
- **Multi-framework**: Can use React for Web3 components later
- **1-2 day learning curve**: Team can onboard quickly

## Alternatives Considered
- **Next.js**: Too complex, requires React knowledge
- **11ty**: Limited interactivity options
- **Hugo**: No TypeScript, harder Web3 integration
- **SvelteKit**: Smaller ecosystem, requires Svelte knowledge

## Consequences
- ✅ Exceptional performance out of the box
- ✅ Easy to add pages (just markdown files)
- ✅ Clear upgrade path to Web3
- ✅ Native content aggregation via Content Layer
- ⚠️ Smaller ecosystem than Next.js
- ⚠️ Team needs to learn Astro patterns
- ⚠️ Relatively new framework (but stable)
