"use client";

import { motion } from "framer-motion";
import { Globe, Zap, ArrowRight, MousePointer2, CreditCard, Layout } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const EcommerceSolutionPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/ecommerce_hero.png"
                        alt="Global Ecommerce Vision"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
                                <Globe size={14} className="animate-pulse" /> Borderless Digital Trade
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-white mb-8 tracking-tighter">
                                Infinite <br />
                                <span className="text-blue-500 italic">Conversions.</span>
                            </h1>
                            <p className="text-2xl text-blue-100/60 mb-10 leading-relaxed font-medium">
                                The high-performance engine for global e-commerce. Built to handle millions of SKU combinations and peak holiday traffic with zero latency.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center gap-4 group">
                                    Launch Your Flagship
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all">
                                    Compare Plans
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square"
                        >
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
                            <div className="relative z-10 w-full h-full glass-card border-white/10 rounded-[4rem] p-12 overflow-hidden">
                                <div className="space-y-8">
                                    <div className="h-12 bg-white/5 rounded-2xl border border-white/5 flex items-center px-6 gap-4">
                                        <div className="w-4 h-4 rounded-full bg-red-400/50" />
                                        <div className="text-[10px] font-black uppercase text-white/40">Checkout Pipeline: Active</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6 h-64">
                                        <div className="bg-blue-600/20 rounded-3xl border border-blue-500/30 flex flex-col justify-center p-8">
                                            <div className="text-4xl font-black text-white">4.2%</div>
                                            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-2">Conv. Rate</div>
                                        </div>
                                        <div className="bg-white/5 rounded-3xl border border-white/5 flex flex-col justify-center p-8">
                                            <div className="text-4xl font-black text-white">$1.2M</div>
                                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Daily GMV</div>
                                        </div>
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="text-xs font-black uppercase text-white/60">Live Sessions</div>
                                            <div className="flex -space-x-3">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                className="h-full w-1/3 bg-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Lightning Load", desc: "Proprietary edge delivery for sub-second page loads globally.", icon: <Zap className="text-blue-600" /> },
                            { title: "Smart Checkout", desc: "One-click buying optimized for mobile and high-intent users.", icon: <MousePointer2 className="text-purple-600" /> },
                            { title: "Global Payouts", desc: "Native multi-currency support and automated local tax calculation.", icon: <CreditCard className="text-emerald-600" /> },
                            { title: "Visual Builder", desc: "Design complex transactional pages with a high-fidelity editor.", icon: <Layout className="text-amber-500" /> }
                        ].map((feature, i) => (
                            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scale Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">Scale to the <br /> moon.</h2>
                            <p className="text-xl text-slate-600 font-medium mb-12">Whether you&apos;re doing 10 orders or 10 million, our infrastructure autoscales to handle the surge. No more site crashes during BFCM.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { val: "99.99%", label: "Uptime" },
                                    { val: "4ms", label: "Latency" },
                                    { val: "24/7", label: "Support" },
                                    { val: "100+", label: "Features" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-4xl font-display font-black text-slate-900 mb-1">{stat.val}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-[100px]" />
                            <Image
                                src="/ecommerce_hero.png"
                                alt="Scale Vision"
                                fill
                                className="object-cover rounded-[4rem]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 bg-slate-950 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-none">Global trade. <br />Simplified.</h2>
                    <p className="text-2xl text-blue-100/40 mb-16 font-medium">Join 10,000+ top-tier brands running on the world&apos;s most advanced e-commerce engine.</p>
                    <button className="px-12 py-7 bg-blue-600 text-white rounded-[2.5rem] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all">Start Your Flagship Store</button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default EcommerceSolutionPage;
