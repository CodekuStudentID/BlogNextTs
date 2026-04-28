import { connection } from "../../lib/mysql";
import { 
  LayoutDashboard, 
  FileText, 
  Trash2, 
  Globe, 
  LogOut, 
  PlusCircle, 
  TrendingUp, 
  Users, 
  ChevronRight,
  Clock
} from 'lucide-react';

export default async function DashboardPage() {
  // 1. AMBIL DATA REAL DARI DATABASE
  let posts: any[] = [];
  let stats = { total: 0, views: 0 };

  try {
    // Ambil 5 artikel terbaru untuk tabel
    const [rows]: any = await connection.query(
      'SELECT id, title, category, date, tag, views FROM posts ORDER BY id DESC LIMIT 5'
    );
    posts = rows;

    // Ambil statistik total
    const [countRows]: any = await connection.query(
      'SELECT COUNT(*) as total, SUM(views) as total_views FROM posts'
    );
    stats.total = countRows[0].total || 0;
    stats.views = countRows[0].total_views || 0;

  } catch (error) {
    console.error("Dashboard Data Error:", error);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-8 min-h-[700px]">
        
       

        {/* MAIN CONTENT AREA */}
        <main className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Ringkasan <span className="text-blue-600">Statistik</span>
              </h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">Data diambil langsung dari database pusat SourceASN.</p>
            </div>
            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
              <PlusCircle size={18} />
              Buat Artikel Baru
            </button>
          </div>

          {/* REAL STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <FileText size={24} />
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Total Artikel</p>
              <h3 className="text-4xl font-black text-slate-900 mt-2">{stats.total}</h3>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <TrendingUp size={24} />
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Total Views</p>
              <h3 className="text-4xl font-black text-slate-900 mt-2">
                {stats.views > 999 ? (stats.views / 1000).toFixed(1) + 'k' : stats.views}
              </h3>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                <Users size={24} />
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Poin Kualitas</p>
              <h3 className="text-4xl font-black text-slate-900 mt-2">A+</h3>
            </div>
          </div>

          {/* REAL ACTIVITY TABLE */}
          <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <h3 className="font-black text-slate-900 tracking-tight">Artikel Terbaru di Database</h3>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex items-center gap-2">
                <Clock size={12} /> Live
              </span>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <th className="px-4 py-4">Judul Artikel</th>
                    <th className="px-4 py-4">Kategori</th>
                    <th className="px-4 py-4">Views</th>
                    <th className="px-4 py-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {posts.length > 0 ? (
                    posts.map((post) => (
                      <tr key={post.id} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-6">
                          <p className="text-sm font-bold text-slate-800 line-clamp-1">{post.title}</p>
                          <p className="text-[10px] text-slate-400 font-medium">
                            {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })}
                          </p>
                        </td>
                        <td className="px-4 py-6">
                          <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded tracking-tighter uppercase">
                            {post.tag || 'Umum'}
                          </span>
                        </td>
                        <td className="px-4 py-6">
                          <span className="text-xs font-bold text-slate-600">{post.views || 0}</span>
                        </td>
                        <td className="px-4 py-6 text-right">
                          <button className="text-slate-400 hover:text-blue-600 font-bold text-xs transition-colors px-3 py-1 border border-transparent hover:border-blue-100 rounded-lg">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-4 py-20 text-center text-slate-400 italic">
                        Belum ada artikel di database.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}