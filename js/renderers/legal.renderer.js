/**
 * E-BIO PENS — Renderer: Legalitas HKI & Unit PHT
 * Menggenerasi 3 kartu HKI dengan space gambar sertifikat, serta seksi terbentuknya Unit PHT
 */

// 1. Render 3 Kartu HKI (Alat, Desain, Web — Model Layout Foto Surat Pernyataan Unit PHT)
function renderLegalItems() {
  const container = document.getElementById('legal-items-container');
  if (!container || !EBIO_DATA.legalItems) return;

  container.innerHTML = EBIO_DATA.legalItems.map((item, idx) => `
    <div class="w-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border-2 border-emerald-500/20 shadow-xl shadow-slate-900/5 relative group transition-all duration-300 hover:shadow-2xl hover:border-emerald-500/40 hover:-translate-y-1.5 flex flex-col">
      
      <!-- Pulse Ring Accent (Sesuai styling showcase di Unit PHT) -->
      <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-emerald-500/15 blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity"></div>

      <!-- Top Section: Header & Certificate Image (Flex-None agar tinggi frame 100% seragam di ketiga kartu) -->
      <div class="flex-none">
        <!-- Header Dokumen di Dalam Card (Persis Model Surat Pernyataan Unit PHT) -->
        <div class="flex items-center justify-between gap-2 h-7 pb-3.5 border-b border-slate-100 dark:border-slate-800 box-content">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
            <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug truncate">
              ${item.documentTitle || 'Surat Pencatatan Ciptaan'}
            </span>
          </div>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs shrink-0">
            ${item.tag}
          </span>
        </div>

        <!-- Frame Dokumen Sertifikat (Aspect ratio 496/701 presisi A4 agar tinggi gambar identik dan posisi judul di bawahnya 100% sejajar) -->
        <div class="relative w-full aspect-[496/701] rounded-2xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-xs card-shimmer mt-3.5 flex items-center justify-center">
          <img src="${item.image}" alt="${item.imgAlt || item.title}"
            onclick="openImagePreview('${item.image}', '${item.title}')"
            class="w-full h-full object-contain block hover:scale-102 transition-transform duration-300 cursor-pointer"
            title="Klik untuk memperbesar dokumen sertifikat"
            onerror="this.onerror=null; this.src='assets/placeholder.png';">
        </div>
      </div>

      <!-- Info Section (Icon + Title & Description) — Posisi Y & Judul 100% Sejajar di Semua Kartu -->
      <div class="flex items-start gap-3.5 sm:gap-4 mt-5 sm:mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex-1">
        <!-- Icon Box -->
        <div class="w-11 h-11 rounded-2xl bg-[#dcfce7] dark:bg-emerald-950/60 flex items-center justify-center text-[#059669] dark:text-emerald-400 shrink-0 mt-0.5 border border-emerald-100 dark:border-emerald-900/50 shadow-2xs">
          ${item.iconSvg}
        </div>
        <!-- Title & Description -->
        <div class="flex-1 min-w-0">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
            ${item.title}
          </h3>
          <p class="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            ${item.desc}
          </p>
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
