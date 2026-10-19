/**
 * E-BIO PENS — Renderer: Header Component
 * Mengorkestrasi rendering komponen Header & Navigasi
 */

function renderHeader() {
  const container = document.getElementById('header');
  if (!container) return;

  // Pertahankan struktur jika sudah ada di DOM untuk efisiensi event listener
  if (container.children && container.children.length > 0) return;

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Logo & Brand Header (Menggunakan assets/header.png) -->
        <a href="#beranda" class="flex items-center group py-1.5" title="Beranda PPK Ormawa E-BIO PENS">
          <img src="assets/header.png" alt="Logo Mitra & Institusi PPK Ormawa E-BIO PENS"
            class="h-11 sm:h-12 md:h-14 max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] w-auto object-contain object-left transition-transform group-hover:scale-[1.01]">
        </a>

        <!-- Desktop Navigation (Bold & Clean) -->
        <nav
          class="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 bg-slate-100/60 rounded-full border border-slate-200/50 backdrop-blur-sm">
          <a href="#beranda"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-black text-emerald-900 bg-white shadow-xs border border-emerald-100/80 transition-all">Beranda</a>
          <a href="#video-dokumentasi"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-800 hover:text-emerald-900 hover:bg-white/80 transition-all">Video Profil</a>
          <a href="#spesifikasi-sistem"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-800 hover:text-emerald-900 hover:bg-white/80 transition-all">Spesifikasi IoT</a>
          <a href="#peta-sebaran"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-800 hover:text-emerald-900 hover:bg-white/80 transition-all">Peta Sebaran</a>
          <a href="#liputan-pers"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-800 hover:text-emerald-900 hover:bg-white/80 transition-all">Liputan Media</a>
          <a href="#dashboard-monitoring"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-800 hover:text-emerald-900 hover:bg-white/80 transition-all">Dashboard Monitoring</a>
          <a href="#legalitas-hki"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-800 hover:text-emerald-900 hover:bg-white/80 transition-all">Paten &amp; HKI</a>
          <a href="#unit-pht"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-800 hover:text-emerald-900 hover:bg-white/80 transition-all">Unit PHT</a>
          <a href="#tim-inovasi"
            class="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-800 hover:text-emerald-900 hover:bg-white/80 transition-all">Our Team</a>
        </nav>

        <!-- Desktop Actions: Theme Toggle (Segmented Dual Switch) -->
        <div class="hidden lg:flex items-center">
          <div
            class="p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center gap-1 shadow-inner">
            <button id="theme-btn-light" onclick="applyTheme('light')"
              class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 bg-white text-slate-900 shadow-xs cursor-pointer"
              title="Aktifkan Mode Terang">
              <svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd" />
              </svg>
              <span>Light</span>
            </button>
            <button id="theme-btn-dark" onclick="applyTheme('dark')"
              class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 bg-transparent text-slate-500 hover:text-slate-800 cursor-pointer"
              title="Aktifkan Mode Gelap">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <span>Dark</span>
            </button>
          </div>
        </div>

        <!-- Mobile Right Controls (Theme Toggle & Menu Button) -->
        <div class="lg:hidden flex items-center gap-2">
          <div
            class="p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center">
            <button id="theme-btn-light-mobile" onclick="applyTheme('light')"
              class="p-1.5 rounded-full transition-all bg-white text-amber-500 shadow-xs" title="Mode Terang">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <button id="theme-btn-dark-mobile" onclick="applyTheme('dark')"
              class="p-1.5 rounded-full transition-all bg-transparent text-slate-500" title="Mode Gelap">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
          </div>

          <button id="mobile-menu-btn"
            class="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-700"
            aria-label="Buka Menu Navigasi">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div id="mobile-menu"
      class="hidden lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-1.5 shadow-lg">
      <a href="#beranda"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/50">Beranda</a>
      <a href="#video-dokumentasi"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors">Video Profil</a>
      <a href="#spesifikasi-sistem"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors">Spesifikasi IoT</a>
      <a href="#peta-sebaran"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors">Peta Sebaran</a>
      <a href="#liputan-pers"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors">Liputan Media</a>
      <a href="#dashboard-monitoring"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors">Dashboard Monitoring</a>
      <a href="#legalitas-hki"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors">Paten &amp; HKI</a>
      <a href="#unit-pht"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors">Unit PHT</a>
      <a href="#tim-inovasi"
        class="block px-3.5 py-2.5 rounded-xl text-sm font-extrabold text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors">Our Team</a>
    </div>
  `;
}
