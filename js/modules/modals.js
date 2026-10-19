/**
 * E-BIO PENS — Modul: Kontrol Modal & Lightbox
 * Mengelola pop-up dokumen resmi, modal pemutar YouTube, dan pratinjau sertifikat gambar
 */

// 1. Modal Dokumen & Sertifikat Resmi HKI
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

// 2. Modal Video Player YouTube
function openVideoPlayerModal(videoUrl, videoTitle) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-youtube-iframe');
  const titleEl = document.getElementById('modal-youtube-title');

  if (titleEl && videoTitle) {
    titleEl.textContent = videoTitle;
  }

  if (iframe) {
    let src = videoUrl || iframe.getAttribute('data-src') || 'https://www.youtube.com/embed/P-T45rEoQqY?autoplay=1&rel=0';
    if (!src.includes('autoplay=1')) {
      src += (src.includes('?') ? '&' : '?') + 'autoplay=1&rel=0';
    }
    iframe.src = src;
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

// 3. Modal Image Preview (Lightbox Sertifikat & Surat Pernyataan)
function openImagePreview(imageSrc, title) {
  const modal = document.getElementById('image-preview-modal');
  const imgElement = document.getElementById('image-preview-element');
  const titleElement = document.getElementById('image-preview-title');

  if (imgElement) {
    imgElement.src = imageSrc;
    imgElement.alt = title || 'Pratinjau Dokumen';
  }
  if (titleElement && title) {
    titleElement.textContent = title;
  }
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeImagePreview() {
  const modal = document.getElementById('image-preview-modal');
  const imgElement = document.getElementById('image-preview-element');
  if (imgElement) {
    imgElement.src = '';
  }
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// 4. Reload Iframe Live Dashboard Gapoktan
function reloadGapoktanFrame() {
  const frame = document.getElementById('gapoktan-live-frame');
  if (frame) {
    frame.src = frame.src;
  }
}

// 5. Inisialisasi Event Listener Modal Global (Keyboard Escape & Klik Backdrop)
function initModalListeners() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDocumentModal();
      closeVideoPlayerModal();
      closeImagePreview();
    }
  });

  const modals = [
    { id: 'document-modal', closeFn: closeDocumentModal },
    { id: 'video-modal', closeFn: closeVideoPlayerModal },
    { id: 'image-preview-modal', closeFn: closeImagePreview }
  ];

  modals.forEach(({ id, closeFn }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          closeFn();
        }
      });
    }
  });
}
