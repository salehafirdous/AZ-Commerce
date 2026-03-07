"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DashboardPreviewV3 = () => {
    return (
        <section className="py-16 lg:py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-8 tracking-tight uppercase italic">
                    All-in-One <span className="text-orange-600">Command Center.</span>
                </h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
                    A beautiful, intuitive interface that gives you total control over your business velocity. No more jumping between dozens of tabs.
                </p>
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative bg-[#1e293b] rounded-[3rem] p-1 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden"
                >
                    <div className="h-12 bg-slate-800 border-b border-white/5 flex items-center px-8 gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-600" />
                            <div className="w-3 h-3 rounded-full bg-slate-600" />
                            <div className="w-3 h-3 rounded-full bg-slate-600" />
                        </div>
                        <div className="bg-slate-900 px-6 py-1 rounded-full text-[10px] text-slate-500 font-mono">az-commerce.app/v3/dashboard</div>
                    </div>
                    <div className="relative aspect-video lg:aspect-[21/9] w-full bg-slate-900">
                        <Image
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                            alt="AZ Commerce Full Dashboard"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DashboardPreviewV3;
