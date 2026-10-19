/**
 * E-BIO PENS — Renderer: Tim Inovasi
 * Menggenerasi kartu pembagian divisi kerja tim mahasiswa PENS
 */

function renderTeamDivisions() {
  const container = document.getElementById('team-divisions-container');
  if (!container || !EBIO_DATA.teamDivisions) return;

  container.innerHTML = EBIO_DATA.teamDivisions.map((div, idx) => `
    <div class="p-5 rounded-2xl bg-[#fafcfb] border border-slate-100 shadow-soft hover-lift reveal" style="transition-delay: ${idx * 80}ms;">
      <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold mb-3">${div.number}</div>
      <h4 class="text-sm font-bold text-slate-900">${div.title}</h4>
      <p class="text-xs text-slate-500 mt-1 leading-relaxed">
        ${div.desc}
      </p>
    </div>
  `).join('');
}
