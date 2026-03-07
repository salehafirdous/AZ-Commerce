"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingV3 = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const plans = [
        {
            name: "Basic",
            price: billingCycle === "monthly" ? "49" : "39",
            desc: "Perfect for single-store startups.",
            features: ["Single Store Management", "Standard POS Terminal", "Inventory Management", "2 Staff Accounts", "Basic Analytics"],
        },
        {
            name: "Professional",
            popular: true,
            price: billingCycle === "monthly" ? "129" : "99",
            desc: "The core system for growing brands.",
            features: ["Unlimited Storefronts", "Advanced Inventory AI", "Custom Vendor Portal", "Unlimited Staff Accounts", "Financial Reports", "Priority Support"],
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "Scale without limits. Built for conglomerates.",
            features: ["Dedicated Account Manager", "Custom API Access", "White-label Mobile Apps", "99.99% Uptime SLA", "On-site Training"],
        }
    ];

    return (
        <section id="pricing" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6 tracking-tight">
                        Simple, transparent <span className="text-orange-600">pricing.</span>
                    </h2>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <span className={cn("text-sm font-bold", billingCycle === "monthly" ? "text-[#0f172a]" : "text-slate-400")}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                            className="w-14 h-7 bg-slate-100 rounded-full p-1 relative flex items-center transition-colors"
                        >
                            <motion.div
                                animate={{ x: billingCycle === "monthly" ? 0 : 28 }}
                                className="w-5 h-5 bg-orange-600 rounded-full shadow-lg"
                            />
                        </button>
                        <span className={cn("text-sm font-bold flex items-center gap-2", billingCycle === "yearly" ? "text-[#0f172a]" : "text-slate-400")}>
                            Yearly <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-semibold uppercase">Save 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "p-12 rounded-[3.5rem] border transition-all duration-300 flex flex-col h-full",
                                plan.popular
                                    ? "bg-white border-orange-600 shadow-[0_40px_80px_-20px_rgba(234,88,12,0.15)] scale-105 z-10"
                                    : "bg-white border-slate-100 hover:border-slate-300"
                            )}
                        >
                            {plan.popular && (
                                <div className="text-orange-600 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">Most Popular Choice</div>
                            )}
                            <h3 className="text-2xl font-semibold text-[#0f172a] mb-4 uppercase tracking-tighter">{plan.name}</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-sm font-bold text-slate-400 italic">$</span>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={plan.price}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="text-6xl font-semibold text-[#0f172a] tracking-tighter"
                                    >
                                        {plan.price}
                                    </motion.span>
                                </AnimatePresence>
                                {plan.price !== "Custom" && <span className="text-sm font-bold text-slate-400">/mo</span>}
                            </div>
                            <p className="text-slate-500 font-medium mb-12 text-sm leading-relaxed min-h-[40px]">
                                {plan.desc}
                            </p>

                            <hr className="border-slate-100 mb-12" />

                            <div className="space-y-6 mb-12 flex-grow">
                                {plan.features.map(f => (
                                    <div key={f} className="flex items-center gap-4">
                                        <div className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                            <Check size={12} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2",
                                plan.popular ? "bg-orange-600 text-white shadow-xl shadow-orange-600/30" : "bg-slate-900 text-white"
                            )}>
                                {plan.name === "Enterprise" ? "Contact Support" : "Start Free Trial"} <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingV3;
