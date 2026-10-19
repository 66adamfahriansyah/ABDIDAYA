/**
 * E-BIO PENS — Renderer: Hero Section
 * Menggenerasi kartu statistik utama di hero dengan atribut animasi counter
 */

function renderHeroStats() {
  const container = document.getElementById('hero-stats-container');
  if (!container || !EBIO_DATA.heroStats) return;

  container.innerHTML = EBIO_DATA.heroStats.map((stat, idx) => {
    let prefix = "";
    let num = 0;
    let suffix = "";

    if (stat.value.startsWith("-")) {
      prefix = "-";
      const clean = stat.value.replace("-", "");
      num = parseInt(clean, 10);
      suffix = clean.replace(String(num), "");
    } else {
      num = parseInt(stat.value, 10);
      suffix = stat.value.replace(String(num), "");
    }

    return `
      <div class="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover-lift reveal" style="transition-delay: ${idx * 90}ms;">
        <div>
          <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans block stat-counter"
            data-target="${num}"
            data-prefix="${prefix}"
            data-suffix="${suffix}">
            ${stat.value}
          </span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 leading-snug mt-1.5 sm:mt-2">${stat.title}</p>
          <p class="text-[11px] text-slate-400 leading-tight mt-0.5">${stat.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}
