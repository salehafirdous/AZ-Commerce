"use client";

import { motion } from "framer-motion";
import { Share2, Globe, ShieldCheck, Zap, ArrowRight, Layers, Layout, Users } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const FranchisesPage = () => {
    return (
        <main className="min-h-screen bg-slate-900 noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="/franchise_hero.png"
                        alt="Global Franchise Network Visualization"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
                                <Globe size={14} className="animate-spin-slow" /> Scalable Brand Unity
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-display font-black leading-[1] text-white mb-8 tracking-tighter">
                                Infinite <br />
                                <span className="text-blue-500 italic">Nodes.</span> One Vision.
                            </h1>
                            <p className="text-2xl text-blue-100/60 mb-10 leading-relaxed font-medium">
                                Manage thousands of franchises with local autonomy and central control. AZ Franchise OS provides the unified brain for world-class networks.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center gap-4 group">
                                    Book Network Demo
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all">
                                    Franchise Portal
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
                            <div className="relative z-10 glass-card border-white/10 rounded-[4rem] p-12 overflow-hidden aspect-square flex flex-col justify-center">
                                <div className="space-y-10">
                                    <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/5">
                                        <div>
                                            <div className="text-xs font-black text-blue-400 uppercase tracking-widest">Active Nodes</div>
                                            <div className="text-3xl font-black text-white">1,280</div>
                                        </div>
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-black">Node {i}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-8 bg-blue-500/10 rounded-4xl border border-blue-500/20 text-center">
                                            <div className="text-3xl font-black text-white">$42M</div>
                                            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-2">Combined Rev</div>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-4xl border border-white/5 text-center">
                                            <div className="text-3xl font-black text-white">99.9%</div>
                                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Brand Compliance</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Scale Features */}
            <section className="py-32 bg-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Centralized Vault", desc: "Manage pricing, promotions, and brand assets centrally and push to nodes instantly.", icon: <ShieldCheck className="text-blue-600" /> },
                            { title: "Local Autonomy", desc: "Empower franchisees with tools to manage their local staff and inventory nuances.", icon: <Zap className="text-amber-500" /> },
                            { title: "Network Analytics", desc: "Compare performance between nodes and identify high-performing locations in real-time.", icon: <Layers className="text-purple-600" /> }
                        ].map((feature, i) => (
                            <div key={i} className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6">{feature.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Franchise Management Console Visual */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">Master Command. <br /> Global Scale.</h2>
                            <p className="text-xl text-slate-600 font-medium mb-12">No more manual spreadsheets or disconnected reporting. Our franchise console gives you the cockpit view of your entire organization.</p>
                            <div className="space-y-6">
                                {[
                                    { label: "One-Click Brand Refresh", icon: <Layout className="text-blue-600" /> },
                                    { label: "Automated Royalty Calculations", icon: <Users className="text-purple-600" /> },
                                    { label: "Universal Vendor Onboarding", icon: <Share2 className="text-emerald-600" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-200/50">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">{item.icon}</div>
                                        <div className="text-lg font-black text-slate-900">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/franchise_hero.png"
                                alt="Management Console"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[1px] flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl border border-white text-center">
                                    <div className="text-blue-600 font-black text-sm uppercase tracking-widest mb-2">Network Health</div>
                                    <div className="text-5xl font-display font-black text-slate-900">Optimal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 bg-slate-900 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-none">Your Empire. <br /> Our Operating System.</h2>
                    <p className="text-2xl text-blue-100/40 mb-16 font-medium">Built for the world&apos;s most ambitious franchise brands.</p>
                    <button className="px-12 py-7 bg-blue-600 text-white rounded-[2.5rem] font-black text-2xl hover:bg-white hover:text-slate-900 transition-all shadow-xl">Contact Enterprise Sales</button>
                    <div className="mt-16 text-xs font-bold text-white/20 uppercase tracking-widest flex items-center justify-center gap-2">
                        <ShieldCheck size={14} /> ISO 27001 & SOC2 Type II Certified
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FranchisesPage;
