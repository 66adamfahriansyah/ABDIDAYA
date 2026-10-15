/**
 * E-BIO PENS — Component Renderer
 * Menggenerasi elemen antarmuka secara modular dan menyisipkannya ke DOM
 */

const EBIORenderer = {
  // 1. Render Kartu Statistik Hero Section
  renderHeroStats: function() {
    const container = document.getElementById('hero-stats-container');
    if (!container || !EBIO_DATA.heroStats) return;

    container.innerHTML = EBIO_DATA.heroStats.map(stat => `
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
        <div class="flex items-center justify-between">
          <span class="text-3xl sm:text-4xl font-extrabold ${stat.highlight ? 'text-emerald-600' : 'text-slate-900'} tracking-tight">
            ${stat.value}
          </span>
          <span class="p-2 rounded-xl bg-emerald-50 text-emerald-600">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              ${stat.iconSvg}
            </svg>
          </span>
        </div>
        <p class="mt-3 text-xs sm:text-sm font-semibold text-slate-700">${stat.title}</p>
        <p class="mt-1 text-xs text-slate-400">${stat.desc}</p>
      </div>
    `).join('');
  },

  // 2. Render Fitur Hardware Unit
  renderHardwareSpecs: function() {
    const container = document.getElementById('hardware-features-container');
    if (container && EBIO_DATA.hardwareFeatures) {
      container.innerHTML = EBIO_DATA.hardwareFeatures.map(item => `
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              ${item.iconSvg}
            </svg>
          </div>
          <div>
            <h4 class="text-sm font-bold text-slate-900">${item.title}</h4>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">${item.desc}</p>
          </div>
        </div>
      `).join('');
    }

    const chipsContainer = document.getElementById('hardware-chips-container');
    if (chipsContainer && EBIO_DATA.hardwareChips) {
      chipsContainer.innerHTML = EBIO_DATA.hardwareChips.map(chip => `
        <span class="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 text-slate-600">${chip}</span>
      `).join('');
    }
  },

  // 3. Render Arsitektur LoRaWAN
  renderLoraSpecs: function() {
    const container = document.getElementById('lora-specs-container');
    if (!container || !EBIO_DATA.loraSpecs) return;

    container.innerHTML = EBIO_DATA.loraSpecs.map(item => `
      <div class="p-4 rounded-2xl ${item.bgClass}">
        <div class="w-8 h-8 rounded-lg ${item.iconBg} text-white flex items-center justify-center mb-3">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            ${item.iconSvg}
          </svg>
        </div>
        <h4 class="text-xs font-bold text-slate-900">${item.title}</h4>
        <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">${item.desc}</p>
      </div>
    `).join('');
  },

  // 4. Render Publikasi Pers & Media Massa
  renderPressArticles: function() {
    const container = document.getElementById('press-articles-container');
    if (!container || !EBIO_DATA.pressArticles) return;

    container.innerHTML = EBIO_DATA.pressArticles.map(article => `
      <article class="bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group">
        <!-- Thumbnail Container -->
        <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="block relative aspect-video w-full overflow-hidden bg-slate-900">
          <img src="${article.image}" alt="${article.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <!-- Channel Badge -->
          <div class="absolute top-4 left-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${article.badgeColor} text-white text-xs font-extrabold tracking-wider shadow">
              ${article.badge}
            </span>
          </div>
          
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
  },

  // 5. Render Paten HKI & Rekomendasi Dinas
  renderLegalItems: function() {
    const container = document.getElementById('legal-items-container');
    if (!container || !EBIO_DATA.legalItems) return;

    container.innerHTML = EBIO_DATA.legalItems.map(item => `
      <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="w-10 h-10 rounded-2xl ${item.iconBgClass} flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                ${item.iconSvg}
              </svg>
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.badgeClass}">
              ${item.badge}
            </span>
          </div>
          <h3 class="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            ${item.title}
          </h3>
          <p class="mt-1 font-mono text-xs font-semibold text-emerald-600">${item.number}</p>
          <p class="mt-3 text-xs text-slate-500 leading-relaxed">
            ${item.desc}
          </p>
        </div>
        
        <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[11px] font-semibold text-slate-400">${item.status}</span>
          <button onclick="openDocumentModal()" class="text-xs font-bold text-emerald-600 hover:text-emerald-800">Unduh PDF ↗</button>
        </div>
      </div>
    `).join('');
  },

  // 6. Render Postingan Instagram
  renderInstagramPosts: function() {
    const container = document.getElementById('instagram-posts-container');
    if (!container || !EBIO_DATA.instagramPosts) return;

    container.innerHTML = EBIO_DATA.instagramPosts.map(post => `
      <div class="aspect-square rounded-3xl bg-gradient-to-br ${post.gradient} p-6 flex flex-col justify-between text-white shadow-soft hover:shadow-card hover:scale-105 transition-all duration-300 relative overflow-hidden group cursor-pointer">
        <div class="flex items-center justify-between z-10">
          <span class="text-[10px] font-mono uppercase tracking-wider text-emerald-300">${post.tag}</span>
          <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
        </div>
        <div class="z-10">
          <span class="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-[10px] font-bold text-emerald-200 mb-2 border border-emerald-400/20">${post.postNum}</span>
          <h4 class="text-sm font-bold text-white leading-snug">${post.title}</h4>
          <p class="text-[11px] text-emerald-100/70 mt-1 line-clamp-2">${post.desc}</p>
        </div>
        <div class="z-10 flex items-center justify-between text-[11px] text-emerald-300 border-t border-emerald-700/50 pt-3">
          <span>❤️ ${post.likes}</span>
          <span>💬 ${post.comments}</span>
        </div>
      </div>
    `).join('');
  },

  // 7. Render Video YouTube
  renderYoutubeVideos: function() {
    const container = document.getElementById('youtube-videos-container');
    if (!container || !EBIO_DATA.youtubeVideos) return;

    container.innerHTML = EBIO_DATA.youtubeVideos.map(video => `
      <div onclick="openVideoPlayerModal()" class="bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer group">
        <div class="relative aspect-video w-full bg-slate-900 overflow-hidden">
          <img src="${video.thumbnail}" alt="${video.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div class="w-12 h-12 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-medium">${video.duration}</span>
        </div>
        <div class="p-5">
          <div class="text-[11px] font-semibold text-slate-400">${video.meta}</div>
          <h4 class="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mt-1 leading-snug">
            ${video.title}
          </h4>
        </div>
      </div>
    `).join('');
  },

  // 8. Render Divisi Tim Inovasi
  renderTeamDivisions: function() {
    const container = document.getElementById('team-divisions-container');
    if (!container || !EBIO_DATA.teamDivisions) return;

    container.innerHTML = EBIO_DATA.teamDivisions.map(div => `
      <div class="p-5 rounded-2xl bg-[#fafcfb] border border-slate-100 shadow-soft">
        <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold mb-3">${div.number}</div>
        <h4 class="text-sm font-bold text-slate-900">${div.title}</h4>
        <p class="text-xs text-slate-500 mt-1 leading-relaxed">
          ${div.desc}
        </p>
      </div>
    `).join('');
  },

  // 9. Render Katalog Dokumen Modal
  renderCatalogDocuments: function() {
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
  },

  // Eksekusi Semua Rendering
  initAll: function() {
    this.renderHeroStats();
    this.renderHardwareSpecs();
    this.renderLoraSpecs();
    this.renderPressArticles();
    this.renderLegalItems();
    this.renderInstagramPosts();
    this.renderYoutubeVideos();
    this.renderTeamDivisions();
    this.renderCatalogDocuments();
  }
};
