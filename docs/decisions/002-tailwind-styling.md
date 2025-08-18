# ADR-002: Use Tailwind CSS for Styling

## Status
Accepted

## Context
We need a styling solution that:
- Enables rapid development
- Maintains consistency across components
- Works well with Astro
- Has gentle learning curve for non-specialists
- Produces optimized CSS output

## Decision
Use Tailwind CSS 3.4 with custom configuration for design tokens.

## Rationale
- **Utility-first**: Rapid prototyping without writing CSS
- **JIT compiler**: Only includes used styles
- **Design tokens**: CSS custom properties for consistency
- **Extensive ecosystem**: UI libraries, plugins, tools
- **Excellent Astro integration**: First-class support

## Alternatives Considered
- **Vanilla CSS**: Too slow for rapid development
- **CSS Modules**: More boilerplate, less rapid
- **Styled Components**: Runtime overhead, not ideal for SSG
- **UnoCSS**: Similar benefits but smaller ecosystem

## Consequences
- ✅ Very fast development speed
- ✅ Consistent styling patterns
- ✅ Small CSS bundle size
- ✅ Easy to maintain design system
- ⚠️ HTML can become verbose with many utilities
- ⚠️ Learning curve for utility-first approach
- ⚠️ Different from Quartz's Lightning CSS (but achieves visual consistency)
