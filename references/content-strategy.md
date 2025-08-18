# SuperBenefit DAO Homepage Content Strategy

## 1. MESSAGING HIERARCHY

### Primary Message
**"Coordination infrastructure for regenerative communities building the future of social impact."**

### Supporting Messages

#### Message 1: Proven Governance
**"Battle-tested DAO frameworks that actually work"**

Proof Points:
- Active since 2021 with consistent governance participation
- 50+ successful proposals passed and implemented
- Integrated with Aragon, Hats Protocol, and established Web3 tools
- Transparent treasury management with on-chain verification

#### Message 2: Real Impact
**"Moving beyond speculation to create measurable social value"**

Proof Points:
- $X allocated to regenerative projects
- Y active working groups delivering outcomes
- Published knowledge base with 100+ resources
- Partnerships with established impact organizations

#### Message 3: Open Participation
**"Your expertise has value here—contribute and be rewarded"**

Proof Points:
- Multiple contribution pathways (code, content, governance)
- Clear onboarding process with mentorship
- Retroactive funding for valuable contributions
- No token requirements to participate initially

---

## 2. CONTENT SECTIONS STRATEGY

### Section 1: Hero

**Purpose**: Immediate value proposition and action prompt

**Key Message**: "Join a DAO that's actually building the regenerative economy"

**Content Type**: Static with dynamic member count

**Content Elements**:
```
Headline: "DAO Infrastructure for Social Impact"
Subheadline: "Join [XX] builders coordinating regenerative communities through Web3 governance"
CTA Primary: "Explore the DAO"
CTA Secondary: "Read Our Thesis"
Visual: Network visualization showing interconnected nodes
```

**Update Frequency**: Member count weekly, rest quarterly

**Success Metric**: CTA click-through rate >5%

---

### Section 2: Mission & Services

**Purpose**: Explain what we do and why it matters

**Key Message**: "We provide the tools and knowledge for communities to self-organize effectively"

**Content Structure**:
```
Mission Statement (static):
"SuperBenefit enables regenerative communities to coordinate resources, 
make decisions collectively, and create lasting social impact through 
decentralized governance infrastructure."

Service Area 1: Governance Infrastructure
- Headline: "Governance That Scales"
- Body: "From small working groups to large community decisions, 
  our frameworks adapt to your needs"
- Features:
  • Proposal templates and workflows
  • Multi-sig treasury management
  • Role-based permissions with Hats Protocol

Service Area 2: Knowledge Commons
- Headline: "Learn From What Works"
- Body: "Access patterns, playbooks, and case studies from 
  successful regenerative DAOs"
- Features:
  • Curated governance patterns
  • Implementation guides
  • Community-validated resources
```

**Update Frequency**: Quarterly review

**Success Metric**: Average time on section >30 seconds

---

### Section 3: DAO Overview

**Purpose**: Build credibility through transparency

**Key Message**: "See exactly how we operate"

**Content Cards**:
```
Card 1: Active Contributors
"[XX] members across [Y] working groups"
Link: "View Contributors →"

Card 2: Treasury Status
"$[XXX]K allocated to regenerative projects"
Link: "View On-Chain →"

Card 3: Recent Decisions
"[XX] proposals passed this quarter"
Link: "Governance Forum →"
```

**Content Type**: Dynamic (pulled from on-chain/API)

**Update Frequency**: Real-time or daily cache

**Success Metric**: Click-through to governance >3%

---

### Section 4: Latest Activity

**Purpose**: Demonstrate ongoing momentum

**Key Message**: "Active community creating continuous value"

**Content Sources**:
- Knowledge Garden posts (filtered by tag: "featured")
- Recent governance proposals (status: "passed")
- Community updates (source: forum highlights)

**Card Template**:
```
[Icon based on type]
Title: [Post title, 60 char max]
Preview: [First 120 characters]
Meta: [Date] • [Type] • [Read time]
```

**Update Frequency**: On build (daily)

**Success Metric**: >20% click to full content

---

### Section 5: Community

**Purpose**: Clear onboarding paths

**Key Message**: "Multiple ways to contribute based on your skills"

**Content Cards**:
```
Card 1: Join Governance
"Participate in decisions shaping the future of regenerative Web3"
CTA: "View Active Proposals"

Card 2: Contribute Knowledge
"Share insights and earn recognition in our knowledge commons"
CTA: "Contribution Guide"
```

**Content Type**: Static

**Update Frequency**: Monthly review

**Success Metric**: >10% proceed to onboarding

---

### Section 6: Footer

**Purpose**: Navigation and newsletter capture

**Key Message**: "Stay connected"

**Content Structure**:
```
Newsletter:
Headline: "Weekly Regenerative Web3"
Subtext: "Governance updates, opportunities, and insights"
CTA: "Subscribe"

Links organized by:
- Participate (Discord, Forum, Calendar)
- Resources (Docs, Knowledge Garden, GitHub)
- Governance (Proposals, Treasury, Constitution)
```

---

## 3. MICROCOPY GUIDELINES

### CTA Button Text

