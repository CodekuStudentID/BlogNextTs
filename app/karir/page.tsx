import { connection } from "../lib/mysql";
import CategoryHeader from "../components/CategoryHeader";
import PostCard from "../components/Card";
import { Search, SlidersHorizontal } from "lucide-react";

export default async function KARIRpage({
    searchParams,
}: {
    searchParams: { q?: string; type?: string };
}) {
    const query = searchParams.q || "";
    const type = searchParams.type || "Semua";

    // 1. Ambil Data Real dari MySQL dengan Filter
    let sql = "SELECT * FROM posts WHERE (category LIKE '%ASN%' OR category LIKE '%KARIR%')";
    const params: any[] = [];

    // Logic Search
    if (query) {
        sql += " AND (title LIKE ? OR content LIKE ?)";
        params.push(`%${query}%`, `%${query}%`);
    }

    // Logic Filter Sub-Kategori (berdasarkan tag)
    if (type !== "Semua") {
        sql += " AND tag = ?";
        params.push(type);
    }

    sql += " ORDER BY id DESC";

    let posts: any[] = [];
    try {
        const [rows]: any = await connection.query(sql, params);
        posts = rows;
    } catch (error) {
        console.error("Database Error:", error);
    }

    return (
        <div className="bg-white min-h-screen">
            {/* HEADER DENGAN SEARCH & FILTER REAL */}
            <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                                Seputar <span className="text-blue-600">KARIR</span>
                            </h1>
                            <p className="mt-4 text-slate-500 max-w-xl">
                                Menampilkan {posts.length} informasi terbaru mengenai seleksi KARIR 2026.
                            </p>
                        </div>

                        {/* Form Search Real (Method GET ke URL sendiri) */}
                        <form action="/asn" className="w-full lg:w-[400px]">
                            <div className="relative group">
                                <input
                                    name="q"
                                    type="text"
                                    defaultValue={query}
                                    placeholder="Cari berita KARIR..."
                                    className="w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:border-blue-600 outline-none transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            </div>
                        </form>
                    </div>

                    {/* Filter Link Real */}
                    <div className="flex flex-wrap items-center gap-3 mt-10">
                        <div className="flex items-center gap-2 text-slate-400 mr-2">
                            <SlidersHorizontal className="w-4 h-4" />
                            {/* <span className="text-xs font-bold uppercase tracking-widest">Filter:</span> */}
                        </div>
                        {["Semua"].map((filter) => (
                            <a
                                key={filter}
                                href={`/karir?type=${filter}${query ? `&q=${query}` : ""}`}
                                className={`px-6 py-2 rounded-full border text-sm font-bold transition-all ${type === filter
                                        ? "bg-blue-600 border-blue-600 text-white"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                                    }`}
                            >
                                {filter}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIST KONTEN REAL */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8">
                        {posts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {posts.map((post) => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                                <p className="text-slate-500 font-bold">Maaf, data "{query}" tidak ditemukan.</p>
                                <a href="/karir" className="text-blue-600 text-sm font-bold mt-2 inline-block underline">Lihat semua berita</a>
                            </div>
                        )}
                    </div>

                    {/* SIDEBAR (Sticky) */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="sticky top-24">
                            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white mb-8">
                                <h3 className="text-xl font-bold mb-4 tracking-tight">Butuh Bantuan?</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Gabung komunitas pejuang KAIR untuk tanya jawab dan simulasi soal terbaru.</p>
                                <button className="w-full bg-blue-600 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all">Gabung Komunitas</button>
                            </div>

                            {/* Iklan Placeholder */}
                            {/* BANNER CTA - PREMIUM SIDEBAR ELEMENT */}
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-8 text-white shadow-xl shadow-blue-200">

                                {/* Dekorasi Cahaya Abstrak */}
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                                <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />

                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                                        <svg className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>

                                    <h3 className="mb-3 text-2xl font-black leading-tight tracking-tight">
                                        E-Book Sukses <br />KARIR 2026
                                    </h3>

                                    <div className="space-y-3">
                                        <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 py-4 text-xs font-black uppercase tracking-widest text-blue-900 transition-all hover:bg-white active:scale-95">
                                            Download Sekarang
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </button>

                                        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-blue-200/60">
                                            Sudah diunduh 12.4k+ kali
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </section>
        </div>
    );
}