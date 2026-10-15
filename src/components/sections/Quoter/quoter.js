// ═══ COTIZADOR INTELIGENTE ═══
// Los planes y textos llegan desde el componente en un <script type="application/json">,
// así este archivo funciona igual en español e inglés.
const root = document.getElementById('cotizador');

if (root) {
  const data = JSON.parse(root.querySelector('[data-quoter-data]').textContent);
  const $ = (key) => root.querySelector(`[data-q="${key}"]`);

  const extrasBox = root.querySelector('[data-quoter-extras]');
  const extrasList = root.querySelector('[data-quoter-extras-list]');
  const emptyEl = root.querySelector('[data-quoter-empty]');
  const panel = root.querySelector('[data-quoter-panel]');

  const money = (n) => '$' + n.toLocaleString(data.locale);

  let currentPlan = null;
  let selectedExtras = new Map(); // label → price

  // Evita inyectar HTML desde los textos
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function renderExtras(plan) {
    selectedExtras = new Map();
    extrasList.innerHTML = plan.extras.map((ex, i) => `
      <label class="quoter__extra">
        <input type="checkbox" data-index="${i}">
        <span class="quoter__extra-label">${esc(ex.label)}</span>
        <span class="quoter__extra-price">+${money(ex.price)}${esc(ex.freq)}</span>
      </label>`).join('');
    extrasBox.hidden = false;
  }

  function renderQuote() {
    if (!currentPlan) return;
    const plan = currentPlan;
    const total = plan.basePrice + [...selectedExtras.values()].reduce((a, b) => a + b, 0);
    const extrasNames = [...selectedExtras.keys()];

    $('badge').textContent = plan.badge;
    $('name').textContent = plan.name;
    $('desc').textContent = plan.desc;
    $('freq').textContent = plan.freq;
    $('price').textContent = money(total);
    $('features').innerHTML = plan.features
      .map((f) => `<li><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>${esc(f)}</li>`)
      .join('');

    const extrasLine = $('extras');
    extrasLine.hidden = extrasNames.length === 0;
    extrasLine.textContent = data.extrasPrefix + extrasNames.join(', ');

    const extrasMsg = extrasNames.length ? data.waExtras + extrasNames.join(', ') : '';
    const msg = data.waTemplate
      .replace('{plan}', plan.name)
      .replace('{price}', money(total))
      .replace('{extras}', extrasMsg);
    $('whatsapp').href = `https://wa.me/${data.waNumber}?text=${encodeURIComponent(msg)}`;

    emptyEl.hidden = true;
    panel.hidden = false;
    panel.classList.add('is-updating');
    setTimeout(() => panel.classList.remove('is-updating'), 150);
  }

  // Cambio de objetivo
  root.querySelectorAll('input[name="quoter-goal"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      currentPlan = data.plans[radio.value];
      renderExtras(currentPlan);
      renderQuote();
    });
  });

  // Cambio de extras (delegación: los checkboxes se crean dinámicamente)
  extrasList.addEventListener('change', (e) => {
    const cb = e.target;
    if (!(cb instanceof HTMLInputElement) || !currentPlan) return;
    const extra = currentPlan.extras[Number(cb.dataset.index)];
    if (cb.checked) selectedExtras.set(extra.label, extra.price);
    else selectedExtras.delete(extra.label);
    renderQuote();
  });
}
