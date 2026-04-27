"use client";

import React, { useState, useMemo } from 'react';
import { Briefcase, GraduationCap, Building2, Users, ArrowRight } from 'lucide-react';
import PostCard from './Card'; 

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  image_url: string;
  author: string;
  date: string; // Tambahkan ini agar match dengan DB & Card
  tag: string;  // Tambahkan ini agar match dengan DB & Card
}

const CategoryExplorer = ({ allPosts = [] }: { allPosts: Post[] }) => {
  // State menggunakan huruf kecil sesuai ENUM di Database kamu
  const [activeTab, setActiveTab] = useState('cpns');

  const tabs = [
    { id: 'cpns', label: 'CPNS', icon: <Users className="w-4 h-4" /> },
    { id: 'bumn', label: 'BUMN', icon: <Building2 className="w-4 h-4" /> },
    { id: 'ppk', label: 'PPPK', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'karir', label: 'Tips Karir', icon: <Briefcase className="w-4 h-4" /> },
  ];

  // Filter data berdasarkan tab
  const filteredPosts = useMemo(() => {
    return allPosts
      .filter(post => post.category.toLowerCase() === activeTab.toLowerCase())
      .slice(0, 4); // Menampilkan 4 artikel terbaru per kategori
  }, [activeTab, allPosts]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[2px] bg-blue-600"></div>
            <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Update Sektoral</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Telusuri <span className="text-blue-600 text-outline-sm">Kategori</span>
          </h2>
        </div>
        
        {/* TAB NAVIGATION (Pill Style) */}
        <div className="flex flex-wrap gap-2 bg-white/50 backdrop-blur-md p-2 rounded-[2rem] border border-slate-200 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs transition-all duration-500 ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-xl'
                  : 'text-slate-500 hover:bg-white hover:text-blue-600'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT GRID (2 Columns for Landscape Cards) */}
      <div className="relative min-h-[500px]">
        {filteredPosts.length > 0 ? (
          <div 
            key={activeTab} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-700"
          >
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          /* Empty State yang lebih cantik */
          <div className="flex flex-col items-center justify-center py-32 bg-white/30 backdrop-blur-sm rounded-[3rem] border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <Briefcase className="w-8 h-8 text-slate-300" />
            </div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm">Belum Ada Informasi</h4>
            <p className="text-slate-500 text-xs mt-2">Konten untuk kategori {activeTab.toUpperCase()} sedang disiapkan.</p>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 flex justify-center">
        <a 
          href={`/category/${activeTab}`}
          className="group flex items-center gap-4 bg-white border border-slate-200 pl-8 pr-2 py-2 rounded-full hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl"
        >
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">
            Lihat Semua Berita {activeTab}
          </span>
          <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default CategoryExplorer;