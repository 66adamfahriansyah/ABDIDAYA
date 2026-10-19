/**
 * E-BIO PENS — Modul: Animasi & Interaktivitas
 * Mengelola animasi scroll reveal, counter angka dinamis, 3D tilt hero, dan bar progress baca
 */

// 1. Reading Progress Bar & Floating Back-to-Top Button
function initScrollProgressAndBackToTop() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');
  const progressCircle = document.getElementById('scroll-progress-circle');

  const circumference = 2 * Math.PI * 19; // r=19 -> ~119.38
  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;
  }

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) : 0;
    const percent = Math.min(Math.max(progress * 100, 0), 100);

    // Update Top Line
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }

    // Update Circular Ring on Back-to-Top
    if (progressCircle) {
      const offset = circumference - (circumference * percent) / 100;
      progressCircle.style.strokeDashoffset = `${offset}`;
    }

    // Toggle Back-to-Top Visibility
    if (backToTopBtn) {
      if (scrollTop > 380) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 2. IntersectionObserver untuk Scroll-Driven Reveals
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback untuk browser lama
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

// 3. Smooth Ease-Out Animated Counters untuk Hero Stats
function initCounters() {
  const counterElements = document.querySelectorAll('.stat-counter');
  if (!counterElements.length) return;

  function runCounter(el) {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out exponential curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * target);

      el.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${prefix}${target}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => counterObserver.observe(el));
  } else {
    counterElements.forEach(el => runCounter(el));
  }
}

// 4. Hero & PHT Showcase 3D Interactive Perspective Tilt
function initHeroTilt() {
  const tiltCards = document.querySelectorAll('#hero-tilt-card, #pht-tilt-card');
  if (!tiltCards.length) return;

  // Nonaktifkan pada layar sentuh untuk menjaga performa
  if (window.matchMedia('(pointer: coarse)').matches) return;

  tiltCards.forEach(tiltCard => {
    if (tiltCard.dataset.tiltInitialized === 'true') return;
    tiltCard.dataset.tiltInitialized = 'true';

    let bounds = null;

    function onMouseEnter() {
      bounds = tiltCard.getBoundingClientRect();
    }

    function onMouseMove(e) {
      if (!bounds) bounds = tiltCard.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = mouseX / bounds.width - 0.5;
      const yPct = mouseY / bounds.height - 0.5;

      const rotX = -yPct * 12; // derajat kemiringan sumbu X
      const rotY = xPct * 12;  // derajat kemiringan sumbu Y

      tiltCard.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px)`;
    }

    function onMouseLeave() {
      tiltCard.style.transform = '';
      bounds = null;
    }

    tiltCard.addEventListener('mouseenter', onMouseEnter);
    tiltCard.addEventListener('mousemove', onMouseMove);
    tiltCard.addEventListener('mouseleave', onMouseLeave);
  });
}
