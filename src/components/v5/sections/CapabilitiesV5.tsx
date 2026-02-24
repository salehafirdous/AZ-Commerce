"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShoppingCart, Box, Globe, Store, BarChart3, ArrowRight, Layers, Cpu, Activity, Shield, Shapes, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const modules = [
    {
        id: "pos",
        name: "Omnichannel POS",
        code: "KERN_01",
        icon: ShoppingCart,
        desc: "A sub-millisecond execution kernel for global storefronts. Zero-latency processing across the most complex retail networks.",
        stats: ["<0.8ms Latency", "10k+ Nodes", "Syncing"]
    },
    {
        id: "inventory",
        name: "Neural Supply",
        code: "SUPP_05",
        icon: Box,
        desc: "Predictive supply chain orchestration powered by multi-layered neural networks. Never miss a single SKU shift.",
        stats: ["99.4% Accuracy", "Auto-Restock", "Optimizing"]
    },
    {
        id: "vendor",
        name: "Marketplace Mesh",
        code: "MESH_X",
        icon: Store,
        desc: "Infinite scalar capabilities. Onboard 10,000+ vendors overnight with automated settlement and trust-verified logs.",
        stats: ["Auto-Payout", "Certified", "Escrow_ON"]
    },
    {
        id: "compute",
        name: "Core Intelligence",
        code: "BI_NX",
        icon: BarChart3,
        desc: "Global data visualization at L5 compute speed. Real-time growth strategy generation using high-frequency commerce data.",
        stats: ["RT-Visuals", "RTX-On", "Processing"]
    }
];

const CapabilitiesV5 = () => {
    const [activeId, setActiveId] = useState(modules[0].id);

    return (
        <section className="py-40 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-8 text-cyan-500 font-display-v5 font-black text-[10px] uppercase tracking-[0.5em]">
                            <Shapes size={16} /> Technical Architecture
                        </div>
                        <h2 className="text-6xl md:text-9xl font-display-v5 font-black text-white leading-[0.85] tracking-tighter uppercase">
                            MODULAR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 italic">DOMINANCE.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Module Selection Pipeline */}
                    <div className="space-y-4">
                        {modules.map((m) => (
                            <button
                                key={m.id}
                                onMouseEnter={() => setActiveId(m.id)}
                                className={cn(
                                    "w-full text-left p-8 rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden",
                                    activeId === m.id
                                        ? "bg-white/5 border-cyan-500/50 shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-[1.02]"
                                        : "bg-transparent border-white/5 hover:border-white/10"
                                )}
                            >
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center gap-8">
                                        <div className={cn(
                                            "w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-700",
                                            activeId === m.id ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]" : "bg-white/5 text-white/20 group-hover:text-white"
                                        )}>
                                            <m.icon size={28} />
                                        </div>
                                        <div>
                                            <div className={cn(
                                                "text-2xl font-display-v5 font-black uppercase tracking-tight transition-colors",
                                                activeId === m.id ? "text-white" : "text-white/20 group-hover:text-white/40"
                                            )}>{m.name}</div>
                                            <div className="text-[10px] font-display-v5 font-black text-cyan-500/50 uppercase tracking-[0.3em] mt-1">Code: {m.code}</div>
                                        </div>
                                    </div>
                                    <ArrowRight size={24} className={cn(
                                        "transition-all duration-500",
                                        activeId === m.id ? "text-cyan-500 translate-x-0 opacity-100" : "text-white opacity-0 -translate-x-4"
                                    )} />
                                </div>
                                {activeId === m.id && (
                                    <motion.div
                                        layoutId="cap_indicator"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Technical Card Detail */}
                    <div className="relative h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 bg-[#111] border border-white/5 rounded-[4rem] p-16 flex flex-col justify-between overflow-hidden group shadow-2xl"
                            >
                                {/* Background Ghost Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000">
                                    {(() => {
                                        const ActiveIcon = modules.find(m => m.id === activeId)!.icon;
                                        return <ActiveIcon size={500} />;
                                    })()}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-16">
                                        <div className="px-6 py-2 bg-cyan-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                            {modules.find(m => m.id === activeId)?.code}
                                        </div>
                                        <Activity size={24} className="text-cyan-500 animate-pulse" />
                                    </div>

                                    <h3 className="text-5xl md:text-6xl font-display-v5 font-black text-white mb-8 uppercase tracking-tighter leading-none">
                                        {modules.find(m => m.id === activeId)?.name.split(' ')[0]} <br />
                                        <span className="text-cyan-500">{modules.find(m => m.id === activeId)?.name.split(' ')[1]}</span>
                                    </h3>

                                    <p className="text-xl text-slate-400 font-body-v5 font-medium leading-tight max-w-sm mb-12">
                                        {modules.find(m => m.id === activeId)?.desc}
                                    </p>
                                </div>

                                <div className="relative z-10 flex flex-wrap gap-4 pt-12 border-t border-white/5">
                                    {modules.find(m => m.id === activeId)?.stats.map((stat, i) => (
                                        <div key={i} className="px-6 py-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col gap-1">
                                            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Metric_{i + 1}</div>
                                            <div className="text-xl font-black text-white">{stat}</div>
                                        </div>
                                    ))}
                                    <button className="flex-grow flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
                                        Open Docs <MoveRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CapabilitiesV5;
