"use client";

import React from 'react';
import { MessageCircle, Users, BellRing, ArrowRight, ShieldCheck } from 'lucide-react';

const WhatsappBridge = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-800 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-green-100">
        
        {/* Dekorasi Background (Abstract Light) */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-2xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Sisi Kiri: Pesan Utama */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <BellRing className="w-3.5 h-3.5 text-yellow-300 animate-bounce" />
              Update via WhatsApp
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
              Info Penting Langsung <br />
              di <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">WhatsApp Kamu.</span>
            </h2>
            
            <p className="text-emerald-50 text-lg font-medium max-w-xl opacity-90 leading-relaxed">
              Gabung di Saluran WhatsApp **SourceASN**. Dapatkan update loker BUMN dan CPNS 2026 paling pertama, gratis, dan privasi nomor HP kamu terjamin 100%.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-emerald-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-yellow-400" /> Nomor HP Tersembunyi
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <Users className="w-4 h-4 text-yellow-400" /> 50rb+ Pengikut
                </div>
            </div>
          </div>

          {/* Sisi Kanan: Call to Action (CTA) */}
          <div className="w-full lg:w-auto flex flex-col items-center gap-6">
            {/* Kartu Channel */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] flex flex-col items-center text-center w-full lg:w-[380px] shadow-2xl">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-6 transform hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-12 h-12 text-green-600 fill-green-600" />
              </div>
              
              <h4 className="text-2xl font-black text-white mb-1">SourceASN Official</h4>
              <p className="text-emerald-200 text-sm font-bold uppercase tracking-widest mb-8">Saluran WhatsApp</p>

              {/* Tombol Follow */}
              <a 
                href="https://whatsapp.com/channel/link-channel-kamu" 
                target="_blank" 
                className="group w-full bg-white hover:bg-yellow-400 text-green-900 px-8 py-5 rounded-2xl font-black uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-xl active:scale-95"
              >
                Ikuti Saluran
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            
            <p className="text-emerald-200 text-[9px] font-black uppercase tracking-[0.3em] opacity-60">
              Update Terakhir: Baru saja
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsappBridge;