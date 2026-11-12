// Wires every [data-copy] button on the page: copies its value and confirms in place and via a live region.
const RESET_MS = 2200;

const setup = () => {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy]')) {
    if (button.dataset.ready) continue;
    button.dataset.ready = 'true';

    const label = button.querySelector<HTMLElement>('[data-copy-label]');
    const idle = label?.textContent ?? '';
    const status = document.getElementById(button.dataset.status ?? '');
    let timer: ReturnType<typeof setTimeout> | undefined;

    button.addEventListener('click', async () => {
      let ok = true;
      try {
        await navigator.clipboard.writeText(button.dataset.copy ?? '');
      } catch {
        ok = false;
      }
      if (label) label.textContent = ok ? 'Mail copiado' : 'No se pudo copiar';
      if (status) {
        status.textContent = ok ? 'Mail copiado' : 'No se pudo copiar. Seleccioná el mail y copialo a mano.';
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (label) label.textContent = idle;
      }, RESET_MS);
    });
  }
};

document.addEventListener('astro:page-load', setup);
