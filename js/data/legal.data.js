/**
 * E-BIO PENS — Data Modul: Legalitas HKI, Paten & Unit PHT
 * Menyimpan data 3 sertifikasi HKI (Desain, Alat, Web) dan kelembagaan Unit PHT
 */

// 1. Sertifikasi HKI & Paten (3 Item)
const legalItemsData = [
  {
    id: "desain",
    badge: "DJKI KEMENKUMHAM",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    iconBgClass: "bg-amber-50 text-amber-600",
    title: "HKI Desain Industri",
    category: "Desain Mekanik & Rangka",
    number: "No. EC002024108821",
    desc: "Perlindungan hak cipta desain industri rangka mekanis aerodinamis tahan cuaca ekstrem dan struktur corong pemisah serangga otomatis.",
    status: "Status: Terdaftar Sah",
    image: "assets/hki-desain.svg",
    imgAlt: "Sertifikat HKI Desain Industri Light Trap Surya",
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`
  },
  {
    id: "alat",
    badge: "PATEN SEDERHANA",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBgClass: "bg-emerald-50 text-emerald-600",
    title: "Paten Alat & Metode",
    category: "Invensi Perangkat Keras",
    number: "No. S00202409941",
    desc: "Invensi sistem pemikat hama berspektrum ganda dengan pembangkit kejut tegangan teratur dan telemetri nirkabel hemat daya.",
    status: "Status: Granted Paten",
    image: "assets/hki-alat.svg",
    imgAlt: "Sertifikat Paten Sederhana Alat Light Trap LoRa",
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />`
  },
  {
    id: "web",
    badge: "HAK CIPTA SOFTWARE",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    iconBgClass: "bg-blue-50 text-blue-600",
    title: "HKI Web Dashboard",
    category: "Program Komputer & IoT",
    number: "No. EC00202411543",
    desc: "Pencatatan hak cipta atas program komputer aplikasi antarmuka pemantauan telemetri IoT LoRa dan sistem basis data Gapoktan.",
    status: "Status: Surat Pencatatan",
    image: "assets/hki-web.svg",
    imgAlt: "Sertifikat HKI Program Komputer Web Monitoring",
    iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />`
  }
];

// 2. Terbentuknya Unit Pengendalian Hama Terpadu (PHT)
const phtUnitData = {
  badge: "KEBERLANJUTAN PROGRAM & KELEMBAGAAN TANI",
  title: "Terbentuknya Unit Pengendalian Hama Terpadu (PHT)",
  institution: "Gapoktan Sumber Makmur • Desa Sajen, Mojokerto",
  desc: "Pembentukan unit kelembagaan mandiri Pengendalian Hama Terpadu (PHT) yang disepakati bersama oleh Gapoktan Sumber Makmur, Pemerintah Desa Sajen, dan PENS Surabaya. Unit ini bertugas mengawal operasionalisasi, pemeliharaan berkala, serta monitoring efektivitas 5 unit Light Trap Tenaga Surya IoT di lahan persawahan Desa Sajen.",
  letterImage: "assets/surat-pernyataan-pht.svg",
  letterAlt: "Surat Pernyataan Bersama Pembentukan Unit Pengendalian Hama Terpadu (PHT) Desa Sajen",
  letterNumber: "No. 521 / 018 / GAPOKTAN-SJ / X / 2026",
  statusBadge: "Resmi Ditetapkan & Ditandatangani Tiga Pihak",
  roles: [
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />`,
      title: "Monitoring Rutin Tangkapan Hama & Sensor",
      desc: "Pengecekan harian jumlah tangkapan serangga pada corong perangkap dan pemantauan telemetri kondisi lahan dari dashboard website."
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`,
      title: "Pemeliharaan Perangkat Mandiri",
      desc: "Pembersihan berkala solar cell dari kotoran atau debu, kontrol tegangan baterai aki LiFePO4, dan perawatan komponen mekanik light trap."
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
      title: "Edukasi & Penerapan SOP Pengurangan Pestisida",
      desc: "Pemberdayaan dan sosialisasi kepada seluruh petani Gapoktan untuk mengurangi racun kimia sintetis dan beralih ke proteksi tanaman holistik."
    }
  ],
  signatories: [
    { name: "Suwandi", role: "Ketua Gapoktan Sumber Makmur" },
    { name: "H. Syamsul Huda", role: "Kepala Desa Sajen" },
    { name: "Adam Fahriansyah", role: "Koordinator Tim PPK Ormawa PENS" }
  ]
};
