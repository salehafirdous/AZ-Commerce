"use client";

import { motion } from "framer-motion";
import { Truck, Box, Globe, ShieldCheck, ArrowRight, Zap, RefreshCcw } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SupplyChainPage = () => {
    return (
        <main className="min-h-screen bg-slate-900 noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/supply_chain_hero.png"
                        alt="Global Supply Chain Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20"
                        >
                            <Globe size={14} /> Autonomous Logistics Network
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl lg:text-9xl font-display font-black leading-[0.8] text-white mb-10 tracking-tighter"
                        >
                            The invisible <br />
                            <span className="text-blue-500 italic">Global Pulse.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-blue-100/60 mb-12 leading-relaxed font-medium max-w-2xl"
                        >
                            Master your entire supply chain with autonomous tracking, AI-driven inventory forecasting, and a global distribution network that never sleeps.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-6"
                        >
                            <button className="px-12 py-7 bg-blue-600 text-white rounded-[2.5rem] font-black text-2xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center gap-4 group">
                                Connect Supply Chain
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="px-12 py-7 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-[2.5rem] font-black text-2xl hover:bg-white/10 transition-all">
                                View Network Map
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Live Tracking Visualization */}
            <section className="py-32 bg-slate-900/50 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-[1.1]">Real-time vision. <br /> Zero latency.</h2>
                            <p className="text-xl text-blue-100/50 mb-12 font-medium">Predict delays before they happen. Our AI engine monitors weather, global trade routes, and local traffic in real-time to keep your business moving.</p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { label: "Predictive AI", icon: <Zap className="text-blue-500" />, desc: "Detects supply bottlenecks 48 hours in advance." },
                                    { label: "Blockchain Trust", icon: <ShieldCheck className="text-emerald-500" />, desc: "Immutable records for every SKU move in the chain." }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                                        <div className="text-white font-black text-lg mb-2">{item.label}</div>
                                        <div className="text-blue-100/40 text-sm font-medium leading-relaxed">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[120px]" />
                            <div className="relative z-10 w-full h-full glass-card border-white/5 rounded-[4rem] p-12 overflow-hidden flex items-center justify-center">
                                {/* Simple Logistics Animation Mock */}
                                <div className="relative w-full h-full border border-white/10 rounded-full flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-[80%] h-[80%] border border-blue-500/20 rounded-full"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-[60%] h-[60%] border border-blue-500/30 rounded-full border-dashed"
                                    />
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_50px_rgba(37,99,235,0.5)]">
                                            <Truck size={40} />
                                        </div>
                                        <div className="mt-6 text-center text-white">
                                            <div className="text-4xl font-black">2.4ms</div>
                                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Sync Frequency</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial Features */}
            <section className="py-32 bg-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6">Built for Industrial Scale</h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">AZ Supply Chain handles everything from port logistics to last-mile delivery with elite precision.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Smart Warehousing", desc: "Automated SKU management with robotic-ready digital twin integration.", icon: <Box className="text-blue-600" /> },
                            { title: "Autonomous Last-Mile", desc: "Native integration with delivery partner APIs and custom drone fleets.", icon: <RefreshCcw className="text-emerald-600" /> },
                            { title: "Global Customs", desc: "Automated paperwork and tax handling for over 180+ countries.", icon: <Globe className="text-purple-600" /> }
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

            {/* Network Stats */}
            <section className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { val: "1B+", label: "Deliveries Processed" },
                            { val: "180+", label: "Countries Connected" },
                            { val: "4ms", label: "Api Latency" },
                            { val: "99.99%", label: "Uptime SLA" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-2">{stat.val}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-blue-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark CTA */}
            <section className="py-40 bg-slate-900 relative overflow-hidden text-center">
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-none">Optimize your flow.</h2>
                    <p className="text-2xl text-blue-100/40 mb-16 font-medium">Connect your supply chain to the world&apos;s most advanced logistics network today.</p>
                    <button className="px-12 py-7 bg-white text-slate-900 rounded-[2.5rem] font-black text-2xl hover:bg-blue-600 hover:text-white transition-all">Start Optimization</button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SupplyChainPage;
