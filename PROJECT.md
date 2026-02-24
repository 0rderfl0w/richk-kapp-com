# richkapp.com — Project Context

> Personal/professional website for Richard Kappel — serial entrepreneur, advisory services, and agentic AI solutions for SMBs.

## Vision & Focus

### What This Is
Richard Kappel's personal brand site and primary revenue generator. The /ai page is a Hormozi-style sales page that sells AI integration consulting to SMBs. The rest of the site (home, advisory, contact) builds credibility and funnels traffic toward /ai.

### Who It's For
**Anyone willing to invest in done-for-you AI consulting.** SMB owners, solopreneurs, ops managers, and decision-makers who know they're wasting time on manual processes and want someone to build the solution for them. They're buying Richard's time, expertise, and implementation.

The /ai page targets SMBs specifically. The /advisory page serves a broader range including solopreneurs and individual professionals. Both are paying clients.

Key verticals: retail, trades/contractors, professional services, e-commerce, coaching, freelancers.

### What Success Looks Like
- /ai page converts visitors into "Free Automation Audit" bookings
- 3-5 qualified audit calls per week from organic + outreach traffic
- First paying consulting clients ($5K-$25K engagements)
- Richard positioned as "the guy who actually builds AI for real businesses"

### Current Priority
Finishing the /ai landing page redesign (Hormozi-style sales page with animated SVG hero, editorial design, full offer stack). Once the page is polished, shift to driving traffic: cold outreach, LinkedIn content, and potentially paid ads.

### What This Is NOT
- **Not a community.** That's Build to Own Club.
- **Not a DIY learning platform.** People who want to build it themselves go to Build to Own Club.
- **Not a SaaS product.** This is high-touch consulting. Richard builds custom AI systems for each client.
- **Not a portfolio site.** It's a sales machine. Every section exists to move someone toward booking a call.

### Boundary with Build to Own Club
richkapp.com = "I build it FOR you" (anyone with budget who wants done-for-you consulting)
Build to Own Club = "You build it yourself" (people who want to learn and build their own tools)

The split isn't company size. It's willingness to pay for implementation vs. wanting to learn DIY. A solopreneur who wants Richard to build their system is a richkapp.com client. A solopreneur who wants to learn AI and build it themselves goes to Build to Own Club.

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
│   ├── ai/
│   │   ├── index.astro   # AI for SMBs (Hormozi-style sales page, editorial design)
│   │   └── contractors.astro  # AI for contractors (vertical-specific)
│   └── contact.astro     # Contact form (Web3Forms)
└── layouts/
    └── Layout.astro      # Global layout (nav, footer, head, active page indicator, font loading)
public/                   # Static assets (favicon, hero photos, testimonial photos)
assets/                   # Source assets (if any)
```

## Design System

### Direction: "Quiet Technical Confidence"
Premium, distinctive, technically credible. Not a template. Not flashy agency vibes. Think Pinecone precision meets Anthropic warmth.

### Typography
- **Headings:** Plus Jakarta Sans (`font-display`) — warmer and more distinctive than Inter
- **Body:** Inter (`font-sans`) — clean, reliable, readable
- **Code / Labels / Stats:** JetBrains Mono (`font-mono`) — technical credibility signal
- **Section labels:** Mono uppercase, `text-xs tracking-widest uppercase text-brand-600`, placed above every section H2
- **Heading sizes:** Use `tracking-tight` on anything `text-3xl` and above
- **Stat numbers:** `font-mono tabular-nums` for alignment
- All three fonts loaded via Google Fonts in `Layout.astro`

### Color Palette
- **Brand blue:** `#4263eb` (brand-600) — primary accent, CTAs, links
- **Brand family:** brand-50 `#eef1ff` through brand-900 `#1e2a6e` (see tailwind.config.mjs)
- **Warm accent:** Amber `#f59e0b` — used VERY sparingly (one stat, one detail). Not a second brand color, just punctuation.
- **Surfaces:** Pure white (primary), `slate-50` (alternate sections). Alternate to create rhythm.
- **Text:** `slate-900` (headings), `slate-600`/`slate-700` (body), `slate-500` (secondary), `slate-400` (captions)
- **Borders:** `border-slate-100` on cards, never heavy

