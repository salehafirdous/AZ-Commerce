"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, Clock, User, Bookmark } from "lucide-react";
import Image from "next/image";

const posts = [
    {
        title: "The Future of Hyper-Personalized Commerce",
        desc: "How AI is moving beyond simple recommendations to full storefront orchestration.",
        category: "Insights",
        author: "Alex Rivera",
        date: "Feb 12, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "5 Strategies to Reduce Cart Abandonment in 2024",
        desc: "New data shows that speed and checkout transparency are the primary drivers of conversion.",
        category: "Guides",
        author: "Emma Watson",
        date: "Feb 10, 2024",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Implementing Multi-Vendor Systems for B2B",
        desc: "A deep dive into the technical challenges of splitting payments and managing vendor hierarchies.",
        category: "Engineering",
        author: "Devin Booker",
        date: "Feb 05, 2024",
        readTime: "15 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    }
];

export default function BlogV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                    >
                        Commerce <span className="text-orange-600 italic">Insights & Engineering.</span>
                    </motion.h1>
                    <div className="relative max-w-2xl mx-auto group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles, guides, or categories..."
                            className="w-full pl-16 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium text-lg"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap items-center justify-center gap-10 mb-24 border-b border-slate-100 pb-8">
                    {["All Posts", "Insights", "Engineering", "Guides", "Customer Stories", "Product News"].map((cat) => (
                        <button key={cat} className="text-sm font-bold text-slate-400 hover:text-[#0f172a] uppercase tracking-[0.2em] transition-colors relative group">
                            {cat}
                            <div className="absolute -bottom-8 left-0 w-0 h-1 bg-orange-600 group-hover:w-full transition-all" />
                        </button>
                    ))}
                </div>

                {/* Featured Post */}
                <div className="mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden group">
                            <Image src={posts[0].image} alt="Featured" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-orange-100">
                                    {posts[0].category}
                                </span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <Clock size={14} /> {posts[0].readTime}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] leading-tight tracking-tight">
                                {posts[0].title}
                            </h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                {posts[0].desc}
                            </p>
                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-100 rounded-full" />
                                    <div>
                                        <div className="text-sm font-bold text-[#0f172a]">{posts[0].author}</div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase">{posts[0].date}</div>
                                    </div>
                                </div>
                                <button className="ml-auto text-orange-600 hover:text-orange-700 font-bold flex items-center gap-2 group">
                                    Read Article <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                    {posts.map((post, i) => (
                        <div key={post.title} className="group">
                            <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden mb-8">
                                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Bookmark size={18} />
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">{post.category}</div>
                                <h3 className="text-2xl font-semibold text-[#0f172a] leading-snug group-hover:text-orange-600 transition-colors">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="bg-[#0f172a] rounded-[4rem] p-12 lg:p-24 text-center">
                    <h2 className="text-4xl font-display font-semibold text-white mb-8">Stay ahead of the curve.</h2>
                    <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">Get the latest commerce engineering tips and insights delivered straight to your inbox Weekly.</p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Email address" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-600 transition-colors" />
                        <button className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all">Subscribe</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
