---
name: sushot
year: 2026
summary: An ultra-light screenshot tool for Windows and Linux. It lives in the tray, answers Print Screen and puts the capture on the clipboard or in a PNG. No editor, no account, no network.
stack: [Rust, Win32, X11, XDG Desktop Portal, Astro, Cloudflare]
links:
  - label: See the landing at sushot.tuty.dev
    url: https://sushot.tuty.dev
  - label: Code and downloads on GitHub
    url: https://github.com/NicolasG143/sushot
gallery:
  - src: ../../../assets/projects/sushot-demo.webp
    alt: The sushot landing with a demo desktop, a selection marquee and two captures just ejected as instant prints.
    caption: The landing, with a drag-to-capture demo.
  - src: ../../../assets/projects/sushot-shortcuts.webp
    alt: A grid of six Print Screen shortcuts, arranged by what is captured and where it goes.
    caption: Six shortcuts on one key, and that is the whole interface.
  - src: ../../../assets/projects/sushot-numbers.webp
    alt: A table with the performance targets and what the release build measured.
    caption: The numbers measured on every release.
---

## The idea

A screenshot tool that does one job and stays out of the way. Press `Print Screen`, pick a region, the full screen or a window, and the image is ready to paste. Add `Alt` to save it as a PNG instead.

- **Ctrl and Shift choose what; Alt chooses where.** Six fixed shortcuts on one key, with no settings window.
- **Deliberate exclusions.** No annotation editor, video, OCR or cloud upload.
- **Privacy.** No telemetry, no network connections and no account.

## How it's built

It's written in Rust, with a portable core and one backend per platform.

- **Windows.** A global keyboard hook, GDI capture and its own Win32 clipboard writer that delivers PNG and DIBV5.
- **Linux.** Native capture and shortcuts on X11. On Wayland, selection and shortcuts go through `xdg-desktop-portal`.
- **Light, and measured.** The Windows executable is 708 KB and idles at 1.8 MB of private memory. Every release is measured with the same script.
- **Distribution.** The GitHub release ships the `.exe` and an AppImage. The landing is static Astro served from Cloudflare.
