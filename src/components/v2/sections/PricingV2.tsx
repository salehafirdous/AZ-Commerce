"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Crown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingV2 = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const plans = [
        {
            name: "Basic",
            price: billingCycle === "monthly" ? "29" : "24",
            icon: Zap,
            desc: "Ideal for startups and small boutiques.",
            features: ["Single Store Management", "Standard POS Module", "Basic Analytics", "Email Support", "1 User License"],
            color: "slate"
        },
        {
            name: "Advanced",
            popular: true,
            price: billingCycle === "monthly" ? "89" : "74",
            icon: ShieldCheck,
            desc: "The complete engine for expanding brands.",
            features: ["Multi-branch Controls", "Inventory Forecasting", "Delivery Partner App", "Priority Support", "5 User Licenses"],
            color: "blue"
        },
        {
            name: "Enterprise",
            price: billingCycle === "monthly" ? "299" : "249",
            icon: Crown,
            desc: "For global franchises and marketplaces.",
            features: ["Custom API Access", "White-label Mobile Apps", "Dedicated Account Manager", "Unlimited Sites", "Volume Discounting"],
            color: "slate"
        }
    ];

    return (
        <section id="pricing" className="py-60 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-black uppercase tracking-[.5em] text-[10px] mb-8"
                    >
                        Pricing Architecture
                    </motion.div>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase mb-16">
                        Scale with <br />
                        <span className="text-blue-600 italic">Confidence.</span>
                    </h2>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-6 mb-20">
                        <span className={cn("text-sm font-black uppercase tracking-widest", billingCycle === "monthly" ? "text-slate-900" : "text-slate-400")}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                            className="w-20 h-10 bg-slate-100 rounded-full p-1 relative flex items-center"
                        >
                            <motion.div
                                animate={{ x: billingCycle === "monthly" ? 0 : 40 }}
                                className="w-8 h-8 bg-blue-600 rounded-full shadow-lg"
                            />
                        </button>
                        <span className={cn("text-sm font-black uppercase tracking-widest flex items-center gap-2", billingCycle === "yearly" ? "text-slate-900" : "text-slate-400")}>
                            Yearly <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-1 rounded-md">Save 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "group relative p-16 rounded-[4rem] transition-all duration-700",
                                plan.popular
                                    ? "bg-slate-900 text-white shadow-2xl scale-105 z-10"
                                    : "bg-white border border-slate-100 hover:bg-slate-50 shadow-xl"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                    Recommended Choice
                                </div>
                            )}

                            <div className={cn(
                                "w-20 h-20 rounded-3xl mb-12 flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg",
                                plan.popular ? "bg-white text-slate-900" : "bg-blue-600 text-white"
                            )}>
                                <plan.icon size={32} />
                            </div>

                            <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">{plan.name}</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-sm font-bold opacity-40">$</span>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={plan.price}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-7xl font-black"
                                    >
                                        {plan.price}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="text-sm font-bold opacity-40">/MO</span>
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

                            <button
                                className={cn(
                                    "w-full py-7 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all duration-500",
                                    plan.popular
                                        ? "bg-blue-600 text-white hover:bg-white hover:text-slate-900"
                                        : "bg-slate-900 text-white hover:bg-blue-600"
                                )}
                            >
                                Get Started <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingV2;
