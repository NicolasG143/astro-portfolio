---
name: sushot
year: 2026
summary: Capturador de pantalla ultra liviano para Windows y Linux. Vive en la bandeja, responde a Impr Pant y deja la captura en el portapapeles o en un PNG. Sin editor, sin cuentas, sin red.
stack: [Rust, Win32, X11, XDG Desktop Portal, Astro, Cloudflare Workers]
links:
  - label: Ver la landing en sushot.tuty.dev
    url: https://sushot.tuty.dev
  - label: Código y descargas en GitHub
    url: https://github.com/NicolasG143/sushot
gallery:
  - src: ../../../assets/projects/sushot-demo.webp
    alt: Landing de sushot con una demo de escritorio, un recuadro de selección y dos capturas recién expulsadas como fotos instantáneas.
    caption: La landing, con una demo para arrastrar y capturar.
  - src: ../../../assets/projects/sushot-shortcuts.webp
    alt: Grilla de seis atajos de Impr Pant, ordenados por qué se captura y adónde va.
    caption: Seis atajos sobre una tecla, y esa es toda la interfaz.
  - src: ../../../assets/projects/sushot-numbers.webp
    alt: Tabla con los objetivos de rendimiento y lo medido en el build de release.
    caption: Los números medidos en cada release.
---

## La idea

Una herramienta de capturas que hace una sola cosa y no molesta. Se apreta `Impr Pant`, se elige una región, la pantalla completa o una ventana, y la imagen queda lista para pegar. Sumando `Alt`, se guarda como PNG.

- **Ctrl y Shift eligen qué; Alt elige adónde.** Seis atajos fijos sobre una tecla, sin ventana de ajustes.
- **Exclusiones a propósito.** No hay editor de anotaciones, video, OCR ni subida a la nube.
- **Privacidad.** Sin telemetría, sin conexiones de red y sin cuenta.

## Cómo está hecho

Está escrito en Rust, con un núcleo portable y un backend por plataforma.

- **Windows.** Hook de teclado global, captura con GDI y un portapapeles propio sobre Win32 que entrega PNG y DIBV5.
- **Linux.** En X11, captura y atajos nativos. En Wayland, la selección y los atajos pasan por `xdg-desktop-portal`.
- **Liviano y medido.** El ejecutable de Windows pesa 708 KB y usa 1,8 MB de memoria privada en reposo. Cada release se mide con el mismo script.
- **Distribución.** El release de GitHub trae el `.exe` y un AppImage. La landing es Astro estático servido desde Cloudflare.
