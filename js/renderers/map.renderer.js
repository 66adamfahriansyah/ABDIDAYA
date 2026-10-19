/**
 * E-BIO PENS — Renderer: Peta Interaktif Sebaran Titik Alat di Desa Sajen
 * Desain UI Disesuaikan Persis Sesuai Mockup Referensi Pengguna
 * - 4 Kartu KPI Atas (Jarak LoRa dihilangkan, Lahan 2 Ha, Gateway tetap)
 * - Bar Header Peta Emerald (PETA LOKASI LIGHT TRAP)
 * - Bar Legend Bawah (Node 1-5, Gateway Sentral, Jalur Pemasangan, Batas Lahan)
 * - Daftar Unit Light Trap dengan Badge Online, NPK 45-30-25, dan Lampu UV Aktif
 */

function renderDeploymentMapSection() {
  const container = document.getElementById('deployment-map-container');
  if (!container || !EBIO_DATA.mapDeployment) return;

  const data = EBIO_DATA.mapDeployment;

  // Warna lingkaran nomor kartu sesuai mockup
  const nodeCircleColors = [
    'bg-emerald-600', // Node 1: Hijau
    'bg-emerald-600', // Node 2: Hijau
    'bg-blue-600',    // Node 3: Biru
    'bg-orange-500',  // Node 4: Orange
    'bg-emerald-600'  // Node 5: Hijau
  ];

  container.innerHTML = `
    <!-- 1. Top Metrics KPI Ribbon (4 Kartu Ringkasan - Jarak LoRa Dihilangkan, Lahan 2 Ha) -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      
      <!-- Card 1: Unit Terpasang -->
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex items-center gap-4 hover-lift">
        <div class="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-950/20">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 block">Unit Terpasang</span>
          <div class="text-2xl font-black text-slate-900 dark:text-white font-sans tracking-tight">5 Unit</div>
          <p class="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">100% Aktif di Sawah</p>
        </div>
      </div>

      <!-- Card 2: Gateway Sentral -->
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex items-center gap-4 hover-lift">
        <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-950/20">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 block">Gateway</span>
          <div class="text-2xl font-black text-slate-900 dark:text-white font-sans tracking-tight">1 Stasiun</div>
          <p class="text-[11px] text-blue-700 dark:text-blue-400 font-semibold mt-0.5">${data.gateway.location.split('(')[0]}</p>
        </div>
      </div>

      <!-- Card 3: Lahan Terproteksi (2 Ha) -->
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex items-center gap-4 hover-lift">
        <div class="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-teal-950/20">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 block">Lahan Terproteksi</span>
          <div class="text-2xl font-black text-slate-900 dark:text-white font-sans tracking-tight">2 Ha</div>
          <p class="text-[11px] text-teal-700 dark:text-teal-400 font-semibold mt-0.5">Hamparan Bawang Merah</p>
        </div>
      </div>

      <!-- Card 4: Sensor NPK Tanah (45-30-25) -->
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex items-center gap-4 hover-lift">
        <div class="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-950/20">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 block">Sensor NPK Tanah</span>
          <div class="text-2xl font-black text-emerald-700 dark:text-emerald-400 font-sans tracking-tight">45-30-25</div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">mg/kg • Status: Subur</p>
        </div>
      </div>

    </div>

    <!-- 2. Main Layout: Map Canvas (7 Cols) & Side Panel Inspector (5 Cols) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

      <!-- Kolom Kiri (7 Cols): Wadah Peta Interaktif Leaflet Sesuai Mockup -->
      <div class="lg:col-span-7 flex flex-col gap-3">
        <div class="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 sm:p-3 shadow-xl overflow-hidden relative">
          
          <!-- Bar Kontrol Atas Peta (Warna Emerald Gelap Persis Mockup) -->
          <div class="px-4 py-3 bg-[#064e3b] rounded-2xl text-white flex flex-wrap items-center justify-between gap-3 text-xs mb-2.5 shadow-sm">
            <div class="flex items-center gap-2.5">
              <div class="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center shrink-0">
                <svg class="w-3.5 h-3.5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="font-extrabold text-xs tracking-wider text-white uppercase">PETA LOKASI LIGHT TRAP</span>
              <span class="text-emerald-200/90 text-xs font-normal hidden sm:inline">Desa Sajen, Mojokerto</span>
            </div>

            <div class="flex items-center gap-2">
              <!-- Segmented Switch: Peta | Satelit -->
              <div class="p-0.5 rounded-xl bg-black/30 backdrop-blur-sm border border-emerald-500/30 flex items-center gap-1">
                <button onclick="toggleMapTileLayer('streets')" id="map-btn-layer-streets"
                  class="px-3 py-1 rounded-lg text-xs font-bold transition-all text-emerald-100 hover:text-white">
                  Peta
                </button>
                <button onclick="toggleMapTileLayer('satellite')" id="map-btn-layer-sat"
                  class="px-3 py-1 rounded-lg text-xs font-bold transition-all bg-emerald-500 text-white shadow-xs">
                  Satelit
                </button>
              </div>

              <!-- Reset Button -->
              <button onclick="resetMapSajenView()"
                class="p-1.5 rounded-xl bg-black/30 hover:bg-black/40 text-emerald-100 hover:text-white transition-colors border border-emerald-500/30"
                title="Reset Posisi Peta">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Canvas Peta Leaflet (Full Height Fixed) -->
          <div id="sajen-deployment-map" class="w-full rounded-2xl h-[480px] sm:h-[500px] lg:h-[520px] bg-slate-900 z-10" style="min-height: 480px; height: 500px; width: 100%; position: relative;">
            <!-- Map renders here via js/modules/map.js -->
          </div>

          <!-- Legend Keterangan Simbol (Persis Mockup Gambar) -->
          <div class="mt-3.5 px-4 py-3 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
            <div class="flex items-center gap-5 flex-wrap">
              <div class="flex items-center gap-2">
                <span class="w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white shadow-xs"></span>
                <span class="text-xs font-medium text-slate-700 dark:text-slate-200">Node 1–5 (Light Trap)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-xs"></span>
                <span class="text-xs font-medium text-slate-700 dark:text-slate-200">Gateway Sentral LoRa</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-6 h-1 bg-orange-500 rounded-full"></span>
                <span class="text-xs font-medium text-slate-700 dark:text-slate-200">Jalur Pemasangan</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-5 h-3 rounded-md border-2 border-dashed border-emerald-500 bg-emerald-500/10"></span>
                <span class="text-xs font-medium text-slate-700 dark:text-slate-200">Batas Area Lahan</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Kolom Kanan (5 Cols): Keterangan Gateway Sentral & Daftar Unit Light Trap -->
      <div class="lg:col-span-5 flex flex-col gap-3.5">
        
        <!-- Header Side List -->
        <div class="flex items-center justify-between px-1">
          <div>
            <h4 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">Daftar Titik & Unit</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">Klik unit untuk memusatkan peta</p>
          </div>
          <span class="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold border border-emerald-200/70 dark:border-emerald-500/30">
            5 Node + 1 Gateway
          </span>
        </div>

        <!-- Scrollable Cards (Gateway Sentral + 5 Unit Light Trap) -->
        <div class="space-y-3 max-h-[560px] overflow-y-auto pr-1">

          <!-- Kartu Keterangan Gateway Sentral (Dipertahankan di Sisi Kanan) -->
          <div id="card-gateway-central" onclick="focusMapLocation(${data.gateway.lat}, ${data.gateway.lng}, 20, 'gateway-central')"
            class="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-cyan-50/60 dark:from-blue-950/40 dark:to-cyan-950/30 border border-blue-200/90 dark:border-blue-800/70 shadow-xs hover:border-blue-500 hover:shadow-md cursor-pointer transition-all duration-200 group relative">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-extrabold shrink-0 shadow-xs">
                  GW
                </span>
                <div>
                  <h5 class="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    ${data.gateway.name}
                  </h5>
                  <p class="text-[11px] text-blue-700 dark:text-blue-300 font-semibold mt-0.5">
                    ${data.gateway.location}
                  </p>
                </div>
              </div>

              <!-- Status Sentral Badge -->
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 text-xs font-bold border border-blue-200/70 dark:border-blue-700/50 shrink-0">
                  <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>Sentral</span>
                </span>
                <svg class="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <!-- Gateway Metadata Sub-row -->
            <div class="flex items-center justify-between pt-2.5 border-t border-blue-100 dark:border-blue-900/60 text-xs text-slate-600 dark:text-slate-400">
              <div class="flex items-center gap-1.5 font-mono text-[11px]">
                <svg class="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>${data.gateway.frequency}</span>
              </div>
              <span class="font-bold text-blue-800 dark:text-blue-300 text-[11px]">${data.gateway.connectedUnits}</span>
            </div>
          </div>

          ${data.units.map((unit, idx) => `
            <div id="card-${unit.id}" onclick="focusMapLocation(${unit.lat}, ${unit.lng}, 20, '${unit.id}')"
              class="p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all duration-200 group relative">
              
              <!-- Unit Header: Circle Number, Title, Subtitle & Online Badge -->
              <div class="flex items-center justify-between mb-2.5">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full ${nodeCircleColors[idx % nodeCircleColors.length]} text-white flex items-center justify-center text-xs font-mono font-extrabold shrink-0 shadow-xs">
                    ${unit.number}
                  </span>
                  <div>
                    <h5 class="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                      ${unit.name}
                    </h5>
                  </div>
                </div>

                <!-- Online Status Badge & Chevron -->
                <div class="flex items-center gap-2">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200/60 dark:border-emerald-500/30 shrink-0">
                    <svg class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zm-2.829 2.828a3 3 0 00-4.242 0 1 1 0 01-1.415-1.414 5 5 0 017.072 0 1 1 0 01-1.415 1.414zM10 16a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                    <span>Online</span>
                  </span>
                  <svg class="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <!-- Quick Telemetry Chips (NPK & Lampu UV) -->
              <div class="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
                <div class="flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                  </svg>
                  <span>Sensor NPK: <strong class="text-slate-800 dark:text-slate-200">45-30-25</strong></span>
                </div>
                <div class="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                  <span class="text-slate-400 font-normal">Lampu UV:</span>
                  <span class="font-bold">Aktif</span>
                </div>
              </div>

            </div>
          `).join('')}
        </div>

      </div>

    </div>
  `;
}
