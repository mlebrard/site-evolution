// ================================================
// MARIE-LAURE EBRARD — ÉVOLUTION PROFESSIONNELLE
// Interactions globales
// ================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Menu mobile ----
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-principale');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const ouvert = toggle.classList.toggle('ouvert');
      nav.classList.toggle('ouverte', ouvert);
      toggle.setAttribute('aria-expanded', ouvert);
    });

    nav.querySelectorAll('a').forEach(lien => {
      lien.addEventListener('click', () => {
        toggle.classList.remove('ouvert');
        nav.classList.remove('ouverte');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        toggle.classList.remove('ouvert');
        nav.classList.remove('ouverte');
      }
    });
  }

  // ---- Header sticky avec ombre ----
  const header = document.querySelector('.site-header');
  if (header) {
    const observer = new IntersectionObserver(
      ([entry]) => header.classList.toggle('scrolled', !entry.isIntersecting),
      { rootMargin: '-70px 0px 0px 0px' }
    );
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:70px;height:1px;width:1px;pointer-events:none';
    document.body.prepend(sentinel);
    observer.observe(sentinel);
  }

  // ---- Lien actif dans la nav ----
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-principale a').forEach(lien => {
    const href = lien.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      lien.classList.add('active');
    }
  });

  // ---- Carousel témoignages ----
  const carousel = document.getElementById('carousel-temoignages');
  if (carousel) {
    const track = document.getElementById('carousel-track');
    const slides = track.querySelectorAll('.temoignage');
    const dotsContainer = document.getElementById('carousel-dots');
    const btnPrev = document.getElementById('carousel-prev');
    const btnNext = document.getElementById('carousel-next');
    let current = 0;

    // Créer les points
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' actif' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Avis ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('actif', i === current);
      });
    }

    btnPrev.addEventListener('click', () => goTo(current - 1));
    btnNext.addEventListener('click', () => goTo(current + 1));

    // Swipe tactile
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });

    // Défilement automatique toutes les 6s
    let timer = setInterval(() => goTo(current + 1), 6000);
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), 6000); });
  }

  // ---- Apparition au scroll (fade-in) ----
  const cibles = document.querySelectorAll('.fade-in');
  if (cibles.length > 0) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    cibles.forEach(el => obs.observe(el));
  }

});
