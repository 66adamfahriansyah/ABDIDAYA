/**
 * E-BIO PENS — Project Data Store
 * Menyimpan data terstruktur untuk seluruh seksi konten website
 */

const EBIO_DATA = {
  // 1. Statistik Pencapaian di Hero Section
  heroStats: [
    {
      value: "12 Unit",
      title: "Light Trap Terpasang Aktif",
      desc: "Tersebar di 4 dusun Desa Sajen",
      highlight: false,
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />`
    },
    {
      value: "15 KM",
      title: "Jangkauan Transmisi LoRa",
      desc: "Telemetri sensor tanpa pulsa GSM",
      highlight: false,
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />`
    },
    {
      value: "- 60%",
      title: "Biaya Pestisida Kimiawi",
      desc: "Reduksi serangan hama ulat grayak",
      highlight: true,
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />`
    },
    {
      value: "100%",
      title: "Daya Mandiri Solar Cell",
      desc: "Energi terbarukan ramah lingkungan",
      highlight: false,
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />`
    }
  ],

  // 2. Fitur Hardware Light Trap Unit
  hardwareFeatures: [
    {
      title: "Panel Surya Monocrystalline 50Wp",
      desc: "Efisiensi konversi daya fotovoltaik hingga 21.8%, dilengkapi baterai LiFePO4 tahan hingga 72 jam beroperasi tanpa paparan matahari langsung.",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />`
    },
    {
      title: "Lampu UV-A Spektrum Khusus 365nm",
      desc: "Panjang gelombang terkalibrasi khusus untuk memikat hama ngengat ulat grayak (<i>Spodoptera exigua</i>) tanpa merusak serangga predator sahabat petani.",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />`
    },
    {
      title: "Sensor Lingkungan & LDR Otomatis",
      desc: "Sensor DHT22 (suhu & kelembaban tanah/udara) dan LDR responsif mengaktifkan lampu otomatis saat senja dan mati saat fajar tiba.",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />`
    },
    {
      title: "High-Voltage Grid & Counter Otomatis",
      desc: "Kawat tegangan tinggi pemusnah hama seketika dengan sensor piezo/infrared penghitung jumlah hama yang jatuh ke corong penampungan.",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />`
    }
  ],

  // Chip Badge Hardware Bawah
  hardwareChips: [
    "IP66 Waterproof Enclosure",
    "Stainless 304 Anti-Karat",
    "BMS 12V LiFePO4 Proteksi"
  ],

  // 3. Arsitektur Jaringan LoRaWAN
  loraSpecs: [
    {
      title: "Jangkauan 15 KM",
      desc: "Modul Semtech SX1278 frekuensi 433 MHz menembus rimbun kebun dan kontur berbukit tanpa SIM card.",
      bgClass: "bg-emerald-50/70 border-emerald-100/80",
      iconBg: "bg-emerald-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />`
    },
    {
      title: "Gateway Sentral",
      desc: "Ditempatkan di titik elevasi balai desa untuk meneruskan paket data telemetri via MQTT ke cloud server.",
      bgClass: "bg-slate-50 border-slate-200/80",
      iconBg: "bg-slate-800",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />`
    },
    {
      title: "Otomatisasi Penuh",
      desc: "Manajemen daya cerdas tidur nyenyak (<i>Deep Sleep Mode</i>) di siang hari untuk pengisian solar cell maksimal.",
      bgClass: "bg-amber-50/70 border-amber-100/80",
      iconBg: "bg-amber-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />`
    }
  ],

  // 4. Publikasi & Media Massa (Liputan Pers Nasional)
  pressArticles: [
    {
      badge: "JTV NEWS",
      badgeColor: "bg-red-600",
      sourceType: "Instagram Reel • JTV",
      sourceIconColor: "text-emerald-400",
      sourceDate: "Oktober 2024",
      image: "assets/JTV.png",
      alt: "Liputan Berita JTV Jawa Timur",
      category: "Liputan Berita Lapangan",
      title: "Inovasi Mahasiswa PENS: Pasang Alat Perangkap Hama Bertenaga Surya di Pacet Mojokerto",
      desc: "Liputan penyerahan dan uji fungsi 12 unit light trap tenaga surya ramah lingkungan yang mampu membantu kelompok tani menekan hama ulat grayak secara mandiri di Desa Sajen.",
      footerSource: "Siaran JTV Jatim",
      actionText: "Tonton Liputan JTV",
      link: "https://www.instagram.com/reel/DdS2WAMpODa/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
    },
    {
      badge: "RRI PRO 1 FM",
      badgeColor: "bg-blue-600",
      sourceType: "Instagram Reel • RRI",
      sourceIconColor: "text-blue-400",
      sourceDate: "Oktober 2024",
      image: "assets/RRI.png",
      alt: "Siaran Berita Radio RRI Radio Republik Indonesia",
      category: "Wawancara & Liputan Media",
      title: "Pemberdayaan Tani Mojokerto Lewat Smart Agriculture: PPK Ormawa E-BIO PENS Raih Apresiasi",
      desc: "Diskusi interaktif seputar kontribusi nyata mahasiswa perguruan tinggi vokasi dalam mengatasi masalah kelangkaan pasokan listrik sawah melalui telemetri LoRa.",
      footerSource: "Siaran RRI Pro 1",
      actionText: "Tonton Siaran RRI",
      link: "https://www.instagram.com/reel/DeO3tG4xrNW/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
    },
    {
      badge: "KEMENDIKTISAINTEK",
      badgeColor: "bg-slate-900",
      sourceType: "Portal Resmi Kemendiktisaintek",
      sourceIconColor: "text-amber-400",
      sourceDate: "2024",
      image: "assets/beritakemendiktisaintek.png",
      alt: "Publikasi Resmi Kemendiktisaintek",
      category: "Warta Resmi Kementerian",
      title: "Inovasi Mahasiswa PENS Bawa Perubahan Bagi Petani Bawang Merah di Mojokerto",
      desc: "Publikasi resmi Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi mengulas transformasi Desa Sajen melalui implementasi Light Trap Tenaga Surya IoT tim PPK Ormawa E-BIO PENS.",
      footerSource: "Portal Dikti Resmi",
      actionText: "Baca Berita Dikti",
      link: "https://dikti.kemdiktisaintek.go.id/publikasi/berita/inovasi-mahasiswa-pens-bawa-perubahan-bagi-petani-bawang-merah-di-mojokerto"
    }
  ],

  // 5. Legalitas, Paten HKI & Rekomendasi Dinas
  legalItems: [
    {
      badge: "DJKI KEMENKUMHAM",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
      iconBgClass: "bg-amber-50 text-amber-600",
      title: "HKI Desain Industri",
      number: "No. EC002024108821",
      desc: "Perlindungan hak cipta desain industri rangka mekanis aerodinamis tahan cuaca ekstrem dan struktur corong pemisah serangga otomatis.",
      status: "Status: Terdaftar Sah",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`
    },
    {
      badge: "PATEN SEDERHANA",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconBgClass: "bg-emerald-50 text-emerald-600",
      title: "Paten Alat & Metode",
      number: "No. S00202409941",
      desc: "Invensi sistem pemikat hama berspektrum ganda dengan pembangkit kejut tegangan teratur dan telemetri nirkabel hemat daya.",
      status: "Status: Granted Paten",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />`
    },
    {
      badge: "HAK CIPTA SOFTWARE",
      badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
      iconBgClass: "bg-blue-50 text-blue-600",
      title: "HKI Web Dashboard",
      number: "No. EC00202411543",
      desc: "Pencatatan hak cipta atas program komputer aplikasi antarmuka pemantauan telemetri IoT LoRa dan sistem basis data Gapoktan.",
      status: "Status: Surat Pencatatan",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />`
    },
    {
      badge: "DINAS PERTANIAN",
      badgeClass: "bg-teal-50 text-teal-700 border-teal-200",
      iconBgClass: "bg-teal-50 text-teal-600",
      title: "Surat Rekomendasi PHT",
      number: "No. 521/1420/416-113",
      desc: "Surat pengesahan teknis Pengendalian Hama Terpadu (PHT) dari Dinas Pertanian Mojokerto untuk adopsi skala luas di sentra hortikultura.",
      status: "Status: Rekomendasi Resmi",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />`
    }
  ],

  // 6. Postingan Feed Media Sosial Instagram
  instagramPosts: [
    {
      tag: "Sosialisasi Petani",
      postNum: "POST #01",
      title: "Workshop Pengoperasian Light Trap di Gapoktan",
      desc: "Pemberian panduan teknis perawatan aki surya kepada pengurus blok sawah.",
      likes: "428 Likes",
      comments: "34 Komentar",
      gradient: "from-emerald-800 via-emerald-900 to-forest-950"
    },
    {
      tag: "Instalasi Lahan",
      postNum: "POST #02",
      title: "Pemasangan 12 Titik Sensor LoRa di 4 Dusun",
      desc: "Penyebaran tiang mekanik di Sumberan, Sajen Lor, dan Sajen Kidul.",
      likes: "512 Likes",
      comments: "48 Komentar",
      gradient: "from-emerald-700 via-forest-850 to-emerald-950"
    },
    {
      tag: "Pengujian LoRa",
      postNum: "POST #03",
      title: "Range Test Telemetri LoRa Radius 15 KM",
      desc: "Paket telemetri tiba utuh di gateway sentral dengan RSSI -98 dBm.",
      likes: "389 Likes",
      comments: "27 Komentar",
      gradient: "from-forest-850 via-emerald-800 to-forest-900"
    },
    {
      tag: "Panen Sehat",
      postNum: "POST #04",
      title: "Panen Perdana Bawang Merah Rendah Residu",
      desc: "Kualitas umbi lebih padat dan segar dengan reduksi semprotan pestisida.",
      likes: "640 Likes",
      comments: "52 Komentar",
      gradient: "from-emerald-900 via-forest-900 to-emerald-950"
    }
  ],

  // 7. Kanal Video YouTube
  youtubeVideos: [
    {
      thumbnail: "assets/light_trap_field.jpg",
      alt: "Video Dokumenter Sajen",
      duration: "11:24",
      meta: "Video Profil Resmi • YouTube",
      title: "Pemberdayaan Petani Bawang Merah Melalui Light Trap Tenaga Surya IoT Desa Sajen"
    },
    {
      thumbnail: "assets/JTV.png",
      alt: "Tutorial Kalibrasi LoRa",
      duration: "05:12",
      meta: "Tutorial Teknis • 2.8k views",
      title: "Tutorial Kalibrasi Sensor LoRa dan Pembersihan Rutin Grid Kawat"
    },
    {
      thumbnail: "assets/beritakemendiktisaintek.png",
      alt: "Testimoni Petani Bawang",
      duration: "04:30",
      meta: "Testimoni Lapangan • 3.5k views",
      title: "Testimoni Ketua Gapoktan Sumber Makmur: Hemat Jutaan Rupiah Berkat Light Trap Tenaga Surya"
    }
  ],

  // 8. Divisi Kerja Tim Inovasi (Meet Our Team)
  teamDivisions: [
    {
      number: "01",
      title: "Ketua Tim & Manajemen",
      desc: "Koordinasi lapangan, relasi pemdes, dan integrasi roadmap pencapaian target."
    },
    {
      number: "02",
      title: "Divisi Hardware & Surya",
      desc: "Perancangan sirkuit solar cell, grid tegangan tinggi, dan mekanikal enclosure IP66."
    },
    {
      number: "03",
      title: "Divisi IoT & Web Cloud",
      desc: "Pemrograman gateway LoRa SX1278, broker MQTT, dan frontend dashboard Gapoktan."
    },
    {
      number: "04",
      title: "Sosial & Keberlanjutan",
      desc: "Edukasi kelompok tani, penyusunan buku panduan PHT, dan kepengurusan paten HKI."
    }
  ],

  // 9. Katalog Dokumen Modal (Unduh PDF)
  catalogDocuments: [
    {
      title: "Sertifikat HKI Desain Industri",
      meta: "No. EC002024108821 • Kemenkumham RI",
      badgeColor: "bg-amber-100 text-amber-700",
      alertMsg: "Mengunduh Berkas Sertifikat HKI Desain Industri (PDF)..."
    },
    {
      title: "Sertifikat Paten Sederhana Alat Light Trap",
      meta: "No. S00202409941 • DJKI",
      badgeColor: "bg-emerald-100 text-emerald-700",
      alertMsg: "Mengunduh Berkas Paten Sederhana Alat (PDF)..."
    },
    {
      title: "HKI Program Komputer Web Monitoring",
      meta: "No. EC00202411543 • Ditjen KI",
      badgeColor: "bg-blue-100 text-blue-700",
      alertMsg: "Mengunduh Berkas HKI Program Komputer (PDF)..."
    },
    {
      title: "Surat Rekomendasi Dinas Pertanian Mojokerto",
      meta: "No. 521/1420/416-113/2024 • PHT",
      badgeColor: "bg-teal-100 text-teal-700",
      alertMsg: "Mengunduh Surat Rekomendasi PHT Dinas (PDF)..."
    },
    {
      title: "Buku Panduan Teknis & Pengoperasian Alat",
      meta: "Modul Pelatihan Petani Gapoktan",
      badgeColor: "bg-purple-100 text-purple-700",
      alertMsg: "Mengunduh Buku Panduan Teknis (PDF)..."
    }
  ]
};
