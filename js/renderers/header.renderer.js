/**
 * E-BIO PENS — Renderer: Header Component
 * Mengorkestrasi rendering komponen Header & Navigasi
 * Sesuai Desain: Attached Navbar Lebar (max-w-[1600px]), Inter 13-14px, Radius 20px, Dropdown Lainnya, Light/Dark Switch
 */

function renderHeader() {
  const container = document.getElementById('header');
  if (!container) return;

  // Pertahankan struktur jika sudah ada di DOM untuk efisiensi event listener
  if (container.children && container.children.length > 0) return;

  container.className = "sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-slate-800 shadow-xs shadow-slate-900/5 transition-all duration-300";
  container.innerHTML = `
    <div class="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
      <div class="h-[68px] sm:h-[76px] flex items-center justify-between gap-2 sm:gap-3 xl:gap-4">

        <!-- Logo Mitra & Institusi (Tidak Diganggu) -->
        <a href="#beranda" class="flex items-center group py-1 shrink-0" title="Beranda PPK Ormawa E-BIO PENS">
          <img src="assets/header.png" alt="Logo Mitra & Institusi PPK Ormawa E-BIO PENS"
            class="h-7 sm:h-[34px] md:h-9 max-h-[36px] w-auto max-w-[190px] xs:max-w-[210px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[360px] object-contain object-left transition-transform group-hover:scale-[1.01] shrink-0">
        </a>

        <!-- Desktop Navigation (Menu Utama: 13-14px Inter) -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2">
          <!-- 1. Beranda -->
          <a href="#beranda"
            class="nav-main-link px-3 xl:px-3.5 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#166534] bg-[#F0FDF4] dark:bg-emerald-950/60 dark:text-emerald-300 transition-all shrink-0">
            Beranda
          </a>

          <!-- 2. Video Profil -->
          <a href="#video-dokumentasi"
            class="nav-main-link px-2.5 xl:px-3 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shrink-0">
            Video Profil
          </a>

          <!-- 3. Spesifikasi IoT -->
          <a href="#spesifikasi-sistem"
            class="nav-main-link px-2.5 xl:px-3 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shrink-0">
            Spesifikasi IoT
          </a>

          <!-- 4. Peta Sebaran -->
          <a href="#peta-sebaran"
            class="nav-main-link px-2.5 xl:px-3 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shrink-0">
            Peta Sebaran
          </a>

          <!-- 5. Liputan Media -->
          <a href="#liputan-pers"
            class="nav-main-link px-2.5 xl:px-3 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shrink-0">
            Liputan Media
          </a>

          <!-- 6. Dashboard Monitoring -->
          <a href="#dashboard-monitoring"
            class="nav-main-link px-2.5 xl:px-3 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shrink-0">
            <span class="inline lg:hidden xl:inline">Dashboard Monitoring</span>
            <span class="hidden lg:inline xl:hidden">Monitoring</span>
          </a>

          <!-- 7. Paten & HKI (Tampil Langsung di Desktop >= 1280px) -->
          <a href="#legalitas-hki"
            class="nav-main-link hidden xl:inline-flex px-2.5 xl:px-3 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shrink-0">
            Paten &amp; HKI
          </a>

          <!-- 8. Unit PHT (Tampil Langsung di Desktop >= 1280px) -->
          <a href="#unit-pht"
            class="nav-main-link hidden xl:inline-flex px-2.5 xl:px-3 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shrink-0">
            Unit PHT
          </a>

          <!-- 9. Our Team (Tampil Langsung di Desktop >= 1280px) -->
          <a href="#tim-inovasi"
            class="nav-main-link hidden xl:inline-flex px-2.5 xl:px-3 py-1.5 rounded-full text-[13px] 2xl:text-[14px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shrink-0">
            Our Team
          </a>

          <!-- Dropdown Menu "Lainnya" (Aktif di Layar 1024px–1279px, Sembunyi di Desktop Lebar >= 1280px) -->
          <div id="nav-dropdown-wrapper" class="relative group xl:hidden">
            <button id="nav-dropdown-btn" type="button"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-semibold text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all cursor-pointer shrink-0"
              aria-expanded="false" aria-haspopup="true">
              <span>Lainnya</span>
              <svg id="nav-dropdown-chevron"
                class="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#166534] dark:group-hover:text-emerald-400 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu Box (Radius: 20px, Border: #E2E8F0, Regular 400 14px) -->
            <div id="nav-dropdown-menu"
              class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out transform -translate-y-1 absolute top-full right-0 mt-2 w-52 bg-white dark:bg-[#0f172a] rounded-[20px] border border-[#E2E8F0] dark:border-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-black/40 p-2 z-50">

              <!-- Item 1: Paten & HKI -->
              <a href="#legalitas-hki"
                class="dropdown-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[14px] font-normal text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-[#F0FDF4] dark:hover:bg-emerald-950/40 transition-colors group/item">
                <svg
                  class="w-4 h-4 text-[#64748B] group-hover/item:text-[#166534] dark:group-hover/item:text-emerald-400 shrink-0 transition-colors"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Paten &amp; HKI</span>
              </a>

              <!-- Item 2: Unit PHT -->
              <a href="#unit-pht"
                class="dropdown-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[14px] font-normal text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-[#F0FDF4] dark:hover:bg-emerald-950/40 transition-colors group/item">
                <svg
                  class="w-4 h-4 text-[#64748B] group-hover/item:text-[#166534] dark:group-hover/item:text-emerald-400 shrink-0 transition-colors"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M5 21c.5-4.5 2.5-8 7-10 4.5-2 8-1.5 9-1-.5 4.5-2.5 8-7 10-4.5 2-8 1.5-9 1z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 21l6.5-6.5" />
                </svg>
                <span>Unit PHT</span>
              </a>

              <!-- Item 3: Our Team -->
              <a href="#tim-inovasi"
                class="dropdown-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[14px] font-normal text-[#334155] dark:text-slate-200 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-[#F0FDF4] dark:hover:bg-emerald-950/40 transition-colors group/item">
                <svg
                  class="w-4 h-4 text-[#64748B] group-hover/item:text-[#166534] dark:group-hover/item:text-emerald-400 shrink-0 transition-colors"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Our Team</span>
              </a>

            </div>
          </div>
        </nav>

        <!-- Right Side: Separator + Theme Toggle (Desktop, Tablet, Mobile) + Hamburger -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">

          <!-- Divider Vertical (Desktop >= 1024px) -->
          <div class="hidden lg:block h-6 w-px bg-[#E2E8F0] dark:bg-slate-700"></div>

          <!-- Theme Toggle Segmented Capsule (Light / Dark) Sesuai Mockup -->
          <div
            class="theme-switch-container p-1 rounded-full bg-[#F1F5F9] dark:bg-slate-800/90 border border-[#E2E8F0] dark:border-slate-700 flex items-center gap-0.5 shadow-2xs">
            <!-- Light Button -->
            <button id="theme-btn-light" onclick="applyTheme('light')"
              class="theme-btn-light flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-200 bg-white text-[#334155] shadow-xs cursor-pointer shrink-0"
              title="Aktifkan Mode Terang">
              <svg class="w-3.5 h-3.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd" />
              </svg>
              <span class="hidden sm:inline">Light</span>
            </button>

            <!-- Dark Button -->
            <button id="theme-btn-dark" onclick="applyTheme('dark')"
              class="theme-btn-dark flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-200 bg-transparent text-[#64748B] hover:text-[#334155] dark:hover:text-slate-200 cursor-pointer shrink-0"
              title="Aktifkan Mode Gelap">
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <span class="hidden sm:inline">Dark</span>
            </button>
          </div>

          <!-- Hamburger Button (Tablet & Mobile: ☰) -->
          <button id="mobile-menu-btn"
            class="lg:hidden p-2 rounded-xl text-[#334155] dark:text-slate-300 hover:text-emerald-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Buka Menu Navigasi">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>

      </div>
    </div>

    <!-- Mobile Dropdown Menu (Langsung Nempel ke Bawah Header) -->
    <div id="mobile-menu"
      class="hidden lg:hidden border-t border-[#E2E8F0] dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl px-4 py-3 space-y-1 shadow-lg">
      <div class="w-full max-w-[1600px] mx-auto space-y-1">
        <a href="#beranda"
          class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#166534] bg-[#F0FDF4] dark:bg-emerald-950/60 dark:text-emerald-300">
          Beranda
        </a>
        <a href="#video-dokumentasi"
          class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#166534] transition-colors">
          Video Profil
        </a>
        <a href="#spesifikasi-sistem"
          class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#166534] transition-colors">
          Spesifikasi IoT
        </a>
        <a href="#peta-sebaran"
          class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#166534] transition-colors">
          Peta Sebaran
        </a>
        <a href="#liputan-pers"
          class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#166534] transition-colors">
          Liputan Media
        </a>
        <a href="#dashboard-monitoring"
          class="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#166534] transition-colors">
          Dashboard Monitoring
        </a>

        <!-- Subgroup: Lainnya -->
        <div class="pt-2 mt-2 border-t border-[#E2E8F0] dark:border-slate-800 space-y-1">
          <span class="px-3.5 text-xs font-semibold uppercase tracking-wider text-[#64748B] block mb-1">Lainnya</span>
          <a href="#legalitas-hki"
            class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-normal text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#166534] transition-colors">
            <svg class="w-4 h-4 text-[#64748B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Paten &amp; HKI</span>
          </a>
          <a href="#unit-pht"
            class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-normal text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#166534] transition-colors">
            <svg class="w-4 h-4 text-[#64748B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                d="M5 21c.5-4.5 2.5-8 7-10 4.5-2 8-1.5 9-1-.5 4.5-2.5 8-7 10-4.5 2-8 1.5-9 1z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 21l6.5-6.5" />
            </svg>
            <span>Unit PHT</span>
          </a>
          <a href="#tim-inovasi"
            class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-normal text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#166534] transition-colors">
            <svg class="w-4 h-4 text-[#64748B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Our Team</span>
        </a>
      </div>
    </div>
  </div>
  `;
}
