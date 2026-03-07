"use client";

import { motion } from "framer-motion";
import { Users, ShoppingBag, ShieldCheck, ArrowRight, Zap, CreditCard } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MarketplacePage = () => {
    return (
        <main className="min-h-screen bg-slate-50 noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 translate-x-32" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-indigo-100">
                                <ShoppingBag size={14} /> Global Vendor OS
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.8] text-slate-900 mb-8 tracking-tighter">
                                Build your <br />
                                <span className="text-indigo-600 italic">Ecosystem.</span>
                            </h1>
                            <p className="text-2xl text-slate-500 mb-10 leading-relaxed font-medium">
                                Transform your single store into a global marketplace. Onboard thousands of vendors, automate complex payouts, and scale your brand empire effortlessly.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl hover:bg-indigo-600 transition-all shadow-2xl flex items-center gap-4 group">
                                    Launch Marketplace
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-6 bg-slate-100 text-slate-900 rounded-[2rem] font-black text-xl hover:bg-white transition-all border border-slate-200">
                                    View Live Demos
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square"
                        >
                            <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
                            <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden shadow-premium border-8 border-white">
                                <Image
                                    src="/marketplace_hero.png"
                                    alt="Marketplace Visualization"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Marketplace Engine Features */}
            <section className="py-32 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "One-Click Onboarding", desc: "Digital verification and automated KYC for global vendors in seconds.", icon: <Users className="text-indigo-400" /> },
                            { title: "Autonomous Payouts", desc: "Complex multi-vendor split payments handled with bank-grade precision.", icon: <CreditCard className="text-emerald-400" /> },
                            { title: "Hyper-Scalable API", desc: "Build custom experiences on top of our enterprise marketplace engine.", icon: <Zap className="text-amber-400" /> }
                        ].map((feature, i) => (
                            <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-black text-white mb-6">{feature.title}</h3>
                                <p className="text-xl text-indigo-100/40 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Stats Section */}
            <section className="py-32 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-1/2">
                            <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">Scale to thousands <br /> of vendors.</h2>
                            <p className="text-xl text-slate-500 font-medium mb-12">Manage everything from a single command center. We handle the complexity of inventory sync, global taxes, and vendor communications.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { val: "100k+", label: "Target Vendors" },
                                    { val: "0.4s", label: "Payout Latency" },
                                    { val: "180+", label: "Supported Currencies" },
                                    { val: "99.99%", label: "Uptime SLA" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-4xl font-display font-black text-slate-900 mb-1">{stat.val}</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-indigo-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-slate-50 rounded-[4rem] p-12 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px]" />
                            <div className="relative z-10 space-y-8">
                                <div className="p-8 bg-white rounded-3xl shadow-sm flex items-center gap-6">
                                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">V</div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">New Vendor Applied</div>
                                        <div className="text-xs font-bold text-slate-400">Chronos Luxury Goods</div>
                                    </div>
                                    <div className="ml-auto w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><ShieldCheck size={20} /></div>
                                </div>
                                <div className="p-8 bg-white rounded-3xl shadow-sm flex items-center gap-6 opacity-60 scale-95 origin-top">
                                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">A</div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">Payout Scheduled</div>
                                        <div className="text-xs font-bold text-slate-400">$24,980.00 to Aurum Couture</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 bg-slate-950 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-none">Your Empire. <br /> Our Engine.</h2>
                    <p className="text-2xl text-indigo-100/40 mb-16 font-medium">Built for global retail giants and ambitious digital platforms.</p>
                    <button className="px-12 py-7 bg-indigo-600 text-white rounded-[2.5rem] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all">Talk to Marketplace Expert</button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default MarketplacePage;
