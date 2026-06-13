'use client';

import React, { useState } from 'react';

export default function HargaEmasClone() {
  const [timeframe, setTimeframe] = useState<'1D'|'1W'|'1M'|'3M'|'1Y'|'5Y'>('1Y');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Navbar */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-[#3b2f1f]">Harga-Emas.org</div>
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-600">Emas 1 Gram</a>
              <a href="#" className="hover:text-amber-600">History</a>
              <a href="#" className="hover:text-amber-600">Grafik</a>
              <a href="#" className="hover:text-amber-600">Perak 1 Gram</a>
              <a href="#" className="hover:text-amber-600">Blog</a>
              <a href="#" className="hover:text-amber-600">FAQ</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50">Download</button>
            <a href="https://pluang.com" target="_blank" className="px-6 py-2 bg-[#f4a261] hover:bg-[#e07b39] text-white rounded-full text-sm font-medium flex items-center gap-1">
              Pluang →
            </a>
          </div>
        </div>
      </nav>

      {/* Pluang Banner */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">Pluang</div>
            <div>
              <span className="text-green-400 font-semibold">950+ Saham Indonesia</span><br />
              <span className="text-sm">Kini Hadir di Pluang</span>
            </div>
            <span className="bg-green-500 text-xs px-2 py-0.5 rounded">0% Biaya Trading</span>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="bg-black text-white px-4 py-1 rounded text-sm">Jual</button>
            <button className="bg-green-500 text-white px-4 py-1 rounded text-sm">Beli</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-1">Harga Emas Hari Ini</h1>
        <p className="text-gray-500 mb-8">Pada 12 Jun 2026, 11.20 WIB</p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: USD + IDR Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* USD Card */}
            <div className="bg-[#fff8e7] border border-[#f4d9b0] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span>🇺🇸</span>
                <span className="font-semibold">USD (Spot Dunia)</span>
              </div>
              <div className="text-5xl font-bold">$4.191,86</div>
              <div className="text-green-600">(+110,4) /oz</div>
              <div className="mt-3 text-2xl">$134,77 <span className="text-base text-green-600">(+3,55) /gr</span></div>
            </div>

            {/* IDR Card */}
            <div className="bg-[#fff8e7] border border-[#f4d9b0] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span>🇮🇩</span>
                <span className="font-semibold">IDR (Spot Dunia)</span>
              </div>
              <div className="text-3xl font-bold">Rp17.945,22</div>
              <div className="text-green-600">(+Rp28,24) /usd</div>
              <div className="mt-2 text-2xl">Rp75.223.850 <span className="text-sm">(+Rp1.747.807)/oz</span></div>
              <div className="mt-1 text-xl">Rp2.414.349 <span className="text-green-600">(+Rp56.193)/gr</span></div>
            </div>
          </div>

          {/* Right: Chart */}
          <div className="lg:col-span-7 bg-white border rounded-2xl p-6">
            <div className="flex justify-between mb-4">
              <div>
                <div className="text-2xl font-bold">Rp2.455.416/g</div>
                <div className="text-green-600">+Rp1.578.979 (180.16%)</div>
              </div>
              <div className="text-right text-xs text-gray-500">Didukung oleh Pluang<br />5 Tahun Terakhir</div>
            </div>

            <div className="flex gap-1 mb-4">
              {(['1D','1W','1M','3M','1Y','5Y'] as const).map(tf => (
                <button key={tf} onClick={() => setTimeframe(tf)} className={`px-3 py-1 text-xs rounded ${timeframe === tf ? 'bg-amber-500 text-white' : 'bg-gray-100'}`}>{tf}</button>
              ))}
            </div>

            <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
              [Chart Hijau Mirip Asli]
            </div>

            <div className="mt-4 flex justify-end">
              <button className="bg-[#2563eb] text-white px-8 py-2 rounded-xl text-sm">Beli</button>
            </div>
          </div>
        </div>

        {/* Spot Harga Emas Table */}
        <div className="mt-10">
          <div className="bg-[#fff8e7] px-4 py-2 rounded-t-2xl border border-b-0 border-[#f4d9b0]">
            <span className="font-semibold">Spot Harga Emas Hari Ini</span>
          </div>
          <table className="w-full text-sm border border-[#f4d9b0]">
            <thead className="bg-[#fff8e7]">
              <tr><th className="p-3 text-left">Satuan</th><th className="p-3 text-right">USD</th><th className="p-3 text-right">IDR</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3">Ounce (oz)</td><td className="p-3 text-right">4.191,86</td><td className="p-3 text-right">Rp75.223.850</td></tr>
              <tr className="border-t"><td className="p-3">Gram (gr)</td><td className="p-3 text-right">134,77</td><td className="p-3 text-right">Rp2.414.349</td></tr>
            </tbody>
          </table>
        </div>

        {/* Antam & Pegadaian */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="bg-[#fff8e7] px-4 py-2 rounded-t-2xl flex items-center gap-2 border border-b-0 border-[#f4d9b0]">
              <span>🔴</span> <span className="font-semibold">Antam</span>
            </div>
            <table className="w-full text-sm border border-[#f4d9b0]">
              <thead className="bg-[#fff8e7]"><tr><th className="p-3 text-left">Gram</th><th className="p-3 text-right">per Gram (Rp)</th></tr></thead>
              <tbody>
                {[1000,500,250,100,50,25,10,5,2,1,0.5].map((g,i) => <tr key={i} className="border-t"><td className="p-3">{g}</td><td className="p-3 text-right">Rp {(2649600000*g/1000).toLocaleString('id-ID')}</td></tr>)}
              </tbody>
            </table>
          </div>

          <div>
            <div className="bg-[#fff8e7] px-4 py-2 rounded-t-2xl flex items-center gap-2 border border-b-0 border-[#f4d9b0]">
              <span>🔴</span> <span className="font-semibold">Pegadaian</span>
            </div>
            <table className="w-full text-sm border border-[#f4d9b0]">
              <thead className="bg-[#fff8e7]"><tr><th className="p-3 text-left">Gram</th><th className="p-3 text-right">per Gram (Rp)</th></tr></thead>
              <tbody>
                {[1000,500,250,100,50,25,10,5,2,1,0.5].map((g,i) => <tr key={i} className="border-t"><td className="p-3">{g}</td><td className="p-3 text-right">Rp {(2654779000*g/1000).toLocaleString('id-ID')}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {/* UBS */}
        <div className="mt-8">
          <div className="bg-[#fff8e7] px-4 py-2 rounded-t-2xl flex items-center gap-2 border border-b-0 border-[#f4d9b0]">
            <span>💎</span> <span className="font-semibold">UBS Gold 99.99%</span>
          </div>
          <table className="w-full text-sm border border-[#f4d9b0]">
            <thead className="bg-[#fff8e7]"><tr><th className="p-3 text-left">Gram</th><th className="p-3 text-right">Jual (Rp)</th><th className="p-3 text-right">Beli (Rp)</th></tr></thead>
            <tbody>
              {[0.1,0.25,0.5,1,2,3,4,5,10,25,50,100].map((g,i) => <tr key={i} className="border-t"><td className="p-3">{g}</td><td className="p-3 text-right">{(352500 * g).toLocaleString('id-ID')}</td><td className="p-3 text-right">{(238000 * g).toLocaleString('id-ID')}</td></tr>)}
            </tbody>
          </table>
        </div>

        {/* Pluang Promo */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-5">
            <h4 className="font-semibold">Mudah Miliki Emas dengan Cicilan</h4>
            <p className="text-sm text-gray-600 mt-1">Tidak perlu modal besar. Mulai investasi sekarang dengan proses cepat, angsuran hingga 36 bulan.</p>
          </div>
          <div className="border rounded-2xl p-5">
            <h4 className="font-semibold">Investasi Emas Secara Otomatis dengan Investasi Rutin</h4>
            <p className="text-sm text-gray-600 mt-1">Atur pembelian Emas secara otomatis untuk menumbuhkan kekayaan kamu.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 border border-gray-300 rounded-full text-sm">Download Aplikasi Pluang</button>
        </div>
      </div>
    </div>
  );
}
