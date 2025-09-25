# Hello Podcast

> **This is an implementation of [Spec Driven Development Methadology Documentated here](https://github.com/panaversity/learn-agentic-ai/tree/main/06_prompt_driven_development/05_spec_driven_development). Think of it as a hello world to start using SDD.**

A modern, standout podcast website built with Next.js 15, React 19, Tailwind CSS, and shadcn/ui. Features a sleek dark theme, static-first architecture, and accessibility-focused design.

## Features

- 🎧 **20+ Episodes** with detailed show notes and audio playback
- 🏠 **Homepage** with featured episode and episode grid
- 📖 **About Page** with host information and mission
- ❓ **FAQ Page** with searchable questions and answers
- ♿ **Accessibility First** with WCAG AA compliance and keyboard navigation
- 📱 **Responsive Design** that works beautifully on all devices
- ⚡ **Performance Optimized** with Lighthouse scores ≥95
- 🌙 **Dark Theme** with electric blue accents

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: shadcn/ui with Radix UI primitives
- **Type Safety**: TypeScript with strict mode
- **Deployment**: Static export for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/hello-a-podcast.git
   cd hello-a-podcast
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Create a static build:
   ```bash
   pnpm build
   ```

2. Preview the production build:
   ```bash
   pnpm start
   ```

### Deployment

This project is optimized for static hosting. You can deploy it to:

- **Vercel** (recommended): Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `out` folder or connect via Git
- **GitHub Pages**: Use the static export and deploy via GitHub Actions
- **Any static host**: Upload the `out` folder contents

## Performance

The site is optimized for performance with:
- Static generation for all pages
- Optimized images with Next.js Image component
- Efficient font loading and subsetting
- CSS and JavaScript minification
- Lighthouse Performance ≥95

## Accessibility

Built with accessibility as a core principle:
- WCAG AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Semantic HTML structure
- ARIA labels and descriptions

## Development

### Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode enabled
- Component documentation with Storybook (planned)

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── episodes/[slug]/   # Dynamic episode pages
│   ├── faq/               # FAQ page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── audio-player.tsx   # Custom audio player
│   └── site-shell.tsx     # Site layout wrapper
├── content/               # Static content
│   ├── episodes.json      # Episode data
│   └── faq.json           # FAQ data
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and add tests
4. Ensure all tests pass: `pnpm test`
5. Submit a pull request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Email**: hello@hello-a-podcast.com
- **Issues**: [GitHub Issues](https://github.com/your-org/hello-a-podcast/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/hello-a-podcast/discussions)

---

Built with ❤️ by the Hello A team

