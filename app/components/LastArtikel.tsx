"use client";

import React, { useState } from 'react';
import { ArrowRight, Plus, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  image_url: string;
  date: string;
  tag: string;
  author: string;
}

const LatestArticles = ({ initialPosts }: { initialPosts: Post[] }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    // Simulasi loading sebentar agar terasa natural
    setTimeout(() => {
      setVisibleCount(prev => prev + 4);
      setLoading(false);
    }, 800);
  };

  const currentPosts = initialPosts.slice(0, visibleCount);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-50">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
          Arsip <span className="text-blue-600">Berita</span>
        </h2>
        <div className="hidden md:block h-[1px] flex-1 mx-8 bg-slate-100"></div>
      </div>

      {/* GRID / LIST CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {currentPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`} className="group">
            <article className="flex flex-row items-start gap-4 md:gap-6 bg-white p-3 md:p-0 rounded-2xl md:rounded-none transition-all">
              
              {/* GAMBAR (KIRI) */}
              <div className="relative flex-shrink-0 w-28 h-28 md:w-48 md:h-32 overflow-hidden rounded-xl shadow-md">
                <img 
                  src={post.image_url} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TEKS (KANAN) */}
              <div className="flex flex-col flex-1 py-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                  </span>
                </div>

                <h3 className="text-sm md:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>

                <div className="hidden md:flex items-center gap-2 mt-auto">
                   <Tag className="w-3 h-3 text-slate-300" />
                   <span className="text-[10px] text-slate-400 font-medium">#{post.tag}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < initialPosts.length && (
        <div className="mt-16 text-center">
          <button 
            onClick={loadMore}
            disabled={loading}
            className="inline-flex items-center gap-3 bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                 <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                 Memuat...
              </span>
            ) : (
              <>
                Muat Lebih Banyak
                <Plus className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestArticles;