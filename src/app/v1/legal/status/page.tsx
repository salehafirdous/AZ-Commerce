"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Globe, Clock, Server, Database, Cloud } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const StatusPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/status_hero.png"
                        alt="Global Network Status Vision"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-500/20">
                        <Activity size={14} className="animate-pulse" /> All Systems Operational
                    </div>
                    <h1 className="text-6xl lg:text-9xl font-display font-black leading-[0.85] text-white mb-8 tracking-tighter">
                        99.99% <br />
                        <span className="text-emerald-500 italic">Uptime.</span>
                    </h1>
                    <p className="text-2xl text-emerald-100/40 mb-16 max-w-2xl mx-auto italic font-medium">
                        Real-time monitoring of our global commerce infrastructure.
                    </p>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-20 bg-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Checkout API", status: "Operational", icon: <Zap className="text-emerald-500" /> },
                            { name: "Inventory Sync", status: "Operational", icon: <Database className="text-emerald-500" /> },
                            { name: "POS Cloud Engine", status: "Operational", icon: <Cloud className="text-emerald-500" /> },
                            { name: "Merchant Dashboard", status: "Operational", icon: <Server className="text-emerald-500" /> },
                            { name: "Global CDN", status: "Operational", icon: <Globe className="text-emerald-500" /> },
                            { name: "Customer Auth", status: "Operational", icon: <ShieldCheck className="text-emerald-500" /> }
                        ].map((service, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:shadow-xl transition-all">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">{service.icon}</div>
                                    <div>
                                        <div className="text-lg font-black text-slate-900 leading-none mb-2">{service.name}</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Status</div>
                                    </div>
                                </div>
                                <div className="text-emerald-500 font-black text-xs uppercase tracking-widest">{service.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-5xl font-display font-black text-slate-900 mb-8 leading-tight">Uptime over <br /> the last 90 days.</h2>
                            <div className="flex gap-1 mb-8">
                                {Array.from({ length: 90 }).map((_, i) => (
                                    <div key={i} className={`h-12 flex-grow rounded-sm ${i === 42 || i === 85 ? "bg-amber-400" : "bg-emerald-500"} opacity-40 hover:opacity-100 transition-opacity cursor-pointer`} title={`Day ${i + 1}: 100%`} />
                                ))}
                            </div>
                            <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>90 Days Ago</span>
                                <span className="text-slate-900">Today</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-slate-900 rounded-[4rem] p-12 text-white relative">
                            <div className="space-y-10">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400"><Clock size={20} /></div>
                                        <div className="text-lg font-black italic">Avg. Latency</div>
                                    </div>
                                    <div className="text-3xl font-black text-emerald-400">4.2ms</div>
                                </div>
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="h-full w-1/4 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                    <div>
                                        <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Global Traffic</div>
                                        <div className="text-2xl font-black">1.28 PB/day</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">DDoS Mitigation</div>
                                        <div className="text-2xl font-black text-emerald-400">Active</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Incidents Archive */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-slate-900 mb-12">Recent Incidents</h2>
                    <div className="space-y-8">
                        <div className="p-10 border border-slate-100 rounded-[3rem] bg-slate-50 flex items-start gap-8">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0"><Activity size={24} className="text-amber-500" /></div>
                            <div>
                                <div className="text-[10px] font-black uppercase text-amber-500 tracking-[0.2em] mb-2">Resolved · May 12, 2026</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Intermittent Latency in EU-West Node</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">System performance returned to normal after 14 minutes of investigation. Core cause was a routine CDN cache refresh loop.</p>
                            </div>
                        </div>
                        <div className="text-center pt-8">
                            <button className="text-sm font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">View Incident Archive</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default StatusPage;
