"use client";

import { motion } from "framer-motion";
import { ArrowRight, Tag, CreditCard, LayoutTemplate, Star, Play, CheckCircle2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
    {
        title: "Omnichannel POS",
        desc: "Sell online and offline simultaneously. Sync inventory in real-time.",
        icon: LayoutTemplate,
        accent: "bg-orange-600"
    },
    {
        title: "Loyalty Programs",
        desc: "Build points systems, gift cards, and targeted promotions to retain customers.",
        icon: Star,
        accent: "bg-purple-600"
    },
    {
        title: "Barcode & Labels",
        desc: "Generate your own barcodes and print price tags directly from the system.",
        icon: Tag,
        accent: "bg-blue-600"
    },
    {
        title: "Flexible Payments",
        desc: "Accept split payments, store credit, BNPL, and integrated card reading.",
        icon: CreditCard,
        accent: "bg-emerald-600"
    }
];

export default function RetailShopsPage() {
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

                        {/* LEFT CONTENT */}
                        <div>

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                                </span>
                                For Apparel, Electronics & Lifestyle
                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8"
                            >
                                Next-gen <br />
                                Retail <span className="text-orange-600 italic">Experience</span>
                            </motion.h1>

                            {/* Paragraph */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-12"
                            >
                                Bridge the gap between your physical store and eCommerce. Unify your inventory, empower associates, and build lasting customer relationships.
                            </motion.p>

                            {/* Buttons */}
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
                                    Start Free Trial
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg shadow-slate-200/10">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                        <Play size={16} className="fill-[#0f172a] translate-x-0.5" />
                                    </div>
                                    Watch Demo
                                </button>
                            </motion.div>

                            {/* Feature Points */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-8 text-[13px] font-bold text-slate-400 uppercase tracking-widest"
                            >
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-orange-600" />
                                    Multi-Store Ready
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-orange-600" />
                                    Hardware Agnostic
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT MOCKUP */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden">
                                <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-8 gap-2.5" />
                                <div className="flex items-center justify-center bg-slate-50 aspect-[1.4/1] relative group">
                                    <Image
                                        src="/images/v4/retail-shops.jpg"
                                        alt="Retail Register Interface"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* FEATURES GRID (UNCHANGED CARDS) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6">
                            Tools for modern <span className="text-orange-600 italic">Merchants</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl">
                            Move product faster with intelligent insights, centralized data, and frictionless checkout processes.
                        </p>
                    </div>

                    {/* CARDS SAME AS BEFORE */}
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
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg text-white", feature.accent)}>
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
            {/* CTA */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                            Power up your storefront
                        </h2>

                        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                            Everything you need to sell more, work faster, and scale easily.
                        </p>

                        <Link
                            href="/v4/signup"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors"
                        >
                            Get Started Free
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
