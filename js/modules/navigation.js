/**
 * E-BIO PENS — Modul: Navigasi & Scroll Spy
 * Mengelola responsivitas menu mobile dan indikator menu navbar aktif
 */

// Inisialisasi Navigasi Mobile Hamburger
function initMobileNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Tutup menu mobile ketika link navigasi diklik
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Inisialisasi Active Scroll Spy untuk Navbar
function initScrollSpy() {
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(Boolean);

  if (!sections.length) return;

  function updateActiveLink() {
    const scrollPos = window.scrollY + 140;

    let currentSectionId = '';
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPos) {
        currentSectionId = section.getAttribute('id');
        break;
      }
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentSectionId) {
        link.classList.add('text-emerald-800', 'font-bold');
        link.classList.remove('text-slate-600');
      } else {
        link.classList.remove('text-emerald-800', 'font-bold');
        link.classList.add('text-slate-600');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}
