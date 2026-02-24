"use client";

import { motion } from "framer-motion";
import { BookOpen, Newspaper, Code, PlayCircle, Download, ArrowRight, Video, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResourcesPage() {
    const resourceCategories = [
        {
            title: "Blog & Insights",
            desc: "The latest news, trends, and engineering deep dives from our team.",
            icon: Newspaper,
            link: "/v3/blog",
            color: "text-orange-600",
            bgColor: "bg-orange-50"
        },
        {
            title: "Documentation",
            desc: "Comprehensive guides to help you set up and scale your store.",
            icon: BookOpen,
            link: "#",
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            title: "API Reference",
            desc: "Build custom integrations with our robust Headless APIs.",
            icon: Code,
            link: "#",
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            title: "Video Tutorials",
            desc: "Master AZ Commerce with step-by-step visual walkthroughs.",
            icon: PlayCircle,
            link: "#",
            color: "text-emerald-600",
            bgColor: "bg-emerald-50"
        }
    ];

    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Download size={14} /> Knowledge Hub
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                    >
                        Everything you need to <br /> <span className="text-orange-600 italic">build & scale.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
                    >
                        Explore our library of guides, technical documentation, and expert insights designed to help your business grow.
                    </motion.p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    {resourceCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={cat.link}
                                className="block p-12 bg-white rounded-[3.5rem] border border-slate-100 hover:border-orange-600/20 hover:shadow-2xl hover:shadow-orange-600/5 transition-all group h-full"
                            >
                                <div className={`w-16 h-16 ${cat.bgColor} ${cat.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <cat.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-semibold text-[#0f172a] mb-4 tracking-tight">{cat.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8">{cat.desc}</p>
                                <div className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${cat.color}`}>
                                    Explore {cat.title} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Popular Guides Section */}
                <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-24 border border-slate-100 mb-32">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                        <div>
                            <h2 className="text-4xl font-display font-semibold text-[#0f172a] mb-4">Popular Guides.</h2>
                            <p className="text-slate-500 font-medium">Most read resources by our community.</p>
                        </div>
                        <button className="bg-white border border-slate-200 text-[#0f172a] px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">View All Guides</button>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { title: "Setting up your first storefront", type: "Docs", icon: FileText },
                            { title: "Optimizing checkout for mobile", type: "Video", icon: Video },
                            { title: "Connecting your legacy POS", type: "Docs", icon: FileText },
                        ].map((guide, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all cursor-pointer group">
                                <div className="flex items-center gap-2 text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                                    <guide.icon size={12} /> {guide.type}
                                </div>
                                <h4 className="text-xl font-semibold text-[#0f172a] mb-4 group-hover:text-orange-600 transition-colors">{guide.title}</h4>
                                <ArrowRight size={20} className="text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support CTA */}
                <div className="relative rounded-[4rem] overflow-hidden bg-[#0f172a] p-12 lg:p-24 text-center">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-8">Need more help?</h2>
                        <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">Our support team is available 24/7 to help you with any technical or business questions.</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/v3/contact" className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all">Contact Support</Link>
                            <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Visit Help Center</button>
                        </div>
                    </div>
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                </div>
            </div>
        </main>
    );
}
