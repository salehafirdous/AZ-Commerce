"use client";

import { motion } from "framer-motion";
import { Box, RefreshCcw, BarChart, ShieldCheck, ArrowRight, Zap, Target, Layers } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const InventoryPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/inventory_hero.png"
                        alt="Intelligent Inventory Visualization"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-purple-500/20">
                                <RefreshCcw size={14} className="animate-spin-slow" /> Real-time Stock Intelligence
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-white mb-8 tracking-tighter">
                                Never miss a <br />
                                <span className="text-purple-500 italic">heartbeat.</span>
                            </h1>
                            <p className="text-2xl text-purple-100/60 mb-10 leading-relaxed font-medium">
                                The world&apos;s most precise inventory engine. Smart forecasting, multi-location sync, and autonomous restocking for the modern enterprise.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-6 bg-purple-600 text-white rounded-[2rem] font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center gap-4 group">
                                    Sync Your Stock
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all">
                                    Watch Deep-Dive
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative flex justify-center"
                        >
                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                            <div className="relative z-10 w-full glass-card border-white/10 rounded-[3rem] p-10 overflow-hidden">
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-black uppercase tracking-widest text-purple-400">Inventory Health</div>
                                        <div className="text-emerald-400 font-bold text-xs">Optimum</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            { label: "SKUs Managed", val: "12,482", icon: <Layers className="text-purple-400" /> },
                                            { label: "Predictive Fill", val: "99.4%", icon: <Target className="text-blue-400" /> },
                                            { label: "Stock Turn", val: "14.2x", icon: <BarChart className="text-amber-400" /> },
                                            { label: "Accuracy", val: "99.99%", icon: <ShieldCheck className="text-emerald-400" /> }
                                        ].map((stat, i) => (
                                            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-4">{stat.icon}</div>
                                                <div className="text-2xl font-black text-white">{stat.val}</div>
                                                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <div className="flex justify-between items-center text-xs font-bold text-white/40 mb-4">
                                            <span>AI Restock Prediction</span>
                                            <span className="text-purple-400">Triggering in 4h</span>
                                        </div>
                                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "85%" }}
                                                className="h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-32 bg-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6">Total Control. Zero Effort.</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">From single boutique to global franchise network—AZ Inventory scales with you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Universal Sync", desc: "Instantly update stock across Shopify, Amazon, Physical POS, and Warehouse.", icon: <RefreshCcw className="text-purple-600" /> },
                            { title: "Predictive AI", desc: "Our engine predicts seasonal surges before they happen. Never go out of stock.", icon: <Zap className="text-amber-500" /> },
                            { title: "Barcode Precision", desc: "Native support for high-speed scanning and RFID automated tracking.", icon: <Box className="text-blue-600" /> }
                        ].map((feature, i) => (
                            <div key={i} className="group p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl transition-all">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-6">{feature.title}</h3>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/inventory_hero.png"
                                alt="Inventory Dashboard"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-purple-900/40 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                                    <Zap size={32} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-5xl font-display font-black text-slate-900 mb-8 leading-tight">Master your <br />multi-node network.</h2>
                            <p className="text-xl text-slate-600 font-medium mb-12">Track inventory across warehouses, showrooms, and transit in one high-fidelity map view. Real-time accuracy is no longer optional.</p>
                            <div className="space-y-4">
                                {["Autonomous Restocking", "Vendor Management", "Batch & Expiry Tracking", "Asset Lifecycle Monitoring"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-black text-slate-900">
                                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px]">✓</div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 bg-slate-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-600/5 blur-[150px]" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-none">Perfect stock. <br />Every time.</h2>
                    <p className="text-2xl text-purple-100/40 mb-16 font-medium">Join the elite brands running on AZ Inventory OS.</p>
                    <button className="px-12 py-7 bg-purple-600 text-white rounded-[2.5rem] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all">Launch Inventory Portal</button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default InventoryPage;
