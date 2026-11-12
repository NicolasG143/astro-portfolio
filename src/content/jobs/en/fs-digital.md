---
company: FS Digital
role: Full-Stack Developer (freelance)
start: 2023
end: 2025
summary: The website, wiki and account panel of the Argentine MMORPG FúriusAO, and its protection against DDoS attacks of more than 15 TB.
stack: [Next.js, React, GSAP, Tailwind CSS, Drizzle ORM, Express, Cloudflare, NGINX]
links:
  - label: Visit furiusao.com.ar
    url: https://furiusao.com.ar
  - label: See the wiki
    url: https://fsao.com.ar/wiki
gallery:
  - src: ../../../assets/work/furiusao.webp
    alt: Home page of the FúriusAO website
    caption: The game's website.
  - src: ../../../assets/work/furiusaowiki.webp
    alt: A page from the FúriusAO wiki
    caption: The official wiki, written in Markdown.
---

## The context

FúriusAO is an Argentine 2D MMORPG. For two years I took care of almost everything players see outside the game, and of the infrastructure behind it.

## What I did

- **Built the game's website with Next.js, GSAP and Tailwind CSS.** It includes a dynamic player leaderboard that can be filtered and sorted by several attributes. It's powered by a REST API that also handles account sign-up.
- **Designed and built an account management panel** with Next.js and Drizzle ORM. It has password recovery and asks for a PIN before critical actions.
- **Built the game's official wiki.** Pages are written in Markdown, so they can be updated quickly.
- **Protected the infrastructure.** I set up Cloudflare to mitigate DDoS attacks of more than 15 TB, and added rate limiting, caching on critical endpoints and NGINX as a reverse proxy on the VPS.
