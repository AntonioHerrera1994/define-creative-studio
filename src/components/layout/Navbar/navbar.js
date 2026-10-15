// ═══ NAVBAR: abre/cierra el menú móvil ═══
const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
  const setOpen = (open) => {
    menu.hidden = !open;
    btn.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  };

  btn.addEventListener('click', () => setOpen(menu.hidden));

  // Cierra al tocar un link o con Escape
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}
