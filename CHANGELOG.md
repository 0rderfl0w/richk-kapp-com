# richkapp.com — Changelog

> Newest at top. Never delete entries. Agents prepend here after significant work.

## 2026-02-24

### Content Updates (Alex + Crash & Burn)
- /ai page: Absorbed B2O cost data into stat cards — $8,700/yr SaaS waste, 49% unused licenses ("200 features to use 3"), 16 hrs/week admin time, 67% first-responder competitive stat
- /ai page: New Before/After diff card — SaaS $852→$15/mo, quotes 45→5 min, response hours→instant, admin 16→2 hrs, tools controlled 0→all
- /ai page: Cost waste paragraph woven into The Shift section
- /ai page: B2O Problem stats updated — $10,000+, 88% budget barrier (Chronicle of Philanthropy), 62% no time to vet tools (Chronicle of Philanthropy)
- /ai page: Fixed Build to Own Club card link (was /contact, now buildtoown.club)

### Design — "Quiet Technical Confidence" System (Crash & Burn)
- Contact page: Full redesign — slate palette, mono section labels (PROCESS, LOCATION), editorial numbered steps (01/02/03), layered shadow hover on LinkedIn card, gradient bloom hero, emerald success states
- Hero SVG: New animated orbit illustration (`hero-animation.svg`) — fixed family icon (now house+heart), fixed meditation icon (now coffee cup), expanded viewBox to prevent icon clipping
- Hourglass SVG: New animated illustration (`hourglass-time.svg`) for competitive pressure section — sand depleting from upper chamber, stream through neck, pile collecting at bottom
- /ai page: Replaced dashed image placeholder with hourglass SVG

## 2025-07-27
- Full visual redesign of advisory page: font-display headings, mono section labels (01–05 Service), mono pill focus area tags replacing inline text, layered shadow approach cards, removed gradient icon boxes and divider lines, alternating white/slate-50 sections, branded bottom CTA section. (Crash & Burn)
- Full visual redesign of landing page: "Quiet Technical Confidence" design system applied. font-display headings, mono section labels, editorial numbered service list replacing emoji-card grid, editorial data section with stat-forward layout (↑, 50%, 3x), layered shadow cards, mono pill credential tags, branded CTA section replacing generic bottom quote. Fixed broken HTML in bottom quote. Removed decorative hero blobs. (Crash & Burn)
- Full visual redesign of /ai page: "Quiet Technical Confidence" direction. Plus Jakarta Sans headings, JetBrains Mono for labels/stats/code. Mono uppercase section labels. Editorial numbered service list replacing card grid. Styled code block in How It Works section. Layered shadow card system. Amber accent on key stat. Slate color palette replacing generic grays. Single branded CTA section. Before/After with transformation arrow. Tailwind config updated with display/mono font families and layered shadow utilities. (Crash & Burn)

## 2025-07-18
- Full rewrite of /ai page with Hormozi-style sales flow (Alex). New structure: Dream outcome hero → Competitive fear → Empowerment anchor → Pain math → Offer stack → Before/after → How it works → Credibility → Qualification → Guarantee → CTA → B2O community card. All copy reframed around empowerment (never replacement). Image placeholders included for Z to fill.
## 2026-02-24 (earlier)
- Rewrote /ai landing page copy with Dream Outcome + Fear lens: 12 sections with updated emotional arc (Hero dream framing, Pain Math treasure map, new Fear/Competitor section, dream-outcome card titles, updated "for you" list). No dark backgrounds, no em dashes, no exclamation points. IntersectionObserver animations and all design patterns preserved. Build verified clean. (Claude-Code/Subagent)
- Rewrote /ai landing page as Hormozi-style sales page per spec: 11 sections (Hero, Pain Math, Reframe, Offer Stack, Before/After, How It Works, Proof/Credibility, Who This Is Not For, Guarantee, Final CTA, Build to Own Club). White theme, brand colors, IntersectionObserver animations preserved. Build verified clean. (Alex/Subagent)

## 2025-07-17
- /ai: absorbed B2O cost content — SaaS waste stats ($8,700/yr, 49% unused, 16 hrs/week) in stat cards, before/after diff card section, cost waste paragraph in The Shift copy. Fixed B2O cross-link URL. (Crash & Burn)

## 2026-07-18
- Restructured /ai page: moved contractor-specific content to /ai/contractors, created new generic AI consulting landing page at /ai with 8 sections (Crash & Burn)
- Fixed hero headline forced line break for better text flow (Crash & Burn)
- Rewrote Section 2 copy: competitive pressure angle replacing layoff framing, per Alex's spec update (Crash & Burn)
- Redesigned stat cards: 2x2 grid with large bold numbers, accent bars, hover effects (Crash & Burn)

## 2026-02-23
- Fixed B2O cross-link: "Learn More →" in /ai B2O card now points to https://buildtoown.club (was /contact) (Crash & Burn)

## 2026-02-19
- Merged foreclosure-bot/ into richkapp.com as subdirectory (Zeno)
- Added foreclosure-bot/.venv/ to .gitignore (Zeno)

## 2026-02-18
- Updated hero headline to be more direct (Agent)
- Refined quote workflow to send to contractor's inbox for review instead of direct client send (Agent)
- Launched AI services page for done-for-you quote agents targeting trade contractors (Agent)

## 2026-02-08
- Major website redesign across multiple pages (Agent):
  - Rebuilt home page with new hero, scroll-triggered animations
  - Created AI for SMBs and advisory pages with modern design
  - Implemented service cards, founder section, and community CTA
  - Added scroll animations, gradient dividers, and responsive layouts
- Expanded service offerings to 5 core services
- Integrated Web3Forms for contact form
- Optimized page navigation with active link underlines
- Replaced static about page content with more dynamic founder section

## 2025-07-15
- Full rewrite of /ai page (Alex). Old focus: "stop renting SaaS / join B2OC." New focus: done-for-you AI quote agents for trade contractors.
- Decision: B2OC demoted to small card at bottom of page. Main product is custom agent setup ($597 + $97/mo).
- 5 verticals called out explicitly: Painters, Roofers, Restoration, Landscapers, HVAC with per-trade pain and fix.
- B2OC mention preserved in Why Me section as credibility signal and as small community card at bottom.
- Old page backed up at src/pages/ai.astro.bak.

> For code-level changes, see `git log --oneline -20`.

---

## 2026-02-12
- Created PROJECT.md and CHANGELOG.md for project context standardization (KITT)

## 2026-02-09
- Added AGENTS.md project briefing for agent onboarding (Agent)

## 2026-02-08
- Wired Web3Forms access key for contact form (Agent)
- Added anchor links from service cards to advisory page sections (Agent)
- Added Build to Own Club community section with CTA on landing page (Agent)
- Replaced dark process section with light vertical timeline + background blobs (Agent)
- Redesigned AI page with editorial layout, timeline, why-me section (Agent)
- Added scroll-triggered animations to all landing page sections (Agent)
- Removed about page; moved values cards under founder block on landing (Agent)
- Built AI for SMBs page with Book a Call CTA and differentiators (Agent)
- Advisory page polish — scroll animations, gradient dividers, no zebra striping (Agent)
- Added AI for SMBs as first service card linking to /ai (Agent)
- Expanded to 5 advisory services (added Personal Mentorship, Project Management) (Agent)
- Created advisory, AI for SMBs, about, and contact pages (Agent)
- Phase 1: Scaffolded Astro + Tailwind + full home page with all sections (Agent)
- Project initialized (Agent)