"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

const FinalCTAV3 = () => {
    return (
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative min-h-[450px] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden bg-[#0f172a] flex flex-col lg:flex-row items-center shadow-2xl"
                >
                    {/* Darker, high-contrast background pattern */}
                    <div className="absolute inset-0 z-0 text-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-blue-600/5" />
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/[0.03] -skew-x-12 translate-x-1/4" />
                    </div>

                    {/* Content Left */}
                    <div className="relative z-10 w-full lg:w-3/5 p-8 lg:p-16 flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-white/10">
                            <Sparkles size={14} /> THE NEXT NORMAL IN COMMERCE
                        </div>

                        <h2 className="text-3xl md:text-5xl font-display font-semibold text-white leading-[1.1] tracking-tighter uppercase italic mb-6">
                            Launch Your <br />
                            <span className="text-orange-600 relative inline-block">
                                Empire Today.
                                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h2>

                        <p className="text-lg text-slate-200 font-medium max-w-lg mb-8 leading-relaxed">
                            Join over 10,000 global founders scaling their operations with AZ Commerce. 14 days on us, zero commitment.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link
                                href="/signup"
                                className="group relative bg-orange-600 text-white px-8 py-4 rounded-xl text-base font-bold uppercase tracking-widest hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 active:scale-95 flex items-center gap-3"
                            >
                                START FREE TRIAL <ArrowRight size={20} />
                            </Link>
                            <button className="px-8 py-4 bg-[#1e293b] text-white border border-white/10 rounded-xl text-base font-bold uppercase tracking-widest hover:bg-[#334155] transition-all">
                                TALK TO SALES
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                            {[
                                { icon: Globe, text: "GLOBAL READY" },
                                { icon: Shield, text: "BANK-GRADE SECURITY" },
                                { icon: TrendingUp, text: "SCALED ARCHITECTURE" }
                            ].map((item) => (
                                <div key={item.text} className="flex items-center gap-2.5 text-white/50 text-[9px] font-bold uppercase tracking-[0.2em]">
                                    <item.icon size={12} className="text-orange-600" /> {item.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Right - Sharp Visuals */}
                    <div className="relative z-10 w-full lg:w-2/5 p-8 lg:pr-16 hidden lg:block">
                        <div className="relative aspect-[4/3] w-full">
                            {/* Sharp Growth Card - Smaller and tighter */}
                            <div className="absolute inset-0 bg-[#1e293b] rounded-[2rem] border border-white/10 p-7 flex flex-col justify-between shadow-2xl">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-[9px] font-bold text-orange-400 uppercase tracking-widest mb-1.5">ANNUAL GROWTH</div>
                                        <div className="text-4xl font-semibold text-white tracking-tighter uppercase">+248%</div>
                                    </div>
                                    <div className="w-12 h-12 bg-orange-600/20 text-orange-600 rounded-xl flex items-center justify-center">
                                        <TrendingUp size={24} />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                            className="h-full bg-orange-600"
                                        />
                                    </div>
                                    <div className="flex justify-between text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                                        <span>CAPACITY</span>
                                        <span className="text-orange-500">85% UTILIZED</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-left">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">NEW STORES</div>
                                        <div className="text-lg font-semibold text-white">42</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="text-[7px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">GLOBAL SHIPMENTS</div>
                                        <div className="text-lg font-semibold text-white">12.4k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTAV3;
