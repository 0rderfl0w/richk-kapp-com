---
priority: "1st"
category: "design"
tags: ["frontend", "content", "sales-page", "carousel"]
created: "2026-03-06"
---

# Use Cases Carousel — /ai Page

## Objective

Add a carousel/showcase section to the /ai page displaying real examples of custom software Z has built. Each item demonstrates a concrete SaaS replacement with screenshots. This is the proof that makes the offer tangible.

## Placement

After "Own Your Tools" service cards + Before/After table, before the "AI changed the game" urgency block.

## Carousel Items (5 total)

---

### 1. Booking Platform (Open Booking Tool)

**What it replaces:** Calendly ($8/seat/mo), Acuity ($16-49/mo), Cal.com

**Headline:** "Booking Platform. Embeddable. Branded. Yours."

**Project:** `~/projects/open-booking-tool/`
**Dev server:** `bun run dev` → localhost:5173
**Status:** Ready to screenshot. No changes needed.

**Actual features (verified):**
- Public booking page at `/book/:username`
- Session type management (multiple services with duration/price)
- Date/time slot selection with timezone detection
- Google Calendar sync (OAuth, conflict checking)
- Embed widget with inline/modal modes + generated code snippet
- Confirmation/cancellation/reminder emails
- Branding customization (display name, accent color)
- ICS calendar invites

**Screenshots to take:**
1. `/dashboard/settings` — Embed code snippet generator (THE money shot. Shows copy-paste code.)
2. `/book/:username` — Customer-facing booking page (clean, branded)
3. `/dashboard/bookings` — Admin view showing upcoming bookings

**Key callouts:**
- "One code snippet. Paste it in your website."
- "Your brand, not Calendly's"
- "No per-seat pricing. No monthly fee."

---

### 2. Field Service Management (Janus / OnIt)

**What it replaces:** Jobber ($49-249/mo), ServiceTitan, Housecall Pro

**Headline:** "Field Service Management. Without the $249/month."

**Project:** `~/projects/janus/`
**Dev server:** `bun run dev` → localhost:5173
**Status:** MVP frontend 100% complete. 10 demo pages with mock data (electrical contractor theme). 3,731 lines of production React code. Ready to screenshot immediately.

**Actual features (verified):**
- Dashboard with 10 widgets (upcoming jobs, crew availability, revenue stats)
- Scheduling with week/month calendar, drag-drop jobs, tech allocation
- Service requests (lead capture, convert to jobs)
- Client CRM (list, detail, multi-property support)
- Quotes (create, templates, PDF generation)
- Jobs (full lifecycle: create, assign, notes, status tracking)
- Invoices (create, track payment status)
- Expenses (track job expenses, categories, reimburse)
- Timesheets (day/week view, approval workflow)
- Reviews (reputation management, AI reply generation)

**Screenshots to take:**
1. `/` — Dashboard overview (10 widgets, looks comprehensive)
2. `/schedule` — Calendar with jobs scheduled, crew allocated
3. `/quotes` — Quote builder showing a branded quote
4. `/invoices` — Invoice list or detail view

**Key callouts:**
- "Scheduling, quoting, invoicing. One tool you own."
- "Built for how YOUR crew works"
- "$249/mo → one payment"

---

### 3. Project Management (Mission Control)

**What it replaces:** Monday.com ($8-16/seat/mo), Asana, Trello, ClickUp

**Headline:** "Project Management. No Per-Seat Fees. Ever."

**Project:** `~/projects/mission-control/`
**Dev server:** `bun --bun run dev` → localhost:3000
**Status:** NEEDS PREP WORK before screenshots.

**Actual features (verified):**
- Kanban board with 4 lanes (backlog → in-progress → waiting-on → done)
- Drag-and-drop card movement (@dnd-kit)
- Task cards with title, priority, tags, assignee, due date
- Filters by project, board, category, priority
- Task modal with full metadata editing
- CRM with pipeline board (6 columns), queue view, prospect detail
- Activity logging and analytics

**Pre-work required:**
1. Remove "Hack the Planet" branding from 3 files:
   - `components/Header.tsx` line 17 — `<h1>Hack the Planet</h1>` → generic title
   - `app/globals.css` line 3 — remove comment
   - `app/agents/page.tsx` — remove description reference
2. Add light mode (currently dark-only with CRT/hacker aesthetic)
   - Background is #050508, uses signal green #00ff41, scanline overlay
   - Z specifically requested light mode for public showcase
3. Populate with generic business data (currently shows real ~/projects/ tasks)

**Screenshots to take (after prep):**
1. `/projects` — Kanban board with 4 columns, filter bar, task cards
2. `/projects` with task modal open — Full task detail view
3. `/crm` — CRM pipeline board (secondary, shows broader scope)

**Key callouts:**
- "Unlimited users. One payment."
- "Your boards, your workflow"
- "No $16/seat/month to see your own tasks"

**Estimated prep time:** Mission Control light mode is a significant build. Branding removal is 15-30 min.

---

### 4. Website with Admin Panel (CAPA PVL)

**What it replaces:** Squarespace ($16-49/mo), Wix, WordPress + plugins ($30-100+/mo)

