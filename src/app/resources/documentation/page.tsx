"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Terminal, Search, Play, CheckCircle2, FileText, Layers } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

const blocks = [
    {
        title: "Getting Started",
        desc: "Quick start guides and fundamental concepts to get you up and running.",
        icon: Play,
        accent: "bg-indigo-600"
    },
    {
        title: "Core Platform",
        desc: "Deep dive into POS, Inventory, CRM, and basic settings.",
        icon: Layers,
        accent: "bg-blue-600"
    },
    {
        title: "Developer Tools",
        desc: "Webhooks, API keys, and extending your store programmatically.",
        icon: Terminal,
        accent: "bg-emerald-600"
    },
    {
        title: "Advanced Guides",
        desc: "Complex routing, multi-store configurations, and B2B pricing.",
        icon: BookOpen,
        accent: "bg-purple-600"
    }
];

export default function DocumentationPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-600 pb-20">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="orange" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ rotate: [0, 360], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-orange-100/40 to-transparent blur-3xl rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </span>
                        AZ Commerce Documentation
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8"
                    >
                        Learn how to build <br />
                        <span className="text-orange-600 italic">anything</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12"
                    >
                        Explore comprehensive guides, tutorials, and integration references to get the most out of the AZ Commerce ecosystem.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto relative"
                    >
                        <div className="flex items-center bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-2 focus-within:ring-2 ring-orange-500 transition-all">
                            <Search className="text-slate-400 ml-4" size={24} />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full bg-transparent border-none outline-none px-4 py-3 text-slate-700 font-medium placeholder:text-slate-400"
                            />
                            <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors">
                                Search
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CATEGORIES GRID */}
            <section className="py-20 bg-white relative overflow-hidden perspective-2000">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blocks.map((block, i) => (
                            <motion.div
                                key={block.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative h-[320px] rounded-[2rem] bg-white border border-slate-100 p-8 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div className={cn("absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full", block.accent)} />
                                <div className="relative z-10">
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-lg text-white", block.accent)}>
                                        <block.icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-[#0f172a] mb-3 group-hover:text-indigo-600 transition-colors">
                                        {block.title}
                                    </h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                        {block.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* CTA SECTION */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                            {/* Subtle Pattern Background */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
                                    Ready to start building?
                                </h2>

                                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                                    Explore our documentation, integrate with our APIs, and build powerful commerce experiences with AZ Commerce.
                                </p>

                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/v4/signup"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors"
                                    >
                                        Get Started Free <ArrowRight size={20} />
                                    </Link>

                                    <Link
                                        href="/resources/api-reference"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f172a] rounded-xl font-bold hover:bg-slate-100 transition-colors"
                                    >
                                        View API Docs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </main>
    );
}
