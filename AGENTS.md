# AGENTS.md — richkapp.com

Personal/professional website for Richard Kappel — serial entrepreneur, advisory services, and agentic AI solutions for SMBs. A sales machine: every section funnels visitors toward booking a free automation audit.

**Live:** https://richkapp.com
**Repo:** `0rderfl0w/richk-kapp-com` (GitHub, public)

---

## Setup

```bash
bun install          # install dependencies
bun run dev          # dev server at localhost:4321
bun run build        # production build → dist/
bun run preview      # preview production build
```

No tests, no linter. TypeScript strict mode.

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Astro 5.x (SSG) |
| Styling | Tailwind CSS 3 (via @astrojs/tailwind) |
| UI | React 19 (via @astrojs/react, for interactive islands) |
| SEO | @astrojs/sitemap (auto-generated sitemap) |
| Runtime | **Bun** — NEVER use npm/yarn/pnpm |
| Hosting | Hostinger (static), A record → 145.223.77.153 |
| Domain | richkapp.com (DNS at registrar) |

---

## Architecture

```
src/
├── pages/
│   ├── index.astro              # Landing (hero, stats, services, testimonials, founder, values, how-i-work, CTA)
│   ├── advisory.astro           # Advisory services (5 services, timeline process)
│   ├── ai/
│   │   ├── index.astro          # AI for SMBs (Hormozi-style sales page, editorial design)
│   │   └── contractors.astro    # AI for contractors (vertical-specific)
│   └── contact.astro            # Contact form (Web3Forms — key hardcoded, public by design)
└── layouts/
    └── Layout.astro             # Global layout (nav, footer, head, active page indicator, font loading)
public/                          # Static assets (favicon, hero photos, testimonial photos)
```

**Note:** About page was deleted — founder content lives on the landing page. No /about route.

---

## Design System — "Quiet Technical Confidence"

Premium, distinctive, technically credible. Not a template. Not flashy agency vibes.

### Typography
- **Headings:** Plus Jakarta Sans (font-display) — warmer than Inter
- **Body:** Inter (font-sans) — clean, readable
- **Code / Labels / Stats:** JetBrains Mono (font-mono) — technical credibility signal
- **Section labels:** Mono uppercase, `text-xs tracking-widest uppercase text-brand-600`, above every section H2
- **Stat numbers:** `font-mono tabular-nums`
- All three fonts loaded via Google Fonts in Layout.astro

### Color Palette
- **Brand blue:** `#4263eb` (brand-600) — primary accent, CTAs, links
- **Brand family:** brand-50 `#eef1ff` through brand-900 `#1e2a6e` (see tailwind.config.mjs)
- **Warm accent:** Amber `#f59e0b` — VERY sparingly (one stat, one detail). Not a second brand color.
- **Surfaces:** Pure white (primary), slate-50 (alternate sections)
- **Text:** slate-900 (headings), slate-600/700 (body), slate-500 (secondary), slate-400 (captions)
- **Borders:** border-slate-100 on cards, never heavy

### Cards
- Default: `bg-white rounded-xl border border-slate-100 shadow-layered`
- Hover: `hover:shadow-layered-lg hover:-translate-y-1 transition-all duration-300`
- Featured: gradient top border (h-[2px] bg-gradient-to-r from-brand-500 to-brand-600)
- NO rounded-3xl — max is rounded-xl

### Buttons
- **Primary:** `bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700` — no shimmer
- On branded sections: invert to `bg-white text-brand-700`
- Compact padding: `px-7 py-3.5`

### Animations
- IntersectionObserver scroll reveals: slide-in-left, slide-in-right, slide-in-up, scale
- Subtle and purposeful. No bounce, shimmer, or pulse effects.
- CSS transitions only — no animation libraries

### Tailwind Custom Utilities (tailwind.config.mjs)
- `font-display` → Plus Jakarta Sans
- `font-mono` → JetBrains Mono
- `shadow-layered` → 3-layer premium card shadow
- `shadow-layered-lg` → elevated hover shadow

---

## Hard Rules (Design)

- **NO dark gray/black backgrounds** — Z has rejected this multiple times. Blue CTA sections OK, generic dark is not.
- **NO generic icon-card grids** — use editorial layouts, numbered lists, bento grids
- **NO dot grids, circuit patterns, wallpaper textures** — looks amateur
- **NO gradient text** on headings — gimmicky
- **NO identical repeated section designs** — if two sections look the same, change one
- **NO dashes** in user-facing copy
- **ONE colored section max per page** — the rest alternate white/slate-50
- **Left-aligned body text** — not centered

---

## Deploy

Uses orphan `deploy` branch. **Agents do NOT deploy directly — hand off to KITT for review + deploy.**

Preferred deploy pattern (worktree — avoids branch switching gotchas):
```bash
bun run build
git worktree add /tmp/richkapp-deploy deploy
cp -r dist/* /tmp/richkapp-deploy/
cd /tmp/richkapp-deploy && git add -A && git commit -m "deploy: <description>" && git push
git worktree remove /tmp/richkapp-deploy
```

After push, Z hits "Deploy" in Hostinger panel.

**Hostinger Git auth:** Classic PAT (hostinger) in HTTPS URL.
**Env vars:** None — Web3Forms key is hardcoded in contact page (public by design).

---

## Gotchas

- **NO dark backgrounds** — Z has explicitly rejected dark sections multiple times. White/professional only.
- **"Make my shit sexy"** — Z wants creative, non-template design. Generic layouts will be rejected. Think editorial, asymmetric, timeline-based.
- **Deploy branch dist/ subfolder trap** — After building on main, dist/ survives branch checkout unless explicitly removed. Use worktree pattern to avoid this entirely.
- **About page was deleted** — No /about route. Nav and footer don't link to /about. Founder content is on landing page.
- **Contact form key** — Web3Forms access key is hardcoded in contact.astro (public by design). Wired up 2026-02-08.
- **Multiple agents may work here** — always run git status and check CHANGELOG before starting.
- **Hostinger is static-only** — no SSR, no server-side code.

---

## Business Context

- **Goal:** /ai page converts visitors into "Free Automation Audit" bookings → $5K-$25K consulting engagements
- **Key verticals:** retail, trades/contractors, professional services, e-commerce, coaching, freelancers
- **NOT a community** (that's Build to Own Club), NOT DIY learning, NOT SaaS
- **richkapp.com** = "I build it FOR you" (done-for-you consulting)
- **Build to Own Club** = "You build it yourself" (DIY learning)

---

## Decision Log

| Date | Decision |
|------|----------|
| 2025-07-27 | "Quiet Technical Confidence" design direction — Plus Jakarta Sans, JetBrains Mono, editorial layouts, real code blocks, layered shadows, amber accent |
| 2025-07-27 | NO dot grids, repeated colored sections, gradient text gimmicks — rejected as amateur |
| 2026-02-08 | Removed about page; founder content moved to landing page |
| 2026-02-08 | AI for SMBs is a service under richkapp.com, not a separate project |
| 2026-02-08 | White-only theme — dark sections explicitly rejected |
| 2026-02-08 | Web3Forms key wired up in contact.astro |
