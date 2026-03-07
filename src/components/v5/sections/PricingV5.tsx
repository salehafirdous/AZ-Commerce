"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, Crown, ArrowRight, Activity, Terminal, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Shard",
        price: "499",
        tagline: "EMERGING_CORP",
        icon: Zap,
        features: ["500 Nodes Concurrent", "Standard POS Runtime", "Cloud Auto-Sync", "Mail Support"],
        color: "from-cyan-500 to-blue-500",
        border: "group-hover:border-cyan-500/30"
    },
    {
        name: "Helix",
        price: "1999",
        tagline: "GLOBAL_LEADER",
        icon: Activity,
        features: ["Unlimited Nodes", "L5 Neural Analytics", "Universal Inventory", "24/7 Priority Mesh"],
        color: "from-blue-600 to-indigo-600",
        popular: true,
        border: "border-cyan-500 shadow-[0_0_100px_rgba(6,182,212,0.1)]"
    },
    {
        name: "Aegis",
        price: "Custom",
        tagline: "ENTERPRISE_CORE",
        icon: Shield,
        features: ["Custom Protocols", "Hardened Security", "On-Prem Deployment", "Dedicated DBA Node"],
        color: "from-slate-700 to-slate-900",
        border: "group-hover:border-white/20"
    }
];

const PricingV5 = () => {
    return (
        <section className="py-40 bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <div className="inline-flex items-center gap-4 mb-8 text-cyan-500 font-display-v5 font-black text-[10px] uppercase tracking-[0.5em]">
                        <Terminal size={16} /> Asset_Valuation_Matrix
                    </div>
                    <h2 className="text-7xl md:text-9xl font-display-v5 font-black text-white leading-[0.85] tracking-tighter uppercase">
                        CHOOSE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 italic">SYSTEM_LEVEL.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className={cn(
                                "group relative p-12 rounded-[4rem] bg-[#111] border transition-all duration-700 overflow-hidden",
                                plan.popular ? "border-cyan-500 shadow-[0_40px_100px_rgba(0,0,0,0.5)] scale-105" : "border-white/5 hover:border-white/10"
                            )}
                        >
                            {/* Ambient Gradient */}
                            <div className={cn(
                                "absolute -bottom-20 -right-20 w-80 h-80 blur-[120px] opacity-10 transition-opacity duration-700 rounded-full",
                                plan.color
                            )} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-16">
                                    <div className={cn(
                                        "w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6",
                                        "bg-gradient-to-br", plan.color
                                    )}>
                                        <plan.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <div className="text-[12px] font-display-v5 font-black text-white/10 uppercase tracking-[0.4em] pt-4">UNIT_{plan.tagline.split('_')[1]}</div>
                                </div>

                                <div className="mb-12">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h3 className="text-5xl font-display-v5 font-black text-white uppercase tracking-tight group-hover:text-cyan-500 transition-colors">
                                            {plan.name}
                                        </h3>
                                        {plan.popular && (
                                            <span className="px-4 py-2 bg-cyan-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)]">Apex</span>
                                        )}
                                    </div>
                                    <div className="text-[10px] font-display-v5 font-black text-white/20 uppercase tracking-[0.3em]">{plan.tagline}</div>
                                </div>

                                <div className="mb-16">
                                    <div className="flex items-baseline gap-2 pb-10 border-b border-white/5">
                                        <span className="text-7xl font-display-v5 font-black text-white tracking-tighter">₹{plan.price}</span>
                                        <span className="text-white/20 font-black uppercase text-[12px] tracking-widest">/ Node_L5</span>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-20 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-6 group/item">
                                            <div className="w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover/item:bg-cyan-500 group-hover/item:border-cyan-500 transition-all">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover/item:bg-white" />
                                            </div>
                                            <span className="text-slate-400 font-body-v5 font-semibold text-lg tracking-tight group-hover/item:text-white transition-colors">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className={cn(
                                    "w-full py-10 rounded-[2.5rem] font-display-v5 font-black uppercase tracking-[0.3em] text-[12px] transition-all flex items-center justify-center gap-4 active:scale-95 group-hover:shadow-2xl",
                                    plan.popular ? "bg-white text-black hover:bg-cyan-500 hover:text-white shadow-cyan-500/20" : "bg-white/5 text-white border border-white/5 hover:bg-white/10"
                                )}>
                                    Initialize Core <Plus size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* User Friendly Toggle/Info */}
                <div className="mt-20 text-center">
                    <p className="text-slate-500 font-body-v5 font-medium flex items-center justify-center gap-4">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" /> Custom needs? Our technical team is ready for integration.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingV5;
