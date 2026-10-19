/**
 * E-BIO PENS — Modul: Tema (Dark Mode & Light Mode)
 * Mengatur pergantian tema gelap/terang secara mulus dan menyimpannya di localStorage
 */

function applyTheme(theme) {
  const html = document.documentElement;
  const isDark = theme === 'dark';

  if (isDark) {
    html.classList.add('dark');
    try { localStorage.setItem('ebio-theme', 'dark'); } catch (e) {}
  } else {
    html.classList.remove('dark');
    try { localStorage.setItem('ebio-theme', 'light'); } catch (e) {}
  }

  updateThemeButtonsUI(isDark);
}

function updateThemeButtonsUI(isDark) {
  const lightBtn = document.getElementById('theme-btn-light');
  const darkBtn = document.getElementById('theme-btn-dark');
  const lightBtnMobile = document.getElementById('theme-btn-light-mobile');
  const darkBtnMobile = document.getElementById('theme-btn-dark-mobile');

  if (lightBtn && darkBtn) {
    if (isDark) {
      lightBtn.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 bg-transparent text-slate-400 hover:text-slate-200 cursor-pointer";
      darkBtn.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 bg-emerald-600 text-white shadow-sm cursor-pointer";
    } else {
      lightBtn.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 bg-white text-slate-900 shadow-xs cursor-pointer";
      darkBtn.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 bg-transparent text-slate-500 hover:text-slate-800 cursor-pointer";
    }
  }

  if (lightBtnMobile && darkBtnMobile) {
    if (isDark) {
      lightBtnMobile.className = "p-1.5 rounded-full transition-all bg-transparent text-slate-400";
      darkBtnMobile.className = "p-1.5 rounded-full transition-all bg-emerald-600 text-white shadow-xs";
    } else {
      lightBtnMobile.className = "p-1.5 rounded-full transition-all bg-white text-amber-500 shadow-xs";
      darkBtnMobile.className = "p-1.5 rounded-full transition-all bg-transparent text-slate-500";
    }
  }
}

function toggleTheme() {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  applyTheme(isCurrentlyDark ? 'light' : 'dark');
}

function initTheme() {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('ebio-theme');
  } catch (e) {}

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light';
  applyTheme(initialTheme);
}

// Jalankan inisialisasi tema
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

if (typeof window !== 'undefined') {
  window.applyTheme = applyTheme;
  window.toggleTheme = toggleTheme;
  window.initTheme = initTheme;
}
