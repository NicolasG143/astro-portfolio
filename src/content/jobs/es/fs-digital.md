---
company: FS Digital
role: Full-Stack Developer (freelance)
start: 2023
end: 2025
summary: El sitio, la wiki y el panel de cuentas del MMORPG argentino FúriusAO, y su protección contra ataques DDoS de más de 15 TB.
stack: [Next.js, React, GSAP, Tailwind CSS, Drizzle ORM, Express, Cloudflare, NGINX]
links:
  - label: Visitar furiusao.com.ar
    url: https://furiusao.com.ar
  - label: Ver la wiki
    url: https://fsao.com.ar/wiki
gallery:
  - src: ../../../assets/work/furiusao.webp
    alt: Página de inicio del sitio de FúriusAO
    caption: El sitio del juego.
  - src: ../../../assets/work/furiusaowiki.webp
    alt: Una página de la wiki de FúriusAO
    caption: La wiki oficial, escrita en Markdown.
---

## El contexto

FúriusAO es un MMORPG 2D argentino. Durante dos años me ocupé de casi todo lo que el jugador ve fuera del juego, y de la infraestructura que lo sostiene.

## Lo que hice

- **Desarrollé el sitio del juego con Next.js, GSAP y Tailwind CSS.** Incluye un ranking de jugadores dinámico, que se puede filtrar y ordenar por varios atributos. Lo alimenta una REST API que también se encarga del registro de cuentas.
- **Diseñé y construí un panel de gestión de cuentas** con Next.js y Drizzle ORM. Tiene recuperación de contraseña y un PIN que se pide antes de las acciones críticas.
- **Hice la wiki oficial del juego.** Las páginas se escriben en Markdown, así que se pueden actualizar rápido.
- **Protegí la infraestructura.** Configuré Cloudflare para mitigar ataques DDoS de más de 15 TB. Sumé rate limiting, caché en los endpoints críticos y NGINX como reverse proxy en el VPS.
