"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BarChart3, PieChart, Users, Package, ArrowUpRight, Search, Bell } from "lucide-react";

const DashboardPreviewV2 = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <section ref={containerRef} className="py-60 bg-[#050505] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-black uppercase tracking-[.5em] text-[10px] mb-8"
                    >
                        The Command Center
                    </motion.div>
                    <h2 className="text-7xl md:text-[8vw] font-display font-black text-white leading-none tracking-tighter uppercase mb-12">
                        Real-time <br />
                        <span className="text-blue-500 italic font-medium tracking-normal lowercase italic text-[7vw]">Intelligence.</span>
                    </h2>
                </div>

                <div className="perspective-2000">
                    <motion.div
                        style={{ rotateX, scale }}
                        className="w-full max-w-6xl mx-auto rounded-[4rem] bg-[#0A0A0A] border border-white/10 shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] overflow-hidden relative"
                    >
                        {/* Browser Bar */}
                        <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-8 gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                            </div>
                            <div className="flex-grow flex justify-center">
                                <div className="bg-white/5 px-6 py-1.5 rounded-full text-xs text-white/20 font-mono">az-commerce.os/v2/admin</div>
                            </div>
                        </div>

                        {/* Dashboard Content Mock */}
                        <div className="p-12 min-h-[700px]">
                            {/* Layout Grid */}
                            <div className="grid lg:grid-cols-12 gap-10">
                                {/* Left Side Stats */}
                                <div className="lg:col-span-8 space-y-10">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {[
                                            { label: "Net Profit", val: "$124.5k", grow: "+18%", color: "text-blue-500" },
                                            { label: "Order Vol", val: "4.8k", grow: "+22%", color: "text-indigo-500" },
                                            { label: "Active Subs", val: "1.2k", grow: "+12%", color: "text-emerald-500" },
                                            { label: "Churn Rate", val: "1.4%", grow: "-4%", color: "text-red-500" }
                                        ].map((s, i) => (
                                            <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                                <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">{s.label}</div>
                                                <div className="text-2xl font-black text-white mb-2">{s.val}</div>
                                                <div className={`text-[10px] font-black ${s.color}`}>{s.grow}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main Chart Card */}
                                    <div className="bg-white/5 rounded-[3rem] p-10 border border-white/5 h-[400px] relative overflow-hidden">
                                        <div className="flex items-center justify-between mb-12">
                                            <h4 className="text-xl font-black text-white uppercase tracking-tighter">Growth Velocity</h4>
                                            <div className="flex gap-4">
                                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                                <div className="w-3 h-3 rounded-full bg-blue-500/20" />
                                            </div>
                                        </div>
                                        <div className="flex items-end gap-4 h-48 mt-12">
                                            {[40, 70, 45, 90, 65, 85, 120, 100, 140, 110, 160].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${(h / 200) * 100}%` }}
                                                    className="flex-grow bg-blue-600/40 rounded-t-xl hover:bg-blue-500 transition-colors"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Panel */}
                                <div className="lg:col-span-4 space-y-10">
                                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] p-10 text-white relative overflow-hidden">
                                        <div className="relative z-10">
                                            <div className="text-[10px] font-black opacity-60 uppercase mb-8">System Status</div>
                                            <div className="text-3xl font-black mb-10 tracking-tighter leading-none">ALL MODULES <br /> OPERATIONAL</div>
                                            <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl">Audit System</button>
                                        </div>
                                        <div className="absolute top-0 right-0 p-8 opacity-20"><ArrowUpRight size={48} /></div>
                                    </div>

                                    <div className="bg-white/5 rounded-[3rem] p-10 border border-white/5">
                                        <h4 className="text-sm font-black text-white/40 uppercase mb-8">Recent Events</h4>
                                        <div className="space-y-6">
                                            {[
                                                { e: "Stock Alert", d: "Warehouse A02 Low", t: "2m ago" },
                                                { e: "New User", d: "Premium Upgrade #42", t: "12m ago" },
                                                { e: "POS Sync", d: "Branch 04 Completed", t: "24m ago" }
                                            ].map((ev, i) => (
                                                <div key={i} className="flex justify-between items-center group cursor-pointer">
                                                    <div>
                                                        <div className="text-xs font-black text-white group-hover:text-blue-400 transition-colors">{ev.e}</div>
                                                        <div className="text-[10px] text-white/20 font-bold mt-1">{ev.d}</div>
                                                    </div>
                                                    <div className="text-[10px] text-white/10 font-mono">{ev.t}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreviewV2;
