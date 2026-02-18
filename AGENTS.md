# AGENTS.md — richkapp.com

## Overview
Personal/professional website for Richard Kappel — serial entrepreneur, advisory services, and agentic AI solutions for businesses. Four-page marketing site: home (landing), advisory services, AI for SMBs (/ai), and contact. AI for SMBs is a service offering under this business, not a separate project.

**Live:** [richkapp.com](https://richkapp.com)
**Repo:** `0rderfl0w/richk-kapp-com` (GitHub)

## Tech Stack
| Layer | Tech |
|-------|------|
| Framework | Astro 5.x (SSG) |
| Styling | Tailwind CSS 3 (`@astrojs/tailwind`) |
| Runtime | **Bun** — never use npm/yarn/pnpm |
| React | Integrated via `@astrojs/react` (for interactive components if needed) |
| Hosting | Hostinger (static), Git deploy from orphan `deploy` branch |
| Domain | richkapp.com (DNS managed at registrar, A record → Hostinger 145.223.77.153) |

## Project Structure
```
src/
├── pages/
│   ├── index.astro       # Landing page (hero, data stats, services, testimonials, founder, values, how-i-work, quote)
│   ├── advisory.astro    # Advisory services page
│   ├── ai.astro          # AI for SMBs page (timeline, editorial layout)
│   └── contact.astro     # Contact page (form placeholder)
└── layouts/
    └── Layout.astro      # Global layout (nav, footer, head, active page indicator)
public/
├── favicon.png
├── richard-hero.jpg, richard-about.jpg
└── testimonial-*.{jpeg,png}    # Client testimonial photos
```

## Commands
```bash
bun install          # install dependencies
bun run dev          # dev server at localhost:4321
bun run build        # production build → dist/
bun run preview      # preview production build
```
No tests, no linter. TypeScript strict mode.

## Design System
- **White/professional theme** — NO dark backgrounds anywhere
- **Brand blue:** `#4263eb` — accent color for links, buttons, indicators
- **Font:** Inter
- **Background graphics:** Use blobs, SVG shapes, gradients for visual interest — never dark sections
- **Scroll animations:** IntersectionObserver-based (`data-animate`, `data-stagger`, `data-animate="scale"`)
- **Active nav:** Blue underline + text color on current page (uses `Astro.url.pathname`)
- **Body text:** Left-aligned preferred, not centered
- **Copy rules:** No dashes in user-facing copy

## Deploy Workflow
Same pattern as BTOC — orphan `deploy` branch, static output at root.

```bash
# 1. Build on main
git checkout main
bun install && bun run build

# 2. Copy dist to temp, clean deploy branch
cp -r dist /tmp/richkapp-dist
rm -rf node_modules .astro
git checkout deploy
git rm -rf . -q
rm -rf dist/ .astro/ node_modules/

# 3. Copy built output and push
cp -r /tmp/richkapp-dist/* .
git add -A
git commit -m "deploy: <description>"
git push origin deploy

# 4. Switch back
git checkout main
```

After pushing, Z hits "Deploy" in Hostinger panel.

## Relevant OpenClaw Skills
- `frontend` — React/Astro components, Tailwind
- `designer` — Visual design, color theory, typography
- `deploy` — Deploy workflows

## Gotchas

### NO dark backgrounds
Z has explicitly rejected dark sections multiple times. Stay white/professional throughout. Use background blobs, SVG shapes, and gradients for visual depth instead.

### Deploy branch dist/ subfolder trap
After building on main, `dist/` exists as an untracked directory. If you switch to `deploy` without cleaning first, `dist/` survives the checkout and gets committed as a subfolder. Always `rm -rf dist/ .astro/ node_modules/` after checking out deploy.

### .gitignore doesn't persist on deploy branch
Running `git rm -rf .` on the deploy branch deletes `.gitignore`. Either re-add it or use the procedure above that avoids this.

### Contact form placeholder
Contact page uses a Web3Forms placeholder. The access key is not yet configured — form submissions won't work until Z provides a real key.

### "Make my shit sexy"
Z wants creative, non-template design. Generic icon+card layouts will be rejected. Think editorial, asymmetric, timeline-based layouts.

### About page was deleted
The about page no longer exists. All founder content lives on the landing page. The nav and footer do not link to /about.
