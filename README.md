# tuty.dev

Personal portfolio of Nicolás "Tuty" Giménez. Built with Astro 7, Tailwind CSS 4 and Bun, deployed as a static site on Cloudflare.

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `bun install`     | Install dependencies                        |
| `bun run dev`     | Start the dev server at `localhost:4321`    |
| `bun run build`   | Type-check (`astro check`) and build `dist/` |
| `bun run preview` | Preview the production build                |

## Languages

The site is in Spanish (default, no prefix: `/`, `/trabajos/<slug>/`) and English (`/en/`, `/en/work/<slug>/`), using Astro's i18n routing. The language switcher links each page to its counterpart, and every page declares `hreflang` alternates.

- **Interface text:** `src/i18n/ui.ts`. The English dictionary is typed against the Spanish one, so a missing key fails the type check.
- **Per-language profile data** (CV link, skill labels): `src/data/profile.ts`.

## Editing content

- **Jobs:** one Markdown file per job and language, in `src/content/jobs/es/` and `src/content/jobs/en/`. Use the same file name in both folders: it is the slug that links the two versions. Each file becomes a job page and a row in the home work list. Frontmatter is validated in `src/content.config.ts`.
- **Personal projects:** same layout, in `src/content/projects/es/` and `src/content/projects/en/`. The section and its nav link stay hidden while a language has no projects.
- **Screenshots:** put images in `src/assets/work/` and reference them from a job's `gallery`.
