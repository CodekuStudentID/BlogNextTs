"use client";

import React from 'react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  image_url: string;
  date: string;
  author: string;
  tag: string;
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="relative group w-full h-[300px] md:h-[350px] overflow-hidden rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20">
      
      {/* 1. FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={post.image_url || 'https://images.unsplash.com/photo-1454165833767-027ffeb99cbe?q=80&w=800'} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* VIGNETTE OVERLAY: Gelap di kiri dan bawah agar teks putih "Pop Out" */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent z-10" />
      </div>

      {/* 2. CONTENT LAYER (Di atas Gambar) */}
      <div className="relative z-20 h-full w-full p-6 md:p-10 flex flex-col justify-between">
        
        {/* ATAS: Badge & Tag */}
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg">
            {post.category}
          </span>
          <span className="text-white/80 text-[10px] font-medium flex items-center gap-1 bg-black/20 backdrop-blur-md px-2 py-1 rounded-md">
            <Tag className="w-3 h-3 text-blue-400" /> #{post.tag}
          </span>
        </div>

        {/* BAWAH: Judul, Deskripsi & Meta */}
        <div className="flex flex-col gap-3">
          {/* Judul: Putih, Clean, Tidak Berlebihan */}
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {/* Preview Deskripsi: Halus & Sopan */}
          <p className="text-slate-200 text-sm leading-relaxed line-clamp-2 font-light max-w-2xl">
            {post.content}
          </p>

          {/* Footer Card: Author, Date & Button */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center border border-white/20 shadow-inner">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-wide">{post.author}</span>
                <span className="text-[9px] text-slate-300 flex items-center gap-1 italic">
                  <Calendar className="w-3 h-3" /> 
                  {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>

            {/* Tombol: Membulat (Border Radius) & Stand Out */}
            <Link href={`/posts/${post.slug}`}>
              <div className="bg-white hover:bg-blue-600 text-slate-900 hover:text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group/btn shadow-xl active:scale-95">
                <span className="text-[10px] font-black uppercase tracking-widest">Detail</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
};

export default PostCard;