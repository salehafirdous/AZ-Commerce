"use client";

import { motion } from "framer-motion";
import { Store, Smartphone, CreditCard, Users, ArrowRight, Zap, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const RetailSolutionPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                        src="/retail_hero.png"
                        alt="Retail Future Visualization"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100">
                                <Store size={14} /> The Future of Physical Commerce
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-display font-black leading-[1] text-slate-900 mb-8 tracking-tighter">
                                Retail, <br />
                                <span className="text-blue-600 italic">Reimagined.</span>
                            </h1>
                            <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
                                Bridge the gap between digital ease and physical sensory experience. AZ Retail OS provides the unified brain for your brick-and-mortar empire.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl hover:bg-blue-600 transition-all shadow-2xl flex items-center gap-4 group">
                                    Book a Showroom Visit
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-6 bg-white text-slate-900 border border-slate-200 rounded-[2rem] font-black text-xl hover:bg-slate-50 transition-all">
                                    View Features
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-premium"
                        >
                            <Image
                                src="/retail_hero.png"
                                alt="Modern Retail Interior"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 flex gap-4">
                                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex-grow">
                                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">In-Store Traffic</div>
                                    <div className="text-2xl font-black text-white">1,482 <span className="text-xs text-emerald-400">+12%</span></div>
                                </div>
                                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex-grow">
                                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Avg. Session</div>
                                    <div className="text-2xl font-black text-white">24m</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Retail Features */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Unified POS", desc: "A lightning-fast checkout experience that syncs with your online store instantly.", icon: <CreditCard className="text-blue-600" /> },
                            { title: "Clienteling", desc: "Empower your staff with deep customer insights and personalized shopping histories.", icon: <Users className="text-purple-600" /> },
                            { title: "Mobile Inventory", desc: "Check stock levels across all branches from a beautiful mobile application.", icon: <Smartphone className="text-emerald-600" /> }
                        ].map((feature, i) => (
                            <div key={i} className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 group hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6">{feature.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Omni-Channel Visualization */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="grid grid-cols-12 h-full w-full">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="border-r border-white/10 h-full" />
                        ))}
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-display font-black mb-8 leading-tight">One brain for <br /> every store.</h2>
                            <p className="text-xl text-blue-100/60 font-medium mb-12">No more disconnected data. Whether they buy online and return in-store, or browse in-store and ship to home—it&apos;s one seamless profile.</p>
                            <div className="space-y-6">
                                {[
                                    { label: "Real-time Multi-store Sync", icon: <Zap className="text-blue-400" /> },
                                    { label: "Global Franchise Control", icon: <Globe className="text-purple-400" /> },
                                    { label: "Automated Staff Comms", icon: <ShieldCheck className="text-emerald-400" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 py-4 border-b border-white/10">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">{item.icon}</div>
                                        <span className="text-lg font-bold">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full" />
                            <div className="relative bg-white/5 backdrop-blur-2xl rounded-[4rem] p-12 border border-white/10">
                                {/* Simple Store Map visualization mock */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                                        <div className="text-3xl font-black mb-1">Paris HQ</div>
                                        <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Active</div>
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5 border-blue-500/30">
                                        <div className="text-3xl font-black mb-1">NYC Flagship</div>
                                        <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Bestseller</div>
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                                        <div className="text-3xl font-black mb-1">Tokyo Node</div>
                                        <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Active</div>
                                    </div>
                                    <div className="p-8 bg-white/20 rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/30 transition-all">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-2"><Zap size={20} /></div>
                                        <div className="text-xs font-black uppercase tracking-widest">Add Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial / Brand Banner */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-black text-slate-900 mb-8">Powering the world&apos;s most beautiful stores.</h2>
                    <div className="flex flex-wrap justify-center gap-12 grayscale opacity-30 mt-12">
                        <div className="text-3xl font-black italic">AETHEREAL</div>
                        <div className="text-3xl font-black tracking-tighter uppercase">Chronos Luxe</div>
                        <div className="text-3xl font-black">AURUM</div>
                        <div className="text-3xl font-black uppercase tracking-widest">Neo Genesis</div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default RetailSolutionPage;
