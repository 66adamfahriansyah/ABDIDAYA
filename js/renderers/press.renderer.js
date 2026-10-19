/**
 * E-BIO PENS — Renderer: Liputan Pers
 * Menggenerasi kartu berita publikasi media nasional, TV regional, dan kemendikbud
 */

function renderPressArticles() {
  const container = document.getElementById('press-articles-container');
  if (!container || !EBIO_DATA.pressArticles) return;

  container.innerHTML = EBIO_DATA.pressArticles.map((article, idx) => `
    <article class="bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden group card-shimmer reveal" style="transition-delay: ${idx * 130}ms;">
      <!-- Thumbnail Container -->
      <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="block relative aspect-video w-full overflow-hidden bg-slate-900">
        <img src="${article.image}" alt="${article.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
          <span class="inline-flex items-center gap-1">
            <svg class="w-3.5 h-3.5 ${article.sourceIconColor}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            ${article.sourceType}
          </span>
          <span>${article.sourceDate}</span>
        </div>
      </a>

      <!-- Body Content -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-2">${article.category}</div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
            ${article.title}
          </h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
            ${article.desc}
          </p>
        </div>

        <!-- Footer Action Link -->
        <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs text-slate-400">${article.footerSource}</span>
          <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
            <span>${article.actionText}</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}
