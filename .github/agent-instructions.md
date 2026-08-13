# AGENTS.md

# Portfolio Development Guide

This repository contains my personal software engineering portfolio built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React
- Framer Motion (preferred)
- Lucide React Icons

---

# Primary Goal

Design and maintain a premium, modern, minimal portfolio that showcases my experience as a Senior Software Engineer and AI Engineer.

The design should feel comparable to products from:

- Vercel
- Linear
- Stripe
- Raycast
- Apple Developer
- Anthropic

The overall impression should be:

- Professional
- Premium
- Modern
- Clean
- Minimal
- Fast
- Accessible

Avoid flashy or distracting effects.

---

# Design Principles

Prefer:

- Glassmorphism
- Frosted glass cards
- Soft shadows
- Large spacing
- Rounded corners (rounded-2xl or rounded-3xl)
- Smooth gradients
- Elegant hover animations
- Subtle motion
- Responsive layouts
- Excellent typography
- Consistent spacing

Avoid:

- Heavy neon effects
- Excessive animations
- Particle backgrounds
- Rainbow gradients
- Excessive colors
- Cluttered layouts

---

# Color Palette

Background:
- Slate / Zinc based dark theme

Primary Accent:
- Teal

Secondary Accent:
- Sky Blue

Cards:
- Semi-transparent
- backdrop-blur
- border-white/10

Keep the overall appearance elegant.

---

# Typography

Prefer:

- Geist
- Inter
- Manrope

Headings should be bold.

Body text should be easy to scan.

Never create large walls of text.

---

# Components

Prefer reusable components over large files.

Split large pages into:

components/
    Hero.tsx
    About.tsx
    Skills.tsx
    AISection.tsx
    Experience.tsx
    Projects.tsx
    Contact.tsx
    Stats.tsx
    GlassCard.tsx
    AnimatedBadge.tsx

Keep components focused.

---

# Tailwind Guidelines

Prefer Tailwind utilities.

Avoid inline CSS.

Avoid duplicated styles.

Extract repeated UI into reusable components.

---

# Animations

Use Framer Motion.

Animations should be:

- Smooth
- Professional
- Subtle

Examples:

- Fade in
- Slide up
- Scale on hover
- Card lift
- Blur transition

Avoid dramatic animations.

---

# Mobile First

Every feature must work on:

- Mobile
- Tablet
- Desktop

Never break responsiveness.

---

# Accessibility

Maintain:

- Proper semantic HTML
- Keyboard navigation
- Color contrast
- ARIA labels where appropriate

---

# Performance

Keep Lighthouse scores high.

Prefer:

- Next/Image
- Lazy loading
- Memoization when needed
- Small bundle sizes

Avoid unnecessary dependencies.

---

# Code Style

Use:

- Functional components
- TypeScript
- Clean naming
- Small reusable functions

Avoid:

- Large monolithic files
- Repeated code
- Dead code

---

# Portfolio Content

Do NOT remove existing experience or projects without asking.

Do NOT invent achievements.

Do NOT exaggerate metrics.

Preserve technical accuracy.

---

# Personal Branding

Present me as:

- Senior Software Engineer
- Backend Engineer
- Cloud Engineer
- AI Engineer

Emphasize:

- .NET
- Python
- Node.js
- AWS
- Kubernetes
- Docker
- AI Engineering
- LLM Integration
- LangChain
- LangGraph
- RAG
- Cloud Native Development
- API Design
- Microservices

Do NOT mention:

- Looking for work
- Open to opportunities
- Open to Germany
- Relocation
- Visa status

The portfolio should remain suitable for sharing with current colleagues, clients, and recruiters.

---

# Preferred Workflow

Before making significant changes:

1. Explain the plan.
2. Identify affected files.
3. Make incremental changes.
4. Preserve functionality.
5. Ensure the project builds successfully.

Do not perform large refactors without explaining them first.

---

# Priority Order

1. User experience
2. Readability
3. Accessibility
4. Maintainability
5. Performance
6. Visual polish

When in doubt, choose simplicity over complexity.