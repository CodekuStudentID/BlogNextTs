"use client";

import React, { useState } from 'react';
import { Search, Edit3, Trash2, ExternalLink, Eye, Filter, Clock } from 'lucide-react';

export default function PostTableClient({ initialPosts }: { initialPosts: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = initialPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Toolbar Search */}
      <div className="relative max-w-md group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Cari judul artikel..."
          className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-blue-600 transition-all text-sm text-slate-900"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Artikel</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kategori</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredPosts.map((post) => (
              <tr key={post.id} className="group hover:bg-blue-50/30 transition-colors">
                <td className="px-8 py-6">
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{post.title}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{post.date}</p>
                </td>
                <td className="px-6 py-6">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase">
                    {post.category}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600"><ExternalLink size={18} /></button>
                    <button className="p-2 text-slate-400 hover:text-amber-600"><Edit3 size={18} /></button>
                    <button className="p-2 text-slate-400 hover:text-red-600"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}