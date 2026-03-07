"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Shield, Sparkles, Command } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FinalCTAV5 = () => {
    return (
        <section className="py-60 bg-[#050505] relative overflow-hidden text-center">

            {/* The Nexus Core Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[800px] bg-cyan-500/10 blur-[200px] rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-4 mb-16 text-cyan-500 font-display-v5 font-black text-[12px] uppercase tracking-[0.6em]"
                >
                    <Sparkles size={20} className="animate-spin-slow" /> Convergence Protocol V5
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-[13rem] font-display-v5 font-black text-white leading-[0.8] tracking-tighter uppercase mb-24"
                >
                    JOIN THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 italic">NEXUS.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-20"
                >
                    <Link
                        href="/v5/signup"
                        className="group relative px-24 py-10 bg-white text-black rounded-3xl font-display-v5 font-black text-3xl uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all shadow-[0_40px_100px_rgba(0,0,0,0.8)] active:scale-95 flex items-center gap-8"
                    >
                        INITIALIZE NOW <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform" />
                    </Link>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 pt-32 border-t border-white/5 w-full">
                        {[
                            { label: "Active Nodes", val: "1.2M+", icon: Zap },
                            { label: "Network Mesh", val: "Omni", icon: Globe },
                            { label: "SLA Matrix", val: "99.99%", icon: Shield },
                            { label: "Core Sync", val: "Real-time", icon: Command }
                        ].map((stat, i) => (
                            <div key={i} className="group text-left lg:text-center">
                                <div className="flex items-center lg:justify-center gap-4 mb-6 text-white/20 group-hover:text-cyan-500 transition-colors">
                                    <stat.icon size={20} />
                                    <span className="text-[10px] font-display-v5 font-black uppercase tracking-[0.4em]">{stat.label}</span>
                                </div>
                                <div className="text-5xl font-display-v5 font-black text-white tracking-tighter uppercase">{stat.val}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scrolling Architectural Ground */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_50px_rgba(6,182,212,0.3)]" />
        </section>
    );
};

export default FinalCTAV5;
