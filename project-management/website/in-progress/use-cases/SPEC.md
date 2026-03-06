---
priority: "1st"
category: "design"
tags: ["frontend", "content", "sales-page", "carousel"]
created: "2026-03-06"
---

# Use Cases Carousel — /ai Page

## Objective

Add a carousel/showcase section to the /ai page that displays real examples of custom software Z has built. Each item demonstrates a concrete SaaS replacement with screenshots and explanations. This is the "proof" that makes the offer tangible — visitors see exactly what they'd get.

## Placement

After the "Own your tools" service cards + Before/After table, before the "AI changed the game" urgency block. The visitor has just learned what the offer is — now they see real examples.

## Carousel Items (5 total)

---

### 1. Booking Platform with Embeddable Widget

**What it replaces:** Calendly, Acuity, Cal.com ($8-25/mo per user)

**Headline:** "Booking Platform — Embeddable, Branded, Yours"

**Description:**
Full booking system with your branding. Generate a code snippet, paste it into your website. Customers book directly. No Calendly logo. No per-seat fees. Syncs with your calendar. You own the data.

**Screenshots needed:**
1. **Dashboard view** — the booking admin panel showing upcoming appointments, calendar overview
2. **Code snippet view** — the embed code generator showing the HTML snippet ready to copy/paste
3. **Customer-facing booking page** — what the end user sees when they book (branded, clean)

**Key callouts for captions:**
- "Your brand, not Calendly's"
- "One code snippet. Paste it anywhere."
- "No monthly fee. No per-seat pricing."

---

### 2. Jobber Replacement

**What it replaces:** Jobber ($49-249/mo), ServiceTitan, Housecall Pro

**Headline:** "Field Service Management — Without the $249/month"

**Description:**
Job scheduling, dispatch, invoicing, customer management. Built for how YOUR team actually works, not how Jobber thinks you should. Your workflows. Your templates. Your pricing structure.

**Screenshots needed:**
1. **Job board / schedule view** — active jobs with status, assigned team members, dates
2. **Customer/job detail view** — a single job showing scope, notes, status, customer info
3. **Invoice or quoting view** — showing a branded invoice/quote generated from the system

**Key callouts for captions:**
- "Your workflows, not Jobber's"
- "Built around how your team actually operates"
- "Invoicing, scheduling, dispatch — one tool you own"

**Note:** If no live Jobber replacement exists yet, Z needs to build a demo or use mockups. Confirm with Z what's available.

---

### 3. Kanban Project Management (Mission Control)

**What it replaces:** Monday.com ($8-16/seat/mo), Asana, Trello, ClickUp

**Headline:** "Project Management — No Per-Seat Fees. Ever."

**Description:**
Kanban boards, task tracking, team visibility. Drag and drop. Filter by project, priority, assignee. Everything Monday.com charges $16/seat for, without the per-seat pricing.

**Screenshots needed:**
1. **Kanban board view** — columns (backlog, in-progress, done) with task cards, looking clean and professional
2. **Task detail view** — expanded task showing description, assignee, dates, comments
3. **Dashboard/overview** — high-level project stats if available

**Pre-work required:**
- Mission Control needs small visual tweaks before screenshotting:
  - Remove any agent/OpenClaw-specific branding or labels
  - Make sure sample data looks like a generic business (not AI agent tasks)
  - Clean up any dev-looking content in the cards
- Z to confirm what changes are needed

**Key callouts for captions:**
- "Unlimited users. One payment."
- "Your boards, your workflow"
- "No $16/seat/month to see your own tasks"

---

### 4. Website with Admin Access, Members, Products

**What it replaces:** Squarespace ($16-49/mo), Wix, WordPress + plugins ($30-100+/mo)

**Headline:** "Full Website — Admin Panel, Members, Products. Owned."

**Description:**
A complete website with an admin panel to manage content, member accounts, and products. No page builder lock-in. No plugin fees. No "upgrade to Business plan to remove our logo." You control everything.

**Screenshots needed:**
1. **Public-facing website** — clean landing page showing the live site
2. **Admin panel** — content management view showing pages, products, or member list
3. **Member/product management** — adding or editing a product, or viewing member accounts

**Key callouts for captions:**
- "Full admin panel. No page builder."
- "Members, products, content — all yours"
- "No Squarespace logo. No upgrade fees."

**Note:** Use Build to Own Club or another Z project as the example. Confirm with Z which site to screenshot.

---

