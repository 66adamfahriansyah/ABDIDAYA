/**
 * E-BIO PENS — Tailwind CSS Design System Configuration
 * Proyek Inovasi PPK Ormawa E-BIO PENS Desa Sajen, Mojokerto
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        forest: {
          800: '#064e3b',
          850: '#043e30',
          900: '#033428',
          950: '#012019',
        }
      },
      boxShadow: {
        'soft': '0 4px 25px -2px rgba(0, 0, 0, 0.04), 0 2px 10px -2px rgba(0, 0, 0, 0.02)',
        'card': '0 10px 30px -4px rgba(16, 185, 129, 0.06), 0 4px 16px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -6px rgba(16, 185, 129, 0.12), 0 8px 20px -3px rgba(0, 0, 0, 0.06)',
        'emerald-glow': '0 0 35px -5px rgba(16, 185, 129, 0.35)',
      }
    }
  }
};
