<!--
Sync Impact Report
- Version change: 0.0.0 → 1.0.0
- Modified principles: (template → concrete)
  - [PRINCIPLE_1_NAME] → Static-First Delivery (No Server Runtime)
  - [PRINCIPLE_2_NAME] → Standard UI Stack (React 19, Tailwind, shadcn/ui)
  - [PRINCIPLE_3_NAME] → Performance & Accessibility Gates
  - [PRINCIPLE_4_NAME] → Simplicity & Static Data Contracts
  - [PRINCIPLE_5_NAME] → Versioning, CI Gates, and Docs
- Added sections: Additional Constraints; Development Workflow & Quality Gates
- Removed sections: none
- Templates requiring updates:
  - .specify/templates/plan-template.md → ✅ reviewed (no changes needed; Constitution Check remains applicable)
  - .specify/templates/spec-template.md → ✅ reviewed (no changes needed)
  - .specify/templates/tasks-template.md → ✅ reviewed (no changes needed)
- Deferred TODOs:
  - RATIFICATION_DATE: Original adoption date unknown
-->

# hello-a Constitution

## Core Principles

### Static-First Delivery (No Server Runtime)
All pages MUST be statically generated and deployed on a static host. Use
Next.js 15 with App Router and Partial Prerendering configured for fully
static output; avoid Node.js server runtimes, API routes, or server-only
dependencies. Dynamic data MUST be fetched client-side from public, cacheable
endpoints or embedded at build time.

### Standard UI Stack (React 19, Tailwind, shadcn/ui)
UI MUST be built with React 19 and the App Router. Styling MUST use Tailwind
CSS with design tokens defined in `tailwind.config.*`. Components MUST prefer
`shadcn/ui` primitives; custom components MUST follow the same accessibility
and composition patterns. No CSS-in-JS at runtime.

### Performance & Accessibility Gates
The production build MUST meet: Lighthouse Performance ≥ 95, Accessibility ≥ 95,
Best Practices ≥ 95 on key routes; CLS < 0.1, LCP < 2.5s on median hardware.
Use `next/image`, font optimization, and route-level code splitting. All UI
controls MUST have ARIA labels and keyboard navigation.

### Simplicity & Static Data Contracts
Prefer flat files (e.g., JSON/MDX) and compile-time data where possible. Public
data contracts (JSON schemas) MUST be versioned and backward compatible within a
minor version. Avoid unnecessary abstractions; keep modules small and focused.

### Versioning, CI Gates, and Docs
Follow semantic versioning for the constitution and for public data contracts.
CI MUST fail if constitution gates are violated. The README MUST include exact
install, build, and deploy commands; any deviation requires a doc update in the
same PR.

## Additional Constraints

- Tech Stack: Next.js 15, React 19, Tailwind CSS, shadcn/ui, TypeScript, pnpm
- Build: `pnpm install` → `pnpm build` producing a static export suitable for
  static hosting
- Routing: App Router; edge-/static-compatible APIs only
- Assets: Use `next/image` and static `public/` assets with caching headers
- Internationalization and analytics: opt-in; MUST not introduce server runtime

## Development Workflow & Quality Gates

- TypeScript strict mode enabled; ESLint and Prettier configured and passing
- PRs MUST demonstrate compliance with Performance & Accessibility gates on at
  least the home route and one representative content route
- UI components MUST include Storybook or equivalent docs, or inline examples
  in MDX pages
- Use pnpm workspaces if multiple packages are introduced

## Governance

- Amendments: Propose via PR with rationale and impact; include migration notes
  if gates change
- Versioning Policy: MAJOR for breaking changes to principles or removal;
  MINOR for added/expanded principles; PATCH for non-semantic clarifications
- Compliance: Reviewers MUST verify gates; CI enforces lint, type check, build,
  and Lighthouse checks for changed routes

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown | **Last Amended**: 2025-09-25