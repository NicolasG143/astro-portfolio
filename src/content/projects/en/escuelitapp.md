---
name: escuelitapp
year: 2026
summary: Pen-and-paper school games to play with friends from your phone, no sign-up needed. Hangman with link-based challenges and La Papa in real-time drawing rooms.
stack: [Astro, TypeScript, Cloudflare Workers, Hono, D1, Durable Objects]
links:
  - label: Play at escuelitapp.tuty.dev
    url: https://escuelitapp.tuty.dev
gallery:
  - src: ../../../assets/projects/escuelitapp-ahorcado.webp
    alt: Hangman screen with the form to create a challenge and the practice board.
    caption: Hangman, with the shareable challenge and practice mode.
  - src: ../../../assets/projects/escuelitapp-la-papa.webp
    alt: La Papa screen with the rules and the forms to create a room or join with a code.
    caption: La Papa, where you create a room or join with a code.
  - src: ../../../assets/projects/escuelitapp-home.webp
    alt: escuelitapp home page with the cards for both games.
    caption: The game catalog.
---

## The idea

A web suite of the pen-and-paper games from school, to play with friends from your phone. There are no accounts or logins: each player picks a nickname and the browser keeps an anonymous ID.

- **Hangman (Ahorcado).** You build a 5-word challenge, play it and share the link. Fewest mistakes wins; ties are broken by time.
- **La Papa.** A real-time room for 2 to 4 players. Taking turns, players connect the numbers from 1 to 30 with a single stroke without crossing other lines. Each mistake is a "papa", and three of them knock you out.

## How it's built

Everything runs on Cloudflare's free tier: the site is static Astro with vanilla TypeScript, the API is a Worker with Hono, data lives in D1 and each La Papa room is a Durable Object with WebSockets.

- **The server is the source of truth.** Hangman scores are recomputed on the server by replaying the moves, and the La Papa room decides collisions and turns.
- **Pure, shared game logic.** The rules are functions with no DOM or network dependencies, used by both the client and the server.
- **Per-game loading.** Each game mounts only on its own page, so its JavaScript isn't downloaded when you open another one.
- **Privacy.** No personal data is stored or written to the logs.
