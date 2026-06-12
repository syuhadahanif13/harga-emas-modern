'use client';

import React from 'react';
import { Gem, Download } from 'lucide-react';

export default function HargaEmasClone() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-[#3b2f1f]">Harga-Emas.org</div>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-amber-600">Emas 1 Gram</a>
            <a href="#" className="hover:text-amber-600">History</a>
            <a href="#" className="hover:text-amber-600">Grafik</a>
            <a href="#" className="hover:text-amber-600">Perak 1 Gram</a>
            <a href="#" className="hover:text-amber-600">Blog</a>
            <a href="#" className="hover:text-amber-600">FAQ</a>

            <button className="px-5 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
              Download
            </button>
            <a 
              href="https://pluang.com" 
              target="_blank"
              className="px-6 py-2 bg-[#f4a261] hover:bg-[#e07b39] text-white rounded-full text-sm font-medium flex items-center gap-2"
            >
              Pluang →
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header Harga Emas Hari Ini */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-1">Harga Emas Hari Ini</h1>
          <p className="text-gray-500">Pada 12 Jun 2026, 11.20 WIB</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* USD Spot */}
          <div className="bg-[#fff8e7] border border-[#f4d9b0] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span>🇺🇸</span>
              <span className="font-semibold">USD (Spot Dunia)</span>
            </div>
            <div className="text-4xl font-bold">$4.191,86</div>
            <div className="text-green-600 mt-1">(+110,4) /oz</div>
            <div className="mt-3 text-xl">$134,77 <span className="text-sm text-green-600">(+3,55) /gr</span></div>
          </div>

          {/* IDR Spot */}
          <div className="bg-[#fff8e7] border border-[#f4d9b0] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span>🇮🇩</span>
              <span className="font-semibold">IDR (Spot Dunia)</span>
            </div>
            <div className="text-3xl font-bold">Rp17.945,22</div>
            <div className="text-green-600">(+Rp28,24) /usd</div>
            
            <div className="mt-4">
              <div className="text-2xl font-bold">Rp75.223.850</div>
              <div className="text-green-600 text-sm">(+Rp1.747.807) /oz</div>
              <div className="text-xl mt-1">Rp2.414.349 <span className="text-green-600">(+Rp56.193) /gr</span></div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white border rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Rp2.455.416/g</span>
              <span className="text-green-600 text-sm">+Rp1.578.979 (180.16%)</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
              [Chart 5 Tahun Terakhir]
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#2563eb] hover:bg-blue-700 text-white py-3 rounded-xl font-medium">
                Beli Emas di Pluang
              </button>
            </div>
          </div>
        </div>

        {/* Antam & Pegadaian Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Antam */}
          <div>
            <div className="bg-[#fff8e7] px-4 py-2 rounded-t-2xl flex items-center gap-2">
              <span>🔴</span>
              <span className="font-semibold">Antam</span>
            </div>
            <table className="w-full border border-[#f4d9b0]">
              <thead>
                <tr className="bg-[#fff8e7]">
                  <th className="p-3 text-left">Gram</th>
                  <th className="p-3 text-right">per Gram (Rp)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1000,500,250,100,50,25,10,5,2,1,0.5].map((g, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">{g}</td>
                    <td className="p-3 text-right font-medium">Rp {(2649600000 * g / 1000).toLocaleString('id-ID')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">Update harga LM Antam: 12 Juni 2026 pukul 04.02 | Harga pembelian kembali: Rp2.573.100/grm</p>
          </div>

          {/* Pegadaian */}
          <div>
            <div className="bg-[#fff8e7] px-4 py-2 rounded-t-2xl flex items-center gap-2">
              <span>🔴</span>
              <span className="font-semibold">Pegadaian</span>
            </div>
            <table className="w-full border border-[#f4d9b0]">
              <thead>
                <tr className="bg-[#fff8e7]">
                  <th className="p-3 text-left">Gram</th>
                  <th className="p-3 text-right">per Gram (Rp)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1000,500,250,100,50,25,10,5,2,1,0.5].map((g, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">{g}</td>
                    <td className="p-3 text-right font-medium">Rp {(2654779000 * g / 1000).toLocaleString('id-ID')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">Update harga LM Pegadaian: 28 Mei 2026</p>
          </div>
        </div>

        {/* UBS Section */}
        <div className="mb-10">
          <div className="bg-[#fff8e7] px-4 py-2 rounded-t-2xl flex items-center gap-2 mb-1">
            <span>💎</span>
            <span className="font-semibold">UBS Gold 99.99%</span>
          </div>
          <div className="border border-[#f4d9b0] rounded-b-2xl p-4 text-sm">
            Tabel Jual & Beli UBS (mirip screenshot)
          </div>
        </div>

        {/* Pluang Promo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Space for more content */}
          </div>

          <div className="space-y-4">
            <div className="border rounded-2xl p-5">
              <h4 className="font-semibold mb-1">Mudah Miliki Emas dengan Cicilan</h4>
              <p className="text-sm text-gray-600">Tidak perlu modal besar. Mulai investasi sekarang dengan proses cepat, angsuran hingga 36 bulan.</p>
            </div>
            <div className="border rounded-2xl p-5">
              <h4 className="font-semibold mb-1">Investasi Emas Secara Otomatis</h4>
              <p className="text-sm text-gray-600">Atur pembelian Emas secara otomatis untuk menumbuhkan kekayaan kamu.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
