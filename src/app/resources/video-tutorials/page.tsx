"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Video, MonitorPlay, Film } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

const playlists = [
    {
        title: "Platform Onboarding",
        desc: "A 5-part series teaching you how to configure your first store in 30 minutes.",
        icon: Play,
        accent: "bg-orange-600"
    },
    {
        title: "Advanced Inventory",
        desc: "Master incoming shipments, barcode scanning, and multi-location syncing.",
        icon: Video,
        accent: "bg-blue-600"
    },
    {
        title: "Marketing Automation",
        desc: "Set up loyalty programs, abandoned cart emails, and SMS promos.",
        icon: Film,
        accent: "bg-emerald-600"
    },
    {
        title: "POS Hardware Setup",
        desc: "Connect printers, scales, displays, and card terminals effortlessly.",
        icon: MonitorPlay,
        accent: "bg-orange-600"
    }
];

export default function VideoTutorialsPage() {
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
                        className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </span>
                        AZ Commerce Academy
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8"
                    >
                        Learn from the <br />
                        <span className="text-orange-600 italic">Experts</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12"
                    >
                        Watch step-by-step video tutorials and master AZ Commerce. From basic settings to complex multi-warehouse operations, we've got you covered.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-4xl mx-auto relative rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/10 border border-slate-200 aspect-[16/9] bg-slate-100 flex items-center justify-center cursor-pointer group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />

                        <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center z-20 group-hover:scale-110 transition-transform shadow-xl">
                            <Play size={32} className="translate-x-1" />
                        </div>

                        <div className="absolute bottom-6 left-8 z-20 text-white text-left">
                            <div className="text-xs font-bold uppercase tracking-widest text-orange-300 mb-2">
                                Featured Course
                            </div>
                            <div className="text-2xl font-bold">
                                AZ Commerce Setup in 10 Minutes
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES GRID (UNCHANGED STRUCTURE) */}
            <section className="py-20 bg-white relative overflow-hidden perspective-2000">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl font-display font-semibold text-[#0f172a]">
                            Browse Playlists
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {playlists.map((block, i) => (
                            <motion.div
                                key={block.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative h-[320px] rounded-[2rem] bg-white border border-slate-100 p-8 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div className={cn(
                                    "absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full",
                                    block.accent
                                )} />

                                <div className="relative z-10">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-lg text-white",
                                        block.accent
                                    )}>
                                        <block.icon size={26} />
                                    </div>

                                    <h3 className="text-xl font-black text-[#0f172a] mb-3 group-hover:text-orange-600 transition-colors">
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
            </section>
        </main>
    );
}