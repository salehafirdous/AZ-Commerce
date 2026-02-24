"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Crown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Pricing = () => {
    const plans = [
        {
            name: "Founder",
            price: "$49",
            icon: <Zap size={24} />,
            desc: "For boutiques and digital-first startups.",
            features: ["Unified Dash", "1k SKUs", "Basic CRM", "Standard Analytics"],
            color: "bg-blue-600"
        },
        {
            name: "Growth",
            price: "$149",
            popular: true,
            icon: <Shield size={24} />,
            desc: "The complete engine for expanding brands.",
            features: ["Everything in Founder", "10k SKUs", "Delivery Apps", "Advanced ERP"],
            color: "bg-indigo-600"
        },
        {
            name: "Enterprise",
            price: "$499",
            icon: <Crown size={24} />,
            desc: "For global franchises and marketplaces.",
            features: ["Unlimited Sync", "Custom API", "White-label Apps", "24/7 Concierge"],
            color: "bg-purple-600"
        }
    ];

    return (
        <section id="pricing" className="py-60 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                    >
                        Pricing Architecture
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[8vw] font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase mb-12"
                    >
                        Invest in <br />
                        <span className="text-blue-600 italic font-medium">velocity.</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "group relative p-16 rounded-[4rem] transition-all duration-700",
                                plan.popular
                                    ? "bg-[#0A0A0A] text-white shadow-2xl scale-105 z-10"
                                    : "bg-white border border-slate-100 hover:bg-slate-50"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                    CORE SELECTION
                                </div>
                            )}

                            <div className={cn(
                                "w-20 h-20 rounded-3xl mb-12 flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg",
                                plan.popular ? "bg-blue-600" : "bg-slate-900 text-white"
                            )}>
                                {plan.icon}
                            </div>

                            <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">{plan.name}</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-6xl font-black">{plan.price}</span>
                                <span className="text-sm font-bold opacity-40">/MONTH</span>
                            </div>

                            <p className="mb-12 text-lg font-medium opacity-60 leading-relaxed min-h-[60px]">
                                {plan.desc}
                            </p>

                            <div className="space-y-6 mb-16">
                                {plan.features.map((feat) => (
                                    <div key={feat} className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border",
                                            plan.popular ? "border-white/20 text-blue-500" : "border-slate-100 text-blue-600"
                                        )}>
                                            <Check size={14} />
                                        </div>
                                        <span className="text-sm font-bold tracking-tight uppercase">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/signup"
                                className={cn(
                                    "w-full py-7 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all duration-500",
                                    plan.popular
                                        ? "bg-white text-black hover:bg-blue-600 hover:text-white"
                                        : "bg-slate-900 text-white hover:bg-blue-600"
                                )}
                            >
                                Get Started <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
