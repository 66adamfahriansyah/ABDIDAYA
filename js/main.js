/**
 * E-BIO PENS — Main Application Logic & Interactivity
 * Mengelola navigasi responsif, kontrol modal, interaksi frame, dan lifecycle halaman
 */

// Mobile Navigation Logic
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

// Modal Dokumen & Sertifikat Resmi HKI
function openDocumentModal() {
  const modal = document.getElementById('document-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeDocumentModal() {
  const modal = document.getElementById('document-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Modal Video Player YouTube
function openVideoPlayerModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-youtube-iframe');
  if (iframe && iframe.getAttribute('data-src')) {
    iframe.src = iframe.getAttribute('data-src');
  }
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeVideoPlayerModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-youtube-iframe');
  if (iframe) {
    iframe.src = '';
  }
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Muat Ulang Live Frame Dashboard Admin Gapoktan
function reloadGapoktanFrame() {
  const frame = document.getElementById('gapoktan-live-frame');
  if (frame) {
    frame.src = "https://gapoktansumbermakmursajen.web.id/admin";
  }
}

// Listener Keyboard Global (Tutup modal dengan tombol Escape)
function initKeyboardListeners() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDocumentModal();
      closeVideoPlayerModal();
    }
  });
}

// Inisialisasi Aplikasi Saat Halaman Siap
function initApp() {
  // 1. Render seluruh komponen data ke dalam container
  if (typeof EBIORenderer !== 'undefined' && EBIORenderer.initAll) {
    EBIORenderer.initAll();
  }

  // 2. Inisialisasi event listener interaktif
  initMobileNavigation();
  initKeyboardListeners();
}

// Jalankan ketika DOM sudah siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
