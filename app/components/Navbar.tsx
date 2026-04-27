"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Menu, X, User, ArrowRight, Home, Briefcase, GraduationCap } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
}

const Navbar = ({ allPosts = [] }: { allPosts?: Post[] }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // FIX SEARCH: Memastikan query bersih dari spasi dan filter berjalan akurat
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    
    // Kita filter berdasarkan judul
    return allPosts.filter((post) => {
      const title = post.title ? post.title.toLowerCase() : '';
      return title.includes(query);
    });
  }, [searchQuery, allPosts]);

  // Menutup menu saat link diklik (UX Mobile)
  const closeAll = () => {
    setIsSearchActive(false);
    setIsMobileMenuOpen(false);
    setSearchQuery('');
  };

  const navLinks = [
    { name: 'ASN', href: '/asn', icon: <Home className="w-5 h-5" /> },
    { name: 'BUMN', href: '/bumn', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'PPK', href: '/ppk', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'KARIR', href: '/karir', icon: <GraduationCap className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* OVERLAY: Blur background saat menu/search aktif */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[55] transition-all duration-500 ${
          isSearchActive || isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeAll}
      />

      <nav className="fixed w-full top-0 z-[60] bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* LOGO AREA */}
            <div className={`flex-shrink-0 transition-all duration-500 ${isSearchActive ? 'hidden md:flex' : 'flex'}`}>
              <a href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 overflow-hidden rounded-xl shadow-lg border border-slate-100">
                  <img src="https://png.pngtree.com/png-vector/20221124/ourlarge/pngtree-korpri-logo-in-gold-and-blue-colors-badge-png-image_6479348.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-900 leading-none tracking-tighter">Source<span className="text-blue-600">ASN</span></span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase">Portal Terpercaya</span>
                </div>
              </a>
            </div>

            {/* SEARCH ENGINE (Tengah) */}
            <div className={`flex-1 flex justify-center px-4 transition-all duration-500 ${
              isSearchActive ? 'absolute inset-x-0 mx-4 md:relative md:mx-0' : ''
            }`}>
              {!isSearchActive ? (
                <button 
                  onClick={() => setIsSearchActive(true)}
                  className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-100 rounded-full transition-all text-slate-400 hover:text-blue-600"
                >
                  <Search className="w-5 h-5 md:w-4 md:h-4" />
                </button>
              ) : (
                <div className="w-full max-w-2xl relative animate-in zoom-in-95 duration-300">
                  <div className="flex items-center bg-white border-2 border-blue-600 shadow-2xl rounded-2xl overflow-hidden">
                    <Search className="ml-4 w-5 h-5 text-blue-600" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Cari berita atau formasi..."
                      className="w-full px-4 py-4 text-slate-800 outline-none text-base"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={closeAll} className="p-4 text-slate-400 hover:text-red-500">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* FLOATING RESULTS */}
                  {searchQuery.trim().length > 0 && (
                    <div className="absolute top-full mt-3 w-full bg-white rounded-2xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden max-h-[60vh] overflow-y-auto">
                      {searchResults.length > 0 ? (
                        <div className="p-2">
                          {searchResults.map((post) => (
                            <a 
                              key={post.id} 
                              href={`/posts/${post.slug}`} 
                              onClick={closeAll}
                              className="flex items-center p-4 hover:bg-blue-50 rounded-xl transition-all group"
                            >
                              <div className="bg-blue-50 p-2 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors">
                                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-white" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{post.category}</span>
                                <span className="text-sm font-bold text-slate-800 line-clamp-1">{post.title}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="p-12 text-center">
                          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Search className="w-6 h-6 text-slate-300" />
                          </div>
                          <p className="text-slate-500 font-medium">Hasil tidak ditemukan</p>
                          <p className="text-slate-400 text-xs mt-1 italic">Coba gunakan kata kunci lain</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* NAVIGASI KANAN (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[11px] font-black text-slate-500 hover:text-blue-600 tracking-widest uppercase transition-colors">
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg shadow-blue-200 transition-all active:scale-95">
                Login
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            {!isSearchActive && (
              <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-slate-900">
                  <Menu className="w-7 h-7" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE SIDEBAR (MODERN BLURRY DESIGN) */}
        <div className={`fixed inset-y-0 right-0 w-[85%] max-w-xs bg-white/90 backdrop-blur-2xl shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.1)] z-[70] transform transition-transform duration-500 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
              <img src="https://png.pngtree.com/png-vector/20221124/ourlarge/pngtree-korpri-logo-in-gold-and-blue-colors-badge-png-image_6479348.png" alt="Logo" className="w-10 h-10 rounded-lg" />
              <button onClick={closeAll} className="p-2 bg-slate-100 rounded-full">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>
            
            <div className="space-y-3 flex-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={closeAll}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-50 shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-600 transition-all group"
                >
                  <div className="text-slate-400 group-hover:text-blue-600">
                    {link.icon}
                  </div>
                  <span className="text-base text-slate-700 group-hover:text-blue-600">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-4">
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-200">
                Login Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;