### What Makes It Not Generic
- **Real code as a design element** — styled `<pre>` blocks showing actual agent workflows. Fastest credibility signal for a builder.
- **Editorial numbered lists** for services — `01 — Title` with dividers, not icon-card grids
- **Label-before-heading system** — tiny `MONO UPPERCASE` label above every section H2 (e.g., `THE MATH`, `PROCESS`, `CREDIBILITY`)
- **Layered shadows** on cards, not flat borders — `shadow-layered` custom utility (3-layer box-shadow)
- **Gradient border** on featured/accent cards — CSS `background-clip` technique
- **Mono pill tags** for credentials/tech stack — `font-mono text-xs border rounded-full`
- **One branded section only** — the Final CTA uses `bg-brand-600` with white text. Only ONE dark/colored section per page. Never two identical colored sections.

### Cards
- Default: `bg-white rounded-xl border border-slate-100 shadow-layered`
- Hover: `hover:shadow-layered-lg hover:-translate-y-1 transition-all duration-300`
- Featured variant: gradient top border (`h-[2px] bg-gradient-to-r from-brand-500 to-brand-600`)
- NO heavy border-radius (no `rounded-3xl`). Keep it `rounded-xl` max.

### Buttons
- **Primary:** `bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700` — clean, no shimmer gimmicks
- **Secondary:** Text link style with hover color change, or subtle border button
- Keep buttons compact — no oversized padding. `px-7 py-3.5` for primary.
- On branded (blue) sections: invert to `bg-white text-brand-700`

### Animations
- IntersectionObserver scroll reveals: `slide-in-left`, `slide-in-right`, `slide-in-up`
- Subtle and purposeful. No bounce, no shimmer, no pulse effects.
- CSS transitions only — no animation libraries

### Hard Rules
- **NO dark gray/black backgrounds** — branded blue CTA sections are fine, generic dark is not
- **NO generic icon-card grids** — use editorial layouts, numbered lists, mixed-size bento grids
- **NO dot grids, circuit patterns, or wallpaper textures** — these look amateur
- **NO gradient text** on headings (looks gimmicky). Color comes from the brand palette, not gradients.
- **NO identical repeated section designs** — if two sections look the same, one needs to change
- **Copy rules:** No dashes in user-facing text. Left-aligned body text.
- **One colored section max per page** — the rest alternate between white and slate-50

### Tailwind Custom Utilities (in tailwind.config.mjs)
- `font-display` → Plus Jakarta Sans
- `font-mono` → JetBrains Mono
- `shadow-layered` → 3-layer premium card shadow
- `shadow-layered-lg` → elevated hover shadow

## Current State

- **Live:** All 4 pages (home, advisory, ai, contact)
- **Working:** Nav with active indicators, scroll animations, service cards linking to advisory sections, Web3Forms contact form (key wired up 2026-02-08)
- **In progress:** /ai page visual redesign (Quiet Technical Confidence direction)
- **Broken/incomplete:** Nothing known

## Known Gotchas

1. **NO dark backgrounds** — Z has rejected dark sections multiple times
2. **NO generic template designs** — Z will reject anything that looks like "every other fucking website." Think editorial, technical, distinctive.
3. **Deploy branch `dist/` trap** — Must `rm -rf dist/ .astro/ node_modules/` after checking out deploy branch, or `dist/` survives as subfolder
4. **`.gitignore` doesn't persist on deploy branch** — `git rm -rf .` deletes it
5. **About page was deleted** — Founder content lives on landing page. No /about route.
6. **Multiple agents may work on this project** — check `git status` and recent CHANGELOG before starting

## Decision Log

| Date | Decision |
|------|----------|
| 2025-07-27 | "Quiet Technical Confidence" design direction adopted for /ai page — Plus Jakarta Sans, JetBrains Mono, editorial layouts, real code blocks, layered shadows, amber accent |
| 2025-07-27 | NO dot grids, NO repeated colored sections, NO gradient text gimmicks — all rejected as amateur |
| 2026-02-08 | Removed about page; founder content moved to landing page |
| 2026-02-08 | AI for SMBs is a service under richkapp.com, not a separate project |
| 2026-02-08 | White-only theme — dark sections explicitly rejected |
| 2026-02-08 | Build to Own Club community section added to landing page |

## Links

- **Live site:** https://richkapp.com
- **GitHub:** `0rderfl0w/richk-kapp-com`
- **Hostinger panel:** TBD — needs documentation
