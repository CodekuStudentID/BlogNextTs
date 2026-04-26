"use client";

import React from 'react';
import { Calendar, User, ArrowUpRight, Clock } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  image_url?: string;
  author?: string;
  created_at: string;
}

export default function FeaturedPosts({ posts }: { posts: Post[] }) {
  // Ambil 3 artikel terbaru sebagai sorotan utama
  const featured = posts.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <div className="h-[2px] w-8 bg-blue-600"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Editor's Choice</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Berita <span className="font-light text-slate-500">Utama</span>
          </h2>
          <p className="text-slate-500 font-light max-w-md">
            Informasi seleksi dan karir paling krusial yang perlu Anda ketahui minggu ini.
          </p>
        </div>
        
        <button className="group flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 hover:border-blue-600 transition-all duration-300">
          <span className="text-[11px] font-bold text-slate-600 group-hover:text-blue-600 uppercase tracking-widest transition-colors">
            Lihat Semua Berita
          </span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </button>
      </div>

      {/* Grid Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {featured.map((post) => (
          <article key={post.id} className="group flex flex-col">
            {/* Image Wrapper */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 mb-8 shadow-2xl shadow-slate-200/40 border border-slate-100">
              <img 
                src={post.image_url || 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800'} 
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              {/* Floating Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/80 backdrop-blur-md border border-white/50 px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-700">
                    {post.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 flex flex-col px-2">
              <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> 
                  {new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                </span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-400" /> 
                  {post.author || 'Admin'}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 leading-[1.3] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-slate-500 font-light text-sm leading-relaxed line-clamp-2 mb-6">
                {post.content}
              </p>

              {/* Action Link */}
              <div className="mt-auto pt-4 border-t border-slate-50">
                <a href={`/posts/${post.id}`} className="inline-flex items-center gap-2 group/btn">
                   <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest transition-all group-hover/btn:mr-2">
                      Baca Detail
                   </span>
                   <div className="h-[2px] w-6 bg-blue-600 transition-all group-hover/btn:w-10"></div>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}