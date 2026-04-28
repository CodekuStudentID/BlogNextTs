import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  FileText, 
  Trash2, 
  Globe, 
  LogOut, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* SIDEBAR KHUSUS ADMIN */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-10 space-y-4">
              
              {/* Card User & Menu */}
              <div className="bg-slate-900 rounded-[2.5rem] p-6 shadow-2xl shadow-slate-200">
                {/* Branding / Logo Admin */}
                <div className="flex items-center gap-4 mb-8 px-2">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                    <img src="https://png.pngtree.com/png-vector/20221124/ourlarge/pngtree-korpri-logo-in-gold-and-blue-colors-badge-png-image_6479348.png" alt="Logo" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm tracking-tight">Redaksi</h4>
                    <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest">SourceASN</p>
                  </div>
                </div>

                {/* Navigasi Link */}
                <nav className="space-y-1">
                  <MenuLink href="/admin/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
                  <MenuLink href="/admin/posts" icon={<FileText size={20} />} label="Semua Posts" />
                  <MenuLink href="/admin/trash" icon={<Trash2 size={20} />} label="Tempat Sampah" />
                  <div className="my-4 border-t border-white/5" />
                  <MenuLink href="/" icon={<Globe size={20} />} label="Lihat Website" />
                </nav>

                {/* Logout */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button className="w-full flex items-center gap-3 p-4 text-red-400 hover:bg-red-500/10 rounded-2xl transition-all font-bold text-sm group">
                    <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Keluar
                  </button>
                </div>
              </div>

              {/* Status Info Card */}
              <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Sistem Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-slate-700">Server Terhubung</span>
                </div>
              </div>
            </div>
          </aside>

          {/* AREA KONTEN (PAGE.TSX AKAN MUNCUL DI SINI) */}
          <main className="flex-1 min-w-0">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
}

// Komponen Pembantu Link agar kode lebih bersih
function MenuLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center justify-between p-4 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-bold">{label}</span>
      </div>
      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </Link>
  );
}