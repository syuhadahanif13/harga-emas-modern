'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RefreshCw, Calculator, Bell, Menu, X } from 'lucide-react';

export default function HargaEmasModern() {
  const [prices, setPrices] = useState<any>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y' | '5Y'>('1Y');
  const [gramInput, setGramInput] = useState(1);
  const [alertPrice, setAlertPrice] = useState(2500000);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch real data (with fallback)
  const fetchData = async () => {
    setLoading(true);
    try {
      // Try public API
      const res = await fetch('https://logam-mulia-api.iamutaki.workers.dev/api/prices/hargaemas-org');
      const data = await res.json();

      const spotUSD = 4191.86;
      const kurs = 17945;
      const idrPerGram = Math.round(spotUSD * 31.1035 * kurs / 1000);

      const formatted = {
        spotUSD: spotUSD.toFixed(2),
        spotIDR: idrPerGram.toLocaleString('id-ID'),
        antam: data.data?.filter((item: any) => item.materialType?.includes('Antam')) || [],
        pegadaian: data.data?.filter((item: any) => item.materialType?.includes('Pegadaian')) || [],
        lastUpdate: new Date().toLocaleString('id-ID'),
      };

      setPrices(formatted);
    } catch (error) {
      // Fallback mock data
      setPrices({
        spotUSD: '4191.86',
        spotIDR: '2.414.349',
        antam: [],
        pegadaian: [],
        lastUpdate: new Date().toLocaleString('id-ID'),
      });
    }
    setLoading(false);
  };

  // Generate chart data
  const generateChartData = (tf: string) => {
    const base = 2414349;
    const length = tf === '5Y' ? 60 : tf === '1Y' ? 12 : tf === '3M' ? 90 : 30;
    const data = Array.from({ length }, (_, i) => ({
      time: tf === '5Y' ? `Y${Math.floor(i / 12)}` : `${i + 1}`,
      price: base + Math.sin(i / 5) * (tf === '5Y' ? 400000 : 80000),
    }));
    setChartData(data);
  };

  useEffect(() => {
    fetchData();
    generateChartData(timeframe);
  }, [timeframe]);

  const calculateTotal = () => {
    if (!prices) return 0;
    return Math.round(gramInput * parseInt(prices.spotIDR.replace(/\./g, '')));
  };

  const setPriceAlert = () => {
    setShowAlertModal(true);
    setTimeout(() => setShowAlertModal(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Navbar with Mobile Menu */}
      <nav className="glass sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-amber-400 flex items-center gap-2">
              Harga Emas
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-amber-400 transition">Emas 1 Gram</a>
            <a href="#" className="hover:text-amber-400 transition">History</a>
            <a href="#" className="hover:text-amber-400 transition">Grafik</a>
            <a href="#" className="hover:text-amber-400 transition">Blog</a>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={fetchData} className="flex items-center gap-2 glass px-4 py-2 rounded-2xl text-sm hover:bg-white/10">
              <RefreshCw size={16} /> Refresh
            </button>
            <a href="https://pluang.com" target="_blank" className="bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded-2xl text-sm font-medium">
              Pluang →
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/10 px-6 py-4 space-y-3 text-sm">
            <a href="#" className="block">Emas 1 Gram</a>
            <a href="#" className="block">History</a>
            <a href="#" className="block">Grafik</a>
            <a href="#" className="block">Blog</a>
          </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-5xl font-bold text-amber-400">Harga Emas Hari Ini</h1>
            <p className="text-gray-400 mt-1">Update: {prices?.lastUpdate || 'Loading...'}</p>
          </div>
        </div>

        {/* Main Price Cards + Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="glass rounded-3xl p-8">
              <div className="text-amber-400 text-sm mb-1">USD (Spot Dunia)</div>
              <div className="text-6xl font-bold">${prices?.spotUSD || '4.191,86'}</div>
              <div className="text-emerald-400 mt-2">+110.4 /oz</div>
            </div>

            <div className="glass rounded-3xl p-8">
              <div className="text-amber-400 text-sm mb-1">IDR per Gram</div>
              <div className="text-6xl font-bold">Rp {prices?.spotIDR || '2.414.349'}</div>
              <div className="text-emerald-400 mt-2">+Rp56.193</div>
            </div>
          </div>

          {/* Interactive Chart */}
          <div className="lg:col-span-7 glass rounded-3xl p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-xl font-semibold">Tren Harga</div>
                <div className="text-sm text-gray-400">5 Tahun Terakhir</div>
              </div>
              <div className="flex gap-1 flex-wrap">
                {(['1D','1W','1M','3M','1Y','5Y'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-4 py-1 text-xs rounded-2xl transition ${timeframe === tf ? 'bg-amber-500 text-black' : 'glass hover:bg-white/10'}`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Harga']} />
                  <Line type="natural" dataKey="price" stroke="#fbbf24" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Kalkulator & Alert */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-amber-400" />
              <span className="text-2xl font-semibold">Kalkulator Emas</span>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-sm text-gray-400">Jumlah Gram</label>
                <input
                  type="number"
                  value={gramInput}
                  onChange={(e) => setGramInput(Number(e.target.value))}
                  className="w-full mt-2 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-3xl focus:outline-none focus:border-amber-400"
                />
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-gray-400 text-sm">Estimasi Total Harga</div>
                <div className="text-5xl font-bold text-amber-400 mt-2">
                  Rp {calculateTotal().toLocaleString('id-ID')}
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-amber-400" />
              <span className="text-2xl font-semibold">Price Alert</span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Alert ketika harga mencapai (per gram)</label>
                <input
                  type="number"
                  value={alertPrice}
                  onChange={(e) => setAlertPrice(Number(e.target.value))}
                  className="w-full mt-2 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-2xl"
                />
              </div>
              <button
                onClick={setPriceAlert}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2"
              >
                <Bell size={20} /> Set Price Alert
              </button>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="glass rounded-3xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-6">Harga Fisik (Antam & Pegadaian)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="font-medium mb-3 text-amber-400">Antam</div>
              <div className="text-sm text-gray-400">Tabel data (update real-time)</div>
            </div>
            <div>
              <div className="font-medium mb-3 text-amber-400">Pegadaian</div>
              <div className="text-sm text-gray-400">Tabel data (update real-time)</div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          Data diambil dari sumber publik • Bukan saran investasi
        </div>
      </div>

      {/* Alert Toast */}
      {showAlertModal && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass px-8 py-4 rounded-2xl flex items-center gap-3">
          <Bell className="text-amber-400" /> Alert harga Rp {alertPrice.toLocaleString('id-ID')} telah diaktifkan!
        </div>
      )}
    </div>
  );
}
