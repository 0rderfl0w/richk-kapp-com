# richkapp.com — Project Context

> Personal/professional website for Richard Kappel — serial entrepreneur, advisory services, and agentic AI solutions for SMBs.

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Astro 5.x (SSG) | Static site generation |
| Styling | Tailwind CSS 3 | via `@astrojs/tailwind` |
| UI | React 19 | via `@astrojs/react`, for interactive components |
| Runtime | **Bun** | Never use npm/yarn/pnpm |
| SEO | `@astrojs/sitemap` | Auto-generated sitemap |
| Hosting | Hostinger (static) | A record → 145.223.77.153 |
| Domain | richkapp.com | DNS at registrar |
| Repo | `0rderfl0w/richk-kapp-com` (GitHub) | |

## Hosting & Deploy

- **Host:** Hostinger static hosting
- **Deploy process:** Build on `main`, copy `dist/` to orphan `deploy` branch, push, then Z hits "Deploy" in Hostinger panel
- **Branches:** `main` (development), `deploy` (orphan, built output only)
- **Env vars:** None currently (Web3Forms key is hardcoded in contact page)
- ⚠️ **Agents do NOT deploy directly. Hand off to KITT for review + deploy.**

## Architecture

```
src/
├── pages/
│   ├── index.astro       # Landing (hero, stats, services, testimonials, founder, values, how-i-work, CTA)
│   ├── advisory.astro    # Advisory services (5 services, timeline process)
│   ├── ai.astro          # AI for SMBs (editorial layout, timeline, why-me)
│   └── contact.astro     # Contact form (Web3Forms)
└── layouts/
    └── Layout.astro      # Global layout (nav, footer, head, active page indicator)
public/                   # Static assets (favicon, hero photos, testimonial photos)
assets/                   # Source assets (if any)
```

## Design System

- **White/professional theme** — NO dark backgrounds anywhere
- **Brand blue:** `#4263eb`
- **Font:** Inter
- **Visual depth:** Blobs, SVG shapes, gradients (never dark sections)
- **Animations:** IntersectionObserver scroll reveals (`data-animate`, `data-stagger`)
- **Copy:** No dashes in user-facing text. Left-aligned body text.

## Current State

- **Live:** All 4 pages (home, advisory, ai, contact)
- **Working:** Nav with active indicators, scroll animations, service cards linking to advisory sections, Web3Forms contact form (key wired up 2026-02-08)
- **In progress:** Nothing active
- **Broken/incomplete:** Nothing known

## Known Gotchas

1. **NO dark backgrounds** — Z has rejected dark sections multiple times
2. **Deploy branch `dist/` trap** — Must `rm -rf dist/ .astro/ node_modules/` after checking out deploy branch, or `dist/` survives as subfolder
3. **`.gitignore` doesn't persist on deploy branch** — `git rm -rf .` deletes it
4. **About page was deleted** — Founder content lives on landing page. No /about route.
5. **"Make my shit sexy"** — Generic icon+card layouts get rejected. Think editorial, asymmetric, timeline.

## Decision Log

| Date | Decision |
|------|----------|
| 2026-02-08 | Removed about page; founder content moved to landing page |
| 2026-02-08 | AI for SMBs is a service under richkapp.com, not a separate project |
| 2026-02-08 | White-only theme — dark sections explicitly rejected |
| 2026-02-08 | Build to Own Club community section added to landing page |

## Links

- **Live site:** https://richkapp.com
- **GitHub:** `0rderfl0w/richk-kapp-com`
- **Hostinger panel:** TBD — needs documentation
