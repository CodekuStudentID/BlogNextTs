"use client";

import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Dekorasi Background Halus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-slate-50 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge Trending */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
              Update Hari Ini: Pendaftaran PPPK 2026
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Navigasi Karir <span className="text-blue-600">Masa Depan</span> Anda di Sektor Publik.
          </h1>

          {/* Subheading */}
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Satu pintu menuju informasi valid seleksi <span className="font-medium text-slate-800">CPNS, PPPK, BUMN,</span> dan peluang karir strategis lainnya di seluruh penjuru Indonesia.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group">
              Cari Formasi Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              Panduan Pendaftaran
            </button>
          </div>

          {/* Social Proof / Stats Halus */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-t border-slate-100 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">500+</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-1">Update Formasi</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">24/7</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-1">Validasi Data</p>
            </div>
            <div className="text-center hidden md:block">
              <p className="text-2xl font-bold text-slate-900">Gratis</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-1">Akses Informasi</p>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Elements (Opsional - Beri kesan teknologi tinggi) */}
      <div className="hidden lg:block absolute top-1/4 left-10 animate-bounce duration-[3000ms]">
          <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 tracking-tight">Verified Source</p>
                  <p className="text-[10px] text-slate-400">Data resmi pemerintah</p>
              </div>
          </div>
      </div>

      <div className="hidden lg:block absolute bottom-1/4 right-10 animate-pulse">
          <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 tracking-tight">Real-time Alert</p>
                  <p className="text-[10px] text-slate-400">Notifikasi instan</p>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;