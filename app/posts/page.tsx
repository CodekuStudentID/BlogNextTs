import { connection } from "../lib/mysql";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BreakingNews from "../components/Breaking";
import FeaturedPosts from "../components/Featured"; // Kita gunakan komponen yang sudah di-redesign

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
      {/* Section 3: Featured Posts (The Main Content) */}
      <div className="bg-white relative">
        {/* Dekorasi Background Halus agar tidak monoton */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/30 blur-[120px] -z-10" />
        
        {posts.length > 0 ? (
          <FeaturedPosts posts={posts} />
        ) : (
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <div className="py-20 border-2 border-dashed border-slate-100 rounded-[3rem]">
              <p className="text-slate-400 italic">Belum ada konten tersedia di SourceASN.</p>
            </div>
          </div>
        )}
      </div>

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