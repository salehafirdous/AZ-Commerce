"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Clock, User } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BlogPage = () => {
    const posts = [
        {
            title: "The Future of Hyper-Personalized Commerce",
            excerpt: "How AI is moving beyond simple recommendations to predictive lifestyle engines.",
            author: "Sarah Chen",
            date: "May 12, 2026",
            category: "Insights",
            readTime: "8 min read"
        },
        {
            title: "Scaling your D2C Brand to 9 Figures",
            excerpt: "The psychological shifts and infrastructure requirements for elite-level growth.",
            author: "Marcus Thorne",
            date: "May 10, 2026",
            category: "Strategy",
            readTime: "12 min read"
        },
        {
            title: "Web3 and the Physical Storefront",
            excerpt: "Integrating digital ownership with sensory physical retail experiences.",
            author: "Elena Rossi",
            date: "May 08, 2026",
            category: "Innovation",
            readTime: "6 min read"
        },
        {
            title: "Supply Chain Resilience in 2026",
            excerpt: "Why the modular approach is winning over traditional linear fulfillment.",
            author: "Julian Vance",
            date: "May 05, 2026",
            category: "Operations",
            readTime: "10 min read"
        },
        {
            title: "The Art of Modern POS Design",
            excerpt: "Designing interfaces that empower staff and delight customers in-store.",
            author: "Leo Park",
            date: "May 02, 2026",
            category: "Design",
            readTime: "7 min read"
        },
        {
            title: "Global Tax Automation: A Founder's Guide",
            excerpt: "Navigating the complexity of international trade without losing sanity.",
            author: "Amina Jalloh",
            date: "April 28, 2026",
            category: "Legal",
            readTime: "15 min read"
        }
    ];

    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Editorial Hero */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" /> The Editorial Issue
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-slate-900 mb-8 tracking-tighter">
                                Insights for <br />
                                <span className="text-blue-600 italic">the future.</span>
                            </h1>
                            <p className="text-2xl text-slate-500 mb-12 leading-relaxed font-medium">
                                Thought leadership at the intersection of commerce, culture, and high-performance technology.
                            </p>
                            <label className="relative block group max-w-md">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                <input className="w-full py-6 pl-16 pr-8 bg-slate-50 border border-slate-100 rounded-[2rem] font-bold outline-none focus:bg-white focus:border-blue-500/30 transition-all shadow-sm" placeholder="Search the archive..." />
                            </label>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-premium"
                        >
                            <Image
                                src="/blog_hero.png"
                                alt="Editorial Studio"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 p-10 glass-card border-white/20 rounded-[2rem]">
                                <div className="text-xs font-black text-white/60 mb-2 uppercase tracking-widest">Featured Article</div>
                                <h2 className="text-2xl font-black text-white mb-6">Autonomous Logistics: The 2027 Roadmap.</h2>
                                <div className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:gap-4 transition-all">
                                    Read Feature <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Newsletter Tape */}
            <div className="w-full bg-slate-900 py-6 overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 whitespace-nowrap"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="text-white font-black uppercase tracking-[0.3em] text-sm opacity-60">Subscribe to AZ INSIGHTS — Collective Intelligence — Weekly Issue</div>
                    ))}
                </motion.div>
            </div>

            {/* Post Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {posts.map((post, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] bg-slate-100 rounded-[2.5rem] mb-8 overflow-hidden relative">
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 z-10">{post.category}</div>
                                    <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed line-clamp-2">{post.excerpt}</p>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-32 text-center">
                        <button className="px-10 py-6 border border-slate-200 rounded-[2rem] font-black text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-4 mx-auto group">
                            Load Archive
                            <Clock className="group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-6">
                        {["All", "Insights", "Strategy", "Innovation", "Operations", "Design", "Legal", "Engineering"].map(cat => (
                            <button key={cat} className="px-8 py-4 bg-white rounded-2xl border border-slate-200 text-sm font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPage;
