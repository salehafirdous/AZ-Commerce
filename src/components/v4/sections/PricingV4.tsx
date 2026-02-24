"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingV4 = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const plans = [
        {
            name: "Starter",
            description: "Ideal for solo-merchants and small shops.",
            price: {
                monthly: "₹1,499",
                yearly: "₹14,990"
            },
            features: [
                "Up to 500 orders/mo",
                "Basic POS Inventory",
                "Single storefront",
                "Basic Analytics",
                "Email Support"
            ],
            cta: "Get Started",
            recommended: false
        },
        {
            name: "Professional",
            description: "Perfect for growing retail brands.",
            price: {
                monthly: "₹4,999",
                yearly: "₹49,990"
            },
            features: [
                "Unlimited orders",
                "Advanced AI Inventory",
                "3 Managed vendors",
                "Custom domain support",
                "B2B vendor panel",
                "Priority 24/7 Support"
            ],
            cta: "Try Free for 14 Days",
            recommended: true
        },
        {
            name: "Enterprise",
            description: "Full suite for large-scale operations.",
            price: {
                monthly: "₹9,999",
                yearly: "₹99,990"
            },
            features: [
                "Unlimited everything",
                "Multi-warehouse sync",
                "Unlimited vendors",
                "Dedicated account manager",
                "API & Custom integrations",
                "Live delivery fleet tracking"
            ],
            cta: "Talk to Sales",
            recommended: false
        }
    ];

    return (
        <section className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs mb-4"
                    >
                        Transparent Pricing
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-8"
                    >
                        Simple plans for <span className="text-orange-600 italic">every</span> stage.
                    </motion.h2>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className={cn("text-sm font-bold transition-colors", billingCycle === "monthly" ? "text-[#0f172a]" : "text-slate-400")}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                            className="w-14 h-8 bg-slate-200 rounded-full p-1 relative flex items-center transition-colors"
                        >
                            <motion.div
                                animate={{ x: billingCycle === "monthly" ? 0 : 24 }}
                                className="w-6 h-6 bg-orange-600 rounded-full shadow-lg"
                            />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className={cn("text-sm font-bold transition-colors", billingCycle === "yearly" ? "text-[#0f172a]" : "text-slate-400")}>Yearly</span>
                            <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Save 20%</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "relative p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500",
                                plan.recommended ? "shadow-2xl shadow-orange-100/50 scale-105 z-10 border-orange-200" : "hover:shadow-xl shadow-slate-200/20 shadow-sm"
                            )}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg shadow-orange-600/20">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{plan.name}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={billingCycle}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-4xl font-display font-black text-[#0f172a]"
                                        >
                                            {plan.price[billingCycle]}
                                        </motion.span>
                                    </AnimatePresence>
                                    <span className="text-slate-400 font-bold text-sm">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm font-medium text-slate-600">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95",
                                plan.recommended
                                    ? "bg-orange-600 text-white hover:bg-orange-700 shadow-xl shadow-orange-600/20"
                                    : "bg-slate-50 text-[#0f172a] hover:bg-slate-100 border border-slate-200"
                            )}>
                                {plan.cta} <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingV4;
