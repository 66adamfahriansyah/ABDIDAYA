/**
 * E-BIO PENS — Header Component
 * Mengelola komponen Header dan Navigasi utama
 */

export function renderHeaderComponent(containerId = 'header') {
  if (typeof renderHeader === 'function') {
    renderHeader();
  }
}

if (typeof window !== 'undefined') {
  window.renderHeaderComponent = renderHeaderComponent;
}
