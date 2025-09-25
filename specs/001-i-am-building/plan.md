
# Implementation Plan: Modern Podcast Website

**Branch**: `001-i-am-building` | **Date**: 2025-09-25 | **Spec**: /Users/mjs/Documents/code/hello-a/specs/001-i-am-building/spec.md
**Input**: Feature specification from `/specs/001-i-am-building/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
A modern, standout podcast website delivered as a fully static site. Landing page features one highlighted episode; About and FAQ pages provide context; Home lists exactly 20 mocked episodes. Data is embedded in content files; no databases or live feeds.

## Technical Context
**Language/Version**: TypeScript (ES2023)  
**Primary Dependencies**: Next.js 15 (App Router), React 19, Tailwind CSS, shadcn/ui  
**Storage**: N/A (embedded JSON/MDX content)  
**Testing**: Lighthouse for perf/a11y checks; unit/UI tests via Jest + React Testing Library (future)  
**Target Platform**: Static hosting (static export)  
**Project Type**: web  
**Performance Goals**: Lighthouse ≥ 95 (Perf/Acc/Best Practices); CLS < 0.1; LCP < 2.5s  
**Constraints**: No server runtime; no API routes; static-friendly only  
**Scale/Scope**: 4 routes, 20 episodes, single repository

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Static-First Delivery: PASS (explicit static site; embedded data)
- Standard UI Stack: PASS (Next.js, React, Tailwind, shadcn/ui)
- Performance & Accessibility Gates: PLANNED (measured at validation; no violations introduced by plan)
- Simplicity & Static Data Contracts: PASS (JSON schemas; minimal abstractions)
- Versioning, CI Gates, and Docs: PASS (quickstart docs to be added; CI gates anticipated)

## Project Structure

### Documentation (this feature)
```
specs/001-i-am-building/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

# Note: Actual app will follow Next.js standard app directory structure when created.
```

**Structure Decision**: Option 1 (single project). App will be a single Next.js app with static export.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - Visual direction finalized (dark theme, high-contrast, electric blue accent)
   - Accessibility/performance tactics for static sites
   - Mock content structure for 20 episodes

2. **Generate and dispatch research agents**:
   ```
   Task: "Define visual direction and typography scale for podcast site"
   Task: "Best practices for Lighthouse ≥95 on static Next.js pages"
   Task: "Design JSON schemas for Episode and FAQ content"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements

2. **Generate contracts** (static data schemas):
   - Output JSON Schema to `/contracts/` for Episode and FAQItem

3. **Generate contract tests**: (Not applicable to static data in this phase)

4. **Extract test scenarios** from user stories:
   - Capture in quickstart.md as a manual validation sequence

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh cursor`

**Output**: data-model.md, /contracts/*, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each entity → model/content tasks [P]
- Each route → page-level tasks
- Implementation tasks to satisfy quickstart checks

**Ordering Strategy**:
- TDD order: Content schemas and fixtures before UI
- Dependency order: Content → UI components → Pages → Navigation
- Mark [P] for parallel execution where independent

**Estimated Output**: ~20-25 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*No deviations required; all gates satisfied by static design.*

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
