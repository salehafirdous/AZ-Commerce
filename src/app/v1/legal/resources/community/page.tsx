"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Globe, Heart, ArrowRight, Zap, Target, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CommunityPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/community_hero.png"
                        alt="Global Community Network Vision"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-orange-500/20">
                            <Users size={14} /> Driven by Builders
                        </div>
                        <h1 className="text-6xl lg:text-9xl font-display font-black leading-[0.85] text-white mb-12 tracking-tighter">
                            Built for <br />
                            <span className="text-orange-500 italic">one another.</span>
                        </h1>
                        <p className="text-2xl text-orange-100/40 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
                            Join 50,000+ entrepreneurs, developers, and visionaries building the future of commerce on AZ OS. Shared knowledge, collective growth.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <button className="px-12 py-7 bg-white text-slate-900 rounded-[2.5rem] font-black text-2xl hover:bg-orange-500 hover:text-white transition-all shadow-2xl flex items-center gap-4 group">
                                Join Discord Community
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="px-12 py-7 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-[2.5rem] font-black text-2xl hover:bg-white/10 transition-all">
                                Explore Forums
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Community Pillars */}
            <section className="py-32 bg-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Collaborative Labs", desc: "Work together on open-source modules and shared UI kits for the AZ ecosystem.", icon: <Zap className="text-orange-600" /> },
                            { title: "Global Events", desc: "From localized meetups to our annual world conference in Paris.", icon: <Globe className="text-blue-600" /> },
                            { title: "Mentor Program", desc: "Connect with industry veterans who have scaled to 8 and 9 figures.", icon: <Heart className="text-rose-500" /> }
                        ].map((feature, i) => (
                            <div key={i} className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 group hover:shadow-2xl transition-all">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-6">{feature.title}</h3>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Real-time Pulse Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">Collective <br />Intelligence.</h2>
                            <p className="text-xl text-slate-600 font-medium mb-12">Our community doesn&apos;t just talk—we build. Every day, hundreds of snippets, templates, and solutions are shared within our private circles.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { val: "50k+", label: "Active Members" },
                                    { val: "1.2k", label: "Daily Snippets" },
                                    { val: "180", label: "Global Meetups" },
                                    { val: "24/7", label: "Peer Support" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200/50">
                                        <div className="text-4xl font-display font-black text-slate-900 mb-1">{stat.val}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-orange-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full" />
                            <div className="relative bg-white rounded-[4rem] p-12 shadow-2xl border border-slate-100">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center"><MessageSquare size={20} className="text-orange-600" /></div>
                                        <div>
                                            <div className="text-sm font-black text-slate-900">New Solution Shared</div>
                                            <div className="text-xs font-bold text-slate-400">High-Performance Checkout Snippet</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 opacity-60">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"><Target size={20} className="text-blue-600" /></div>
                                        <div>
                                            <div className="text-sm font-black text-slate-900">London Meetup Scheduled</div>
                                            <div className="text-xs font-bold text-slate-400">June 24th, 2026</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 opacity-40">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center"><ShieldCheck size={20} className="text-emerald-600" /></div>
                                        <div>
                                            <div className="text-sm font-black text-slate-900">Community Safety Badge</div>
                                            <div className="text-xs font-bold text-slate-400">Auto-assigned to Verified Devs</div>
                                        </div>
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
                    <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-none">Don&apos;t build <br />in isolation.</h2>
                    <p className="text-2xl text-orange-100/40 mb-16 font-medium">Step into the most powerful network in commerce.</p>
                    <button className="px-12 py-7 bg-orange-600 text-white rounded-[2.5rem] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all shadow-xl">Join the Movement</button>
                    <div className="mt-16 text-xs font-bold text-white/10 uppercase tracking-widest flex items-center justify-center gap-2">
                        Powered by entrepreneurs like you.
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CommunityPage;
