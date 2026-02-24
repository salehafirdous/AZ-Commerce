"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    const textY = useTransform(scrollY, [0, 500], [0, 150]);
    const imageY = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const titleWords = "THE OPERATING SYSTEM FOR MODERN EMPIRES".split(" ");

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 noise-bg opacity-30" />
                <div className="absolute inset-0 cinematic-vignette" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full pt-20">
                <div className="flex flex-col items-center text-center">
                    {/* Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2  mb-8"
                    >
                        {/* <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Next-Generation Commerce OS</span> */}
                    </motion.div>

                    {/* Massive Typography */}
                    <motion.h1
                        style={{ y: textY, opacity }}
                        className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-display font-black leading-[0.85] text-white tracking-tighter mb-12 uppercase"
                    >
                        {titleWords.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.05,
                                    ease: [0.215, 0.61, 0.355, 1]
                                }}
                                className="inline-block mr-[0.2em]"
                            >
                                {word === "EMPIRES" ? (
                                    <span className="text-blue-600 italic font-medium">{word}</span>
                                ) : word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 font-medium leading-relaxed"
                    >
                        AZ-Commerce is a cloud-based all-in-one SaaS platform designed to centralize and automate complete business operations within a unified ecosystem.
                    </motion.p>

                    {/* Premium Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-wrap justify-center gap-6 mb-24"
                    >
                        <Link
                            href="/signup"
                            className="px-10 py-6 bg-white text-black rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group overflow-hidden relative"
                        >
                            <span className="relative z-10 font-sans">GET STARTED FREE</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                        <button className="px-10 py-6 bg-transparent text-white border border-white/20 rounded-full font-black text-lg transition-all hover:bg-white/5 flex items-center gap-3">
                            <Play size={18} fill="white" />
                            <span className="font-sans underline underline-offset-8 decoration-white/20">BOOK A DEMO</span>
                        </button>
                    </motion.div>
                </div>

                {/* Immersive Dashboard Mockup */}
                <motion.div
                    style={{ y: imageY }}
                    initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ delay: 1.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-6xl mx-auto perspective-1000"
                >
                    <div className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                        <Image
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                            alt="AZ Commerce Dashboard"
                            width={1920}
                            height={1080}
                            className="w-full h-auto object-cover opacity-80"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                    </div>

                    {/* Floating Data Tags */}
                    <div className="absolute -top-10 -left-10 hidden lg:block">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="px-6 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl"
                        >
                            <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">LIVE REVENUE</div>
                            <div className="text-2xl font-black text-white">$142,400.00</div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-20 -right-10 hidden lg:block">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="px-6 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl"
                        >
                            <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">ACTIVE USERS</div>
                            <div className="text-2xl font-black text-white">4,821</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Scroll to explore</div>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown size={20} className="text-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
