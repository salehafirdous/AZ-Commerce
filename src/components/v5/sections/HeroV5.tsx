"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, Zap, Globe, Shield, Cpu, Activity, MoveRight, Layers, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HeroV5 = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: mounted ? containerRef : undefined,
        offset: ["start start", "end start"]
    });

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const y = useTransform(springScroll, [0, 1], [0, 200]);
    const opacity = useTransform(springScroll, [0, 0.5], [1, 0]);
    const scale = useTransform(springScroll, [0, 0.5], [1, 0.9]);
    const rotate = useTransform(springScroll, [0, 1], [0, 5]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-40 overflow-hidden bg-[#050505]"
        >
            {/* Mesh Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 font-display-v5 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                >
                    <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                    Nexus Protocol Activation
                </motion.div>

                <motion.div style={{ y, opacity, scale, rotate }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-7xl md:text-[11rem] font-display-v5 font-black text-white leading-[0.85] tracking-tighter mb-10"
                    >
                        THE FUTURE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 italic">IS MODULAR.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-3xl text-slate-400 font-body-v5 font-medium max-w-3xl mx-auto mb-16 leading-tight tracking-tight"
                    >
                        An industrial-grade commerce kernel for the ambitious. Unified, indestructible, and built for hyper-growth.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center gap-6 mb-32"
                >
                    <Link
                        href="/v5/signup"
                        className="group relative px-12 py-6 bg-white text-black rounded-2xl font-display-v5 font-black text-lg hover:bg-cyan-500 hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] active:scale-95 flex items-center justify-center gap-4 overflow-hidden"
                    >
                        <span className="relative z-10">Start Your Engine</span>
                        <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <button className="px-12 py-6 bg-[#111] text-white border border-white/5 rounded-2xl font-display-v5 font-black text-lg hover:bg-[#1a1a1a] transition-all flex items-center justify-center gap-4">
                        <Play size={20} className="fill-white" /> Live Prototype
                    </button>
                </motion.div>

                {/* The "Wow" Visual: Floating Glass Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative max-w-6xl mx-auto group perspective-2000"
                >
                    <div className="absolute inset-0 bg-cyan-500/20 blur-[150px] rounded-full group-hover:bg-cyan-500/30 transition-all duration-1000" />

                    <div className="relative rounded-[4rem] p-1 bg-gradient-to-br from-white/20 via-white/5 to-transparent border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-3xl">
                        <div className="aspect-[21/9] bg-[#050505] rounded-[3.8rem] overflow-hidden relative">
                            <Image
                                src="/images/v5/v5_pos_preview.png"
                                alt="AZ Nexus Dashboard"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />

                            {/* Technical HUD Overlay */}
                            <div className="absolute inset-0 z-20 pointer-events-none p-12 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">Unit Protocol</div>
                                        <div className="text-2xl font-black text-white tracking-widest uppercase">AZ_KERNEL_NX</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">Latency: 0.1ms</div>
                                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-green-400">Status: Active</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="h-0.5 w-64 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="h-full bg-cyan-500 shadow-[0_0_10px_cyan]"
                                        />
                                    </div>
                                    <div className="text-[10px] font-mono text-cyan-500/50 scale-y-75 uppercase tracking-[0.2em]">Executing Data Stream...</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating HUD Cards */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-12 -right-12 p-8 rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl hidden lg:block z-30"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                                <Globe size={28} />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Global Reach</div>
                                <div className="text-3xl font-black text-white tracking-tighter">192+ Shards</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-12 -left-12 p-8 rounded-3xl bg-[#111]/80 backdrop-blur-3xl border border-cyan-500/20 shadow-2xl hidden lg:block z-30"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                                <Shield size={28} />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">System Integrity</div>
                                <div className="text-3xl font-black text-white tracking-tighter">AES-256 GCM</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroV5;
