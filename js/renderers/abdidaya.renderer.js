/**
 * E-BIO PENS — Renderer: Anugerah Abdidaya Ormawa 2026
 * Menggenerasi kartu penghargaan kejuaraan nasional dan space galeri dokumentasi
 */

function renderAbdidayaAwards() {
  const container = document.getElementById('abdidaya-awards-container');
  if (!container) return;

  const awards = (typeof EBIO_DATA !== 'undefined' && EBIO_DATA.abdidayaAwards)
    ? EBIO_DATA.abdidayaAwards
    : (typeof abdidayaAwardsData !== 'undefined' ? abdidayaAwardsData : []);

  if (!awards.length) return;

  // Icon mapping
  const icons = {
    trophy: `<svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a1 1 0 011 1v1.07A7.002 7.002 0 0119 11v1a5 5 0 01-4 4.9V19h2a1 1 0 110 2H7a1 1 0 110-2h2v-2.1A5 5 0 015 12v-1a7.002 7.002 0 016-6.93V3a1 1 0 011-1zm5 9a5 5 0 00-10 0v1a3 3 0 003 3h4a3 3 0 003-3v-1zm-6 10h2v-2h-2v2zM3 7a1 1 0 011-1h1v4a6.97 6.97 0 011.08 3.72A3.001 3.001 0 014 11V7zm17 0v4a3.001 3.001 0 01-2.08 2.72A6.97 6.97 0 0019 10V6h1a1 1 0 011 1z"/>
    </svg>`,
    mentor: `<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>`,
    university: `<svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>`
  };

  const borderThemes = {
    emerald: "border-emerald-500/30 hover:border-emerald-500 hover:shadow-emerald-500/10",
    blue: "border-blue-500/30 hover:border-blue-500 hover:shadow-blue-500/10",
    amber: "border-amber-500/30 hover:border-amber-500 hover:shadow-amber-500/10"
  };

  const badgeThemes = {
    emerald: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/80",
    blue: "bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/80",
    amber: "bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/80"
  };

  const tagThemes = {
    emerald: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60",
    blue: "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60",
    amber: "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60"
  };

  container.innerHTML = awards.map((item, idx) => `
    <div class="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0e1726] border-2 ${borderThemes[item.themeColor] || 'border-slate-200'} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group reveal" style="transition-delay: ${idx * 120}ms;">
      
      <!-- Top Decorative Glow -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${item.themeColor}-500/10 to-transparent rounded-tr-3xl pointer-events-none"></div>

      <div>
        <!-- Top Meta: Badge & Icon -->
        <div class="flex items-center justify-between gap-3 mb-5">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wide border shadow-xs ${badgeThemes[item.themeColor] || 'bg-slate-100 text-slate-800'}">
            ${item.rankBadge}
          </span>
          <div class="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${tagThemes[item.themeColor]} shadow-inner">
            ${icons[item.iconType] || icons.trophy}
          </div>
        </div>

        <!-- Target Category -->
        <div class="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
          ${item.categoryTarget}
        </div>

        <!-- Main Category Title -->
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          ${item.title}
        </h3>

        <!-- Assessment Pill -->
        <div class="mt-3">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold ${tagThemes[item.themeColor]} border border-${item.themeColor}-200/50">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            ${item.assessment}
          </span>
        </div>

        <!-- Description -->
        <p class="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          ${item.desc}
        </p>
      </div>

      <!-- Recipient Footer Info -->
      <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
        <span class="text-slate-400 dark:text-slate-500 text-[11px] shrink-0">Penerima Apresiasi</span>
        <span class="font-bold text-slate-800 dark:text-slate-200 text-right leading-tight" title="${item.recipient}">
          ${item.recipient}
        </span>
      </div>

    </div>
  `).join('');
}

