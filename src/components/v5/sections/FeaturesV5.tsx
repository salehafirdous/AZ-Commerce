"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Package, ScanLine, Globe, BarChart2, Receipt, Bell, Shield, Zap, Cpu, Settings2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    { title: "Universal Sync", icon: Globe, label: "CONN_SHARD", desc: "Edge-synced inventory globally." },
    { title: "Photon Ledger", icon: Shield, label: "SEC_LEDGER", desc: "Indestructible audit trail logs." },
    { title: "Neural Flow", icon: Zap, label: "CORE_X", desc: "Automated business logic hubs." },
    { title: "L5 Compute", icon: BarChart2, label: "BI_PROTO", desc: "High-frequency analytics nodes." },
    { title: "Static Core", icon: Cpu, label: "KERN_S", desc: "Zero-dependency system architecture." },
    { title: "Pulse Radar", icon: Bell, label: "OPS_R", desc: "Real-time infrastructure monitoring." }
];

const FeaturesV5 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section ref={containerRef} className="py-40 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10">
                    <div>
                        <div className="inline-flex items-center gap-4 mb-8 text-cyan-500 font-display-v5 font-black text-[10px] uppercase tracking-[0.5em]">
                            <Sparkles size={16} /> Advanced Inventory
                        </div>
                        <h2 className="text-6xl md:text-9xl font-display-v5 font-black text-white leading-[0.8] tracking-tighter uppercase whitespace-nowrap">
                            SYSTEM <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 italic">HARWARE.</span>
                        </h2>
                    </div>
                </div>
            </div>

            <motion.div style={{ x }} className="flex gap-8 px-6 cursor-default">
                {features.map((feature, i) => (
                    <div
                        key={feature.title}
                        className="flex-shrink-0 w-[400px]"
                    >
                        <div className="relative group p-12 rounded-[4rem] bg-[#111] border border-white/5 hover:border-cyan-500/30 transition-all duration-700">
                            {/* Material Accent */}
                            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-cyan-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-20">
                                    <div className="w-16 h-16 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-700">
                                        <feature.icon size={30} />
                                    </div>
                                    <span className="text-[10px] font-display-v5 font-black text-white/10 uppercase tracking-[0.4em] group-hover:text-cyan-500/50 transition-colors">
                                        {feature.label}
                                    </span>
                                </div>

                                <h3 className="text-4xl font-display-v5 font-black text-white mb-6 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                    {feature.title}
                                </h3>
                                <p className="text-xl text-slate-500 font-body-v5 font-medium leading-tight">
                                    {feature.desc}
                                </p>
                            </div>

                            {/* HUD Corner Decor */}
                            <div className="absolute bottom-12 right-12 w-8 h-8 opacity-20">
                                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-cyan-500" />
                                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-cyan-500" />
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Scrolling Floor Text */}
            <div className="mt-40 border-y border-white/5 py-12 overflow-hidden whitespace-nowrap pointer-events-none opacity-5">
                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 text-[6rem] font-display-v5 font-black text-white uppercase"
                >
                    <span>Industrial Architecture</span>
                    <span>Industrial Architecture</span>
                    <span>Industrial Architecture</span>
                    <span>Industrial Architecture</span>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesV5;
