# ADR-005: Code Quality Tooling - Biome Preferred

## Status
Accepted

## Context
We need code quality tools for:
- Code formatting consistency
- Linting for common errors
- TypeScript type checking
- Git hooks for pre-commit checks

However, this is an implementation detail that doesn't need to be decided during planning phase.

## Decision
Biome is the preferred code quality tool, but defer configuration details to implementation start.

## Rationale
- **Biome advantages**: Fast (25x faster than Prettier), zero-config, single tool for formatting and linting
- **Configuration can wait**: Specific rules and settings are implementation details
- **Avoid premature config**: Don't create config files before code exists
- **Flexibility**: Team can adjust Biome settings based on actual needs

## Configuration to Determine During Implementation
- Indentation (spaces vs tabs, width)
- Quote style (single vs double)
- Semicolon usage
- Line width limits
- Import sorting rules
- Specific lint rules to enable/disable

## Consequences
- ✅ Fast, modern tooling chosen
- ✅ Single tool for formatting and linting
- ✅ Configuration flexibility preserved
- ✅ No premature config files
- ⚠️ Team must configure Biome early in implementation
- ⚠️ May need adjustments based on team preferences
