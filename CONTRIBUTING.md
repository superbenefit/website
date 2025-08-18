# Contributing to SuperBenefit Homepage

Thank you for your interest in contributing! This project prioritizes simplicity and pragmatic development while leveraging Astro's powerful capabilities.

## 🎯 Project Context

Building a homepage for SuperBenefit DAO with focus on:
- **Shipped features** over perfect code
- **Simple solutions** over clever optimizations  
- **Clear patterns** over DRY abstractions
- **Working software** over comprehensive documentation

## Prerequisites

```shell
node: "^>=18.20.8"
pnpm: "^9.12.1"
# otherwise, your build will fail
```

We recommend using Corepack, [read PNPM docs](https://pnpm.io/installation#using-corepack).

## 🚀 Getting Started

### Project Knowledge
1. Read the [Technical Specification](./docs/SPECIFICATION.md)
2. Review the [agents.md](./agents.md) for Claude Code context
3. Check existing [Architecture Decisions](./docs/decisions/)
4. Follow [Implementation Guide](./docs/IMPLEMENTATION_GUIDE.md) for setup

### Local Development Setup

This project uses pnpm workspaces, so **always run `pnpm install` from the top-level project directory**.

```shell
git clone && cd superbenefit-homepage
pnpm install
pnpm run build
```

See the [Implementation Guide](./docs/IMPLEMENTATION_GUIDE.md) for detailed:
- Astro project initialization
- TypeScript configuration
- Tailwind CSS setup
- Content structure
- Deployment configuration

### Development Commands

```shell
# starts a file-watching, live-reloading dev script
pnpm run dev

# build the entire project, one time
pnpm run build

# preview production build locally
pnpm run preview

# auto-format the entire project
pnpm run format

# lint the project
pnpm run lint
```

### Git Configuration

To improve your development experience, run these commands locally:

```shell
# Ignore repo-wide formatting changes in git blame
git config --local blame.ignoreRevsFile .git-blame-ignore-revs

# Handle pnpm-lock.yaml merge conflicts automatically
pnpm add -g @pnpm/merge-driver
pnpm dlx npm-merge-driver install --driver-name pnpm-merge-driver --driver "pnpm-merge-driver %A %O %B %P" --files pnpm-lock.yaml
```

## 📝 Content Contributions

### Adding Pages
Create markdown files in `src/content/pages/`:
```markdown
---
title: "Page Title"
description: "Page description"
---

Your content here...
```

### External Content
- Knowledge Garden content auto-aggregates
- Governance content auto-aggregates
- No manual sync needed

### Content Guidelines
1. **Keep it simple**: Clear, direct language
2. **Front-load value**: Most important info first
3. **Use headings**: Structure content hierarchically
4. **Be concise**: Respect visitor's time
5. **Include CTAs**: Guide visitors to next steps

## 🏗 Code Standards

### Use Established Patterns
- Astro components for static content
- React islands ONLY for Web3 features (future)
- Tailwind utilities for styling
- TypeScript for type safety

### Keep It Simple
- No premature abstractions
- No complex build pipelines
- No exotic dependencies
- Clear > clever

### Performance First
- Target 95+ Lighthouse scores
- <50KB JS bundle for homepage
- Static generation by default
- Progressive enhancement

### Testing Your Changes

**How can I test my changes while contributing?**

During development, you can test your changes in several ways:

1. **Use the dev server**: Run `pnpm run dev` for live-reloading development
2. **Build and preview**: Run `pnpm run build && pnpm run preview` to test production builds
3. **Create a test project**: Use `pnpm link` to test your changes in a separate project

For smaller changes, using the dev server is usually sufficient. For larger changes, testing with production builds is recommended.

### Debugging

You can debug Vite processes by prefixing commands with `DEBUG`:

```shell
DEBUG=vite:* pnpm run dev        # debug everything in Vite
DEBUG=vite:transform pnpm run dev   # debug specific process
```

## 🧪 Testing

Focus on practical validation rather than comprehensive test suites:

### Manual Testing
- Test critical user paths manually
- Verify responsive behavior on different screen sizes
- Check keyboard navigation and accessibility

### Performance Testing
- Run Lighthouse audits regularly during development
- Ensure scores remain 95+ across all metrics
- Monitor bundle sizes with build output

### Cross-browser Testing
- Test in Chrome, Firefox, Safari, and Edge
- Use browser DevTools for mobile device simulation
- Verify functionality works without JavaScript

### Accessibility Testing
- Use axe DevTools for automated accessibility checks
- Test keyboard navigation for all interactive elements
- Verify screen reader compatibility with NVDA or similar tools

### Running Tests

```shell
# run performance checks
pnpm run build
# (then manually check Lighthouse scores)

# run linting
pnpm run lint

# run formatting check
pnpm run format
```

## 🚢 Deployment

Deployment via Cloudflare Workers:
1. Build static site: `pnpm run build`
2. Run performance checks
3. Deploy to Cloudflare: `pnpm run deploy`
4. Verify deployment

See [Deployment Guide](./docs/DEPLOYMENT.md) for detailed instructions.

## 🤝 Communication

- **Quick questions**: Open an issue using our templates
- **Implementation discussions**: Comment on relevant issue/PR
- **Architecture decisions**: Create ADR in `/docs/decisions/`
- **Bug reports**: Use the bug report template in `.github/ISSUE_TEMPLATE/`

## 📋 Making a Pull Request

### Before Submitting

- [ ] Read the technical specification
- [ ] Follows existing code patterns
- [ ] Maintains Lighthouse scores (95+)
- [ ] Works on mobile devices
- [ ] Includes necessary documentation
- [ ] Doesn't add unnecessary complexity

### Changeset Requirements

When making a pull request that changes functionality, add a changeset:

```shell
pnpm exec changeset
```

Note: Examples and documentation-only changes don't need changesets.

### PR Checklist

- [ ] Follows established patterns
- [ ] Maintains performance requirements
- [ ] Works across target browsers
- [ ] Accessible (WCAG AA compliance)
- [ ] Includes relevant tests/validation
- [ ] Updates documentation if needed

## ⚠️ Important Project-Specific Notes

1. **No Web3 implementation yet** - foundations only, no blockchain features
2. **No complex features** - homepage first, enhance later
3. **No scope creep** - maintain focus on core requirements
4. **No bike-shedding** - make pragmatic decisions quickly

### Anti-Patterns to Avoid
- ❌ Complex build processes
- ❌ Premature abstractions
- ❌ Over-engineering for future features
- ❌ Web3 implementation in v1
- ❌ Runtime content fetching (use build-time aggregation)

## 🛠 Code Structure Understanding

Understanding the Astro project structure helps with contributions:

- `src/components/`: Component library organized by function
  - `layout/`: Structural components (header, footer, navigation)
  - `content/`: Content display components
  - `interactive/`: Components requiring client-side JavaScript
  - `web3/`: Future blockchain-related components (empty initially)
- `src/content/`: Local markdown content with frontmatter
- `src/pages/`: File-based routing for pages
- `src/layouts/`: Page layout templates
- `src/lib/`: Utilities and helper functions
- `src/stores/`: State management (for future Web3 features)

### Web3 Readiness Foundations

The architecture includes prepared foundations for future Web3 features:
- React island support configured but unused
- Environment variables structured for blockchain integration
- Component organization ready for Web3 additions
- State management stores initialized

See [Web3 Integration Guide](./docs/WEB3_INTEGRATION.md) for future implementation details.

## 📚 Additional Resources

- [Technical Specification](./docs/SPECIFICATION.md) - Complete requirements and architecture
- [Implementation Guide](./docs/IMPLEMENTATION_GUIDE.md) - Development setup and configuration
- [Content Guide](./docs/CONTENT_GUIDE.md) - Writing and organizing content
- [Deployment Guide](./docs/DEPLOYMENT.md) - Deploy to production
- [Web3 Integration Guide](./docs/WEB3_INTEGRATION.md) - Future Web3 implementation path

## 🎉 Recognition

We appreciate all contributions, whether they're bug fixes, new features, documentation improvements, or helping other contributors. Every contribution helps make SuperBenefit's digital presence better.

For questions about Astro itself (not project-specific), refer to the [official Astro documentation](https://docs.astro.build) and [Astro's contributor guide](https://github.com/withastro/astro/blob/main/CONTRIBUTING.md).