### 5. Learning Platform (AcceptCrypto)

**What it replaces:** Teachable ($39-199/mo), Thinkific, Kajabi ($149-399/mo)

**Headline:** "Learning Platform — Courses, Progress Tracking, Owned."

**Description:**
Course content, lesson progression, user accounts, completion tracking. Everything Kajabi charges $149/month for. Built once. Runs on your infrastructure. Your brand. Your students' data stays with you.

**Screenshots needed:**
1. **Course catalog / landing view** — showing available courses with thumbnails and descriptions
2. **Lesson view** — a student actively viewing a lesson with progress indicator
3. **Admin/instructor view** — managing courses, viewing student progress, analytics

**Key callouts for captions:**
- "No $149/month to host your own courses"
- "Student data stays with you"
- "Your platform, your brand, your content"

---

## Design Spec

### Carousel Behavior
- Desktop: Show one use case at a time, full-width. Left/right arrows to navigate. Dot indicators at bottom.
- Mobile: Swipeable. Same one-at-a-time view.
- Auto-advance optional (5-6 second interval), pauses on hover/interaction.

### Card Layout (per use case)
```
┌─────────────────────────────────────────────────┐
│  [Screenshot carousel/gallery - 2-3 images]     │
│  ← → navigation between screenshots             │
│                                                  │
│  HEADLINE (font-display, bold)                   │
│  Replaces: Calendly, Acuity ($8-25/mo)          │
│                                                  │
│  Description paragraph                           │
│                                                  │
│  • Callout 1                                     │
│  • Callout 2                                     │
│  • Callout 3                                     │
└─────────────────────────────────────────────────┘
```

Alternative layout (recommended): Screenshots on one side, text on the other (50/50 split on desktop, stacked on mobile). This matches the existing editorial style of the page.

### Styling
- Match existing "Quiet Technical Confidence" design system
- White card with `shadow-layered` border treatment
- Screenshots in rounded containers with subtle border
- `font-display` for headlines, `font-mono` for the "Replaces:" line
- Brand-600 accent color for navigation dots/arrows
- Slide-in animations consistent with rest of page

### Section Wrapper
- Section label: `font-mono` uppercase "What I've Built" or "Real Examples"
- Section title: "Software you can see. Touch. Own." or similar
- Background: white (to contrast with blue AI shift block above it)

## Screenshot Checklist

| Use Case | Screenshot 1 | Screenshot 2 | Screenshot 3 | Status |
|----------|-------------|-------------|-------------|--------|
| Booking Platform | Dashboard | Code snippet | Customer booking | ⬜ Needed |
| Jobber Replacement | Job board | Job detail | Invoice/quote | ⬜ Needed (confirm exists) |
| Project Management | Kanban board | Task detail | Dashboard | ⬜ Needs cleanup first |
| Website + Admin | Public site | Admin panel | Member/product mgmt | ⬜ Needed (confirm which site) |
| Learning Platform | Course catalog | Lesson view | Admin/instructor | ⬜ Needed |

**Total screenshots needed: 15 (3 per use case)**

## Pre-Work Required Before Build

1. **Z to confirm:** Which live projects map to each use case? What exists vs. needs a demo?
2. **Z to confirm:** Mission Control — what needs to change before screenshots?
3. **Z to take or approve screenshots** — agent can screenshot via browser tool, but Z should approve what's shown publicly
4. **Z to confirm:** Carousel vs. grid layout preference
5. **Copy review:** Z approves all "Replaces" pricing claims (must be verifiable current pricing)

## Implementation Plan

### Phase 1: Content & Screenshots
- Confirm available projects with Z
- Clean up Mission Control for generic business look
- Take all 15 screenshots
- Write final copy for each card

### Phase 2: Build Carousel Component
- Build responsive carousel in Astro (React island for interactivity)
- Inner screenshot gallery per card (2-3 images each)
- Navigation (arrows + dots)
- Mobile swipe support
- Lazy load images for performance

### Phase 3: Integration
- Place section in /ai page at agreed position
- Optimize images (WebP, compressed)
- Test on mobile and desktop
- Z reviews and approves
- Commit and deploy

## Success Criteria
- All 5 use cases visible with real screenshots
- Carousel works on mobile (swipe) and desktop (arrows)
- Images load fast (compressed, lazy-loaded)
- Copy is Hormozi-tight: short, specific, no fluff
- Every "Replaces" pricing claim is verifiable
- Z approves before deploy
