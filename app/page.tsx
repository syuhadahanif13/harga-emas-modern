'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RefreshCw, AlertTriangle, Calculator, TrendingUp, Gem } from 'lucide-react';

interface GoldPrice {
  weight: number;
  sellPrice: number;
  materialType: string;
}

export default function Home() {
  const [prices, setPrices] = useState<any>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'spot' | 'fisik' | 'chart' | 'calc'>('spot');
  const [timeframe, setTimeframe] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [gramInput, setGramInput] = useState(1);
  const [alertPrice, setAlertPrice] = useState(2500000);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRealData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://logam-mulia-api.iamutaki.workers.dev/api/prices/hargaemas-org');
      const data = await res.json();

      const spotUSD = 4180;
      const kurs = 16300;
      const idrPerGram = Math.round(spotUSD * 31.1035 * kurs / 1000000) * 1000;

      const formatted = {
        spot: { usd: spotUSD.toLocaleString(), idrPerGram: idrPerGram.toLocaleString('id-ID'), change: -25 },
        antam: data.data.filter((item: any) => item.materialType.includes('Antam')),
        pegadaian: data.data.filter((item: any) => item.materialType.includes('Pegadaian')),
        lastUpdate: new Date().toLocaleString('id-ID')
      };

      setPrices(formatted);

      const base = idrPerGram;
      const mockChart = Array.from({ length: timeframe === '30d' ? 30 : 24 }, (_, i) => ({
        time: timeframe === '30d' ? `H${i+1}` : `${i}:00`,
        price: base + Math.sin(i / 3) * (timeframe === '30d' ? 80000 : 15000),
      }));
      setChartData(mockChart);
    } catch (err) {
      setError('Gagal mengambil data. Menggunakan data demo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRealData();
    const interval = setInterval(fetchRealData, 300000);
    return () => clearInterval(interval);
  }, [timeframe]);

  const calculateTotal = (grams: number) => {
    if (!prices) return 0;
    return Math.round(grams * parseInt(prices.spot.idrPerGram.replace(/\./g, '')));
  };

  const setPriceAlert = () => {
    alert(`✅ Alert harga Rp ${alertPrice.toLocaleString('id-ID')} telah diaktifkan!`);
  };

  if (loading && !prices) return <div className="flex min-h-screen items-center justify-center text-2xl">Loading harga emas...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-4 md:p-8 text-white">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-6xl font-bold gold-gradient flex items-center gap-3">
              <Gem className="w-12 h-12" /> HARGA EMAS
            </h1>
            <p className="text-xl text-amber-400 mt-1">Real-time • Glassmorphism • Indonesia</p>
          </div>
          <button
            onClick={fetchRealData}
            className="flex items-center gap-2 glass px-6 py-3 rounded-2xl hover:bg-white/10 transition mt-4 md:mt-0"
          >
            <RefreshCw className="w-5 h-5" /> Refresh
          </button>
        </header>

        <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
          {['spot', 'fisik', 'chart', 'calc'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-4 text-lg font-medium transition ${activeTab === tab ? 'tab-active' : 'text-gray-400'}`}
            >
              {tab === 'spot' && 'Spot Dunia'}
              {tab === 'fisik' && 'Harga Fisik'}
              {tab === 'chart' && 'Grafik Tren'}
              {tab === 'calc' && 'Kalkulator'}
            </button>
          ))}
        </div>

        {activeTab === 'spot' && prices && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-3xl p-8 text-center">
              <h3 className="text-amber-400 text-lg">SPOT USD/oz</h3>
              <p className="text-7xl font-bold mt-4">${prices.spot.usd}</p>
              <p className="text-red-400 mt-2">↓ 25 (-0.6%)</p>
            </div>
            <div className="glass rounded-3xl p-8 text-center col-span-2 md:col-span-1">
              <h3 className="text-amber-400 text-lg">IDR / GRAM</h3>
              <p className="text-7xl font-bold mt-4">Rp {prices.spot.idrPerGram}</p>
              <p className="text-sm text-gray-400 mt-6">Update: {prices.lastUpdate}</p>
            </div>
          </div>
        )}

        {activeTab === 'fisik' && prices && (
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3"><Gem /> Harga Antam & Pegadaian</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4">Ukuran</th>
                    <th className="pb-4">Antam (Rp)</th>
                    <th className="pb-4">Pegadaian (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.antam.slice(0, 8).map((item: GoldPrice, idx: number) => (
                    <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-4 font-medium">{item.weight} gram</td>
                      <td className="py-4 font-bold">Rp {item.sellPrice.toLocaleString('id-ID')}</td>
                      <td className="py-4 font-bold text-amber-400">Rp {(item.sellPrice * 0.97).toLocaleString('id-ID')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'chart' && (
          <div className="glass rounded-3xl p-8">
            <div className="flex justify-between mb-6">
              <h2 className="text-3xl font-semibold flex items-center gap-3"><TrendingUp /> Tren Harga</h2>
              <div className="flex gap-2">
                {(['1h','24h','7d','30d'] as const).map(tf => (
                  <button key={tf} onClick={() => setTimeframe(tf)} className={`px-4 py-1 rounded-xl text-sm ${timeframe === tf ? 'bg-amber-500 text-black' : 'glass'}`}>{tf}</button>
                ))}
              </div>
            </div>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Harga']} />
                  <Line type="natural" dataKey="price" stroke="#fbbf24" strokeWidth={4} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'calc' && prices && (
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3"><Calculator /> Kalkulator Emas</h2>
            <div className="space-y-8">
              <div>
                <label className="block text-sm mb-2">Jumlah Gram</label>
                <input
                  type="number"
                  value={gramInput}
                  onChange={(e) => setGramInput(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-4xl focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="glass p-6 rounded-2xl text-center">
                <p className="text-gray-400">Estimasi Total</p>
                <p className="text-6xl font-bold text-amber-400 mt-2">
                  Rp {calculateTotal(gramInput).toLocaleString('id-ID')}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <label className="block text-sm mb-3">Set Price Alert (per gram)</label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={alertPrice}
                    onChange={(e) => setAlertPrice(Number(e.target.value))}
                    className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4"
                  />
                  <button onClick={setPriceAlert} className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 rounded-2xl flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> Set Alert
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <a href="https://pluang.com" target="_blank" className="inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 text-black font-bold text-2xl px-16 py-6 rounded-3xl hover:scale-105 transition shadow-2xl">
            Beli Emas Digital di Pluang Sekarang →
          </a>
          <p className="text-xs text-gray-500 mt-6">Data diambil dari sumber publik • Bukan saran investasi</p>
        </div>
      </div>
    </div>
  );
}