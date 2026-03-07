"use client";

import { motion } from "framer-motion";
import { Handshake, Globe, Zap, ShieldCheck, ArrowRight, Target, Layout, Users } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PartnerProgramPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="/partner_hero.png"
                        alt="Global Partnership Vision"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-yellow-500/20">
                                <Handshake size={14} /> Shared Growth Ecosystem
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-white mb-8 tracking-tighter">
                                Better <br />
                                <span className="text-yellow-500 italic">Together.</span>
                            </h1>
                            <p className="text-2xl text-blue-100/40 mb-10 leading-relaxed font-medium">
                                Join the elite network of agencies, developers, and consultants scaling the world&apos;s most ambitious commerce brands on AZ OS.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-6 bg-yellow-500 text-slate-900 rounded-[2rem] font-black text-xl hover:bg-white transition-all shadow-2xl flex items-center gap-4 group">
                                    Become a Partner
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all">
                                    Partner Directory
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square"
                        >
                            <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-[100px] animate-pulse" />
                            <div className="relative z-10 w-full h-full glass-card border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-center">
                                <div className="space-y-10">
                                    <div className="text-center">
                                        <div className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest mb-2">Total Partner Payouts</div>
                                        <div className="text-5xl font-display font-black text-white">$42.8M</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center">
                                            <div className="text-2xl font-black text-white">4.2k</div>
                                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Active Agencies</div>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center">
                                            <div className="text-2xl font-black text-white">$2.4k</div>
                                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Avg. Commission</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partner Tiers */}
            <section className="py-32 bg-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6">Built for every expert.</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">From independent developers to global system integrators.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Design Agencies", desc: "Build stunning storefronts using our high-fidelity visual builder and custom CSS engine.", icon: <Layout className="text-blue-600" /> },
                            { title: "Dev Partners", desc: "Access early betas, deep documentation, and dedicated engineering support for complex builds.", icon: <Zap className="text-yellow-600" /> },
                            { title: "Strategic Consultants", desc: "Help brands scale their operations, logistics, and multi-vendor strategies with ease.", icon: <Target className="text-purple-600" /> }
                        ].map((feature, i) => (
                            <div key={i} className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6">{feature.title}</h3>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Directory Mock */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">A world of <br /> opportunity.</h2>
                            <p className="text-xl text-slate-600 font-medium mb-12">Tap into thousands of high-value leads seeking AZ OS experts. Our directory connects top-tier brands with the best partners in the world.</p>
                            <div className="space-y-6">
                                {[
                                    { label: "Rev-Share on Every Client", icon: <Zap className="text-yellow-500" /> },
                                    { label: "White-Label Partner Portal", icon: <Users className="text-blue-500" /> },
                                    { label: "Co-Marketing Opportunities", icon: <Globe className="text-purple-500" /> }
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
                                src="/partner_hero.png"
                                alt="Partner Network"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-yellow-900/40 backdrop-blur-[1px] flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl border border-white text-center">
                                    <div className="text-yellow-600 font-black text-sm uppercase tracking-widest mb-2">Partner Health</div>
                                    <div className="text-5xl font-display font-black text-slate-900">Premium</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 bg-slate-900 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-none">The Future is <br /> Partner-led.</h2>
                    <p className="text-2xl text-yellow-100/40 mb-16 font-medium">Build your legacy on the world&apos;s most advanced commerce OS.</p>
                    <button className="px-12 py-7 bg-yellow-500 text-slate-900 rounded-[2.5rem] font-black text-2xl hover:bg-white transition-all shadow-xl">Apply for Partnership</button>
                    <div className="mt-16 text-xs font-bold text-white/20 uppercase tracking-widest flex items-center justify-center gap-2">
                        <ShieldCheck size={14} /> Official Certification Program Available
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PartnerProgramPage;
