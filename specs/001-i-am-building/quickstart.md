# Quickstart: Modern Podcast Website

## What you'll validate
- Home shows featured episode and list of 20 episodes
- About and FAQ pages render with content
- Episode detail shows metadata and working audio playback
- Basic experience works with JS disabled (content + audio)

## Manual validation steps
1. Open Home page → Verify hero shows featured episode; list shows 20 episodes.
2. Navigate to About → Verify mission and host bios are visible.
3. Navigate to FAQ → Expand 2-3 items; verify content.
4. Open any episode detail → Press Play; verify metadata and playback.
5. Rerun steps 1 and 4 with JavaScript disabled → Content visible; audio works.
6. Run Lighthouse on Home and one episode detail → Perf/Acc/Best Practices ≥ 95.

## Build & run (indicative)
- Install deps: `pnpm install`
- Build: `pnpm build`
- Preview static export or start: `pnpm start`

Note: Project will use static export; no server runtime or databases.
