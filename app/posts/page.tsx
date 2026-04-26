import { connection } from "../lib/mysql";
import Navbar from "../components/Navbar";

export default async function HomePage() {
  // Ambil data dari MySQL
  const [rows]: any = await connection.query('SELECT * FROM posts ORDER BY id DESC');
  
  // Karena category di DB biasanya disimpan sebagai string/JSON, kita parse di sini
  const posts = rows.map((post: any) => {
    let parsedCategory = { nasional: "Umum", lokal: "Konten" }; // Default value
    try {
      parsedCategory = typeof post.category === 'string' 
        ? JSON.parse(post.category) 
        : post.category;
    } catch (e) {
      console.error("Gagal parse category untuk ID:", post.id);
    }
    return { ...post, category: parsedCategory };
  });

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
            My Blog Connect
          </h1>
          <p className="mt-3 text-xl text-slate-500">
            Testing Connection: Next.js + Remote MySQL Shared Hosting
          </p>
        </header>

        {/* Grid System */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <div 
              key={post.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
            >
              <div className="p-6 flex-1">
                {/* Badge Category (Nasional & Lokal) */}
                <div className="flex gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-lg border border-blue-100">
                    {post.category?.nasional || 'Nasional'}
                  </span>
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider text-emerald-600 uppercase bg-emerald-50 rounded-lg border border-emerald-100">
                    {post.category?.lokal || 'Lokal'}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                  {post.content}
                </p>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-mono bg-white px-2 py-1 rounded border border-gray-200">
                  ID: {post.id}
                </span>
                <button className="group text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1 transition-all">
                  Read More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 italic text-lg font-medium">Database kosong atau koneksi bermasalah.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}