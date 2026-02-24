"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ShoppingBag, BarChart3, Users, Package, Truck, Smartphone, ShieldCheck, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const OrbitItem = ({ delay, children, radius, duration }: { delay: number, children: React.ReactNode, radius: number, duration: number }) => (
    <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        style={{ width: radius * 2, height: radius * 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear", delay }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
            >
                {children}
            </motion.div>
        </div>
    </motion.div>
);

const HeroV2 = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-60 overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50">
            {/* 3D Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        <ShieldCheck size={14} /> Global Commerce Infrastructure
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-8xl lg:text-[110px] font-display font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase"
                    >
                        AZ Commerce. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Total Velocity.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 font-medium leading-relaxed"
                    >
                        The ultimate high-performance system for modern brands. Unify your POS, inventory, delivery, and marketplace into one powerful engine.
                    </motion.p>

                    <div className="flex flex-wrap gap-6 mb-32">
                        <Link href="/signup" className="px-10 py-5 bg-blue-600 text-white rounded-full font-black text-lg hover:bg-blue-500 transition-all shadow-2xl flex items-center gap-3">
                            Launch Your Empire <ArrowRight size={20} />
                        </Link>
                        <button className="px-10 py-5 bg-white/5 text-white border border-white/20 rounded-full font-black text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center gap-3">
                            <Play size={18} fill="white" /> View System Tour
                        </button>
                    </div>

                    {/* Central Core with Orbiting UI */}
                    <div className="relative w-full max-w-[900px] h-[500px] perspective-2000">
                        {/* The Core - Now a powerful commerce hub visual */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotateZ: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                        >
                            <div className="w-64 h-64 bg-slate-900 rounded-[4rem] flex items-center justify-center shadow-[0_0_100px_rgba(37,99,235,0.4)] relative border border-white/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <ShoppingBag size={80} className="text-white mb-4" />
                                    <div className="text-white text-xs font-black tracking-[0.4em] uppercase">Connect</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Orbiting Elements - Optimized for Commerce */}
                        <OrbitItem radius={400} duration={60} delay={0}>
                            <CreditCard className="text-blue-400" size={20} />
                            <span className="text-xs font-black text-white whitespace-nowrap">INSTANT PAYOUTS</span>
                        </OrbitItem>
                        <OrbitItem radius={400} duration={60} delay={10}>
                            <Package className="text-emerald-400" size={20} />
                            <span className="text-xs font-black text-white whitespace-nowrap">GLOBAL INVENTORY</span>
                        </OrbitItem>
                        <OrbitItem radius={400} duration={60} delay={20}>
                            <Users className="text-orange-400" size={20} />
                            <span className="text-xs font-black text-white whitespace-nowrap">VENDOR SYNC</span>
                        </OrbitItem>
                        <OrbitItem radius={400} duration={60} delay={30}>
                            <BarChart3 className="text-purple-400" size={20} />
                            <span className="text-xs font-black text-white whitespace-nowrap">LIVE VELOCITY</span>
                        </OrbitItem>
                        <OrbitItem radius={400} duration={60} delay={40}>
                            <Truck className="text-blue-500" size={20} />
                            <span className="text-xs font-black text-white whitespace-nowrap">FLEET TRACKING</span>
                        </OrbitItem>
                        <OrbitItem radius={400} duration={60} delay={50}>
                            <Smartphone className="text-pink-400" size={20} />
                            <span className="text-xs font-black text-white whitespace-nowrap">MOBILE APPS</span>
                        </OrbitItem>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroV2;
