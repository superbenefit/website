# ADR-003: Use Astro Content Layer for Aggregation

## Status
Accepted

## Context
We need to aggregate content from external GitHub repositories:
- Knowledge Garden (Quartz-based)
- Governance repository (plain markdown)
- Must happen at build time
- Must respect `publish: true` flags
- Cannot break builds if sources unavailable

## Decision
Use Astro's native Content Layer API (v5.0+) instead of third-party solutions.

## Rationale
- **Native to Astro**: No additional dependencies
- **GitHub loader built-in**: Direct repository fetching
- **Type-safe**: Automatic TypeScript types
- **Cacheable**: Built-in caching for development
- **Simple configuration**: Minimal setup required

## Alternatives Considered
- **Velite**: Single maintainer risk, additional complexity
- **Contentlayer**: Abandoned (April 2024)
- **Custom scripts**: More maintenance burden
- **Runtime fetching**: Performance penalty, complexity

## Consequences
- ✅ One less dependency to manage
- ✅ Better long-term support (core Astro feature)
- ✅ Simpler mental model
- ✅ 2-4 hours setup vs 8-12 for alternatives
- ⚠️ Tied to Astro ecosystem
- ⚠️ Less flexible than custom solutions
- ✅ Perfect for our specific use case
