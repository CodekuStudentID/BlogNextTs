import { connection } from "./lib/mysql";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BreakingNews from "./components/Breaking";
import CategoryExplorer from "./components/Category";
import PostCard from "./components/Card";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  // 1. Ambil data asli dari MySQL
  let rawPosts: any[] = [];
  try {
    const [rows]: any = await connection.query('SELECT * FROM posts ORDER BY id DESC');
    rawPosts = rows;
  } catch (error) {
    console.error("Database Connection Error:", error);
  }

  // 2. Logic Clean Category & Data Mapping
  const posts = rawPosts.map((post: any) => {
    let displayCategory = "ASN"; 
    try {
      if (typeof post.category === 'string') {
        if (post.category.startsWith('{')) {
          const parsed = JSON.parse(post.category);
          displayCategory = parsed.nasional || parsed.lokal || "ASN";
        } else {
          displayCategory = post.category;
        }
      }
    } catch (e) {
      displayCategory = "ASN";
    }
    
    return { 
      ...post, 
      category: displayCategory,
      // Pastikan field di bawah ini aman untuk dikirim ke PostCard
      date: post.date ? post.date.toString() : new Date().toISOString(),
      tag: post.tag || "Umum"
    };
  });

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <BreakingNews />

      {/* 3. SECTION CATEGORY EXPLORER (Tab System) */}
      <CategoryExplorer allPosts={posts} />

      {/* 4. SECTION ARTIKEL TERBARU (Grid System) */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[2px] bg-blue-600"></div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">Kabar Terbaru</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Informasi <span className="text-blue-600 text-outline-sm">Terhangat</span>
            </h2>
          </div>
          <a href="/posts" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2 group">
            Lihat Semua Artikel 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* GRID ARTIKEL (Menggunakan PostCard Full Image Landscape) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {posts.length > 0 ? (
            posts.slice(0, 6).map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium italic">Tidak ada artikel di database.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Minimalis */}
      <footer className="border-t border-slate-100 pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">S</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-900">
              Source<span className="text-blue-600">ASN</span>
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase">
            © 2026 Portal Informasi Karir Sektor Publik Indonesia
          </p>
        </div>
      </footer>
    </main>
  );
}