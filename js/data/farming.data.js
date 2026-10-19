/**
 * E-BIO PENS — Data Modul: Smart Farming
 * Menyimpan data komponen alat fisik, alur kerja sistem, dan manfaat sistem
 */

// 1. Komponen Perangkat Smart Farming Asli
const smartFarmingComponentsData = [
  {
    number: "01",
    title: "Panel Surya & Panel Box",
    subtitle: "Sumber energi dan pusat pengendalian perangkat",
    desc: "Panel surya memasok energi untuk mendukung operasional light trap dan perangkat pemantauan di lahan.",
    image: "assets/paneldanbox.png",
    imgAlt: "Panel Surya dan Gardu Kontrol E-BIO Desa Sajen"
  },
  {
    number: "02",
    title: "Lampu UV dan Perangkap Hama",
    subtitle: "Perangkat pengendali hama di lahan",
    desc: "Lampu UV menarik serangga sasaran ke perangkap. Status operasional lampu dapat dipantau melalui sistem yang terhubung.",
    image: "assets/lampu.png",
    imgAlt: "Lampu UV dan Perangkap Hama Light Trap E-BIO"
  },
  {
    number: "03",
    title: "Sensor dan Telemetri IoT",
    subtitle: "Pengumpulan dan pengiriman data",
    desc: "Sensor NPK dan sensor hujan mengirimkan informasi kondisi lahan sesuai kemampuan perangkat. Data yang diterima sistem ditampilkan pada dashboard website.",
    image: "assets/sensor.png",
    imgAlt: "Sensor NPK Tanah dan Telemetri IoT E-BIO"
  }
];

// 2. Alur Kerja Sistem (Flowchart 4 Langkah)
const systemWorkflowData = [
  {
    step: "01",
    title: "Sumber Energi dan Light Trap",
    desc: "Panel surya memasok energi, sedangkan lampu UV digunakan untuk menarik hama sasaran.",
    isDark: true,
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`
  },
  {
    step: "02",
    title: "Pembacaan Sensor",
    desc: "Sistem membaca data NPK, kondisi hujan, dan status lampu melalui relay.",
    isDark: false,
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />`
  },
  {
    step: "03",
    title: "Pengiriman Data",
    desc: "Data dikirim melalui jaringan komunikasi yang digunakan perangkat, seperti LoRa jika telah diimplementasikan.",
    isDark: false,
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />`
  },
  {
    step: "04",
    title: "Dashboard Monitoring",
    desc: "Petani atau operator melihat data sensor dan status light trap melalui website.",
    isDark: true,
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`
  }
];

// 3. Manfaat Sistem
const systemBenefitsData = [
  {
    title: "Pemantauan Jarak Jauh",
    desc: "Informasi perangkat dapat dilihat melalui dashboard.",
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />`
  },
  {
    title: "Informasi Kondisi Lahan",
    desc: "Membantu petani mengamati data NPK dan kondisi hujan.",
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />`
  },
  {
    title: "Pemantauan Operasional",
    desc: "Memudahkan pengecekan status lampu light trap.",
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />`
  }
];
