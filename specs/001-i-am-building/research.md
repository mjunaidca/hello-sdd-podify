# Research: Modern Podcast Website

## Decisions
- Visual Direction: Dark theme, high-contrast typography, electric blue accent.
  - Rationale: Aligns with "sleek, standout" goal; supports strong hero imagery.
  - Alternatives: Light theme rejected to avoid generic aesthetic.
- Content Strategy: 20 mocked episodes embedded as JSON; About and FAQ as MDX/Markdown.
  - Rationale: Static-first; no external dependencies; fast builds.
  - Alternatives: Remote CMS rejected due to static constraint.
- Performance Tactics: Preload hero assets, use optimized images, font subsetting, route-level code splitting.
  - Rationale: Meet Lighthouse ≥95 and LCP/CLS targets.
  - Alternatives: Runtime image transforms avoided (no server runtime).
- Accessibility: Keyboard operable controls, visible focus, ARIA labels; color contrast WCAG AA.
  - Rationale: Constitution gates; inclusive access.
  - Alternatives: None.

## Open Items
- None. All clarifications resolved within spec assumptions.
