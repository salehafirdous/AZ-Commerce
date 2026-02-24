"use client";

import { motion } from "framer-motion";
import { Users, Heart, Share2, TrendingUp, ArrowRight, Zap, Smartphone } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const D2CBrandsPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden bg-stone-50">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/d2c_hero.png"
                        alt="D2C Brand Lifestyle"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200 text-stone-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-stone-300">
                                <Heart size={14} /> Direct to Customer Excellence
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-display font-black leading-[1] text-slate-900 mb-8 tracking-tighter">
                                Own your <br />
                                <span className="text-stone-500 italic">Audience.</span>
                            </h1>
                            <p className="text-2xl text-slate-500 mb-10 leading-relaxed font-medium">
                                Build deep, lasting relationships without the middleman. AZ D2C OS provides the tools to launch, grow, and scale your brand identity with absolute control.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl hover:bg-stone-600 transition-all shadow-2xl flex items-center gap-4 group">
                                    Start Your Brand
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-6 bg-white text-slate-900 border border-slate-200 rounded-[2rem] font-black text-xl hover:bg-slate-50 transition-all">
                                    Success Stories
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium"
                        >
                            <Image
                                src="/d2c_hero.png"
                                alt="Modern Brand Studio"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 p-8 glass-card border-white/20 rounded-[2rem]">
                                <div className="flex items-center justify-between text-white">
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Customer Retention</div>
                                        <div className="text-3xl font-black">94%</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                        <TrendingUp className="text-emerald-400" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* D2C Core Values */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "First-Party Data", desc: "Own every data point. Understand your customers' behavior at a granular level.", icon: <Users className="text-stone-600" /> },
                            { title: "Engagement Loops", desc: "Native loyalty and WhatsApp marketing tools to keep your brand top-of-mind.", icon: <Share2 className="text-stone-600" /> },
                            { title: "Direct Logistics", desc: "Integrate with premium couriers for a branded unboxing experience every time.", icon: <Zap className="text-stone-600" /> }
                        ].map((feature, i) => (
                            <div key={i} className="p-12 bg-stone-50 rounded-[3.5rem] border border-stone-100 hover:shadow-2xl transition-all group">
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

            {/* Social Commerce Section */}
            <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-stone-500/10 blur-[100px] rounded-full" />
                            <div className="relative bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 border border-white/10 aspect-square flex flex-col justify-center">
                                <div className="space-y-8">
                                    <div className="text-center font-display font-black text-5xl mb-12">Social Hub.</div>
                                    <div className="flex justify-center gap-6">
                                        {["TikTok", "Instagram", "Snapchat"].map(s => (
                                            <div key={s} className="px-6 py-3 bg-white/10 rounded-2xl border border-white/20 text-xs font-bold uppercase tracking-widest">{s}</div>
                                        ))}
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center">
                                        <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Live Influencer Pulse</div>
                                        <div className="text-4xl font-black text-emerald-400">🔥 +482%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-5xl md:text-6xl font-display font-black mb-8 leading-tight">Commerce where <br />they congregate.</h2>
                            <p className="text-xl text-stone-100/60 font-medium mb-12">Sell directly on Instagram, TikTok, and WhatsApp. Your brand is everywhere your customer goes, with one unified checkout experience.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { val: "2.4s", label: "Mobile Checkout" },
                                    { val: "8x", label: "ROAS Boost" },
                                    { val: "100%", label: "Data Ownership" },
                                    { val: "24h", label: "Launch Window" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-display font-black text-white mb-1">{stat.val}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-8xl font-display font-black text-slate-900 mb-10 leading-none">Your Brand. <br />Your Empire.</h2>
                    <p className="text-2xl text-slate-500 mb-16 font-medium">The operating system for the world&apos;s next iconic brands.</p>
                    <button className="px-12 py-7 bg-slate-900 text-white rounded-[2.5rem] font-black text-2xl hover:bg-stone-600 transition-all shadow-xl">Get Started with D2C</button>
                    <div className="mt-16 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                        <Smartphone size={14} /> iOS & Android Apps Included
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default D2CBrandsPage;
