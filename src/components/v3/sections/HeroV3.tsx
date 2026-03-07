"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Spotlight } from "@/components/ui/Spotlight";

const HeroV3 = () => {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="orange"
            />
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                            Trusted by 10,000+ Businesses Global
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display font-semibold text-[#0f172a] leading-[1.05] tracking-tight mb-8"
                        >
                            The Complete <br />
                            <span className="text-orange-600">Commerce Engine</span> <br />
                            for Modern Growth.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12"
                        >
                            Run your online store, billing, inventory, vendors, and delivery from one unified cloud platform. Clear, fast, and built for scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <Link
                                href="/v3/signup"
                                className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 flex items-center gap-2"
                            >
                                Start Free Trial <ArrowRight size={20} />
                            </Link>
                            <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                                <Play size={20} className="fill-[#0f172a]" /> Book Demo
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-6 text-sm font-bold text-slate-400"
                        >
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-600" /> No credit card required</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-600" /> 14-day free trial</div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Browser Frame */}
                        <div className="bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden relative z-10">
                            <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-6 gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-200" />
                                <div className="w-3 h-3 rounded-full bg-slate-200" />
                                <div className="w-3 h-3 rounded-full bg-slate-200" />
                            </div>
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src="/images/v3/hero-dashboard.png"
                                    alt="AZ Commerce Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 z-20 hidden md:block"
                        >
                            <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2">Live Revenue</div>
                            <div className="text-2xl font-semibold text-slate-900">$12,450.80</div>
                            <div className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded inline-block mt-2">+12.5% this week</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                                    <ShoppingCart size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900">New Order</div>
                                    <div className="text-[10px] font-medium text-slate-400">Order #1249 just received</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroV3;
