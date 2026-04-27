"use client";

import React from 'react';
import { MessageCircle, Mail, MapPin, Globe, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Brand Profile */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                Source<span className="text-blue-600">ASN</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Portal informasi karir terdepan di Indonesia. Menyajikan berita akurat mengenai pendaftaran CPNS, BUMN, dan strategi pengembangan karir sektor publik.
            </p>
            <div className="flex items-center gap-4">
               <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <MessageCircle className="w-4 h-4" />
               </a>
               <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Globe className="w-4 h-4" />
               </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi Karir */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Eksplorasi</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="/asn" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Informasi CPNS</Link></li>
              <li><Link href="/bumn" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Lowongan BUMN</Link></li>
              <li><Link href="/pppk" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Update PPPK</Link></li>
              <li><Link href="/karir" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />Informasi Karir</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Legal & AdSense Requirements */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Halaman Hukum</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Kontak Resmi</h4>
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Jakarta Selatan, DKI Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>redaksi@sourceasn.id</span>
              </div>
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[11px] leading-relaxed italic opacity-60">
                  *SourceASN tidak bekerja sama dengan pihak manapun dalam hal pemungutan biaya pendaftaran.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center md:text-left">
            © {currentYear} <span className="text-slate-300">sourceasn.id</span> - Informasi Karir Masa Depan.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
             <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
             <span className="hover:text-white cursor-pointer transition-colors">RSS Feed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;