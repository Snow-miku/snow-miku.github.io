# AZ Studio - Portfolio Website

Personal portfolio website for Alan Zhou - Full Stack Engineer & UI/UX Designer.

## Important Instructions

- **Always use `@latest` tag when installing packages**: When adding new dependencies, always use `npm install package@latest` or `npm install -D package@latest` to ensure the latest version is installed.

## Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (based on Radix UI)
- **Routing**: React Router
- **Icons**: Lucide React
- **Hosting**: GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── layout/       # Header, Footer, Layout
│   └── common/       # Reusable components (ProjectCard, SectionTitle)
├── pages/            # Page components
├── data/             # Static data (projects, resume, gallery)
├── hooks/            # Custom React hooks
└── lib/              # Utilities
```

## Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build to ./dist
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Design System

### Design Reference
The design is inspired by https://shimekiri-techo.words-inc.co.jp

### Colors (defined in src/index.css)
| Color | Hex | Usage |
|-------|-----|-------|
| `paper-blue` | #8fa8b8 | Main background (deeper, more saturated blue) |
| `paper-blue-light` | #a8bfcc | Lighter variant |
| `paper-blue-dark` | #7a95a6 | Darker variant |
| `tag-bg` | #393939 | Tag/badge backgrounds, lines (shimekiri-techo style) |
| `ink` | #1a1a1a | Primary text |
| `ink-light` | #393939 | Secondary text |
| `ink-muted` | #393939 | Muted text |
| `kraft` | #c9b99a | Accent color (kraft paper) |
| `cream` | #f5f2eb | Light backgrounds |

### Typography
- **Primary Font**: Zen Kaku Gothic New (similar to tsukuGoB from shimekiri-techo)
- **Fallback**: Inter, Noto Sans SC, system-ui
- **Monospace**: JetBrains Mono

### Key Design Elements
- Paper texture background with **dense noise pattern** (baseFrequency: 1.5, numOctaves: 6)
- Tags/badges use `#393939` background with white text (no rounded corners)
- Lines and borders use `#393939`
- Clean, minimal aesthetic inspired by Japanese stationery design

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Hero, featured projects, skills overview |
| `/case-study` | CaseStudy | UI/UX project case studies list |
| `/case-study/:id` | CaseStudyDetail | Individual case study |
| `/gallery` | Gallery | Artwork and illustrations |
| `/resume` | Resume | Experience, education, skills |
| `/about` | About | Personal bio and contact |

## Data Files

- `src/data/projects.ts` - Featured projects and case studies
- `src/data/resume.ts` - Work experience, education, skills
- `src/data/gallery.ts` - Artwork items and categories

## Deployment

Automatically deploys to GitHub Pages via GitHub Actions on push to `main` branch.

The site uses a SPA routing workaround for GitHub Pages (404.html redirect).

## Adding Content

### Add a new case study:
Edit `src/data/projects.ts`, add to `caseStudies` array.

### Add gallery artwork:
1. Add image to `public/images/gallery/`
2. Edit `src/data/gallery.ts`, add to `galleryItems` array

### Update resume:
Edit `src/data/resume.ts` (experiences, education, skills).

## Notes

- Use `@/` import alias for src directory
- All images go in `public/images/` subdirectories
- Tailwind CSS v4 uses CSS-based config in `src/index.css` under `@theme`
