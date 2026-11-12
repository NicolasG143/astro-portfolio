// Wires every [data-copy] button on the page: copies its value and confirms in place and via a live region.
// Messages come from data attributes so they follow the page language.
const RESET_MS = 2200;

const setup = () => {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy]')) {
    if (button.dataset.ready) continue;
    button.dataset.ready = 'true';

    const label = button.querySelector<HTMLElement>('[data-copy-label]');
    const idle = label?.textContent ?? '';
    const status = document.getElementById(button.dataset.status ?? '');
    const { copied = '', failed = '', failedLong = '' } = button.dataset;
    let timer: ReturnType<typeof setTimeout> | undefined;

    button.addEventListener('click', async () => {
      let ok = true;
      try {
        await navigator.clipboard.writeText(button.dataset.copy ?? '');
      } catch {
        ok = false;
      }
      if (label) label.textContent = ok ? copied : failed;
      if (status) status.textContent = ok ? copied : failedLong;
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (label) label.textContent = idle;
      }, RESET_MS);
    });
  }
};

document.addEventListener('astro:page-load', setup);
