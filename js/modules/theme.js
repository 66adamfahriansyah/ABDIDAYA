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
  const lightBtns = document.querySelectorAll('.theme-btn-light, #theme-btn-light, #theme-btn-light-mobile');
  const darkBtns = document.querySelectorAll('.theme-btn-dark, #theme-btn-dark, #theme-btn-dark-mobile');

  lightBtns.forEach(btn => {
    if (isDark) {
      btn.className = "theme-btn-light flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-200 bg-transparent text-[#64748B] hover:text-slate-200 cursor-pointer shrink-0";
    } else {
      btn.className = "theme-btn-light flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-200 bg-white text-[#334155] shadow-xs cursor-pointer shrink-0";
    }
  });

  darkBtns.forEach(btn => {
    if (isDark) {
      btn.className = "theme-btn-dark flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-200 bg-slate-900 text-white shadow-xs cursor-pointer shrink-0";
    } else {
      btn.className = "theme-btn-dark flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-200 bg-transparent text-[#64748B] hover:text-[#334155] cursor-pointer shrink-0";
    }
  });
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
