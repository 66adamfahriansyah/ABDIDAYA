/**
 * E-BIO PENS — Renderer: Legalitas HKI & Unit PHT
 * Menggenerasi 3 kartu HKI dengan space gambar sertifikat, serta seksi terbentuknya Unit PHT
 */

// 1. Render 3 Kartu HKI (Desain, Alat, Web)
function renderLegalItems() {
  const container = document.getElementById('legal-items-container');
  if (!container || !EBIO_DATA.legalItems) return;

  container.innerHTML = EBIO_DATA.legalItems.map(item => `
    <div class="bg-white rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        <!-- Space Gambar HKI (Dedicated Image Container) -->
        <div class="relative aspect-[16/11] sm:aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100 cursor-pointer"
          onclick="openImagePreview('${item.image}', '${item.title}')" title="Klik untuk memperbesar sertifikat">
          <img src="${item.image}" alt="${item.imgAlt || item.title}"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onerror="this.onerror=null; this.src='assets/lighttrap.jpg';">
          
          <!-- Floating Category Badge -->
          <div class="absolute top-3 left-3 z-10">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-sm backdrop-blur-md ${item.badgeClass} bg-white/95">
              ${item.badge}
            </span>
          </div>

          <!-- Zoom Indicator Button -->
          <div class="absolute top-3 right-3 z-10 w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md text-slate-700 flex items-center justify-center shadow-sm opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
            <svg class="w-4 h-4 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>

          <!-- Bottom Gradient Overlay for Visual Polish -->
          <div class="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
          <div class="absolute bottom-2.5 left-3.5 z-10 text-[10px] font-mono text-white drop-shadow font-semibold">
            ${item.category || item.badge}
          </div>
        </div>

        <!-- Body Info -->
        <div class="p-6">
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <span class="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-100/80">
              ${item.number}
            </span>
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
          
          <h3 class="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
            ${item.title}
          </h3>
          
          <p class="mt-2.5 text-xs text-slate-500 leading-relaxed">
            ${item.desc}
          </p>
        </div>
      </div>
      
      <!-- Card Footer -->
      <div class="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span class="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
          <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>${item.status}</span>
        </span>
        <div class="flex items-center gap-2">
          <button onclick="openImagePreview('${item.image}', '${item.title}')" class="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-colors">
            Lihat
          </button>
          <button onclick="openDocumentModal()" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200/60">
            <span>Unduh PDF</span>
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 2. Render Terbentuknya Unit Pengendalian Hama Terpadu (PHT)
function renderPhtUnit() {
  const container = document.getElementById('pht-unit-container');
  if (!container || !EBIO_DATA.phtUnit) return;

  const pht = EBIO_DATA.phtUnit;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      
      <!-- Kolom Kiri (7 Cols): Informasi Kelembagaan & 3 Fitur PHT -->
      <div class="lg:col-span-7 flex flex-col justify-center">
        <div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            ${pht.sectionTitle || 'Kemandirian Petani melalui Unit PHT Gapoktan Sumber Makmur'}
          </h3>
          
          <p class="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            ${pht.desc}
          </p>

          <!-- Tiga Kartu Layanan Pokok Unit PHT -->
          <div class="mt-6 space-y-3.5">
            ${pht.roles.map((role) => `
              <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-start gap-4 hover:border-emerald-200 transition-colors">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    ${role.icon}
                  </svg>
                </div>
                <div>
                  <h4 class="text-base font-bold text-slate-900 leading-snug">${role.title}</h4>
                  <p class="text-sm text-slate-500 mt-1 leading-relaxed">${role.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Kolom Kanan (5 Cols): Showcase Dokumen Surat Pernyataan (Animasi seperti gambar halaman pertama, tidak memperbesar) -->
      <div class="lg:col-span-5 w-full flex justify-center lg:justify-end">
        <div id="pht-tilt-card"
          class="w-full max-w-md lg:max-w-none bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border-2 border-emerald-500/20 shadow-xl shadow-slate-900/5 relative group transition-transform duration-200 ease-out animate-float">
          
          <!-- Pulse Ring Accent (Persis animasi di halaman pertama) -->
          <div
            class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-emerald-500/20 blur-md -z-10 animate-pulse-ring">
          </div>

          <!-- Header Dokumen di Dalam Card -->
          <div class="flex items-center gap-2.5 pb-3.5 border-b border-slate-100 dark:border-slate-800">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">
              ${pht.documentTitle || "Surat Pernyataan Unit Pengendalian Hama Terpadu"}
            </span>
          </div>

          <!-- Frame Dokumen Surat Pernyataan pht.png (Murni Gambar, Tidak Memperbesar) -->
          <div class="relative w-full rounded-2xl overflow-hidden bg-white border border-slate-200/80 dark:border-slate-800 shadow-xs card-shimmer mt-3.5">
            <img src="${pht.letterImage}" alt="${pht.letterAlt}"
              class="w-full h-auto object-contain block"
              onerror="this.onerror=null; this.src='assets/surat-pernyataan-pht.svg';">
          </div>

        </div>
      </div>

    </div>
  `;

  // Inisialisasi efek interactive perspective tilt pada card PHT
  if (typeof initHeroTilt === 'function') {
    initHeroTilt();
  }
}
