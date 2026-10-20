/**
 * E-BIO PENS — Main Application Entry Point
 * Menginisialisasi seluruh subsistem aplikasi: data rendering, navigasi, modal, dan animasi interaktif
 */

function initApp() {
  // 0. Inisialisasi Tema (Dark/Light Mode)
  if (typeof initTheme === 'function') initTheme();

  // 1. Eksekusi Rendering Seluruh Komponen Dinamis dari Data Store
  if (typeof EBIORenderer !== 'undefined' && typeof EBIORenderer.initAll === 'function') {
    EBIORenderer.initAll();
  }

  // 2. Inisialisasi Navigasi Responsif, Dropdown & Active Scroll Spy
  if (typeof initMobileNavigation === 'function') initMobileNavigation();
  if (typeof initNavDropdown === 'function') initNavDropdown();
  if (typeof initScrollSpy === 'function') initScrollSpy();

  // 3. Inisialisasi Kontrol Modal & Lightbox Keyboard Listeners
  if (typeof initModalListeners === 'function') initModalListeners();

  // 4. Inisialisasi Peta Geospasial Interaktif Desa Sajen
  if (typeof initSajenDeploymentMap === 'function') initSajenDeploymentMap();

  // 5. Inisialisasi Animasi & Efek Interaktif Modern
  if (typeof initScrollProgressAndBackToTop === 'function') initScrollProgressAndBackToTop();
  if (typeof initScrollReveal === 'function') initScrollReveal();
  if (typeof initCounters === 'function') initCounters();
  if (typeof initHeroTilt === 'function') initHeroTilt();
}

// Jalankan ketika seluruh struktur DOM telah siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
