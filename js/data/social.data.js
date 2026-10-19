/**
 * E-BIO PENS — Data Modul: Media Sosial
 * Menyimpan data feed Instagram dan video YouTube resmi
 */

// 1. Postingan Instagram Reels Resmi PPKO E-BIO PENS (3 Feed Utama)
const instagramPostsData = [
  {
    id: "DdORfvyxGv4",
    tag: "Sosialisasi Petani",
    postNum: "REEL #01",
    title: "Sosialisasi & Edukasi Petani Bawang Merah",
    desc: "Edukasi teknologi light trap ramah lingkungan serta perawatan panel surya bersama Gapoktan Sumber Makmur.",
    url: "https://www.instagram.com/reel/DdORfvyxGv4/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    gradient: "from-emerald-700 via-forest-850 to-slate-950",
    badge: "Instagram Reel",
    date: "Sep 2026",
    likes: "Lihat di IG",
    comments: "Instagram"
  },
  {
    id: "DbW1jlYJTMf",
    tag: "Instalasi Lahan",
    postNum: "REEL #02",
    title: "Pemasangan Titik Light Trap di Hamparan Sawah",
    desc: "Perjalanan tim mahasiswa memasang tiang mekanik dan perangkat perangkap hama di pematang sawah Desa Sajen.",
    url: "https://www.instagram.com/reel/DbW1jlYJTMf/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    gradient: "from-forest-850 via-emerald-800 to-slate-950",
    badge: "Instagram Reel",
    date: "Agu 2026",
    likes: "Lihat di IG",
    comments: "Instagram"
  },
  {
    id: "Dc4-sa-RJeE",
    tag: "Uji Telemetri LoRa",
    postNum: "REEL #03",
    title: "Pengujian Jaringan LoRa & Sensor Tanah",
    desc: "Uji transmisi paket data telemetri nirkabel dari sensor NPK ke stasiun gateway sentral di Balai Desa.",
    url: "https://www.instagram.com/reel/Dc4-sa-RJeE/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    gradient: "from-emerald-900 via-forest-900 to-slate-950",
    badge: "Instagram Reel",
    date: "Agu 2026",
    likes: "Lihat di IG",
    comments: "Instagram"
  }
];

// 2. Video YouTube Resmi PPKO E-BIO PENS
const youtubeVideosData = [
  {
    id: "P-T45rEoQqY",
    url: "https://youtu.be/P-T45rEoQqY?si=DlhFYsvxJRcPxuwB",
    embedUrl: "https://www.youtube.com/embed/P-T45rEoQqY?autoplay=1&rel=0",
    thumbnail: "https://i.ytimg.com/vi/P-T45rEoQqY/hqdefault.jpg",
    alt: "INOVASI SMART FARMING UNTUK DESA SAJEN | PPK ORMAWA E-BIO 2026",
    badge: "Smart Farming",
    duration: "Dokumentasi",
    channel: "PPKO E-BIO PENS",
    channelUrl: "https://www.youtube.com/@PPKOE-BIOPENS",
    meta: "PPKO E-BIO PENS • YouTube",
    title: "INOVASI SMART FARMING UNTUK DESA SAJEN | PPK ORMAWA E-BIO 2026",
    desc: "Dokumentasi penerapan teknologi Light Trap Surya IoT dan telemetri LoRa untuk pemberdayaan petani bawang merah Desa Sajen."
  },
  {
    id: "6Enm88DVPug",
    url: "https://youtu.be/6Enm88DVPug?si=Po7OcpPEc0nnUPOe",
    embedUrl: "https://www.youtube.com/embed/6Enm88DVPug?autoplay=1&rel=0",
    thumbnail: "https://i.ytimg.com/vi/6Enm88DVPug/hqdefault.jpg",
    alt: "PROUDLY PRESENT: VIDEO PROFIL DESA SAJEN | PPK ORMAWA E-BIO 2026",
    badge: "Profil Desa",
    duration: "Profil Wilayah",
    channel: "PPKO E-BIO PENS",
    channelUrl: "https://www.youtube.com/@PPKOE-BIOPENS",
    meta: "PPKO E-BIO PENS • YouTube",
    title: "PROUDLY PRESENT: VIDEO PROFIL DESA SAJEN | PPK ORMAWA E-BIO 2026",
    desc: "Eksplorasi potensi geografis, pertanian hortikultura, serta semangat gotong royong warga Desa Sajen, Pacet, Mojokerto."
  },
  {
    id: "lpZavXz9I24",
    url: "https://youtu.be/lpZavXz9I24?si=Nm3mxyt_Ei4E96lj",
    embedUrl: "https://www.youtube.com/embed/lpZavXz9I24?autoplay=1&rel=0",
    thumbnail: "https://i.ytimg.com/vi/lpZavXz9I24/hqdefault.jpg",
    alt: "BEHIND THE SCENES: PERSIAPAN MENUJU AKSI NYATA | PPK ORMAWA E-BIO 2026",
    badge: "Behind The Scenes",
    duration: "Aksi Nyata",
    channel: "PPKO E-BIO PENS",
    channelUrl: "https://www.youtube.com/@PPKOE-BIOPENS",
    meta: "PPKO E-BIO PENS • YouTube",
    title: "BEHIND THE SCENES: PERSIAPAN MENUJU AKSI NYATA | PPK ORMAWA E-BIO 2026",
    desc: "Kilas balik proses persiapan tim, riset lapangan, perakitan perangkat keras, dan perjalanan pengabdian mahasiswa PENS."
  }
];

// 3. Metadata Kanal YouTube Resmi
const youtubeChannelData = {
  name: "PPKO E-BIO PENS",
  handle: "@PPKOE-BIOPENS",
  channelId: "UCCd546i23bmMdQc01U7Cbag",
  url: "https://www.youtube.com/@PPKOE-BIOPENS",
  directUrl: "https://www.youtube.com/channel/UCCd546i23bmMdQc01U7Cbag"
};
