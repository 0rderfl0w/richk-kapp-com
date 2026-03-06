# Resume: Use Cases Carousel for richkapp.com/ai

## Context

You're working on richkapp.com, a sales page for Z's custom software development business. The /ai page sells one thing: replacing the SaaS tools SMBs rent with custom software they own.

We're building a "What I've Built" carousel section that showcases 5 real projects as proof of what Z delivers. The carousel is partially built. You're picking up where we left off.

## Read These First

1. `~/projects/richkapp.com/AGENTS.md` — project stack, architecture, design system
2. `~/projects/richkapp.com/project-management/website/in-progress/use-cases/SPEC.md` — full task spec with progress section at the bottom
3. The current page: `~/projects/richkapp.com/src/pages/ai/index.astro`
4. Existing screenshots: `ls ~/projects/richkapp.com/public/images/showcase/`

## What's Done

- Carousel component is live on the /ai page (vanilla JS, arrows + dots, auto-rotate images)
- 5 cards with copy (headlines, "Replaces:" line, descriptions, callout pills)
- 50/50 layout: image left, text right on desktop. Stacked on mobile. aspect-video image container.
- Real screenshots (cropped 16:9) for 3 projects:
  - **Janus/OnIt** (Field Service): janus-1.png (dashboard), janus-2.png (schedule), janus-3.png (quotes)
  - **Mission Control** (Project Mgmt): mc-1.png (kanban), mc-2.png (CRM), mc-3.png (dashboard) — BUT these are dark mode, looks bad
  - **CAPA PVL** (Website): website-1.png (homepage), website-2.png (dog listings)
- Image auto-rotate: 3s interval per card, CSS opacity transitions

## What's NOT Done

### 1. Mission Control needs light mode
The screenshots are all dark (CRT/hacker theme with #050508 background, green accent). Z said it needs light mode for the public showcase. This is the biggest blocker.

**Branding to remove first (3 files):**
- `~/projects/mission-control/components/Header.tsx` line 17 — `<h1>Hack the Planet</h1>` → generic title like "Project Hub" or "Dashboard"
- `~/projects/mission-control/app/globals.css` line 3 — remove "HACK THE PLANET" comment
- `~/projects/mission-control/app/agents/page.tsx` — remove agent-specific description

**Light mode approach:** Mission Control is Next.js 16 + Tailwind CSS. The dark theme is defined in CSS variables in `app/globals.css`. You need to either:
- Add a light theme toggle (proper but more work)
- OR create a temporary light override stylesheet just for screenshots (faster)

Z's preference: proper light mode is better long-term, but get something screenshot-ready.

**Best views to screenshot:**
- `/projects` — Kanban board (primary, THE money shot)
- `/crm` — CRM pipeline (secondary)

Research report with full details: `~/.openclaw/workspace-alex/memory/research-mission-control.md`

### 2. Booking Tool screenshots (placeholder)
Open Booking Tool is a React SPA. Headless Chrome screenshots come out blank because JS doesn't execute.

**Dev server:** `cd ~/projects/open-booking-tool && bun run dev` → probably localhost:5174 (5173 may be taken by Janus)

**Best views to screenshot:**
- `/dashboard/settings` — Embed code snippet generator (THE key differentiator vs Calendly)
- `/book/:username` — Customer-facing booking page
- `/dashboard/bookings` — Admin booking list

You need to use the `browser` tool (not headless CLI) to screenshot these. Navigate, wait for React to render, then capture.

Research report: `~/.openclaw/workspace-alex/memory/research-booking-tool.md`

### 3. AcceptCrypto screenshots (placeholder)
Also a React SPA. Needs authentication to see the good views.

**Dev server:** `cd ~/projects/accept-crypto-platform/my-react-app && npm run dev` (exception: uses npm, not bun)

**Best views to screenshot:**
- `/dashboard` — Course catalog with progress bars (THE Teachable comparison shot)
- A lesson detail page
- `/admin/dashboard` — Admin analytics (blur any real user emails)

**Blocker:** Needs a test account to access protected views. Check if there's a test/demo account or if you need Z to provide credentials.

Research report: `~/.openclaw/workspace-alex/memory/research-acceptcrypto.md`

### 4. Screenshot quality
All screenshots should be:
- 1440x810 (16:9 ratio, cropped from top)
- Show the most visually impressive part of each app
- Clean data (no personal info, no debug panels, no error states)
- Saved to `~/projects/richkapp.com/public/images/showcase/`

Use `sips -c 810 1440 input.png --out output.png` on macOS to crop to 16:9 from the top.

### 5. Consider removing or reordering
- If Mission Control light mode isn't ready, consider removing it from the carousel or moving to last position
- Card order should lead with the most visually impressive project

## Design Rules
- richkapp.com uses Tailwind CSS 3 (NOT 4)
- NO dark backgrounds on richkapp.com — Z has rejected this multiple times
- No em dashes anywhere
- Hormozi-style copy: short, specific, no fluff
- Mobile-first responsive
- font-display for headlines, font-mono for labels/tech text

## Dev Server
richkapp.com: `http://localhost:4321/ai/` (should already be running)

## After You're Done
1. Verify at localhost:4321/ai/ that all carousel cards look good at 100% zoom
2. Update the SPEC.md progress section
3. Update AUDIT.md
4. Commit and push: `cd ~/projects/richkapp.com && git add -A && git commit -m "feat: description (Alex)" && git push origin main`
5. Update `~/projects/richkapp.com/CHANGELOG.md`
