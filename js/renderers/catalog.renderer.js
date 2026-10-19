/**
 * E-BIO PENS — Renderer: Katalog Dokumen Modal
 * Menggenerasi daftar dokumen resmi yang siap diunduh di dalam modal katalog
 */

function renderCatalogDocuments() {
  const container = document.getElementById('catalog-documents-container');
  if (!container || !EBIO_DATA.catalogDocuments) return;

  container.innerHTML = EBIO_DATA.catalogDocuments.map(doc => `
    <div class="p-4 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-between hover:bg-emerald-50/40 transition-colors">
      <div class="flex items-center gap-3.5">
        <div class="w-10 h-10 rounded-xl ${doc.badgeColor} flex items-center justify-center shrink-0">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <div>
          <h4 class="text-sm font-bold text-slate-900">${doc.title}</h4>
          <p class="text-xs text-slate-500 font-mono">${doc.meta}</p>
        </div>
      </div>
      <a href="#" onclick="alert('${doc.alertMsg}'); return false;" class="px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition-colors">
        Unduh PDF
      </a>
    </div>
  `).join('');
}
