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

// ═══ DROPDOWN DE SERVICIOS (escritorio) ═══
document.querySelectorAll('[data-dropdown]').forEach((dd) => {
  const trigger = dd.querySelector('button');
  if (!trigger) return;

  const setOpen = (open) => {
    dd.toggleAttribute('data-open', open);
    trigger.setAttribute('aria-expanded', String(open));
  };

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!dd.hasAttribute('data-open'));
  });

  // Clic fuera o Escape lo cierran
  document.addEventListener('click', (e) => {
    if (!dd.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dd.hasAttribute('data-open')) {
      setOpen(false);
      trigger.focus();
    }
  });
  // Al salir con Tab del dropdown, se cierra
  dd.addEventListener('focusout', (e) => {
    if (!dd.contains(e.relatedTarget)) setOpen(false);
  });
});