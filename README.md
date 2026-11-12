# tuty.dev

Personal portfolio of Nicolás "Tuty" Giménez. Built with Astro 7, Tailwind CSS 4 and Bun, deployed as a static site on Cloudflare.

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `bun install`     | Install dependencies                        |
| `bun run dev`     | Start the dev server at `localhost:4321`    |
| `bun run build`   | Type-check (`astro check`) and build `dist/` |
| `bun run preview` | Preview the production build                |

## Editing content

- **Jobs:** one Markdown file per job in `src/content/jobs/`. Each file becomes a page at `/trabajos/<file-name>/` and a row in the home timeline. Frontmatter is validated in `src/content.config.ts`.
- **Personal projects:** one Markdown file per project in `src/content/projects/`. The section and its nav link stay hidden while the folder is empty.
- **Profile, links and skills:** `src/data/profile.ts`.
- **Screenshots:** put images in `src/assets/work/` and reference them from a job's `gallery`.
