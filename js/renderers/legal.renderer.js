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
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <!-- Kolom Kiri (7 Cols): Informasi Kelembagaan, Peran & Penandatangan -->
      <div class="lg:col-span-7 flex flex-col justify-between">
        <div>
          <!-- Pill Legalitas Surat Pernyataan -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-mono font-bold mb-4 shadow-xs">
            <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>${pht.letterNumber}</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Kemandirian Petani Lewat Unit PHT Gapoktan Sumber Makmur
          </h3>
          
          <p class="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            ${pht.desc}
          </p>

          <!-- Tiga Peran Pokok Unit PHT -->
          <div class="mt-6 space-y-3.5">
            ${pht.roles.map((role) => `
              <div class="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5 hover:border-emerald-300 transition-colors">
                <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    ${role.icon}
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 leading-snug">${role.title}</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">${role.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Tiga Pihak Penandatangan Surat Pernyataan -->
          <div class="mt-6 pt-5 border-t border-slate-200/80">
            <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
              Penandatangan Dokumen Surat Pernyataan Bersama:
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${pht.signatories.map(sig => `
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div class="text-xs font-bold text-slate-900">${sig.name}</div>
                  <div class="text-[11px] text-emerald-700 font-medium mt-0.5">${sig.role}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <button onclick="openImagePreview('${pht.letterImage}', '${pht.title}')"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#064e3b] hover:bg-[#043e30] text-white shadow-sm hover:shadow-md transition-all group">
            <svg class="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Perbesar Surat Pernyataan</span>
          </button>

          <button onclick="openDocumentModal()"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 hover:text-emerald-900 border border-slate-200 shadow-xs hover:shadow transition-all">
            <svg class="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Unduh Berkas Surat (PDF)</span>
          </button>
        </div>
      </div>

      <!-- Kolom Kanan (5 Cols): Dedicated Space Menampilkan Surat Pernyataan -->
      <div class="lg:col-span-5 w-full flex justify-center">
        <div class="w-full max-w-md bg-white p-4 sm:p-5 rounded-3xl border-2 border-emerald-500/25 shadow-xl shadow-slate-900/5 group">
          
          <!-- Frame Header Status -->
          <div class="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-xs font-bold text-slate-900 uppercase tracking-wide">Surat Pernyataan Sah</span>
            </div>
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-200/60">
              PHT DESA SAJEN
            </span>
          </div>

          <!-- Space Gambar Dokumen Surat Pernyataan (Clickable to Lightbox Preview) -->
          <div class="relative w-full aspect-[1/1.37] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-inner cursor-pointer"
            onclick="openImagePreview('${pht.letterImage}', '${pht.title}')" title="Klik untuk membaca surat pernyataan penuh">
            <img src="${pht.letterImage}" alt="${pht.letterAlt}"
              class="w-full h-full object-contain p-2 sm:p-2.5 group-hover:scale-105 transition-transform duration-500"
              onerror="this.onerror=null; this.src='assets/banner fix ok (2).png';">
            
            <!-- Hover Overlay with Zoom Icon -->
            <div class="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <div class="px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-2 scale-95 group-hover:scale-100 transition-transform">
                <svg class="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span>Klik untuk Memperbesar</span>
              </div>
            </div>
          </div>

          <!-- Frame Footer Caption & Metadata -->
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div class="flex items-center gap-1.5 truncate">
              <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span class="font-medium text-[11px] truncate">Dokumen Arsip Resmi PPK Ormawa</span>
            </div>
            <button onclick="openImagePreview('${pht.letterImage}', '${pht.title}')" class="text-emerald-700 hover:text-emerald-900 font-bold text-xs shrink-0 transition-colors">
              Buka Penuh →
            </button>
          </div>

        </div>
      </div>

    </div>
  `;
}
