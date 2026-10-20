/**
 * E-BIO PENS — Data Modul: Legalitas HKI, Paten & Unit PHT
 * Menyimpan data 3 sertifikasi HKI (Desain, Alat, Web) dan kelembagaan Unit PHT
 */

// 1. Sertifikasi HKI & Paten (3 Item Sesuai Layout Mockup)
const legalItemsData = [
  {
    id: "alat",
    tag: "HKI Alat",
    documentTitle: "Surat Pencatatan Ciptaan",
    title: "HKI Alat",
    desc: "Rancang Bangun Sistem Kendali Light Trap Tenaga Surya Berbasis Mikrokontroler IoT dan LoRa untuk Pengendalian Hama Bawang Merah di Desa Sajen, Mojokerto",
    image: "assets/hkialat.png",
    imgAlt: "Sertifikat HKI Alat - Rancang Bangun Sistem Kendali Light Trap Tenaga Surya Berbasis Mikrokontroler IoT dan LoRa",
    iconSvg: `<svg class="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 3a4 4 0 0 1 4 4" />
      <path d="M19 1a7 7 0 0 1 4 4" stroke-width="1.8" />
      <polygon points="3 14 6 8 18 8 21 14 3 14" stroke-width="1.8" fill="currentColor" fill-opacity="0.15" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="4.5" y1="11" x2="19.5" y2="11" />
      <path d="M12 14v6" stroke-width="2" />
      <path d="M8 20h8" stroke-width="2" />
    </svg>`
  },
  {
    id: "desain",
    tag: "HKI Desain",
    documentTitle: "Surat Pencatatan Ciptaan",
    title: "HKI Desain",
    desc: "Desain Sistem Light Trap Tenaga Surya Berbasis IoT dan LoRa untuk Pengendalian Hama Bawang Merah di Desa Sajen, Mojokerto",
    image: "assets/hkidesain.png",
    imgAlt: "Sertifikat HKI Desain - Desain Sistem Light Trap Tenaga Surya Berbasis IoT dan LoRa",
    iconSvg: `<svg class="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>`
  },
  {
    id: "web",
    tag: "HKI Website",
    documentTitle: "Surat Pencatatan Ciptaan",
    title: "HKI Website",
    desc: "Rancang Bangun Platform Website Monitoring dan Kontrol Light Trap Tenaga Surya Berbasis IoT dan LoRa untuk Pengendalian Hama Bawang Merah di Desa Sajen, Mojokerto",
    image: "assets/hkiwebsite.png",
    imgAlt: "Sertifikat HKI Website - Rancang Bangun Platform Website Monitoring dan Kontrol Light Trap Tenaga Surya Berbasis IoT dan LoRa",
    iconSvg: `<svg class="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M10 9l-2 2 2 2" />
      <path d="M14 9l2 2-2 2" />
    </svg>`
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
