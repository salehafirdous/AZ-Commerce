"use client";

import PricingV3 from "@/components/v3/sections/PricingV3";
import { motion } from "framer-motion";
import { Shield, Headphones, Globe } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="pt-32 pb-24">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                >
                    Plans built for <span className="text-orange-600">every stage.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-500 font-medium max-w-2xl mx-auto"
                >
                    Choose the right plan for your business and scale without limits. No hidden fees, cancel anytime.
                </motion.p>
            </div>

            {/* Pricing Section */}
            <PricingV3 />

            {/* Trust Badges / Extra info */}
            <div className="max-w-7xl mx-auto px-6 mt-32">
                <div className="grid md:grid-cols-3 gap-12 bg-slate-50 rounded-[4rem] p-12 lg:p-24 border border-slate-100">
                    {[
                        { title: "Secure Payments", desc: "All transactions are encrypted with PCI-compliant security standards.", icon: Shield },
                        { title: "24/7 Support", desc: "Our world-class support team is here to help you every step of the way.", icon: Headphones },
                        { title: "Global Scale", desc: "Built on infrastructure that handles millions of transactions daily.", icon: Globe },
                    ].map((item, i) => (
                        <div key={item.title} className="space-y-6">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm border border-slate-100">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#0f172a] tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Preview or similar */}
            <div className="max-w-3xl mx-auto px-6 mt-32 text-center">
                <h2 className="text-4xl font-display font-semibold text-[#0f172a] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6 text-left">
                    {[
                        { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time from your dashboard." },
                        { q: "Is there a free trial?", a: "We offer a 14-day full-featured free trial. No credit card required." },
                        { q: "What happens after my trial?", a: "You'll be prompted to choose a plan. If you don't, your data remains safe but editing is paused." }
                    ].map((faq, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-[#0f172a] mb-4">{faq.q}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
