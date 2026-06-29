// attract.js

(function () {
  const ATTRACT_RADIUS = 130;
  const ATTRACT_STRENGTH = 0.14;
  const RETURN_STRENGTH = 0.07;
  const DAMPING = 0.75;

  let mouse = { x: -9999, y: -9999 };
  const words = [];

  const SELECTORS = 'h1, h2, h3, .hero-sub, .about-para, .section-desc, .section-tag';

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(SELECTORS).forEach(el => {
      if (el.querySelector('a, strong, em, span')) return; // skip if has child tags
      el.innerHTML = el.innerHTML.replace(/(\S+)/g, '<span class="aw" style="display:inline-block">$1</span>');
    });

    document.querySelectorAll('.aw').forEach(el => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2 + window.scrollX;
      const cy = rect.top + rect.height / 2 + window.scrollY;
      words.push({ el, ox: cx, oy: cy, x: cx, y: cy, vx: 0, vy: 0 });
    });

    tick();
  });

  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function tick() {
    const sx = window.scrollX;
    const sy = window.scrollY;
    const mx = mouse.x + sx;
    const my = mouse.y + sy;

    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      const dx = mx - w.x;
      const dy = my - w.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < ATTRACT_RADIUS && dist > 0) {
        const force = (1 - dist / ATTRACT_RADIUS) * ATTRACT_STRENGTH;
        w.vx += dx * force;
        w.vy += dy * force;
      }

      w.vx += (w.ox - w.x) * RETURN_STRENGTH;
      w.vy += (w.oy - w.y) * RETURN_STRENGTH;
      w.vx *= DAMPING;
      w.vy *= DAMPING;
      w.x += w.vx;
      w.y += w.vy;

      w.el.style.transform = `translate(${(w.x - w.ox).toFixed(1)}px,${(w.y - w.oy).toFixed(1)}px)`;
    }

    requestAnimationFrame(tick);
  }
})();