---
name: escuelitapp
year: 2026
summary: Juegos escolares de lápiz y papel para jugar con amigos desde el celular, sin registro. Ahorcado con desafíos por link y La Papa en salas de dibujo en tiempo real.
stack: [Astro, TypeScript, Cloudflare Workers, Hono, D1, Durable Objects]
links:
  - label: Jugar en escuelitapp.tuty.dev
    url: https://escuelitapp.tuty.dev
gallery:
  - src: ../../../assets/projects/escuelitapp-ahorcado.webp
    alt: Pantalla del Ahorcado con el formulario para crear un desafío y el tablero de práctica.
    caption: El Ahorcado, con el desafío para compartir y el modo práctica.
  - src: ../../../assets/projects/escuelitapp-la-papa.webp
    alt: Pantalla de La Papa con las reglas y los formularios para crear una sala o unirse con un código.
    caption: La Papa, donde se crea una sala o se entra con un código.
  - src: ../../../assets/projects/escuelitapp-home.webp
    alt: Página de inicio de escuelitapp con las tarjetas de los dos juegos.
    caption: El catálogo de juegos.
---

## La idea

Una suite web de los juegos de lápiz y papel de la escuela, para jugar con amigos desde el celular. No hay cuentas ni login: cada jugador elige un apodo y el navegador guarda un identificador anónimo.

- **Ahorcado.** Se arma un desafío de 5 palabras, se juega y se comparte el link. Gana quien tenga menos errores; el desempate es por tiempo.
- **La Papa.** Una sala en tiempo real de 2 a 4 jugadores. Por turnos se unen los números del 1 al 30 con un solo trazo, sin cruzar otras líneas. Cada error es una papa y con 3 papas se queda afuera.

## Cómo está hecho

Todo corre en el free tier de Cloudflare: el sitio es Astro estático con TypeScript vanilla, la API es un Worker con Hono, los datos viven en D1 y cada sala de La Papa es un Durable Object con WebSockets.

- **El servidor es la fuente de verdad.** Los puntajes del Ahorcado se recalculan en el servidor reproduciendo las jugadas, y las colisiones y los turnos de La Papa los decide la sala.
- **Lógica de juego pura y compartida.** Las reglas son funciones sin dependencias de DOM ni de red, y las usan tanto el cliente como el servidor.
- **Carga por juego.** Cada juego se monta solo en su página, así que su JavaScript no se descarga al entrar a otro.
- **Privacidad.** No se guardan datos personales ni se registran en los logs.
