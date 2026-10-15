// ═══ Barra de progreso de lectura ═══
const bar = document.querySelector('[data-reading-bar]');

if (bar) {
  let ticking = false;
  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}
