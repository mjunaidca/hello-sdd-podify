# Data Model: Modern Podcast Website

## Entities

### Episode
- number: integer (1..n)
- title: string (1..120)
- description: string (1..5000)
- duration: string (mm:ss or ISO 8601 PTmMsS)
- publishDate: string (YYYY-MM-DD)
- coverImageUrl: string (URL)
- audioUrl: string (URL)
- slug: string (kebab-case)
- featured: boolean

Validation:
- Exactly one Episode has `featured = true`.
- Exactly 20 Episode records.

### FAQItem
- question: string (1..160)
- answer: string (1..2000)
- category: string (optional)
- order: integer (optional)

### Host
- name: string (1..80)
- bio: string (1..1000)
- avatarUrl: string (URL, optional)

## Relationships
- Episode has optional transcript (out of scope for data model; content may be attached per page).

## Notes
- Data embedded as static JSON/MDX; no persistence layer.
