"use client";

import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-20 pb-24 lg:pt-32 lg:pb-40">
      
      {/* 1. BACKGROUND IMAGE DENGAN OVERLAY GELAP */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.menpan.go.id/site/images/berita_foto_backup/2025/Desember/20250112_-_DEP_BALAKS_-_Upacara_Peringatan_HUT_ke-54_Korpri_di_Kementerian_PANRB_1.jpeg" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient Overlay untuk keterbacaan teks */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
      </div>

      {/* 2. DEKORASI CAHAYA (BLUR) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge Trending */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-black text-blue-300 uppercase tracking-[0.2em]">
              Update 2026: Pendaftaran PPPK & CPNS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.95]">
            Navigasi Karir <span className="text-blue-500">Masa Depan</span> di Sektor Publik.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Satu pintu menuju informasi valid seleksi <span className="font-medium text-white border-b border-blue-500">CPNS, PPPK, dan BUMN</span>. Data resmi, akurat, dan terpercaya.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 group">
              Cari Formasi Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Panduan Lengkap
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 py-12 border-t border-white/10 max-w-3xl mx-auto">
            <div className="group">
              <p className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">500+</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">Update Harian</p>
            </div>
            <div className="group">
              <p className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">Real-Time</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">Validasi Data</p>
            </div>
            <div className="text-center hidden md:block group">
              <p className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">100%</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2">Gratis Diakses</p>
            </div>
          </div>

        </div>
      </div>

      {/* FLOATING ELEMENTS - SHADOW LEBIH GELAP & TEGAS */}
      <div className="hidden xl:block absolute top-1/3 left-12 animate-bounce duration-[4000ms]">
          <div className="bg-slate-800/80 backdrop-blur-xl p-5 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center gap-5 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                  <p className="text-sm font-black text-white tracking-tight">Verified Source</p>
                  <p className="text-[10px] text-slate-400 font-medium">Data Resmi Pemerintah</p>
              </div>
          </div>
      </div>

      <div className="hidden xl:block absolute bottom-1/3 right-12 animate-pulse duration-[3000ms]">
          <div className="bg-slate-800/80 backdrop-blur-xl p-5 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center gap-5 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                  <p className="text-sm font-black text-white tracking-tight">Instant Alert</p>
                  <p className="text-[10px] text-slate-400 font-medium">Notifikasi Formasi Baru</p>
              </div>
          </div>
      </div>

    </section>
  );
};

export default Hero;