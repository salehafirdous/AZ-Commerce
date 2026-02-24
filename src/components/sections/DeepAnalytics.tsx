"use client";

import { motion } from "framer-motion";
import { BarChart3, PieChart, TrendingUp, Zap, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const DeepAnalytics = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-white noise-bg">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-orange-100">
                            <Zap size={14} fill="currentColor" /> AI-Powered
                        </div>

                        <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            Deep Analytics. <br />
                            <span className="text-orange-500">Decisions 2.0.</span>
                        </h2>

                        <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-lg">
                            Stop guessing. Start knowing. Our AI-driven engine processes millions of data points to give you actionable insights into sales, inventory, and customer growth.
                        </p>

                        <div className="space-y-8 mb-12">
                            {[
                                { title: "Predictive Inventory", desc: "Know exactly what to stock before it runs out. Save 30% on capital overhead.", icon: <TrendingUp className="text-orange-600" /> },
                                { title: "Customer LTV Analysis", desc: "Identify your most valuable customers and target them with surgical precision.", icon: <BarChart3 className="text-orange-600" /> },
                                { title: "Real-time Sales Velocity", desc: "Watch your business move in real-time with zero-latency dashboard updates.", icon: <PieChart className="text-orange-600" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl flex items-center gap-3 group">
                            View Live Analytics
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Image Side (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative aspect-square w-full">
                            {/* Outer Glow */}
                            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[100px] animate-pulse" />

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden shadow-premium border border-slate-100 group">
                                <Image
                                    src="/deep_analytics.png"
                                    alt="Deep Analytics Dashboard"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />

                                {/* Overlay Cards */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-12 left-12 glass-card p-6 rounded-3xl w-56 border-white/40 shadow-2xl"
                                >
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Growth Forecast</div>
                                    <div className="text-2xl font-black text-slate-900">+48.2%</div>
                                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "75%" }}
                                            className="h-full bg-orange-500"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-12 right-12 bg-slate-900 text-white p-6 rounded-3xl w-56 shadow-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                            <BarChart3 size={16} />
                                        </div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Insights</div>
                                    </div>
                                    <div className="text-sm font-bold leading-relaxed">
                                        &quot;Inventory levels are optimized for the upcoming festive season.&quot;
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DeepAnalytics;