**Primary Actions**:
- "Explore the DAO" (discovery)
- "Join Discussion" (engagement)
- "View Proposals" (governance)
- "Start Contributing" (onboarding)

**Secondary Actions**:
- "Learn More →"
- "Read Thesis →"
- "View Details →"
- "See Examples →"

**Avoid**: Generic "Click Here", "Submit", "Go"

### Navigation Labels

**Main Nav**:
```
Home
Knowledge Garden ↗
Governance ↗
About
Contribute
```

**Mobile Menu Addition**:
```
Discord Community ↗
Documentation ↗
```

### Error Messages

**Content Loading Error**:
```
"Unable to load recent updates. Showing cached content from [date]."
Action: "Retry" | "Continue"
```

**External Link Error**:
```
"This links to an external resource that may be temporarily unavailable."
Action: "Try Again" | "Report Issue"
```

**Form Error**:
```
"Please enter a valid email address (name@example.com)"
"Connection interrupted. Your submission was saved locally."
```

### Loading States

**Content Loading**:
```
Initial: "Loading latest from the DAO..."
Extended (>3s): "Almost there..."
```

**Transaction States** (future):
```
"Preparing transaction..."
"Waiting for wallet confirmation..."
"Transaction submitted. Confirming..."
```

### Empty States

**No Recent Posts**:
```
Headline: "Knowledge garden updates coming soon"
Body: "Check back regularly or explore our archived resources."
CTA: "Browse Archive →"
```

**No Proposals**:
```
Headline: "No active proposals"
Body: "New proposals typically posted Mondays. Join Discord for discussions."
CTA: "View Past Proposals →"
```

---

## 4. SEO FOUNDATIONS

### Title Tags

**Homepage**:
```html
<title>SuperBenefit DAO - Web3 Governance for Social Impact</title>
```

**Future Pages**:
```
About: "About SuperBenefit - Regenerative DAO Infrastructure"
Contribute: "Contribute to SuperBenefit DAO - Governance & Development"
Knowledge: "SuperBenefit Knowledge Garden - DAO Patterns & Resources"
```

### Meta Descriptions

**Homepage** (155 chars):
```html
<meta name="description" content="Join SuperBenefit DAO to build regenerative communities through Web3 governance. Access tools, knowledge, and funding for social impact.">
```

### H1 Strategy

**Single H1 Per Page**:
```html
<h1 class="sr-only">SuperBenefit DAO - Coordination Infrastructure for Regenerative Communities</h1>
<!-- Visible headline uses h2 -->
<h2>DAO Infrastructure for Social Impact</h2>
```

### Open Graph Tags

```html
<meta property="og:title" content="SuperBenefit DAO - Web3 Governance for Social Impact">
<meta property="og:description" content="Join builders creating regenerative communities through decentralized governance. Access tools, knowledge, and funding.">
<meta property="og:image" content="https://superbenefit.org/og-image.png">
<meta property="og:url" content="https://superbenefit.org">
<meta property="og:type" content="website">
<meta property="og:site_name" content="SuperBenefit DAO">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@SuperBenefitDAO">
<meta name="twitter:creator" content="@SuperBenefitDAO">
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SuperBenefit DAO",
  "description": "Decentralized autonomous organization building regenerative Web3 infrastructure",
  "url": "https://superbenefit.org",
  "logo": "https://superbenefit.org/logo.png",
  "sameAs": [
    "https://twitter.com/SuperBenefitDAO",
    "https://github.com/superbenefit"
  ],
  "knowsAbout": ["Web3", "DAO", "Governance", "Social Impact", "Regenerative Economics"]
}
```

---

## Content Voice Guidelines

### Tone Attributes
- **Professional but not corporate** - We're serious about impact but not stuffy
- **Technical but accessible** - Explain Web3 concepts without condescension
- **Optimistic but realistic** - Acknowledge challenges while focusing on possibilities
- **Inclusive but specific** - Welcome newcomers while respecting expertise

### Writing Principles

**Do**:
- Lead with value, not technology
- Use concrete examples over abstract concepts
- Define jargon on first use
- Write in active voice
- Keep sentences under 25 words when possible

**Don't**:
- Assume Web3 knowledge
- Use hype language ("revolutionary", "game-changing")
- Make promises about token value
- Use exclusive language ("guys", "ninjas", "rockstars")

### Term Preferences

**Use**: 
- "members" not "users"
- "governance participants" not "token holders"  
- "contribute" not "work"
- "coordinate" not "manage"
- "regenerative" not "sustainable"

---

## Implementation Checklist

### Immediate Actions
- [ ] Write hero headline variations for A/B testing
- [ ] Create mission statement (200 words max)
- [ ] Draft 3-5 service descriptions (50 words each)
- [ ] Write newsletter opt-in copy
- [ ] Create error message library

### Content Needed
- [ ] 10-15 FAQ items for future FAQ page
- [ ] Contributor onboarding sequence (5 steps)
- [ ] Governance participation guide
- [ ] Social media descriptions (Twitter, Discord)

### Measurement Setup
- [ ] Define conversion events
- [ ] Set up content engagement tracking
- [ ] Create monthly content review template
- [ ] Establish voice/tone validation checklist