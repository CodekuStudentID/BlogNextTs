"use client";
import { Search, SlidersHorizontal } from "lucide-react";

export default function CategoryHeader({ title }: { title: string }) {
  return (
    <div className="bg-slate-50 border-b border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          {/* Judul Kategori */}
          <div className="flex-1">
            <nav className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
              <span>Home</span>
              <span className="text-slate-300">/</span>
              <span>Kategori</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Seputar <span className="text-blue-600">{title}</span>
            </h1>
            <p className="mt-4 text-slate-500 max-w-xl leading-relaxed">
              Kumpulan informasi terbaru, panduan pendaftaran, hingga tips lolos seleksi {title} tahun 2026.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-[400px]">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Cari panduan CPNS..." 
                className="w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:border-blue-600 outline-none transition-all shadow-sm group-hover:border-slate-300"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-600" />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mt-10">
          <div className="flex items-center gap-2 text-slate-400 mr-2">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-xs font-bold uppercase">Filter:</span>
          </div>
          {["Semua", "Persyaratan", "Jadwal", "Formasi", "Latihan Soal"].map((filter) => (
            <button 
              key={filter}
              className="px-6 py-2 rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}