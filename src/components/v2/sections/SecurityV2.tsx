"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Database, RefreshCw, Server, Zap } from "lucide-react";

const SecurityV2 = () => {
    return (
        <section className="py-60 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-600 font-black uppercase tracking-[.4em] text-xs mb-8"
                        >
                            Infrastructure Core
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase mb-20">
                            Bank-Grade <br />
                            <span className="text-blue-600 italic">Security.</span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-12">
                            {[
                                { title: "End-to-End Encryption", desc: "Military-grade AES-256 encryption for all data points.", icon: Lock },
                                { title: "99.99% Uptime SLA", desc: "Globally distributed server clusters with zero single point of failure.", icon: Server },
                                { title: "Auto Real-time Backups", desc: "Every transaction is mirrored across 3 geographic zones instantly.", icon: RefreshCw },
                                { title: "Threat Detection", desc: "AI-powered real-time monitoring for anomaly detection and prevention.", icon: Zap }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h4>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 w-full aspect-square bg-[#0A0A0A] rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 noise-bg opacity-[0.05]" />
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="relative flex items-center justify-center"
                            >
                                <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow" />
                                <div className="absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full animate-reverse-spin-slow" />
                                <div className="w-40 h-40 bg-blue-600 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_80px_rgba(37,99,235,0.4)] relative">
                                    <ShieldCheck size={80} className="text-white" />
                                </div>
                            </motion.div>

                            <div className="absolute bottom-12 left-12 right-12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                                <div className="flex items-center justify-between text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">
                                    <span>Server Load: Optimal</span>
                                    <span>Auth: Active</span>
                                </div>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                                        <motion.div key={i} animate={{ height: [10, 20, 10] }} transition={{ delay: i * 0.1, repeat: Infinity }} className="h-4 flex-grow bg-blue-500/20 rounded-full" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Background Visual Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 -z-10 grid grid-cols-6 h-full w-full gap-4 opacity-5">
                            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="border-r border-slate-900 h-full" />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurityV2;
