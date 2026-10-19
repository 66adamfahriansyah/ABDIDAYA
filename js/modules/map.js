/**
 * E-BIO PENS — Modul: Controller Peta Geospasial Leaflet
 * Menampilkan Jalur Lurus Node 1-5 (Titik Orange) dan Gateway Sentral
 * Sesuai Citra Satelit Google Maps Persawahan Desa Sajen, Pacet
 */

let sajenMap = null;
let currentTileLayer = null;
let landBoundaryLayer = null;
const mapMarkers = {};

// Tile layer satelit resolusi tinggi Google Hybrid & Esri
const mapTileLayers = {
  satellite: 'https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
  esri: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  streets: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
};

// Inisialisasi Peta Leaflet
function initSajenDeploymentMap() {
  const mapElement = document.getElementById('sajen-deployment-map');
  if (!mapElement || typeof L === 'undefined' || !EBIO_DATA.mapDeployment) return;

  const data = EBIO_DATA.mapDeployment;

  // Cegah inisialisasi ganda
  if (sajenMap) {
    sajenMap.remove();
    sajenMap = null;
    landBoundaryLayer = null;
  }

  // Buat instance peta Leaflet terpusat di demplot lahan
  sajenMap = L.map('sajen-deployment-map', {
    center: data.center,
    zoom: data.defaultZoom,
    minZoom: 14,
    maxZoom: 21,
    zoomControl: false,
    scrollWheelZoom: false // cegah scroll halaman sengaja terganggu
  });

  // Tambahkan kontrol zoom di kanan bawah
  L.control.zoom({ position: 'bottomright' }).addTo(sajenMap);

  // Set default tile layer: SATELIT HYBRID (Google Satelit dengan nama jalan & kontur sawah)
  currentTileLayer = L.tileLayer(mapTileLayers.satellite, {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 21,
    attribution: '&copy; Google Maps &copy; OpenStreetMap'
  }).addTo(sajenMap);

  // 1. BATAS AREA LAHAN TERPROTEKSI (Demplot 2,0 Ha - Garis Putus-putus Emerald Sesuai Legenda)
  if (data.landBoundary && Array.isArray(data.landBoundary.coordinates)) {
    landBoundaryLayer = L.polygon(data.landBoundary.coordinates, {
      color: '#10b981',
      weight: 2.5,
      opacity: 0.95,
      dashArray: '6, 8',
      fillColor: '#10b981',
      fillOpacity: 0.16,
      className: 'leaflet-land-boundary'
    }).addTo(sajenMap);

    landBoundaryLayer.bindTooltip(`
      <div class="px-2 py-1 font-sans text-xs">
        <span class="font-extrabold text-emerald-800 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
          Batas Area Lahan Terproteksi (2,0 Ha)
        </span>
        <span class="text-[10px] text-slate-500 font-medium block mt-0.5">Gapoktan Sumber Makmur • Desa Sajen</span>
      </div>
    `, {
      sticky: true,
      direction: 'top',
      className: 'custom-land-tooltip'
    });

    landBoundaryLayer.bindPopup(`
      <div class="p-3.5 max-w-xs font-sans text-slate-800">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono uppercase tracking-wide">
            Batas Demplot Lahan
          </span>
          <span class="text-[11px] font-bold text-emerald-700 font-mono">2,0 Ha</span>
        </div>
        <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 mb-1 leading-snug">
          Hamparan Pertanian Bawang Merah
        </h4>
        <p class="text-[11px] text-slate-600 mb-2.5 leading-relaxed">
          Wilayah demplot binaan seluas 2,0 Ha yang diproteksi secara real-time oleh 5 Node Light Trap mandiri bertenaga surya dan jaringan transceiver LoRa.
        </p>
        <div class="space-y-1.5 pt-2.5 border-t border-slate-100 text-[11px] text-slate-600">
          <div class="flex justify-between">
            <span class="text-slate-500">Kelompok Tani:</span>
            <span class="font-bold text-slate-800">Sumber Makmur</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Komoditas Utama:</span>
            <span class="font-bold text-emerald-700">Bawang Merah</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Unit Terpasang:</span>
            <span class="font-bold text-slate-800">5 Light Trap + 1 Gateway</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Kondisi Tanah:</span>
            <span class="font-bold text-emerald-700">Subur (N:45, P:30, K:25)</span>
          </div>
        </div>
      </div>
    `);
  }

  // 1. GARIS LURUS TELEMETRI NODE 1 - NODE 5 (Jalur Pematang Sawah Lurus - Warna Orange)
  const straightLineCoords = [
    [data.units[0].lat, data.units[0].lng], // Node 1: -7.661265, 112.528818
    [data.units[1].lat, data.units[1].lng], // Node 2: -7.661204, 112.528789
    [data.units[2].lat, data.units[2].lng], // Node 3: -7.661161, 112.528759
    [data.units[3].lat, data.units[3].lng], // Node 4: -7.661117, 112.528728
    [data.units[4].lat, data.units[4].lng]  // Node 5: -7.661081, 112.528679
  ];

  // Garis lurus jalur antar node pematang sawah (Orange Neon)
  L.polyline(straightLineCoords, {
    color: '#ea580c',
    weight: 4,
    opacity: 0.95,
    dashArray: '8, 8'
  }).addTo(sajenMap);

  // Garis koneksi nirkabel LoRa dari Gateway ke Node 1
  L.polyline([
    [data.gateway.lat, data.gateway.lng],
    [data.units[0].lat, data.units[0].lng]
  ], {
    color: '#06b6d4',
    weight: 2.5,
    opacity: 0.85,
    dashArray: '4, 6'
  }).addTo(sajenMap);

  // 2. MARKER GATEWAY SENTRAL (Icon Pin Biru Sesuai Titik Koordinat Gambar)
  const gatewayIcon = L.divIcon({
    className: 'custom-map-marker-gateway',
    html: `
      <div class="relative flex flex-col items-center cursor-pointer group">
        <span class="absolute -top-1 w-9 h-9 rounded-full bg-cyan-400/40 animate-ping"></span>
        <div class="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center shadow-xl border-2 border-white relative z-10 transition-transform group-hover:scale-125">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
        </div>
        <span class="mt-1 px-2 py-0.5 rounded bg-black/85 text-cyan-300 font-mono text-[9px] font-bold shadow-md border border-cyan-400/40 whitespace-nowrap">
          GATEWAY
        </span>
      </div>
    `,
    iconSize: [40, 48],
    iconAnchor: [20, 24]
  });

  const gatewayMarker = L.marker([data.gateway.lat, data.gateway.lng], { icon: gatewayIcon })
    .addTo(sajenMap)
    .bindPopup(`
      <div class="p-3 max-w-xs font-sans">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="px-2 py-0.5 rounded bg-cyan-600 text-white text-[10px] font-bold">GATEWAY SENTRAL</span>
          <span class="text-[11px] font-mono font-bold text-slate-800">${data.gateway.lat}, ${data.gateway.lng}</span>
        </div>
        <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">${data.gateway.name}</h4>
        <p class="text-[11px] text-slate-600 mb-2 leading-relaxed">${data.gateway.desc}</p>
        <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-cyan-700">
          <span>${data.gateway.connectedUnits}</span>
          <span class="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
        </div>
      </div>
    `);

  mapMarkers['gateway-central'] = gatewayMarker;

  gatewayMarker.on('click', () => {
    highlightUnitCard('gateway-central');
  });

  // 3. MARKER 5 NODE LIGHT TRAP (TITIK ORANGE PERSIS GAMBAR)
  data.units.forEach((unit) => {
    const unitIcon = L.divIcon({
      className: 'custom-map-marker-unit',
      html: `
        <div class="relative flex items-center justify-center cursor-pointer group">
          <span class="absolute w-7 h-7 rounded-full bg-orange-500/40 animate-ping"></span>
          <div class="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 text-white flex items-center justify-center shadow-lg border-2 border-white text-[10px] font-mono font-extrabold relative z-10 transition-transform group-hover:scale-125">
            ${unit.number}
          </div>
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const marker = L.marker([unit.lat, unit.lng], { icon: unitIcon })
      .addTo(sajenMap)
      .bindPopup(`
        <div class="p-3 max-w-xs font-sans text-slate-800">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold font-mono">NODE #${unit.number}</span>
            <span class="text-[10px] text-slate-500 font-semibold font-mono">${unit.lat}, ${unit.lng}</span>
          </div>
          <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 mb-0.5">${unit.name}</h4>
          <p class="text-[11px] text-emerald-700 font-semibold mb-2">Desa Sajen, Mojokerto</p>
          
          <div class="space-y-1.5 py-2 border-y border-slate-100 text-[11px] text-slate-600">
            <div class="flex justify-between">
              <span>Baterai LiFePO4:</span>
              <span class="font-bold text-emerald-700">${unit.batteryStatus}</span>
            </div>
            <div class="flex justify-between">
              <span>Sinyal LoRa:</span>
              <span class="font-mono font-bold text-slate-800">${unit.loraSignal}</span>
            </div>
            <div class="flex justify-between">
              <span>Sensor NPK:</span>
              <span class="font-bold text-emerald-700">${unit.sensorNPK}</span>
            </div>
            <div class="flex justify-between">
              <span>Status Tanah:</span>
              <span class="font-bold text-emerald-800">${unit.soilStatus} (DFRobot SEN0605)</span>
            </div>
          </div>
        </div>
      `);

    mapMarkers[unit.id] = marker;

    marker.on('click', () => {
      highlightUnitCard(unit.id);
    });
  });
}

// Fokus Peta ke Koordinat Tertentu
function focusMapLocation(lat, lng, zoom, unitId) {
  if (!sajenMap) return;

  sajenMap.invalidateSize();

  sajenMap.flyTo([lat, lng], zoom || 20, {
    duration: 1.0,
    easeLinearity: 0.25
  });

  if (unitId && mapMarkers[unitId]) {
    setTimeout(() => {
      mapMarkers[unitId].openPopup();
    }, 700);
    highlightUnitCard(unitId);
  }
}

// Fokus Peta ke Batas Area Lahan Demplot Terproteksi
function focusLandBoundary() {
  if (!sajenMap) return;

  sajenMap.invalidateSize();
  clearUnitCardHighlights();

  if (landBoundaryLayer) {
    sajenMap.fitBounds(landBoundaryLayer.getBounds(), {
      padding: [40, 40],
      maxZoom: 19,
      duration: 1.0
    });
    setTimeout(() => {
      landBoundaryLayer.openPopup();
    }, 700);
  } else if (EBIO_DATA.mapDeployment) {
    sajenMap.flyTo(EBIO_DATA.mapDeployment.center, EBIO_DATA.mapDeployment.defaultZoom, {
      duration: 1.0
    });
  }
}

// Reset Tampilan Peta ke Seluruh Titik Demplot Sajen
function resetMapSajenView() {
  if (!sajenMap || !EBIO_DATA.mapDeployment) return;
  sajenMap.invalidateSize();
  sajenMap.flyTo(EBIO_DATA.mapDeployment.center, EBIO_DATA.mapDeployment.defaultZoom, {
    duration: 1.0
  });
  sajenMap.closePopup();
  clearUnitCardHighlights();
}

// Ganti Layer Peta (Satelit / Jalan-Wilayah)
function toggleMapTileLayer(type) {
  if (!sajenMap || !currentTileLayer) return;

  sajenMap.removeLayer(currentTileLayer);

  let layerUrl = mapTileLayers.satellite;
  let attribution = '&copy; Google Maps &copy; OpenStreetMap';

  if (type === 'streets') {
    layerUrl = mapTileLayers.streets;
    attribution = '&copy; OpenStreetMap &copy; CARTO';
  } else if (type === 'esri') {
    layerUrl = mapTileLayers.esri;
    attribution = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
  }

  currentTileLayer = L.tileLayer(layerUrl, {
    subdomains: type === 'satellite' ? ['0', '1', '2', '3'] : 'abc',
    maxZoom: 21,
    attribution: attribution
  }).addTo(sajenMap);

  // Update Tampilan Tombol Layer Aktif
  const btnSat = document.getElementById('map-btn-layer-sat');
  const btnStr = document.getElementById('map-btn-layer-streets');

  if (btnSat && btnStr) {
    if (type === 'satellite' || type === 'esri') {
      btnSat.className = "px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow-xs";
      btnStr.className = "px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-white text-slate-700 hover:bg-slate-50";
    } else {
      btnStr.className = "px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow-xs";
      btnSat.className = "px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-white text-slate-700 hover:bg-slate-50";
    }
  }
}

// Sorot Kartu Unit di Daftar
function highlightUnitCard(unitId) {
  clearUnitCardHighlights();
  const card = document.getElementById(`card-${unitId}`);
  if (card) {
    card.classList.add('border-orange-500', 'bg-orange-50/50', 'ring-2', 'ring-orange-400/40');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Bersihkan Sorotan Kartu Unit
function clearUnitCardHighlights() {
  document.querySelectorAll('[id^="card-unit-"], #card-gateway-central').forEach((el) => {
    el.classList.remove('border-orange-500', 'bg-orange-50/50', 'ring-2', 'ring-orange-400/40', 'border-blue-500', 'ring-blue-400/30');
  });
}

// Ekspor ke Global Scope
if (typeof window !== 'undefined') {
  window.initSajenDeploymentMap = initSajenDeploymentMap;
  window.focusMapLocation = focusMapLocation;
  window.focusLandBoundary = focusLandBoundary;
  window.resetMapSajenView = resetMapSajenView;
  window.toggleMapTileLayer = toggleMapTileLayer;
}
