/**
 * E-BIO PENS — Footer Component
 * Merender footer resmi PPK Ormawa E-BIO PENS Desa Sajen 2026
 */

export function renderFooterComponent(containerId = 'footer') {
  if (typeof renderFooter === 'function') {
    renderFooter();
  }
}

if (typeof window !== 'undefined') {
  window.renderFooterComponent = renderFooterComponent;
}
