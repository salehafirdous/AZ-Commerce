"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const stories = [
    {
        title: "Point of Sale (POS)",
        subtitle: "Lightning-fast billing, even offline.",
        desc: "Our POS terminal is built for high-velocity environments. Scan barcodes, handle split payments, and sync stock in milliseconds. Works perfectly on tablets and desktops.",
        features: ["Barcode Scanning support", "Offline mode processing", "Integrated receipt printing"],
        image: "/images/v3/pos-billing.png",
        accent: "bg-orange-600"
    },
    {
        title: "Deep Analytics",
        subtitle: "Know your growth velocity.",
        desc: "Stop guessing and start leading with real-time data. Monitor sales across all branches, track vendor performance, and predict inventory needs before they happen.",
        features: ["Multi-branch reports", "Sales forecasting", "Custom data exports"],
        image: "/images/v3/admin-portal.png",
        accent: "bg-blue-600"
    },
    {
        title: "Inventory Mastery",
        subtitle: "Zero stock-outs, zero waste.",
        desc: "Manage 100,000+ SKUs with ease. Our automated system alerts you when stock is low and can even generate purchase orders for your vendors automatically.",
        features: ["Batch & Expiry tracking", "Multi-warehouse management", "Automated stock alerts"],
        image: "/images/v3/inventory-ai.png",
        accent: "bg-purple-600"
    }
];

const FeatureStoryV3 = () => {
    return (
        <section className="bg-slate-50 py-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="space-y-24">
                    {stories.map((s, i) => (
                        <div key={s.title} className={`flex flex-col lg:items-center gap-20 lg:gap-32 ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h4 className="text-orange-600 font-semibold uppercase tracking-[0.3em] text-xs mb-6">{s.subtitle}</h4>
                                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] mb-8 tracking-tight">
                                        {s.title}
                                    </h2>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                        {s.desc}
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        {s.features.map(f => (
                                            <div key={f} className="flex items-center gap-3">
                                                <CheckCircle2 size={18} className="text-orange-600" />
                                                <span className="text-sm font-bold text-slate-700">{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#0f172a] hover:text-orange-600 transition-colors group">
                                        View Dashboard <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            </div>

                            <div className="w-full lg:w-1/2 relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200"
                                >
                                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                                    <div className={`absolute top-0 left-0 w-full h-1 ${s.accent}`} />
                                </motion.div>

                                {/* Background Decorative Circle */}
                                <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 ${i % 2 === 0 ? "bg-orange-500/5" : "bg-blue-500/5"} rounded-full blur-[80px]`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureStoryV3;
