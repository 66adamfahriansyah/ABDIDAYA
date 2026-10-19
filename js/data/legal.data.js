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
  subtitle: "Pembentukan kelembagaan petani bersama Gapoktan Sumber Makmur, Pemerintah Desa Sajen, dan PENS untuk mendukung pengelolaan hama, pemeliharaan perangkat, serta keberlanjutan pemanfaatan teknologi light trap bertenaga surya berbasis IoT.",
  sectionTitle: "Kemandirian Petani melalui Unit PHT Gapoktan Sumber Makmur",
  desc: "Unit Pengendalian Hama Terpadu (PHT) menjadi wadah kolaborasi petani dalam mendukung pemantauan hama, pemeliharaan perangkat, dan penerapan pengendalian hama terpadu di lahan bawang merah Desa Sajen. Unit ini juga mendukung keberlanjutan operasional lima unit light trap bertenaga surya berbasis IoT.",
  letterImage: "assets/pht.png",
  letterAlt: "Surat Pernyataan Bersama Pembentukan Unit Pengendalian Hama Terpadu (PHT) Gapoktan Sumber Makmur",
  documentTitle: "Surat Pernyataan Unit Pengendalian Hama Terpadu",
  roles: [
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />`,
      title: "Monitoring Rutin Hama dan Sensor",
      desc: "Pemantauan kondisi perangkat dan data tangkapan hama secara berkala melalui dashboard website sebagai bahan evaluasi kondisi lahan."
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`,
      title: "Pemeliharaan Perangkat secara Mandiri",
      desc: "Pemeriksaan dan perawatan berkala pada panel surya, baterai, lampu, serta komponen light trap agar sistem tetap berfungsi dengan baik."
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8L2 22" />`,
      title: "Edukasi dan Penerapan PHT",
      desc: "Peningkatan pengetahuan petani mengenai pengamatan hama dan penerapan pengendalian hama terpadu untuk mendukung pertanian yang lebih berkelanjutan."
    }
  ]
};
