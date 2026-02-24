"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Shield, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <Zap size={24} />,
            title: "Unified Core",
            description: "One database. 100% integrity. No more disconnected tools."
        },
        {
            icon: <Globe size={24} />,
            title: "Cloud Infrastructure",
            description: "Scale globally on premium secure edge servers."
        },
        {
            icon: <Shield size={24} />,
            title: "Bank-Grade Trust",
            description: "End-to-end encryption for every transaction byte."
        }
    ];

    return (
        <section className="py-40 bg-white relative overflow-hidden">
            {/* Architectural Grid */}
            <div className="absolute inset-0 flex pointer-events-none">
                <div className="flex-1 border-r border-slate-50" />
                <div className="flex-1 border-r border-slate-50" />
                <div className="flex-1 border-r border-slate-50" />
                <div className="flex-1" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-baseline mb-32">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="text-blue-600 font-black text-sm tracking-[0.4em] uppercase">Value Proposition</span>
                            <div className="h-px flex-grow bg-slate-100" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-7xl md:text-[10vw] lg:text-[8vw] font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase"
                        >
                            Why brands <br />
                            <span className="text-blue-600 italic font-medium">choose us.</span>
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-4 lg:pt-20">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed"
                        >
                            We eliminate fragmentation by unifying your entire stack into a single, high-performance commerce engine.
                        </motion.p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-16 group hover:bg-slate-50 transition-colors duration-700"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                {reason.icon}
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">{reason.title}</h3>
                            <p className="text-xl text-slate-500 leading-relaxed mb-10">{reason.description}</p>
                            <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Learn More <ArrowRight size={14} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sub-features grid */}
                <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        "Multi-Branch Support",
                        "Real-time Inventory",
                        "Automated Payouts",
                        "Global Distribution",
                        "Zero-Code POS",
                        "Secure Web Apps",
                        "Customer Retention",
                        "Sales Intelligence"
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <CheckCircle2 size={12} />
                            </div>
                            <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{feature}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
