# Tasks: Modern Podcast Website

**Input**: Design documents from `/specs/001-i-am-building/`
**Prerequisites**: plan.md (required), research.md, data-model.md, quickstart.md

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → content/schema tasks
   → research.md: Extract decisions → setup tasks
   → quickstart.md: Extract validation → integration tests (manual)
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: integration checks from quickstart (manual + Lighthouse)
   → Core: content schemas, fixtures, pages, components
   → Integration: navigation, accessibility, performance checks
   → Polish: docs
4. Apply task rules:
   → Different files = mark [P]
   → Tests before implementation where applicable (content/schema before UI)
5. Number tasks sequentially (T001, T002...)
6. Provide parallel execution examples
7. Return: SUCCESS (tasks ready for execution)
```

## Phase 3.1: Setup
- [x] T001 Create Next.js app skeleton and config for static export
  - Path: `/`
  - Notes: Initialize with pnpm; TypeScript strict; Tailwind; shadcn/ui; set static export
- [x] T002 [P] Configure ESLint, Prettier, and TypeScript strict mode
  - Path: `/.eslintrc.*`, `/.prettierrc*`, `tsconfig.json`
- [x] T003 [P] Add base Tailwind setup and tokens
  - Path: `tailwind.config.*`, `postcss.config.*`, `src/app/globals.css`

## Phase 3.2: Tests First (Foundational content/contracts)
- [x] T004 [P] Define JSON Schema for `Episode`
  - Path: `/Users/mjs/Documents/code/hello-a/specs/001-i-am-building/contracts/episode.schema.json`
- [x] T005 [P] Define JSON Schema for `FAQItem`
  - Path: `/Users/mjs/Documents/code/hello-a/specs/001-i-am-building/contracts/faq-item.schema.json`
- [x] T006 [P] Create content fixtures: 20 episodes (JSON), featured exactly one
  - Path: `src/content/episodes.json`
- [x] T007 [P] Create content fixtures: FAQ items (JSON/MDX)
  - Path: `src/content/faq.json`

## Phase 3.3: Core Implementation (ONLY after content exists)
- [x] T008 [P] Build shared UI primitives (Button, Card, Badge) using shadcn/ui
  - Path: `src/components/ui/*`
- [x] T009 [P] Create audio player component with accessible controls
  - Path: `src/components/audio-player.tsx`
- [x] T010 [P] Build site shell (header/nav/footer) with responsive layout
  - Path: `src/components/site-shell.tsx`
- [x] T011 Home page with featured episode and list of 20 episodes
  - Path: `src/app/page.tsx`
- [x] T012 Episode detail route showing metadata and player
  - Path: `src/app/episodes/[slug]/page.tsx`
- [x] T013 About page with mission and host bios
  - Path: `src/app/about/page.tsx`
- [x] T014 FAQ page with collapsible items (graceful no-JS)
  - Path: `src/app/faq/page.tsx`

## Phase 3.4: Integration
- [x] T015 [P] Global navigation links (Home, About, FAQ)
  - Path: `src/components/site-shell.tsx`
- [x] T016 [P] Add dark theme and electric blue accent tokens
  - Path: `tailwind.config.*`, `globals.css`
- [x] T017 [P] Add social share links on episode detail
  - Path: `src/app/episodes/[slug]/page.tsx`
- [x] T018 [P] Ensure no-JS baseline (server-rendered content; native audio fallback)
  - Path: `src/app/**/*`, `src/components/audio-player.tsx`

## Phase 3.5: Polish
- [x] T019 [P] Documentation: Update `README.md` with install, build, deploy
  - Path: `README.md`
- [x] T020 [P] Lighthouse check scripts and document thresholds (≥95)
  - Path: `package.json`, `docs/perf.md`
- [x] T021 [P] Accessibility verification (keyboard nav, focus states, ARIA)
  - Path: `docs/a11y.md`

## Dependencies
- Setup (T001–T003) before content (T004–T007) and UI (T008–T014)
- Content schemas/fixtures (T004–T007) before pages (T011–T014)
- UI primitives/shell (T008–T010) before pages using them
- Integration (T015–T018) after core pages
- Polish (T019–T021) last

## Parallel Example
```
# After setup completes, run in parallel:
Task: "Define JSON Schema for Episode"
Task: "Define JSON Schema for FAQItem"
Task: "Create content fixtures: 20 episodes"
Task: "Create content fixtures: FAQ items"

# After content exists, run in parallel:
Task: "Build UI primitives"
Task: "Create audio player component"
Task: "Build site shell"
```

## Validation Checklist
- [x] All entities from data-model have content/schema tasks
- [x] Content tasks precede UI tasks
- [x] Parallel tasks operate on distinct files
- [x] Each task includes exact file paths
- [x] Tasks align with constitution gates (static-first, perf/a11y)

## Implementation Summary
✅ **All 21 tasks completed successfully!**
✅ **Navigation Issue Fixed** - SiteShell component properly integrated into layout

**Build Results:**
- ✅ Static export successful (26 pages generated)
- ✅ Next.js 15 + React 19 + TypeScript strict mode
- ✅ Tailwind CSS with dark theme and electric blue accents
- ✅ shadcn/ui components with accessibility features
- ✅ 20 episodes with mocked data (exactly 1 featured)
- ✅ Responsive design with mobile-first approach
- ✅ WCAG AA compliance with keyboard navigation
- ✅ Performance optimized (Lighthouse ≥95 targets)
- ✅ Static-first architecture (no server runtime)

**Key Features Implemented:**
- 🏠 Homepage with featured episode hero and episode grid
- 🎧 Individual episode pages with audio player and social sharing
- 📖 About page with host information and mission
- ❓ FAQ page with collapsible questions (no-JS fallback)
- 🧭 **Complete navigation system** - Header with responsive mobile menu and footer
- 🌙 Dark theme with high contrast and accessibility
- ♿ Full keyboard navigation and screen reader support
- 📱 Mobile-responsive design throughout
- ⚡ Static generation with optimal performance

**Files Created/Modified:**
- `package.json` - Dependencies and scripts
- `next.config.js` - Static export configuration
- `tsconfig.json` - TypeScript strict configuration
- `tailwind.config.ts` - Custom theme and design tokens
- `src/app/layout.tsx` - Root layout with SiteShell navigation wrapper
- `src/app/globals.css` - Global styles and components
- `src/components/ui/*` - shadcn/ui components (Button, Card, Badge, Slider)
- `src/components/audio-player.tsx` - Custom audio player with accessibility
- `src/components/site-shell.tsx` - Site layout with navigation
- `src/components/episode-content.tsx` - Client component for interactive features
- `src/app/page.tsx` - Homepage with featured episode
- `src/app/episodes/[slug]/page.tsx` - Dynamic episode pages
- `src/app/about/page.tsx` - About page
- `src/app/faq/page.tsx` - FAQ page with collapsible items
- `src/content/episodes.json` - 20 episode data fixtures
- `src/content/faq.json` - FAQ content
- `README.md` - Comprehensive documentation
- `docs/perf.md` - Performance guidelines and targets
- `docs/a11y.md` - Accessibility compliance documentation

**Ready for Deployment:**
The site is fully static and ready for deployment to any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).
