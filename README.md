# SuperBenefit Homepage

Modern, performant homepage for SuperBenefit DAO built with Astro and Tailwind CSS.

## 🎯 Implementation Status

### ✅ Completed (70% Overall)
- **Complete Directory Structure**: All src/ directories created and organized
- **Technology Stack**: Astro 5.13.2, React, MDX, Tailwind CSS 4.1 fully configured
- **TypeScript**: Strict mode with path aliases configured
- **Build Tools**: Biome, Wrangler, and deployment configuration complete
- **Base Layout**: src/layouts/BaseLayout.astro with SEO optimization
- **Content Foundation**: src/content/config.ts prepared for Content Layer API
- **Web3 Foundations**: Directory structure and environment schema ready
- **Documentation**: Complete specification and architecture decisions

### 🚧 Ready for Implementation (Current Focus)
- **Design System Integration**: Tailwind configuration with SuperBenefit tokens
- **Component Library**: Header, Footer, Navigation with SuperBenefit styling
- **Content Layer API**: External repository loaders for Knowledge Garden
- **Homepage Content**: SuperBenefit messaging and branding implementation

### 📋 Remaining Tasks
- **External Content Aggregation**: Connect Knowledge Garden and governance repositories
- **Performance Optimization**: Achieve 95+ Lighthouse scores
- **Final Content**: Complete homepage sections and content display

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

See [Technical Specification](./docs/SPECIFICATION.md) for detailed requirements.

## 📁 Project Structure

```
superbenefit-homepage/
├── docs/                 # Documentation and specifications
│   ├── SPECIFICATION.md  # Technical specification v1.0
│   ├── PROJECT_STRUCTURE.md  # Detailed structure guide
│   └── decisions/        # Architecture decision records
├── content-examples/     # Sample markdown content
├── references/           # Design and content references
├── .github/             # GitHub configuration
└── agents.md            # Claude Code context
```

For detailed structure, see [Project Structure Guide](./docs/PROJECT_STRUCTURE.md).

## 🎨 Design System

This homepage maintains visual consistency with SuperBenefit's Knowledge Garden. A comprehensive design system will be implemented including typography, colors, spacing, and component patterns.

## 🔗 Related Properties

- **Knowledge Garden**: [knowledge.superbenefit.org](https://knowledge.superbenefit.org)
- **Governance**: [github.com/superbenefit/governance](https://github.com/superbenefit/governance)
- **Current Site**: [superbenefit.org](https://superbenefit.org)

## 🛠 Technology Stack

- **Framework**: [Astro](https://astro.build) - Zero-JS by default
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **Content**: Markdown + YAML frontmatter
- **Deployment**: Cloudflare Workers with Static Assets
- **Code Quality**: Biome preferred for formatting/linting

## 📚 Documentation

- [Technical Specification](./docs/SPECIFICATION.md) - Complete requirements and architecture
- [Implementation Guide](./docs/IMPLEMENTATION_GUIDE.md) - Development setup and configuration
- [Contributing Guide](./CONTRIBUTING.md) - How to contribute
- [Content Guide](./docs/CONTENT_GUIDE.md) - Writing and organizing content
- [Deployment Guide](./docs/DEPLOYMENT.md) - Deploy to production

## 🚦 Web3 Readiness

The architecture includes foundations for future Web3 features:
- React island support configured
- Environment variables structured
- Component organization prepared
- State management initialized

See [Web3 Integration Guide](./docs/WEB3_INTEGRATION.md) for details.

## 📄 License

MIT
