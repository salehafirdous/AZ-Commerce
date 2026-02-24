"use client";

import { Search, Book, FileText, Code2, Globe, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const DocumentationPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Search Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/docs_hero.png"
                        alt="Documentation Hub Vision"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
                        <Book size={14} /> Knowledge Ecosystem
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-white mb-12 tracking-tighter">
                        Everything you need <br />
                        <span className="text-blue-500 italic">to build.</span>
                    </h1>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute inset-0 bg-blue-600/20 rounded-[2.5rem] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-2xl">
                            <Search className="text-white/40 ml-4" />
                            <input className="bg-transparent border-none outline-none text-white font-bold text-xl w-full placeholder:text-white/20" placeholder="Search the AZ OS Knowledge Vault..." />
                            <kbd className="hidden md:flex items-center gap-1 px-3 py-1 bg-white/5 rounded-lg text-white/40 text-[10px] font-black border border-white/10">
                                <span>CMD</span> <span>K</span>
                            </kbd>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Access Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Getting Started", desc: "The quickest way to launch your first storefront or POS node.", icon: <Zap className="text-blue-600" /> },
                            { title: "API Reference", desc: "Detailed technical specs for our REST and GraphQL interfaces.", icon: <Code2 className="text-purple-600" /> },
                            { title: "Legal & Privacy", desc: "Compliance guidelines, GDPR manuals, and terms of service.", icon: <ShieldCheck className="text-emerald-600" /> },
                            { title: "Global Scale", desc: "Learn how to manage multi-currency and multi-region operations.", icon: <Globe className="text-amber-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all group cursor-pointer">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Explore <ArrowRight size={14} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guides Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-display font-black text-slate-900 mb-8 leading-tight">Popular Guides.</h2>
                            <div className="space-y-4">
                                {[
                                    "Setting up Multi-vendor Payouts",
                                    "Customizing the checkout logic",
                                    "Synchronizing offline POS data",
                                    "Mapping global logistics routes",
                                    "Implementing biometric login"
                                ].map((guide, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200/50 hover:border-blue-500/30 cursor-pointer transition-all font-bold text-slate-700">
                                        <FileText size={18} className="text-slate-400" />
                                        {guide}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-2/3 bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-10 blur-[100px]" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"><Code2 size={20} /></div>
                                    Core System Architecture
                                </h3>
                                <div className="space-y-8">
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                        <div className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4">Request Flow</div>
                                        <div className="font-mono text-sm text-blue-100/60 leading-relaxed">
                                            1. Client issues Order Payload to /v1/gateway <br />
                                            2. AZ Core validates inventory across node network <br />
                                            3. Payout logic calculates vendor split (if any) <br />
                                            4. Logistic pulse triggers tracking event <br />
                                            5. Response delivered in &lt; 4ms
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center px-4">
                                        <div className="text-sm font-medium text-white/40 italic">Last updated: Today at 04:32 AM</div>
                                        <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">View Architecture Docs</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default DocumentationPage;
