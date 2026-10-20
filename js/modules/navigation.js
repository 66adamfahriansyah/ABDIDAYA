/**
 * E-BIO PENS — Modul: Navigasi & Scroll Spy
 * Mengelola responsivitas menu mobile, dropdown "Lainnya", dan indikator menu navbar aktif
 */

// 1. Inisialisasi Navigasi Mobile Hamburger
function initMobileNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    // Tutup menu mobile ketika link navigasi diklik
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Tutup jika klik di luar mobile menu
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

// 2. Inisialisasi Dropdown "Lainnya"
function initNavDropdown() {
  const dropdownWrapper = document.getElementById('nav-dropdown-wrapper');
  const dropdownBtn = document.getElementById('nav-dropdown-btn');
  const dropdownMenu = document.getElementById('nav-dropdown-menu');
  const dropdownChevron = document.getElementById('nav-dropdown-chevron');

  if (!dropdownWrapper || !dropdownBtn || !dropdownMenu) return;

  function setDropdownState(open) {
    if (open) {
      dropdownMenu.classList.remove('invisible', 'opacity-0', '-translate-y-1');
      dropdownMenu.classList.add('visible', 'opacity-100', 'translate-y-0', 'dropdown-open');
      dropdownChevron?.classList.add('rotate-180', 'text-[#166534]');
      dropdownBtn.setAttribute('aria-expanded', 'true');
    } else {
      dropdownMenu.classList.add('invisible', 'opacity-0', '-translate-y-1');
      dropdownMenu.classList.remove('visible', 'opacity-100', 'translate-y-0', 'dropdown-open');
      dropdownChevron?.classList.remove('rotate-180', 'text-[#166534]');
      dropdownBtn.setAttribute('aria-expanded', 'false');
    }
  }

  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.contains('dropdown-open');
    setDropdownState(!isOpen);
  });

  dropdownMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setDropdownState(false);
    });
  });

  document.addEventListener('click', (e) => {
    if (!dropdownWrapper.contains(e.target)) {
      setDropdownState(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setDropdownState(false);
  });
}

// 3. Inisialisasi Active Scroll Spy untuk Navbar
function initScrollSpy() {
  const mainNavLinks = document.querySelectorAll('header nav a.nav-main-link[href^="#"]');
  const dropdownLinks = document.querySelectorAll('#nav-dropdown-menu a[href^="#"]');
  const allLinks = [...mainNavLinks, ...dropdownLinks];
  
  const sections = allLinks.map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(Boolean);

  if (!sections.length) return;

  function updateActiveLink() {
    const scrollPos = window.scrollY + 140;

    let currentSectionId = '';
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPos) {
        currentSectionId = section.getAttribute('id');
        break;
      }
    }

    if (!currentSectionId && sections.length > 0) {
      currentSectionId = sections[0].getAttribute('id');
    }

    // Update link utama di nav
    mainNavLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentSectionId) {
        link.classList.add('bg-[#F0FDF4]', 'text-[#166534]', 'nav-active');
        link.classList.remove('text-[#334155]');
      } else {
        link.classList.remove('bg-[#F0FDF4]', 'text-[#166534]', 'nav-active');
        link.classList.add('text-[#334155]');
      }
    });

    // Update link di dropdown "Lainnya"
    dropdownLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentSectionId) {
        link.classList.add('bg-[#F0FDF4]', 'text-[#166534]', 'dark:bg-emerald-950/60', 'dark:text-emerald-300');
        link.classList.remove('text-[#334155]');
      } else {
        link.classList.remove('bg-[#F0FDF4]', 'text-[#166534]', 'dark:bg-emerald-950/60', 'dark:text-emerald-300');
        link.classList.add('text-[#334155]');
      }
    });

    // Cek apakah section yang aktif berada di dalam menu "Lainnya"
    const dropdownBtn = document.getElementById('nav-dropdown-btn');
    const dropdownSectionIds = ['legalitas-hki', 'unit-pht', 'tim-inovasi'];
    if (dropdownBtn) {
      if (dropdownSectionIds.includes(currentSectionId)) {
        dropdownBtn.classList.add('bg-[#F0FDF4]', 'text-[#166534]', 'nav-active');
        dropdownBtn.classList.remove('text-[#334155]');
      } else {
        dropdownBtn.classList.remove('bg-[#F0FDF4]', 'text-[#166534]', 'nav-active');
        dropdownBtn.classList.add('text-[#334155]');
      }
    }

    // Update link di menu mobile drawer
    const mobileLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');
    mobileLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentSectionId) {
        link.classList.add('bg-[#F0FDF4]', 'text-[#166534]', 'dark:bg-emerald-950/60', 'dark:text-emerald-300');
        link.classList.remove('text-[#334155]');
      } else {
        link.classList.remove('bg-[#F0FDF4]', 'text-[#166534]', 'dark:bg-emerald-950/60', 'dark:text-emerald-300');
        link.classList.add('text-[#334155]');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

