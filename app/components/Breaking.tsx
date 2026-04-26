"use client";

import React from 'react';
import { Megaphone } from 'lucide-react';

const BreakingNews = () => {
  // Data ini nantinya bisa kamu ambil dari database (limit 5 berita terbaru)
  const news = [
    "Pendaftaran PPPK 2026 resmi dibuka hari ini, cek dokumen wajib!",
    "Loker BUMN: PT Pertamina mencari lulusan S1 semua jurusan.",
    "Update: Ambang batas (Passing Grade) SKD CPNS 2026 mengalami perubahan.",
    "Kemenkeu umumkan hasil seleksi administrasi, cek nama Anda di sini.",
  ];

  return (
    <div className="bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-12">
        
        {/* Label: Fixed */}
        <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-blue-100 shadow-sm z-10 mr-4">
          <Megaphone className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-black text-blue-700 uppercase tracking-wider whitespace-nowrap">
            Update Terkini
          </span>
        </div>

        {/* Ticker Container */}
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-ticker whitespace-nowrap flex items-center">
            {news.map((item, index) => (
              <span 
                key={index} 
                className="text-[13px] text-slate-600 font-medium mx-10 hover:text-blue-600 cursor-pointer transition-colors flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                {item}
              </span>
            ))}
            {/* Duplikasi konten agar animasi looping mulus */}
            {news.map((item, index) => (
              <span 
                key={`dup-${index}`} 
                className="text-[13px] text-slate-600 font-medium mx-10 hover:text-blue-600 cursor-pointer transition-colors flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;