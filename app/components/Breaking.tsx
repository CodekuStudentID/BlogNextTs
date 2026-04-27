"use client";

import React from 'react';
import { Megaphone, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Kita ambil data posts dari props agar sinkron dengan database
interface Post {
  id: number;
  title: string;
  slug: string;
}

const BreakingNews = ({ posts = [] }: { posts?: Post[] }) => {
  // Jika database kosong, kita pakai dummy agar tidak kosong melompong
  const displayNews = posts.length > 0 
    ? posts.slice(0, 5) 
    : [
        { id: 1, title: "Pendaftaran PPPK 2026 resmi dibuka, cek dokumen!", slug: "#" },
        { id: 2, title: "Loker BUMN Pertamina: Rekrutmen Besar-besaran S1", slug: "#" }
      ];

  return (
    <div className="bg-white border-b border-slate-100 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-14">
        
        {/* 1. LABEL: FIXED DENGAN GRADIENT */}
        <div className="relative z-20 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-xl shadow-lg shadow-blue-100 mr-4 group cursor-default">
          <Megaphone className="w-4 h-4 text-white animate-pulse" />
          <span className="text-[10px] font-black text-white uppercase tracking-wider whitespace-nowrap">
            Update Terkini
          </span>
          {/* Efek kilauan pada label */}
          <div className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* 2. TICKER CONTAINER */}
        <div className="relative flex-1 overflow-hidden h-full flex items-center">
          {/* Gradien pemudar di sisi kiri dan kanan agar teks tidak "terpotong" kasar */}
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />

          {/* ANIMASI PAUSE ON HOVER */}
          <div className="flex animate-ticker hover:[animation-play-state:paused] cursor-pointer">
            {/* Loop pertama */}
            {displayNews.map((item) => (
              <Link 
                key={item.id} 
                href={`/posts/${item.slug}`}
                className="flex items-center group/item mx-8 whitespace-nowrap"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-150 transition-transform shadow-sm shadow-blue-200" />
                <span className="text-sm font-bold text-slate-600 group-hover/item:text-blue-600 transition-colors">
                  {item.title}
                </span>
                <ChevronRight className="w-3 h-3 ml-2 text-slate-300 group-hover/item:text-blue-400 opacity-0 group-hover/item:opacity-100 transition-all" />
              </Link>
            ))}
            
            {/* Duplikasi konten untuk Seamless Looping */}
            {displayNews.map((item) => (
              <Link 
                key={`dup-${item.id}`} 
                href={`/posts/${item.slug}`}
                className="flex items-center group/item mx-8 whitespace-nowrap"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-150 transition-transform shadow-sm shadow-blue-200" />
                <span className="text-sm font-bold text-slate-600 group-hover/item:text-blue-600 transition-colors">
                  {item.title}
                </span>
                <ChevronRight className="w-3 h-3 ml-2 text-slate-300 group-hover/item:text-blue-400 opacity-0 group-hover/item:opacity-100 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;