"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Globe, Smartphone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Solution = () => {
    return (
        <section id="solutions" className="py-32 relative overflow-hidden bg-slate-50 noise-bg">
            {/* Decorative Blur */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] opacity-50" />
            <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[150px] opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* Visual Dashboard Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden shadow-premium group">
                            <Image
                                src="/unified_ecosystem.png"
                                alt="Unified Commerce Ecosystem"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Accents */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -top-10 -right-10 bg-slate-900 text-white p-6 rounded-[2.5rem] shadow-2xl z-20 w-56"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <Globe size={20} />
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Global Reach</div>
                            </div>
                            <div className="text-3xl font-black">100%</div>
                            <div className="text-[10px] font-bold text-emerald-400 mt-1">Latency: 4ms</div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-10 -left-10 glass-card p-6 rounded-[2rem] shadow-2xl z-20 w-64 border-white/60"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-slate-900 leading-tight">Mobile Apps</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Included</div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase">iOS</div>
                                <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase">Android</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            Everything you need. <br />
                            <span className="text-gradient">Unified.</span>
                        </h2>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
                            We&apos;ve eliminated the friction of managing separate systems. AZ Commerce is the single source of truth for your entire operation.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-12">
                            {[
                                { title: "Unified Data", desc: "No more silos. Every order and customer interaction synced instantly.", icon: <Layers size={22} className="text-blue-600" /> },
                                { title: "Zero Latency", desc: "Built on high-performance cloud architecture for busiest peak seasons.", icon: <Zap size={22} className="text-blue-600" /> },
                                { title: "Enterprise Security", desc: "Bank-grade encryption for every transaction and sensitive data.", icon: <ShieldCheck size={22} className="text-blue-600" /> },
                                { title: "Global Scale", desc: "Launch in new regions and currencies with a single click.", icon: <Globe size={22} className="text-blue-600" /> },
                            ].map((feature, i) => (
                                <div key={i} className="space-y-3 group">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-black text-slate-900 leading-tight">{feature.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-medium text-xs">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/solutions/supply-chain"
                            className="px-8 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-2xl inline-flex items-center gap-3 group"
                        >
                            Explore Logistics Solution
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Banner Image Addition */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 relative h-[450px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/20"
                >
                    <Image
                        src="/unified_ecosystem.png"
                        alt="Ecosystem Banner"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent p-12 flex flex-col justify-center">
                        <div className="max-w-xl">
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Built for the <br /><span className="text-blue-400">future of retail.</span></h3>
                            <p className="text-lg text-blue-100/80 font-medium mb-8">Deploy your entire commerce stack across web, mobile, and physical stores in seconds.</p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/product/website-builder"
                                    className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                                >
                                    Storefronts
                                </Link>
                                <Link
                                    href="/product/inventory"
                                    className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                                >
                                    Inventory
                                </Link>
                                <Link
                                    href="/solutions/supply-chain"
                                    className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                                >
                                    Logistics
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Solution;
