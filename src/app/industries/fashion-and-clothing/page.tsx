"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shirt, RefreshCcw, Tag, BarChart3, Play, CheckCircle2, Box, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Product Variants",
        desc: "Manage infinite combinations of sizes, colors, and materials with ease.",
        icon: Shirt,
        accent: "bg-orange-600"
    },
    {
        title: "Returns & Exchanges",
        desc: "Frictionless workflow for customer returns with instant inventory sync.",
        icon: RefreshCcw,
        accent: "bg-blue-600"
    },
    {
        title: "Barcode & Labels",
        desc: "Generate your own barcodes and print price tags directly from the system.",
        icon: Tag,
        accent: "bg-emerald-600"
    },
    {
        title: "Sales Analytics",
        desc: "Track best-selling sizes, seasonal trends, and slow-moving inventory.",
        icon: BarChart3,
        accent: "bg-purple-600"
    }
];

export default function FashionAndClothingPage() {
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

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                                </span>
                                For Apparel & Footwear Stores
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8"
                            >
                                Elevate your <br />
                                <span className="text-orange-600 italic">Fashion</span> <br />
                                Brand
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-12"
                            >
                                Sell across all channels—in-store, online, and social media. Manage complex product variants like sizes and colors effortlessly from a single, unified POS system.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                <Link
                                    href="/v4/signup"
                                    className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 flex items-center gap-3 group"
                                >
                                    Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg shadow-slate-200/10">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                        <Play size={16} className="fill-[#0f172a] translate-x-0.5" />
                                    </div>
                                    Book Demo
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-8 text-[13px] font-bold text-slate-400 uppercase tracking-widest"
                            >
                                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-orange-600" /> Size & Color Matrix</div>
                                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-orange-600" /> Omnichannel Ready</div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative perspective-1000"
                        >
                            <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden relative z-10 transition-transform hover:scale-[1.02] duration-700">
                                <div className="h-12 bg-slate-50/80 border-b border-slate-200 flex items-center px-8 gap-2.5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center bg-slate-50 aspect-[1.4/1] w-full relative group">
                                    <Image
                                        src="/images/v4/fashion.jpg"
                                        alt="Clothing Retail"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="py-20 bg-white relative overflow-hidden perspective-2000">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6">
                            Constructed for <span className="text-orange-600 italic">Apparel</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl">
                            Stop wrestling with clunky inventory. Use an intelligent matrix system built specifically to track fashion items effectively.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative h-[320px] rounded-[2rem] bg-white border border-slate-100 p-8 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div className={cn("absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full", feature.accent)} />
                                <div className="relative z-10">
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-lg text-white", feature.accent)}>
                                        <feature.icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-black text-[#0f172a] mb-3 group-hover:text-orange-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
                                Ready to scale your fashion brand?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                                Join successful boutiques and clothing stores growing with AZ Commerce.
                            </p>
                            <Link href="/v4/signup" className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors">
                                Get Started Now <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
