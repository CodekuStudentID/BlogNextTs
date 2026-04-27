import { connection } from "./lib/mysql";
import Hero from "./components/Hero";
import BreakingNews from "./components/Breaking";
import CategoryExplorer from "./components/Category";
import PostCard from "./components/Card";
import WhatsappBridge from "./components/Whatsapp";
import LatestArticles from "./components/LastArtikel";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  let rawPosts: any[] = [];
  try {
    const [rows]: any = await connection.query('SELECT * FROM posts ORDER BY id DESC');
    rawPosts = rows;
  } catch (error) {
    console.error("Database Connection Error:", error);
  }

  const posts = rawPosts.map((post: any) => {
    let displayCategory = "ASN"; 
    try {
      if (typeof post.category === 'string' && post.category.startsWith('{')) {
        const parsed = JSON.parse(post.category);
        displayCategory = parsed.nasional || parsed.lokal || "ASN";
      } else {
        displayCategory = post.category || "ASN";
      }
    } catch (e) { displayCategory = "ASN"; }
    
    return { 
      ...post, 
      category: displayCategory,
      date: post.date ? post.date.toString() : new Date().toISOString(),
      tag: post.tag || "Umum"
    };
  });

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <BreakingNews />
      <CategoryExplorer allPosts={posts} />

      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[2px] bg-blue-600"></div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">Kabar Terbaru</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Informasi <span className="text-blue-600">Terhangat</span>
            </h2>
          </div>
          <a href="/posts" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2 group">
            Lihat Semua Artikel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {posts.length > 0 ? (
            posts.slice(0, 6).map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="col-span-full text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium italic">Tidak ada artikel di database.</p>
            </div>
          )}
        </div>
      </section>

      <WhatsappBridge />
      <LatestArticles initialPosts={posts}/>
    </div>
  );
}