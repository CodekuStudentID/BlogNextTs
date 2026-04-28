import { connection } from "../../lib/mysql";
import PostTableClient from "./PostTableClient";

export default async function PostsManagerPage() {
  let posts: any[] = [];
  try {
    const [rows]: any = await connection.query(
      'SELECT id, title, category, date, tag, views FROM posts ORDER BY id DESC'
    );
    
    // PERBAIKAN: Ubah object Date menjadi string
    posts = rows.map((post: any) => ({
      ...post,
      date: post.date instanceof Date 
        ? post.date.toISOString() // Mengubah object Date ke string ISO
        : post.date
    }));

  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          Manajemen <span className="text-blue-600">Konten</span>
        </h2>
        <p className="text-slate-500 text-sm mt-1 font-medium">
          Total {posts.length} artikel terbit di database.
        </p>
      </div>

      {/* Sekarang 'posts' berisi string, bukan object Date lagi */}
      <PostTableClient initialPosts={posts} />
    </div>
  );
}