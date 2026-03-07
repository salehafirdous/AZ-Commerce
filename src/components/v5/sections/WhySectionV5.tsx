"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, ShieldCheck, Cpu, Rocket, ArrowUpRight, CheckCircle2, Globe, Activity, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const points = [
    {
        title: "Native Runtime",
        desc: "A sub-millisecond commerce kernel built for high-frequency enterprise throughput.",
        icon: Cpu,
        label: "ARCH_RUNTIME"
    },
    {
        title: "Quantum Mesh",
        desc: "Infinite edge nodes ensuring your ecosystem spans every continent with zero latency.",
        icon: Globe,
        label: "GLOBAL_FLOW"
    },
    {
        title: "Biometric Shield",
        desc: "L5 encryption with biometric hardware validation for every critical transaction.",
        icon: Fingerprint,
        label: "SEC_PROTOCOL"
    }
];

const WhySectionV5 = () => {
    return (
        <section className="py-40 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-32">
                    <div className="inline-flex items-center gap-4 mb-8 text-cyan-500 font-display-v5 font-black text-[10px] uppercase tracking-[0.5em]">
                        <Activity size={16} className="animate-pulse" /> Engineering Framework
                    </div>
                    <h2 className="text-7xl md:text-[10rem] font-display-v5 font-black text-white leading-[0.8] tracking-tighter uppercase mb-12">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">NEXUS</span> ADVANTAGE.
                    </h2>
                    <p className="text-2xl text-slate-500 font-body-v5 font-medium max-w-2xl mx-auto leading-tight tracking-tight">
                        We don&apos;t build features. We deploy architectural certainty for high-stakes digital dominance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {points.map((point, i) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative group p-12 rounded-[3.5rem] bg-[#111] border border-white/5 hover:border-cyan-500/30 transition-all duration-700"
                        >
                            {/* Inner Glow Elevation */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3.5rem]" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-700 mb-16 group-hover:scale-110 group-hover:rotate-3">
                                        <point.icon size={30} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-4xl font-display-v5 font-black text-white mb-6 uppercase tracking-tight group-hover:text-cyan-500 transition-colors">
                                        {point.title}
                                    </h3>
                                    <p className="text-lg text-slate-400 font-body-v5 font-medium leading-relaxed">
                                        {point.desc}
                                    </p>
                                </div>

                                <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-display-v5 font-black text-white/10 uppercase tracking-[0.4em] group-hover:text-cyan-500 transition-colors">
                                        {point.label}
                                    </span>
                                    <ArrowUpRight size={24} className="text-white/10 group-hover:text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </div>

                            {/* Ghost Index Accent */}
                            <div className="absolute top-10 right-10 text-6xl font-display-v5 font-black text-white/5 group-hover:text-white/10 transition-colors select-none pointer-events-none">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhySectionV5;
