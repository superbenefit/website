# ADR-004: Cloudflare Workers Deployment

## Status
Accepted

## Context
We need a deployment platform that:
- Matches existing infrastructure (current use of Cloudflare)
- Supports static site hosting
- Enables future edge functions
- Has generous free tier
- Provides global CDN

## Decision
Deploy to Cloudflare Workers with Static Assets.

## Rationale
- **Already in use**: Team familiar with Cloudflare
- **Unified platform**: Workers now handles static assets natively
- **Edge computing ready**: Can add functions later
- **Excellent performance**: Global edge network
- **Cost effective**: Free tier sufficient for our needs

## Alternatives Considered
- **Vercel**: Great DX but different from current stack
- **Netlify**: Similar to Vercel, new platform to learn
- **GitHub Pages**: Limited functionality, no edge compute
- **AWS CloudFront + S3**: More complex setup

## Consequences
- ✅ Consistent with existing infrastructure
- ✅ No new platforms to learn
- ✅ Progressive enhancement path (static → edge functions)
- ✅ Excellent global performance
- ✅ Simple deployment via Wrangler CLI
- ⚠️ Less "automatic" than Vercel/Netlify
- ⚠️ Requires Wrangler configuration
- ✅ Future-proof for Web3 edge functions