**Headline:** "Full Website. Admin Panel. Database-Driven. Owned."

**Project:** `~/projects/capapvl.pt/`
**Dev server:** `bun dev` → localhost:4321
**Live:** capapvl.pt
**Status:** Live and functional. Can screenshot live site or dev server.

**Actual features (verified):**
- 6 public pages (home, dogs listing, dog profile, about, help, adoption)
- Full admin panel at `/admin` with CRUD for dogs + photo management
- Database-driven content (Supabase, 104 dogs, ~980 photos)
- Filterable listings (size, sex, name search)
- Photo gallery per item
- Structured data entry (personality, medical, sociability fields)
- Full EN translations at `/en/` routes
- Supabase backend with RLS policies

**What's NOT built yet:**
- Public member accounts (no registration/login)
- Donation/payment integration (static donation page only)

**Screenshots to take:**
1. `/caes` (or `/en/dogs`) — Filterable dog listing grid (shows database-driven content)
2. `/admin` — Admin dashboard with dog management (shows CMS capability)
3. `/cao?id=...` — Individual profile page with photo gallery

**Framing:** Show as a real client project. "This is a dog shelter in Portugal. Database-driven, admin panel, no Squarespace." The fact that it's real makes it more credible than a demo.

**Key callouts:**
- "Admin panel for non-technical staff"
- "Database-driven. Not a page builder."
- "No platform lock-in. No monthly fee."

---

### 5. Learning Platform (AcceptCrypto)

**What it replaces:** Teachable ($39-199/mo), Thinkific, Kajabi ($149-399/mo)

**Headline:** "Learning Platform. Courses. Progress Tracking. Owned."

**Project:** `~/projects/accept-crypto-platform/my-react-app/`
**Dev server:** `npm run dev` (exception: CRA legacy, not bun)
**Status:** Live, 12 modules, 76 lessons. Needs test account for screenshots.

**Actual features (verified):**
- 12 modules with 76 lessons
- Path variants (Retail/Online/Hybrid) for personalized learning
- Course catalog with progress bars
- Individual lesson viewer
- Quizzes with results
- Asset library with downloads
- User accounts (Firebase Auth)
- Onboarding flow with path selection
- Admin dashboard with analytics (Overview, Growth, Analytics, Marketing tabs)
- User management, affiliate management, payout management
- Dark mode toggle

**Screenshots to take:**
1. `/dashboard` — Course catalog with progress bars (THE Teachable comparison shot)
2. Lesson detail page — Student viewing a lesson with progress indicator
3. `/admin/dashboard` — Admin analytics view (blur any real user emails)

**Key callouts:**
- "12 modules. 76 lessons. Progress tracking."
- "No $149/month to host your own courses"
- "Student data stays with you"

---

## Design Spec

### Carousel Behavior
- Desktop: One use case at a time, full-width. Left/right arrows. Dot indicators.
- Mobile: Swipeable. Same one-at-a-time view.
- Auto-advance optional (5-6 sec), pauses on hover/interaction.

### Card Layout (per use case)
Recommended: 50/50 split on desktop (screenshots left, text right). Stacked on mobile.

Inner screenshot gallery: 2-3 images per use case with thumbnail navigation or auto-rotate.

### Styling
- White card with shadow-layered border treatment
- Screenshots in rounded containers with subtle border
- font-display for headlines, font-mono for "Replaces:" line
- Brand-600 accent for navigation
- Slide-in animations consistent with rest of page

### Section Wrapper
- No "Credibility" style label
- Section title: "What I've Built" or "Real Examples"
- Background: white

## Screenshot Checklist

| Use Case | Shot 1 | Shot 2 | Shot 3 | Prep Needed |
|----------|--------|--------|--------|-------------|
| Booking | Settings/embed | Public booking | Admin bookings | None |
| Field Service | Dashboard | Schedule | Quotes/Invoices | None |
| Project Mgmt | Kanban board | Task modal | CRM pipeline | Light mode + branding removal |
| Website | Dog listing | Admin panel | Profile page | None (use live site) |
| Learning | Course catalog | Lesson view | Admin dashboard | Test account + blur emails |

**Total: 15 screenshots. 2 projects need prep, 3 are ready now.**

## Implementation Plan

### Phase 1: Prep (before any screenshots)
- Mission Control: remove branding (3 files), build light mode, add generic demo data
- AcceptCrypto: create/confirm test account for dashboard access

### Phase 2: Screenshots (after prep)
- Take all 15 screenshots via browser subagents
- Optimize images (WebP, compressed)
- Z reviews and approves each

### Phase 3: Build Carousel Component
- Responsive carousel in Astro (React island for interactivity)
- Inner screenshot gallery per card
- Navigation (arrows + dots + swipe)
- Lazy load images

### Phase 4: Integration
- Place in /ai page
- Mobile + desktop testing
- Z reviews final result
- Commit and deploy

## Success Criteria
- All 5 use cases with real screenshots
- Carousel works on mobile (swipe) and desktop (arrows)
- Images load fast (compressed, lazy-loaded)
- Copy is tight: short, specific, no fluff
- Every "Replaces" pricing is verifiable
- Z approves before deploy
