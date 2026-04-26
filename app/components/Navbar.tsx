"use client";

import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Menutup search saat menekan tombol Escape
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
      {/* Overlay Blur saat Search Aktif */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-md z-40 transition-opacity duration-300 ${
          isSearchActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSearchActive(false)}
      />

      <nav className="fixed w-full top-0 z-50 bg-white backdrop-blur-lg border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* LOGO: Clean & Thin Typography */}
            <div className={`flex-shrink-0 transition-opacity duration-300 ${isSearchActive ? 'opacity-0' : 'opacity-100'}`}>
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <span className="text-xl font-medium tracking-tight text-slate-800">
                  source<span className="font-light text-slate-500">asn</span>
                </span>
              </a>
            </div>

            {/* DESKTOP NAV: Thin & Minimalist */}
            <div className={`hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
              isSearchActive ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-medium text-slate-500 hover:text-blue-600 transition-colors tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* SEARCH AREA: Expandable Logic */}
            <div className={`flex items-center transition-all duration-500 ${
              isSearchActive ? 'w-full max-w-2xl absolute left-1/2 -translate-x-1/2' : 'w-auto'
            }`}>
              <div className="relative w-full flex items-center">
                {!isSearchActive ? (
                  <button 
                    onClick={() => setIsSearchActive(true)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <Search className="w-5 h-5 text-slate-500" />
                  </button>
                ) : (
                  <div className="flex items-center w-full bg-white border border-blue-500/30 shadow-2xl shadow-blue-500/10 rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                    <Search className="ml-4 w-5 h-5 text-blue-500" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Cari formasi CPNS, BUMN, atau info karir..."
                      className="w-full px-4 py-4 text-slate-700 outline-none text-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button 
                      onClick={() => setIsSearchActive(false)}
                      className="mr-2 p-2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* MOBILE TOGGLE */}
            <div className={`md:hidden ${isSearchActive ? 'hidden' : 'block'}`}>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu className="text-slate-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-6 space-y-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-lg font-medium text-slate-700">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      {/* Spacer agar konten tidak tertutup fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;