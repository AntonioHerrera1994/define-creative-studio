// ═══ Aparición suave al hacer scroll ═══
// Marca con data-reveal cualquier elemento que quieras animar.
// Si el JS no carga, todo se ve normal (la clase js-reveal solo se pone aquí).
const items = document.querySelectorAll('[data-reveal]');

if (items.length && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.08 }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 70}ms`;
    io.observe(el);
  });
}
