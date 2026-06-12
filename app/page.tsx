'use client';

import React, { useState } from 'react';

export default function HargaEmasClone() {
  const [timeframe, setTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y' | '5Y'>('1Y');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-[#3b2f1f]">Harga-Emas.org</div>
            
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-amber-600 transition">Emas 1 Gram</a>
              <a href="#" className="hover:text-amber-600 transition">History</a>
              <a href="#" className="hover:text-amber-600 transition">Grafik</a>
              <a href="#" className="hover:text-amber-600 transition">Perak 1 Gram</a>
              <a href="#" className="hover:text-amber-600 transition">Blog</a>
              <a href="#" className="hover:text-amber-600 transition">FAQ</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-5 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50 transition">
              Download
            </button>
            <a 
              href="https://pluang.com" 
              target="_blank"
              className="px-6 py-2 bg-[#f4a261] hover:bg-[#e07b39] transition text-white rounded-full text-sm font-medium"
            >
              Pluang →
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Harga Emas Hari Ini</h1>
          <p className="text-gray-500 mt-1">Pada 12 Jun 2026, 11.20 WIB</p>
        </div>

        {/* Main Price Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* USD Card */}
          <div className="bg-[#fff8e7] border border-[#f4d9b0] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <span>🇺🇸</span>
              <span className="font-semibold">USD (Spot Dunia)</span>
            </div>
            <div className="text-5xl font-bold tracking-tight">$4.191,86</div>
            <div className="text-green-600 mt-1">(+110,4) /oz</div>
            <div className="mt-4 text-2xl">$134,77 <span className="text-base text-green-600">(+3,55) /gr</span></div>
          </div>

          {/* IDR Card */}
          <div className="bg-[#fff8e7] border border-[#f4d9b0] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <span>🇮🇩</span>
              <span className="font-semibold">IDR (Spot Dunia)</span>
            </div>
            <div className="text-3xl font-bold">Rp17.945,22</div>
            <div className="text-green-600">(+Rp28,24) /usd</div>
            
            <div className="mt-3">
              <div className="text-2xl font-bold">Rp75.223.850</div>
              <div className="text-green-600 text-sm">(+Rp1.747.807) /oz</div>
              <div className="mt-1 text-xl">Rp2.414.349 <span className="text-green-600">(+Rp56.193) /gr</span></div>
            </div>
          </div>

          {/* Chart with Time Tabs */}
          <div className="bg-white border rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-semibold text-lg">Rp2.455.416/g</div>
                <div className="text-green-600 text-sm">+Rp1.578.979 (180.16%)</div>
              </div>
              <div className="text-right text-xs text-gray-500">Didukung oleh<br />Pluang</div>
            </div>

            {/* Timeframe Tabs */}
            <div className="flex gap-1 mb-4 flex-wrap">
              {(['1D', '1W', '1M', '3M', '1Y', '5Y'] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 text-xs rounded transition ${timeframe === tf 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  {tf}
                </button>
              ))}
            </div>

            <div className="flex-1 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 text-sm mb-4 min-h-[160px]">
              [Chart Interaktif - {timeframe}]
            </div>

            <button className="w-full bg-[#2563eb] hover:bg-blue-700 text-white py-3 rounded-xl font-medium text-sm transition">
              Beli Emas di Pluang
            </button>
          </div>
        </div>

        {/* Spot Harga Emas Table */}
        <div className="mb-10">
          <div className="bg-[#fff8e7] px-4 py-2.5 rounded-t-2xl border border-b-0 border-[#f4d9b0]">
            <span className="font-semibold">Spot Harga Emas Hari Ini</span>
          </div>
          <table className="w-full text-sm border border-[#f4d9b0]">
            <thead>
              <tr className="bg-[#fff8e7]">
                <th className="p-3 text-left">Satuan</th>
                <th className="p-3 text-right">USD</th>
                <th className="p-3 text-right">IDR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#f4d9b0]">
                <td className="p-3">Ounce (oz)</td>
                <td className="p-3 text-right">4.191,86</td>
                <td className="p-3 text-right">Rp75.223.850</td>
              </tr>
              <tr className="border-t border-[#f4d9b0]">
                <td className="p-3">Gram (gr)</td>
                <td className="p-3 text-right">134,77</td>
                <td className="p-3 text-right">Rp2.414.349</td>
              </tr>
              <tr className="border-t border-[#f4d9b0]">
                <td className="p-3">Kilogram (kg)</td>
                <td className="p-3 text-right">134.770</td>
                <td className="p-3 text-right">Rp2.414.349.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Antam & Pegadaian */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Antam */}
          <div>
            <div className="bg-[#fff8e7] px-4 py-2.5 rounded-t-2xl flex items-center gap-2 border border-b-0 border-[#f4d9b0]">
              <span>🔴</span>
              <span className="font-semibold">Antam</span>
            </div>
            <table className="w-full text-sm border border-[#f4d9b0]">
              <thead>
                <tr className="bg-[#fff8e7]">
                  <th className="p-3 text-left font-normal">Gram</th>
                  <th className="p-3 text-right font-normal">per Gram (Rp)</th>
                </tr>
              </thead>
              <tbody>
                {[1000,500,250,100,50,25,10,5,2,1,0.5].map((g, index) => (
                  <tr key={index} className="border-t border-[#f4d9b0]">
                    <td className="p-3">{g}</td>
                    <td className="p-3 text-right font-medium">Rp {(2649600000 * g / 1000).toLocaleString('id-ID')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">Update: 12 Juni 2026 pukul 04.02 • Buyback: Rp2.573.100/grm</p>
          </div>

          {/* Pegadaian */}
          <div>
            <div className="bg-[#fff8e7] px-4 py-2.5 rounded-t-2xl flex items-center gap-2 border border-b-0 border-[#f4d9b0]">
              <span>🔴</span>
              <span className="font-semibold">Pegadaian</span>
            </div>
            <table className="w-full text-sm border border-[#f4d9b0]">
              <thead>
                <tr className="bg-[#fff8e7]">
                  <th className="p-3 text-left font-normal">Gram</th>
                  <th className="p-3 text-right font-normal">per Gram (Rp)</th>
                </tr>
              </thead>
              <tbody>
                {[1000,500,250,100,50,25,10,5,2,1,0.5].map((g, index) => (
                  <tr key={index} className="border-t border-[#f4d9b0]">
                    <td className="p-3">{g}</td>
                    <td className="p-3 text-right font-medium">Rp {(2654779000 * g / 1000).toLocaleString('id-ID')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">Update: 28 Mei 2026</p>
          </div>
        </div>

        {/* UBS Gold */}
        <div className="mb-10">
          <div className="bg-[#fff8e7] px-4 py-2.5 rounded-t-2xl flex items-center gap-2 border border-b-0 border-[#f4d9b0]">
            <span>💎</span>
            <span className="font-semibold">UBS Gold 99.99%</span>
          </div>
          <table className="w-full text-sm border border-[#f4d9b0]">
            <thead>
              <tr className="bg-[#fff8e7]">
                <th className="p-3 text-left font-normal">Gram</th>
                <th className="p-3 text-right font-normal">Jual (Rp)</th>
                <th className="p-3 text-right font-normal">Beli (Rp)</th>
              </tr>
            </thead>
            <tbody>
              {[0.1, 0.25, 0.5, 1, 2, 3, 4, 5, 10, 25, 50, 100].map((g, index) => (
                <tr key={index} className="border-t border-[#f4d9b0]">
                  <td className="p-3">{g}</td>
                  <td className="p-3 text-right">{(352500 * g).toLocaleString('id-ID')}</td>
                  <td className="p-3 text-right">{(238000 * g).toLocaleString('id-ID')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pluang Promo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-5">
            <h4 className="font-semibold mb-2">Mudah Miliki Emas dengan Cicilan</h4>
            <p className="text-sm text-gray-600">Tidak perlu modal besar. Mulai investasi sekarang dengan proses cepat, angsuran hingga 36 bulan.</p>
          </div>
          <div className="border rounded-2xl p-5">
            <h4 className="font-semibold mb-2">Investasi Emas Secara Otomatis dengan Investasi Rutin</h4>
            <p className="text-sm text-gray-600">Atur pembelian Emas secara otomatis untuk menumbuhkan kekayaan kamu.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
