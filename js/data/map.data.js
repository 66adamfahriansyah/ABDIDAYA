/**
 * E-BIO PENS — Data Modul: Peta Sebaran Titik Alat di Desa Sajen
 * Titik Koordinat Presisi Nyata Sesuai Citra Satelit Google Maps
 * Gateway: -7.661321, 112.528866 (Balai Desa Sajen, Mojokerto)
 * Node 1 sampai Node 5: Light Trap Node 1 - 5 (Desa Sajen, Mojokerto)
 * Data Sensor NPK diambil dari satu sumber web dashboard:
 * Nitrogen (N): 45 mg/kg | Fosfor (P): 30 mg/kg | Kalium (K): 25 mg/kg (Status: Subur)
 */

const mapDeploymentData = {
  center: [-7.661200, 112.528775],
  defaultZoom: 19,
  landBoundary: {
    name: "Batas Area Lahan Demplot Bawang Merah",
    areaHa: "2,0 Ha",
    farmerGroup: "Gapoktan Sumber Makmur",
    location: "Desa Sajen, Pacet, Mojokerto",
    description: "Kawasan hamparan lahan pertanian bawang merah seluas 2,0 Ha yang terproteksi oleh sistem monitoring E-BIO PENS dengan 5 unit Light Trap dan Gateway LoRa.",
    coordinates: [
      [-7.660880, 112.528520],
      [-7.660940, 112.529080],
      [-7.661180, 112.529140],
      [-7.661420, 112.528990],
      [-7.661400, 112.528610],
      [-7.661160, 112.528420]
    ]
  },
  npkSummary: {
    nitrogen: "45 mg/kg (0.45%)",
    phosphorus: "30 mg/kg (68.7 ppm)",
    potassium: "25 mg/kg (30.1 mg/100g)",
    status: "Subur",
    sensorModel: "DFRobot SEN0605"
  },
  gateway: {
    id: "gateway-central",
    name: "Gateway Sentral LoRa Desa Sajen",
    type: "gateway",
    location: "Balai Desa Sajen, Mojokerto",
    lat: -7.661321,
    lng: 112.528866,
    coverageKm: 15,
    status: "Online • Transceiver Siap",
    frequency: "LoRa 915 MHz (Bebas Pulsa)",
    connectedUnits: "5 Node Terhubung Penuh",
    desc: "Stasiun pusat transceiver LoRa di Balai Desa Sajen (-7.661321, 112.528866). Menerima transmisi dari Node 1 sampai Node 5 di sepanjang pematang sawah."
  },
  units: [
    {
      id: "unit-01",
      number: "1",
      name: "Light Trap Node 1",
      block: "Desa Sajen, Mojokerto",
      lat: -7.661265,
      lng: 112.528818,
      farmerGroup: "Kelompok Tani Sumber Makmur",
      areaHa: "1,2 Ha",
      elevation: "580 mdpl",
      solarCapacity: "100 Wp Monocrystalline",
      batteryStatus: "98% (LiFePO4 12.8V)",
      loraSignal: "RSSI -82 dBm (Sangat Kuat)",
      lightStatus: "Otomatis UV 365nm (Aktif 18.00 - 05.00)",
      sensorNPK: "N: 45 | P: 30 | K: 25 mg/kg",
      soilStatus: "Subur",
      soilMoisture: "68% (Optimal)",
      photo: "assets/lighttrap.jpg",
      status: "Aktif Normal",
      statusColor: "emerald"
    },
    {
      id: "unit-02",
      number: "2",
      name: "Light Trap Node 2",
      block: "Desa Sajen, Mojokerto",
      lat: -7.661204,
      lng: 112.528789,
      farmerGroup: "Kelompok Tani Sumber Makmur",
      areaHa: "1,5 Ha",
      elevation: "582 mdpl",
      solarCapacity: "100 Wp Monocrystalline",
      batteryStatus: "95% (LiFePO4 12.8V)",
      loraSignal: "RSSI -85 dBm (Sangat Kuat)",
      lightStatus: "Otomatis UV 365nm (Aktif 18.00 - 05.00)",
      sensorNPK: "N: 45 | P: 30 | K: 25 mg/kg",
      soilStatus: "Subur",
      soilMoisture: "64% (Lembap Normal)",
      photo: "assets/light_trap_field.jpg",
      status: "Aktif Normal",
      statusColor: "emerald"
    },
    {
      id: "unit-03",
      number: "3",
      name: "Light Trap Node 3",
      block: "Desa Sajen, Mojokerto",
      lat: -7.661161,
      lng: 112.528759,
      farmerGroup: "Kelompok Tani Sumber Makmur",
      areaHa: "1,8 Ha",
      elevation: "583 mdpl",
      solarCapacity: "100 Wp Monocrystalline",
      batteryStatus: "100% (LiFePO4 12.8V)",
      loraSignal: "RSSI -86 dBm (Sangat Kuat)",
      lightStatus: "Otomatis UV 365nm (Aktif 18.00 - 05.00)",
      sensorNPK: "N: 45 | P: 30 | K: 25 mg/kg",
      soilStatus: "Subur",
      soilMoisture: "70% (Optimal)",
      photo: "assets/paneldanbox.png",
      status: "Aktif Normal",
      statusColor: "emerald"
    },
    {
      id: "unit-04",
      number: "4",
      name: "Light Trap Node 4",
      block: "Desa Sajen, Mojokerto",
      lat: -7.661117,
      lng: 112.528728,
      farmerGroup: "Kelompok Tani Sumber Makmur",
      areaHa: "1,6 Ha",
      elevation: "584 mdpl",
      solarCapacity: "100 Wp Monocrystalline",
      batteryStatus: "94% (LiFePO4 12.8V)",
      loraSignal: "RSSI -89 dBm (Kuat)",
      lightStatus: "Otomatis UV 365nm (Aktif 18.00 - 05.00)",
      sensorNPK: "N: 45 | P: 30 | K: 25 mg/kg",
      soilStatus: "Subur",
      soilMoisture: "62% (Kering Terkendali)",
      photo: "assets/sensor.png",
      status: "Aktif Normal",
      statusColor: "emerald"
    },
    {
      id: "unit-05",
      number: "5",
      name: "Light Trap Node 5",
      block: "Desa Sajen, Mojokerto",
      lat: -7.661081,
      lng: 112.528679,
      farmerGroup: "Kelompok Tani Sumber Makmur",
      areaHa: "2,0 Ha",
      elevation: "585 mdpl",
      solarCapacity: "100 Wp Monocrystalline",
      batteryStatus: "96% (LiFePO4 12.8V)",
      loraSignal: "RSSI -91 dBm (Stabil)",
      lightStatus: "Otomatis UV 365nm (Aktif 18.00 - 05.00)",
      sensorNPK: "N: 45 | P: 30 | K: 25 mg/kg",
      soilStatus: "Subur",
      soilMoisture: "66% (Lembap Normal)",
      photo: "assets/lampu.png",
      status: "Aktif Normal",
      statusColor: "emerald"
    }
  ]
};
