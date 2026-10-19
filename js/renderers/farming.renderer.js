/**
 * E-BIO PENS — Renderer: Smart Farming
 * Menggenerasi komponen fisik alat, alur kerja sistem, dan manfaat sistem
 */

// 1. Tiga Kartu Komponen Alat (Panel Surya, Lampu UV, Sensor Telemetri)
function renderSmartFarmingComponents() {
  const container = document.getElementById('smart-farming-components-container');
  if (!container || !EBIO_DATA.smartFarmingComponents) return;

  container.innerHTML = EBIO_DATA.smartFarmingComponents.map((item, idx) => `
    <div class="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group card-shimmer reveal" style="transition-delay: ${idx * 120}ms;">
      <div class="relative w-full rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-b from-slate-50 to-slate-100/70 mb-4 p-2.5 flex items-center justify-center border border-slate-100 shadow-inner">
        <img src="${item.image}" alt="${item.imgAlt}" class="w-full h-full ${item.image.includes('sensor') ? 'object-cover rounded-xl' : 'object-contain'} group-hover:scale-105 transition-transform duration-500">
      </div>
      <div class="flex items-center gap-2.5 mb-1.5">
        <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs shrink-0 shadow-sm">
          ${item.number}
        </span>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          ${item.title}
        </h3>
      </div>
      <p class="text-xs font-semibold text-emerald-700 mb-2">${item.subtitle}</p>
      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">${item.desc}</p>
    </div>
  `).join('');
}

// 2. Alur Kerja Sistem (Flowchart 4 Langkah)
function renderSystemWorkflow() {
  const container = document.getElementById('system-workflow-container');
  if (!container || !EBIO_DATA.systemWorkflow) return;

  container.innerHTML = EBIO_DATA.systemWorkflow.map((item, idx) => `
    <div class="${item.isDark ? 'bg-[#064e3b] text-white shadow-md' : 'bg-white text-slate-900 border border-emerald-200/90 shadow-sm'} p-5 sm:p-6 rounded-2xl flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300 reveal hover-lift" style="transition-delay: ${idx * 100}ms;">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 rounded-xl ${item.isDark ? 'bg-white/15 text-emerald-300' : 'bg-emerald-50 text-emerald-700'} flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              ${item.iconSvg}
            </svg>
          </div>
          <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${item.isDark ? 'bg-white/20 text-emerald-100' : 'bg-emerald-100 text-emerald-800'}">
            ${item.step}
          </span>
        </div>
        <h4 class="text-sm sm:text-base font-bold ${item.isDark ? 'text-white' : 'text-slate-900'} leading-snug">
          ${item.title}
        </h4>
        <p class="mt-2 text-xs sm:text-[13px] ${item.isDark ? 'text-emerald-100/90' : 'text-slate-600'} leading-relaxed font-normal">
          ${item.desc}
        </p>
      </div>
    </div>
  `).join('');
}

// 3. Manfaat Sistem (3 Kolom)
function renderSystemBenefits() {
  const container = document.getElementById('system-benefits-container');
  if (!container || !EBIO_DATA.systemBenefits) return;

  container.innerHTML = EBIO_DATA.systemBenefits.map((item, idx) => `
    <div class="flex items-start gap-3.5 reveal hover-lift" style="transition-delay: ${idx * 110}ms;">
      <div class="w-10 h-10 rounded-full bg-[#064e3b] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
        <svg class="w-5 h-5 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          ${item.iconSvg}
        </svg>
      </div>
      <div>
        <h5 class="text-sm font-bold text-slate-900 leading-snug">${item.title}</h5>
        <p class="text-xs text-slate-500 mt-1 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');
}
