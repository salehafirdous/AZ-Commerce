"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Rocket } from "lucide-react";
import Link from "next/link";

const FinalCTAV2 = () => {
    return (
        <section className="py-60 bg-white relative overflow-hidden flex items-center justify-center">
            {/* Massive Background Typography */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
                <div className="text-[25vw] font-black leading-none uppercase tracking-tighter">AZ Commerce</div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 text-blue-600 mb-12"
                >
                    <Rocket size={20} />
                    <span className="text-xs font-black uppercase tracking-[0.3em]">Ready for Liftoff?</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-7xl md:text-9xl lg:text-[140px] font-display font-black text-slate-900 leading-[0.8] tracking-tighter uppercase mb-16"
                >
                    Deploy Your <br />
                    <span className="text-blue-600 italic">Empire.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-20 leading-relaxed"
                >
                    Join the next generation of retailers, manufacturers, and scale-ups running on AZ Commerce.
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-8">
                    <Link
                        href="/signup"
                        className="px-16 py-8 bg-blue-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-slate-900 transition-all shadow-2xl shadow-blue-200 flex items-center gap-4 group"
                    >
                        Launch Your Business
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <button className="px-16 py-8 bg-white text-slate-900 border-2 border-slate-100 rounded-[2.5rem] font-black text-xl hover:bg-slate-50 transition-all flex items-center gap-4 group">
                        Talk to Sales
                        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
                    </button>
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-12 text-slate-400 font-black text-[10px] uppercase tracking-[.4em]">
                    <span>Secure Cloud</span>
                    <span>•</span>
                    <span>Instant Deployment</span>
                    <span>•</span>
                    <span>24/7 Priority Support</span>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
};

export default FinalCTAV2;
