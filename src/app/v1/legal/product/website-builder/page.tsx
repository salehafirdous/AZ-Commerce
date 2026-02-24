"use client";

import { motion } from "framer-motion";
import { Layout, MousePointer2, Zap, Smartphone, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const WebsiteBuilderPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-32" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100">
                                <MousePointer2 size={14} /> Drag & Drop Masterpiece
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-slate-900 mb-8 tracking-tighter">
                                Build your <br />
                                <span className="text-gradient">Empire.</span>
                            </h1>
                            <p className="text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
                                Design a stunning, high-converting storefront without writing a single line of code. The world&apos;s most intuitive builder for elite brands.
                            </p>
                            <button className="px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl hover:bg-blue-600 transition-all shadow-2xl flex items-center gap-4 group">
                                Start Building for Free
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative aspect-square"
                        >
                            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
                            <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden shadow-premium border-8 border-white/50">
                                <Image
                                    src="/builder_hero.png"
                                    alt="Website Builder Interface"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6">Designed for Excellence</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Every tool you need to launch a world-class digital flagship.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Pixel Perfect Control", desc: "Every element is customizable. Layouts that adapt to your brand identity perfectly.", icon: <Layout className="text-blue-600" /> },
                            { title: "Lightning Fast Performance", desc: "Built for core web vitals. Your site loads in milliseconds, guaranteed.", icon: <Zap className="text-amber-500" /> },
                            { title: "Mobile-First Design", desc: "Preview and edit for mobile, tablet, and desktop simultaneously.", icon: <Smartphone className="text-purple-600" /> },
                            { title: "Global CDN", desc: "Deploy your site to edge servers worldwide for zero-latency access.", icon: <Globe className="text-emerald-500" /> },
                            { title: "SEO Optimized", desc: "Automatic meta tags, sitemaps, and SSL for search engine domination.", icon: <CheckCircle2 className="text-blue-600" /> },
                            { title: "Unified Checkout", desc: "Integrated payment processing with the world&apos;s highest conversion rate.", icon: <Layout className="text-rose-600" /> }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 group transition-all"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-8 leading-tight">Elite Templates. <br /> Zero effort.</h2>
                            <p className="text-2xl text-slate-500 font-medium">Start with a designer-crafted foundation and make it yours in minutes.</p>
                        </div>
                        <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-slate-900 transition-all flex items-center gap-3">
                            Browse All Templates <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="aspect-[16/10] bg-slate-100 rounded-[3rem] overflow-hidden group relative">
                            <Image src="/builder_hero.png" alt="Template 1" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent p-12 flex flex-col justify-end">
                                <h4 className="text-3xl font-black text-white mb-2">Aurelius Luxury</h4>
                                <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">High Fashion / Minimalism</p>
                            </div>
                        </div>
                        <div className="aspect-[16/10] bg-slate-100 rounded-[3rem] overflow-hidden group relative">
                            <Image src="/builder_hero.png" alt="Template 2" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent p-12 flex flex-col justify-end">
                                <h4 className="text-3xl font-black text-white mb-2">Neo-Retail OS</h4>
                                <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Electronics / Modern</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-5 blur-[100px] -translate-y-1/2" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-10 leading-none">Ready to build?</h2>
                    <p className="text-2xl text-blue-100/60 mb-16 font-medium">Join 10,000+ brands building the future of commerce on AZ OS.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-12 py-6 bg-white text-slate-900 rounded-[2.5rem] font-black text-2xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">Get Started Free</button>
                        <button className="px-12 py-6 bg-transparent text-white border-2 border-white/20 rounded-[2.5rem] font-black text-2xl hover:bg-white/5 transition-all">Schedule Demo</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default WebsiteBuilderPage;
