"use client";

import React, { useState, useEffect } from 'react';
import { Search, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchActive(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navLinks = [
    { name: 'ASN', href: '/asn' },
    { name: 'BUMN', href: '/bumn' },
    { name: 'PPK', href: '/ppk' },
    { name: 'Honorer', href: '/honorer' },
    { name: 'Karir', href: '/karir' },
  ];

  return (
    <>
      {/* Overlay Blur */}
      <div 
        className={`fixed inset-0 bg-slate-900/10 backdrop-blur-md z-40 transition-opacity duration-500 ${
          isSearchActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSearchActive(false)}
      />

      <nav className="fixed w-full top-0 z-50 bg-white backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* 1. KIRI: LOGO */}
            <div className={`flex-shrink-0 transition-all duration-500 ${
              isSearchActive ? 'opacity-0 -translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'
            }`}>
              <a href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-blue-600 group-hover:bg-slate-900 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-100">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-[15px] font-bold text-slate-900 leading-none mb-1">Source<span className="text-blue-600 font-light text-slate-500">ASN</span></p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-medium">Informasi Karir</p>
                </div>
              </a>
            </div>

            {/* 2. TENGAH: SEARCH (The Hero Feature) */}
            <div className={`flex items-center transition-all duration-500 z-50 ${
              isSearchActive ? 'w-full max-w-2xl absolute left-1/2 -translate-x-1/2' : 'w-auto md:absolute md:left-1/2 md:-translate-x-1/2'
            }`}>
              {!isSearchActive ? (
                <button 
                  onClick={() => setIsSearchActive(true)}
                  className="flex items-center space-x-3 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-full transition-all group"
                >
                  <Search className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  <span className="hidden lg:inline text-[13px] text-slate-400 font-normal">Cari info CPNS, BUMN...</span>
                </button>
              ) : (
                <div className="flex items-center w-full bg-white border border-blue-500/20 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-top-2 duration-300">
                  <Search className="ml-5 w-5 h-5 text-blue-600" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Ketik kata kunci (misal: pendaftaran pppk)..."
                    className="w-full px-5 py-5 text-slate-700 outline-none text-[15px] placeholder:text-slate-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button 
                    onClick={() => setIsSearchActive(false)}
                    className="mr-3 p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* 3. KANAN: NAVIGATION & LOGIN */}
            <div className={`flex items-center space-x-8 transition-all duration-500 ${
              isSearchActive ? 'opacity-0 translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'
            }`}>
              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center space-x-7">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[12px] text-slate-500 hover:text-blue-600 transition-colors tracking-[0.1em] uppercase"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Login Button */}
              <div className="hidden sm:block">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-blue-200">
                  <User className="w-3.5 h-3.5" />
                  Login
                </button>
              </div>

              {/* Mobile Menu Trigger */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                >
                  {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-8 py-10 space-y-6 animate-in slide-in-from-top duration-500 fixed inset-0 top-20 z-[60]">
            <div className="space-y-4">
               {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block text-2xl font-semibold text-slate-800 hover:text-blue-600 transition-all border-b border-slate-50 pb-4">
                  {link.name}
                </a>
              ))}
            </div>
            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold mt-4 shadow-xl">
                Login ke Dashboard
            </button>
          </div>
        )}
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;