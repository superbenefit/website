# SuperBenefit Homepage Visual Directions

## Direction 1: "Organic Growth" 🌱
*Emphasizing the garden/regenerative theme*

### Hero Section Treatment
```css
.hero-organic {
  background: linear-gradient(135deg, #FDFBF8 0%, #F5D5B3 50%, #C5D4BA 100%);
  position: relative;
  overflow: hidden;
}

.hero-organic::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  background: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50c25-10 25 10 50 0s25 10 50 0' stroke='%237FA56810' fill='none'/%3E%3C/svg%3E");
  animation: flow 20s linear infinite;
}

/* Organic border shapes between sections */
.section-divider-organic {
  height: 120px;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z' fill='%23F5D5B3'/%3E%3C/svg%3E");
}
```

### Color Application
- **Primary**: Sage (#7FA568) for CTAs and primary actions
- **Backgrounds**: Gradient from Surface (#FDFBF8) to Cream (#F5D5B3) to Sage Pale (#C5D4BA)
- **Accents**: Orange (#EA8D3C) sparingly for highlights
- **Text**: Charcoal (#2F2F2F) on light, Cream on dark

### Typography Emphasis
```css
.headline-organic {
  font-family: var(--font-display); /* MapleMono for special headers */
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: linear-gradient(90deg, #628249 0%, #7FA568 50%, #9BB886 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.body-organic {
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--darkgray);
}
```

### Imagery/Illustration Style
- Hand-drawn botanical illustrations as SVG patterns
- Overlapping translucent leaf shapes
- Photographic textures of moss, bark, and natural materials
- Animated growth patterns using CSS/SVG

### Micro-interactions
```css
.card-organic {
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card-organic:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px rgba(127, 165, 104, 0.15);
}

.cta-organic:hover::after {
  content: '🌿';
  animation: grow 600ms ease-out;
}

@keyframes grow {
  from { transform: scale(0) rotate(-180deg); }
  to { transform: scale(1) rotate(0); }
}
```

### Overall Feeling
- **Mood**: Nurturing, patient, regenerative
- **Movement**: Slow, organic animations (20-30s cycles)
- **Texture**: Soft, natural, paper-like
- **Space**: Generous whitespace with asymmetric layouts

---

## Direction 2: "Technical Precision" ⚡
*Emphasizing the DAO/governance aspect*

### Hero Section Treatment
```css
.hero-technical {
  background: linear-gradient(180deg, #2F2F2F 0%, #1F1F1F 100%);
  position: relative;
}

.hero-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(127, 165, 104, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(127, 165, 104, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 10s linear infinite;
}

.data-visualization {
  position: absolute;
  right: -10%;
  top: 20%;
  width: 60%;
  height: 60%;
  opacity: 0.1;
  filter: blur(0.5px);
}
```

### Color Application
- **Primary**: Sage (#7FA568) for data viz and active states
- **Secondary**: Orange (#EA8D3C) for alerts and highlights
- **Backgrounds**: Dark mode by default (Charcoal #2F2F2F)
- **Accents**: Neon variations of Sage for "glow" effects

### Typography Emphasis
```css
.headline-technical {
  font-family: var(--font-mono); /* IBM Plex Mono */
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 200;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--cream);
}

.label-technical {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sage-light);
}

.code-snippet {
  font-family: var(--font-mono);
  background: rgba(127, 165, 104, 0.1);
  border: 1px solid rgba(127, 165, 104, 0.3);
  border-radius: 4px;
  padding: 1rem;
}
```

### Imagery/Illustration Style
- Abstract network diagrams
- Animated constellation patterns
- Data flow visualizations
- Geometric, isometric illustrations
- Terminal/CLI aesthetic elements

### Micro-interactions
```css
.card-technical {
  border: 1px solid transparent;
  background: linear-gradient(#1F1F1F, #1F1F1F) padding-box,
              linear-gradient(90deg, #7FA568, #EA8D3C) border-box;
  transition: all 200ms ease;
}

.card-technical:hover {
  border-width: 2px;
  box-shadow: 0 0 30px rgba(127, 165, 104, 0.3);
  transform: translateY(-2px);
}

.cta-technical {
  position: relative;
  overflow: hidden;
}

.cta-technical::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(127, 165, 104, 0.4), transparent);
  transition: left 600ms;
}

.cta-technical:hover::before {
  left: 100%;
}
```

### Overall Feeling
- **Mood**: Precise, powerful, cutting-edge
- **Movement**: Quick, snappy animations (150-300ms)
- **Texture**: Smooth gradients, sharp edges
- **Space**: Dense information architecture with clear hierarchy

---

## Direction 3: "Community Warmth" 🤝
*Emphasizing the social impact aspect*

### Hero Section Treatment
```css
.hero-community {
  background: radial-gradient(ellipse at top right, #F5D5B3 0%, #FDFBF8 40%, #FAF6F0 100%);
  position: relative;
}

.hero-community::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: url('community-pattern.svg') repeat-x;
  opacity: 0.1;
}

.floating-avatars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.avatar {
  position: absolute;
  border-radius: 50%;
  border: 3px solid var(--cream);
  box-shadow: 0 4px 12px rgba(47, 47, 47, 0.1);
  animation: float 6s ease-in-out infinite;
}
```

### Color Application
- **Primary**: Orange (#EA8D3C) for energy and warmth
- **Secondary**: Sage (#7FA568) for trust and growth
- **Backgrounds**: Warm gradients using Cream and light tones
- **Accents**: Rust (#D04A26) for important CTAs

### Typography Emphasis
```css
.headline-community {
  font-family: var(--font-header); /* Schibsted Grotesk */
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--charcoal);
}

.subheadline-community {
  font-family: var(--font-body);
  font-size: 1.375rem;
  font-weight: 400;
  font-style: italic;
  color: var(--rust);
  margin-top: 1rem;
}

.testimonial {
  font-family: var(--font-body);
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--darkgray);
  position: relative;
}

.testimonial::before {
  content: '"';
  font-size: 4rem;
  color: var(--orange);
  opacity: 0.2;
  position: absolute;
  top: -20px;
  left: -20px;
}
```

### Imagery/Illustration Style
- Diverse human photography with color overlay
- Hand-drawn illustrations of people collaborating
- Overlapping circles and Venn diagrams
- Warm, soft-edged shapes
- Community network visualizations

### Micro-interactions
```css
.card-community {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-community:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: 0 30px 60px rgba(234, 141, 60, 0.2);
}

.avatar-stack {
  display: flex;
  margin-left: -10px;
}

.avatar-stack img {
  margin-left: -10px;
  transition: all 300ms ease;
}

.avatar-stack:hover img {
  margin-left: 0;
  transform: scale(1.1);
}

.cta-community {
  background: linear-gradient(135deg, var(--orange) 0%, var(--rust) 100%);
  position: relative;
  overflow: hidden;
}

.cta-community::after {
  content: '→';
  position: absolute;
  right: 20px;
  transition: transform 300ms ease;
}

.cta-community:hover::after {
  transform: translateX(5px);
}
```

### Overall Feeling
- **Mood**: Welcoming, inclusive, optimistic
- **Movement**: Playful, bouncy animations (400-600ms with spring easing)
- **Texture**: Soft shadows, warm gradients, rounded corners
- **Space**: Comfortable spacing with organic arrangement

---

## Implementation Guide

### Responsive Considerations
Each direction maintains the same breakpoint system but adjusts density:
- **Organic**: Increases whitespace on larger screens
- **Technical**: Adds more data visualization on desktop
- **Community**: Shows more avatars/testimonials on wider viewports

### Performance Optimizations
```css
/* Use CSS containment for all directions */
.section {
  contain: layout style paint;
}

/* Prefer transforms over position changes */
.animated-element {
  will-change: transform;
  transform: translateZ(0); /* Force GPU acceleration */
}

/* Lazy-load decorative elements */
.decoration[data-lazy] {
  content-visibility: auto;
}
```

### Accessibility Enhancements
```css
/* Respect motion preferences across all directions */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Ensure focus states are prominent */
:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}
```

### Dark Mode Adaptations
Each direction includes a dark mode variant:
- **Organic**: Deeper forest tones with bioluminescent accents
- **Technical**: Already dark, offers light mode as alternative
- **Community**: Warm sunset tones with cozy lighting

### Component Examples

#### Hero CTA Button - All Directions
```css
/* Base button from design system */
.btn-hero {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-full);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: all var(--transition-base);
}

/* Direction-specific modifications */
.btn-hero.organic {
  background: var(--sage);
  color: white;
  box-shadow: 0 10px 30px rgba(127, 165, 104, 0.3);
}

.btn-hero.technical {
  background: transparent;
  color: var(--sage-light);
  border: 2px solid var(--sage);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-hero.community {
  background: linear-gradient(135deg, var(--orange), var(--rust));
  color: white;
  box-shadow: 0 20px 40px rgba(234, 141, 60, 0.3);
}
```