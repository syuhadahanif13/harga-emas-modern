'use client';

import { useState, useEffect } from 'react';
import { RefreshCw, Gem } from 'lucide-react';

export default function HargaEmasClone() {
  const [loading, setLoading] = useState(false);

  // Data contoh (nanti kita ganti dengan fetch real)
  const spotData = {
    usdOz: "4,186.56",
    usdGr: "134.6",
    idrOz: "75,128,740",
    idrGr: "2,414,378",
    change: "+81.47"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-black text-white">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold flex items-center gap-3">
              <Gem className="text-amber-400" /> Harga Emas Hari Ini
            </h1>
            <p className="text-amber-400">Platform perdagangan Emas dan Perak</p>
          </div>
          <button onClick={() => window.location.reload()} className="flex items-center gap-2 glass px-5 py-2 rounded-2xl">
            <RefreshCw size={18} /> Refresh
          </button>
        </div>

        <p className="text-sm text-gray-400 mb-6">Pada 12 Jun 2026, 08.55 WIB</p>

        {/* SPOT HARGA EMAS (mirip asli) */}
        <div className="glass rounded-3xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Spot Harga Emas Hari Ini</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* USD */}
            <div>
              <h3 className="text-amber-400 mb-2">USD (Spot Dunia)</h3>
              <div className="text-6xl font-bold">${spotData.usdOz}</div>
              <div className="text-2xl text-emerald-400">+{spotData.change} / oz</div>
              <div className="mt-2 text-xl">${spotData.usdGr} / gr</div>
            </div>

            {/* IDR */}
            <div>
              <h3 className="text-amber-400 mb-2">IDR (Spot Dunia)</h3>
              <div className="text-6xl font-bold">Rp {spotData.idrOz}</div>
              <div className="text-2xl text-emerald-400">+{spotData.change} / oz</div>
              <div className="mt-2 text-xl">Rp {spotData.idrGr} / gr</div>
            </div>
          </div>
        </div>

        {/* TABEL ANTam */}
        <div className="glass rounded-3xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Harga Antam</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3">Gram</th>
                  <th className="py-3">Harga (Rp)</th>
                </tr>
              </thead>
              <tbody>
                {[1000,500,250,100,50,25,10,5,2,1,0.5].map((g,i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-3">{g} gram</td>
                    <td className="py-3 font-bold">Rp {(2839000 * g).toLocaleString('id-ID')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">Update: 12 Juni 2026 pukul 01.32 | Buyback: Rp2.555.100/g</p>
        </div>

        {/* TABEL PEGADAIAN & UBS (mirip asli) */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Harga Pegadaian</h2>
            {/* Table sama seperti Antam */}
            <p className="text-sm text-gray-400">Data tabel mirip Antam (bisa kamu tambah nanti)</p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">UBS Gold 99.99%</h2>
            <p className="text-sm text-gray-400">Tabel Jual & Beli (0.1g - 100g)</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="glass rounded-3xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Grafik Harga Emas</h2>
          <div className="flex gap-2 mb-4">
            {['1D','1W','1M','3M','1Y','5Y'].map(t => (
              <button key={t} className="glass px-4 py-1 rounded-xl text-sm hover:bg-white/10">{t}</button>
            ))}
          </div>
          <div className="h-80 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400">
            [Chart Recharts akan diletakkan di sini — mirip asli]
          </div>
          <p className="text-center text-sm mt-2 text-amber-400">5 Tahun Terakhir • Didukung oleh Pluang</p>
        </div>

        {/* KURS BANK */}
        <div className="glass rounded-3xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Kurs Bank Indonesia (BI)</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10"><th>Kurs</th><th>Beli</th><th>Jual</th></tr>
            </thead>
            <tbody>
              {['USD','EUR','SGD','JPY'].map((c,i) => (
                <tr key={i} className="border-b border-white/10"><td>{c}</td><td>17.8812</td><td>18.0609</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Pluang (sama persis) */}
        <div className="text-center mt-12">
          <a href="https://pluang.com" target="_blank" className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-12 py-4 rounded-3xl text-xl hover:scale-105 transition">
            Beli Emas di Pluang →
          </a>
        </div>

      </div>
    </div>
  );
}
