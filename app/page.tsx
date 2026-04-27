import { connection } from "./lib/mysql";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BreakingNews from "./components/Breaking";
import CategoryExplorer from "./components/Category";
import PostCard from "./components/Card";
import FeaturedPosts from "./components/Featured"; // Kita gunakan komponen yang sudah di-redesign
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  // 1. Ambil data dari MySQL
  let rawPosts: any[] = [];
  try {
    const [rows]: any = await connection.query('SELECT * FROM posts ORDER BY id DESC');
    rawPosts = rows;
  } catch (error) {
    console.error("Database Connection Error:", error);
  }

  // 2. Logic Clean Category (Mencegah Error Parse)
  const posts = rawPosts.map((post: any) => {
    let displayCategory = "ASN"; // Default
    try {
      if (typeof post.category === 'string') {
        // Jika formatnya JSON {"nasional":"...", "lokal":"..."}
        if (post.category.startsWith('{')) {
          const parsed = JSON.parse(post.category);
          displayCategory = parsed.nasional || parsed.lokal || "ASN";
        } else {
          // Jika formatnya string biasa (enum)
          displayCategory = post.category;
        }
      }
    } catch (e) {
      displayCategory = "ASN";
    }
    return { ...post, category: displayCategory };
  });

  return (
    <main className="bg-white min-h-screen">
      {/* Header & Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <BreakingNews />

      {/* SECTION ARTIKEL TERBARU */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[2px] bg-blue-600"></div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">Kabar ASN</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Informasi <span className="text-blue-600">Terbaru</span>
            </h2>
          </div>
          <a href="/posts" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2">
            Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
          </a>
        </div>
<CategoryExplorer allPosts={posts} />
        {/* GRID ARTIKEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            // Data Dummy jika database belum ada isinya
            [1, 2, 3].map((i) => (
              <PostCard
                key={i}
                post={{
                  id: i,
                  title: i === 1 ? "Panduan Lengkap Pendaftaran CPNS 2026: Syarat & Dokumen" : "Loker BUMN PT Pertamina Batch 2 Dibuka: Cek Formasinya",
                  slug: "dummy-post",
                  content: "Berikut adalah rincian mengenai jadwal seleksi dan berkas yang harus disiapkan agar lolos tahap administrasi...",
                  category: i === 2 ? "BUMN" : "ASN",
                  created_at: "2026-04-27",
                }}
              />
            ))
          )}
        </div>
      </section>

      {/* Footer Elegan */}
      <footer className="border-t border-slate-100 pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">S</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-900">Source<span className="text-blue-600">ASN</span></span>
          </div>
          <p className="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase">
            © 2026 Portal Informasi Karir Sektor Publik Indonesia
          </p>
        </div>
      </footer>
    </main>
  );
}