// ═══ PORTAFOLIO: filtros + carrusel + modal ═══
const section = document.getElementById('portfolio');

if (section) {
  const track = section.querySelector('[data-portfolio-track]');
  const prevBtn = section.querySelector('[data-portfolio-prev]');
  const nextBtn = section.querySelector('[data-portfolio-next]');
  const filters = section.querySelectorAll('[data-filter]');
  const items = Array.from(track.querySelectorAll('.portfolio__item'));

  let visible = [];
  let index = 0;

  // Lee --cards del CSS para que el JS y el CSS nunca se contradigan
  const cardsPerPage = () => parseInt(getComputedStyle(track).getPropertyValue('--cards'), 10) || 1;
  const maxIndex = () => Math.max(0, visible.length - cardsPerPage());

  function render() {
    const first = visible[0];
    const step = first ? first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0) : 0;
    track.style.transform = `translateX(-${index * step}px)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index >= maxIndex();
  }

  function applyFilter(category) {
    index = 0;
    visible = [];
      track.dataset.filter = category;
    items.forEach((el) => {
      const show = el.dataset.category === category;
      el.hidden = !show;
      if (show) visible.push(el);
    });
    filters.forEach((btn) => {
      const active = btn.dataset.filter === category;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    render();
  }

  const go = (delta) => {
    index = Math.min(maxIndex(), Math.max(0, index + delta));
    render();
  };

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
  filters.forEach((btn) => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));

  // Swipe en móvil
  let startX = null;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX = null;
  });

  // Recalcula al cambiar tamaño (con debounce)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { index = Math.min(index, maxIndex()); render(); }, 120);
  });

  // ── Modal ─────────────────────────────
  const modal = section.querySelector('[data-portfolio-modal]');
  const modalImg = modal.querySelector('[data-modal-img-el]');
  const modalTitle = modal.querySelector('[data-modal-title-el]');
  const modalLabel = modal.querySelector('[data-modal-label-el]');

  track.addEventListener('click', (e) => {
    const card = e.target.closest('[data-modal-img]');
    if (!card) return;
    modalImg.src = card.dataset.modalImg;
    modalImg.alt = card.dataset.modalTitle;
    modalTitle.textContent = card.dataset.modalTitle;
    modalLabel.textContent = card.dataset.modalLabel;
    modal.showModal();
    document.body.style.overflow = 'hidden';
  });

  const close = () => modal.close();
  modal.querySelector('[data-modal-close]').addEventListener('click', close);
  // Clic fuera de la tarjeta (sobre el backdrop) cierra
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  modal.addEventListener('close', () => {
    document.body.style.overflow = '';
    modalImg.src = '';
  });

  applyFilter(section.dataset.defaultFilter || 'branding');
}
