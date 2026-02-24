"use client";

import { motion } from "framer-motion";
import { Brain, Box, BarChart3, Clock, Layers, Sparkles } from "lucide-react";
import Image from "next/image";

export default function InventoryAIV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Brain size={14} /> Intelligent Stock Management
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-semibold text-[#0f172a] mb-8 leading-tight"
                    >
                        Next-Gen <span className="text-orange-600">Inventory AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium"
                    >
                        Stop guessing. Our AI predicts demand, automates reordering, and optimizes warehouse space automatically.
                    </motion.p>
                </div>

                {/* AI Visualization */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-10"
                    >
                        <h2 className="text-3xl font-display font-semibold text-[#0f172a]">Autonomous Supply Chain.</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Predictive Restocking", desc: "Never run out of stock. AI analyzes seasonal trends to order before you need it.", icon: Clock },
                                { title: "Multi-Location Sync", desc: "Balance stock between 10 or 1,000 locations with intelligent transfers.", icon: Layers },
                                { title: "Waste Reduction", desc: "Identify slow-moving items and automate discounts to clear space.", icon: Sparkles }
                            ].map((item, i) => (
                                <div key={item.title} className="flex gap-6">
                                    <div className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center shrink-0 text-orange-600 border border-slate-100">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#0f172a] mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group"
                    >
                        <div className="relative aspect-square">
                            <Image
                                src="/images/v3/inventory-ai.png"
                                alt="Inventory AI Visual"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Inventory Accuracy", value: "99.9%" },
                        { label: "Waste Reduction", value: "34%" },
                        { label: "Auto-Orders Monthly", value: "1.2M" },
                        { label: "Time Saved/Week", value: "20h" }
                    ].map((stat) => (
                        <div key={stat.label} className="bg-slate-50 p-8 rounded-3xl text-center">
                            <div className="text-4xl font-semibold text-[#0f172a] mb-2">{stat.value}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
