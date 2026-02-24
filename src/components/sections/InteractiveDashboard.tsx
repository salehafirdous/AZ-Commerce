"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    ShoppingBag,
    BarChart3,
    Users,
    Package,
    Truck,
    Settings,
    Search,
    Bell,
    CreditCard,
    Target,
    ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const InteractiveDashboard = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

    return (
        <section ref={containerRef} className="py-60 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Interactive Preview</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[8vw] font-display font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]"
                    >
                        Total control. <br />
                        <span className="text-blue-500 italic font-medium tracking-normal">At your fingertips.</span>
                    </motion.h2>
                    <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium">
                        A cinematic, high-fidelity command center designed for the next generation of retailers.
                    </p>
                </div>

                {/* Perspective Container */}
                <div className="perspective-2000">
                    <motion.div
                        style={{ rotateX, scale, y }}
                        className="bg-[#0A0A0A] rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden min-h-[800px] grid lg:grid-cols-12 relative group"
                    >
                        {/* Sidebar */}
                        <div className="hidden lg:flex lg:col-span-1 border-r border-white/5 flex-col items-center py-10 gap-8 bg-black/40">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                                <ShoppingBag size={24} />
                            </div>
                            <div className="space-y-8 mt-12">
                                {[BarChart3, Users, Package, Truck, Target, Settings].map((Icon, i) => (
                                    <div key={i} className={cn(
                                        "p-4 rounded-2xl transition-all cursor-pointer",
                                        i === 0 ? "bg-white/10 text-blue-500" : "text-white/20 hover:text-white hover:bg-white/5"
                                    )}>
                                        <Icon size={24} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-11 p-12 flex flex-col">
                            {/* Dashboard Header */}
                            <header className="flex items-center justify-between mb-16">
                                <div className="flex items-center gap-6 bg-white/5 px-8 py-4 rounded-2xl w-full max-w-xl border border-white/5">
                                    <Search size={20} className="text-white/20" />
                                    <input type="text" placeholder="Search your empire..." className="bg-transparent border-none outline-none w-full text-white font-medium placeholder:text-white/10" />
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="relative">
                                        <Bell size={24} className="text-white/40" />
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-[#0A0A0A]" />
                                    </div>
                                    <div className="h-10 w-px bg-white/5" />
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border-2 border-white/10 overflow-hidden relative">
                                            <Image src="https://i.pravatar.cc/150?u=admin" alt="Avatar" fill className="object-cover" />
                                        </div>
                                        <div className="hidden sm:block">
                                            <div className="text-sm font-black text-white uppercase tracking-wider">Karan Kumar</div>
                                            <div className="text-[10px] font-black text-blue-500 uppercase tracking-[.2em] mt-1">Founding Partner</div>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                                {[
                                    { label: "Gross Revenue", val: "$4,285,120", grow: "+14.2%", color: "text-blue-500", bg: "bg-blue-500/10" },
                                    { label: "Active Orders", val: "12,482", grow: "+22.5%", color: "text-purple-500", bg: "bg-purple-500/10" },
                                    { label: "Customer Reach", val: "1.2M", grow: "+8.1%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                                    { label: "Avg. Fulfillment", val: "14.2m", grow: "-2.4m", color: "text-orange-500", bg: "bg-orange-500/10" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", stat.bg, stat.color)}>
                                                <BarChart3 size={24} />
                                            </div>
                                            <div className={cn("text-xs font-black", stat.color)}>{stat.grow}</div>
                                        </div>
                                        <div className="text-4xl font-black text-white mb-2 tracking-tight">{stat.val}</div>
                                        <div className="text-xs font-black text-white/20 uppercase tracking-[.2em]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Center Canvas */}
                            <div className="bg-white/5 rounded-[3.5rem] p-12 flex-grow border border-white/5 relative overflow-hidden group/canvas">
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-12">
                                        <div>
                                            <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Real-time Performance</h4>
                                            <div className="text-xs font-black text-blue-500 uppercase tracking-[.3em] mt-2">Live synchronization active</div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="px-6 py-3 bg-white/5 rounded-xl text-xs font-black text-white/40 uppercase tracking-widest border border-white/5">Q1 Overview</div>
                                            <div className="px-6 py-3 bg-blue-600 rounded-xl text-xs font-black text-white uppercase tracking-widest shadow-xl">Export Report</div>
                                        </div>
                                    </div>

                                    <div className="flex-grow flex items-end gap-6 min-h-[300px]">
                                        {[60, 40, 90, 75, 120, 100, 140, 110, 180, 150, 200, 170].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${(h / 200) * 100}%` }}
                                                className="flex-grow bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-2xl relative group/bar"
                                            >
                                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[10px] font-black rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                                    +${h}k
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-0 noise-bg opacity-[0.05]" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDashboard;
