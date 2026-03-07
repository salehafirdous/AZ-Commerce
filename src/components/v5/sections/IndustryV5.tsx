"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShoppingCart, Utensils, HeartPulse, Warehouse, ArrowRight, Activity, Globe, MonitorCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const industries = [
    { id: "retail", name: "High-Volume Retail", label: "SHARD_RETAIL", icon: ShoppingCart, image: "/images/v5/v5_pos_preview.png" },
    { id: "food", name: "Autonomous Dining", label: "SHARD_FOOD", icon: Utensils, image: "/images/v5/v5_inventory_preview.png" },
    { id: "health", name: "Precision Logistics", label: "SHARD_LIFE", icon: HeartPulse, image: "/images/v5/v5_vendor_preview.png" },
    { id: "logistic", name: "Edge Orchestration", label: "SHARD_LOGI", icon: Warehouse, image: "/images/v5/v5_analytics_preview.png" }
];

const IndustryV5 = () => {
    const [activeId, setActiveId] = useState(industries[0].id);

    return (
        <section className="py-40 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-32 items-center">

                    {/* Industrial Index */}
                    <div className="lg:w-[40%]">
                        <div className="flex items-center gap-4 mb-8 text-cyan-500 font-display-v5 font-black text-[10px] uppercase tracking-[0.5em]">
                            <Globe size={16} /> Global Vertical Shards
                        </div>
                        <h2 className="text-7xl md:text-[8.5rem] font-display-v5 font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase">
                            VERTICAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">SHARDS.</span>
                        </h2>

                        <div className="space-y-4">
                            {industries.map((ind) => (
                                <button
                                    key={ind.id}
                                    onMouseEnter={() => setActiveId(ind.id)}
                                    className={cn(
                                        "w-full text-left p-8 rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden",
                                        activeId === ind.id ? "bg-white/5 border-cyan-500/40" : "bg-transparent border-white/5 hover:border-white/10"
                                    )}
                                >
                                    <div className="relative z-10 flex items-center justify-between">
                                        <div className="flex items-center gap-8">
                                            <div className={cn(
                                                "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500",
                                                activeId === ind.id ? "bg-cyan-500 text-white shadow-lg" : "bg-white/5 text-white/20 group-hover:text-white"
                                            )}>
                                                <ind.icon size={26} />
                                            </div>
                                            <div>
                                                <div className={cn(
                                                    "text-2xl font-display-v5 font-black uppercase tracking-tight transition-colors",
                                                    activeId === ind.id ? "text-white" : "text-white/20 group-hover:text-white/40"
                                                )}>{ind.name}</div>
                                                <div className="text-[10px] font-display-v5 font-black text-cyan-500/30 uppercase tracking-[0.3em] mt-1">Status: {ind.label}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {activeId === ind.id && (
                                        <motion.div
                                            layoutId="ind_shimmer"
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Immersive Window */}
                    <div className="lg:w-[60%] w-full h-[800px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                            >
                                <div className="absolute inset-0 bg-[#0a0a0a]" />
                                <Image
                                    src={industries.find(i => i.id === activeId)?.image || ''}
                                    alt="Industry Context"
                                    fill
                                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                                {/* HUD Details */}
                                <div className="absolute top-12 left-12 p-8 rounded-3xl bg-black/40 backdrop-blur-3xl border border-white/10">
                                    <div className="flex items-center gap-4 text-cyan-500 mb-2">
                                        <MonitorCheck size={20} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Integrated Shard Matrix</span>
                                    </div>
                                    <div className="text-4xl font-black text-white uppercase tracking-tighter">
                                        Global <br /> Synchronization
                                    </div>
                                </div>

                                <div className="absolute bottom-20 left-20">
                                    <h3 className="text-[12rem] font-display-v5 font-black text-white/5 uppercase leading-none select-none">
                                        {activeId.slice(0, 4)}
                                    </h3>
                                    <div className="flex items-center gap-4 mt-[-2rem] ml-2">
                                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Live Data Stream Active</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default IndustryV5;
