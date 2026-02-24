"use client";

import { Code2, BookOpen, Terminal, Globe, ShieldCheck, ArrowRight, Zap, Copy, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const APIReferencePage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative bg-slate-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[150px]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
                                <Terminal size={14} /> Developer First Platform
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-white mb-8 tracking-tighter">
                                Build the <br />
                                <span className="text-blue-500 italic">Unbuildable.</span>
                            </h1>
                            <p className="text-2xl text-blue-100/60 mb-12 leading-relaxed font-medium">
                                Integrate AZ Commerce into any tech stack with our robust, high-performance GraphQL and REST APIs. Built for 99.99% uptime and 4ms latency.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3">
                                    Explore Docs <BookOpen size={20} />
                                </button>
                                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center gap-3">
                                    Get API Key <Zap size={20} fill="currentColor" />
                                </button>
                            </div>
                        </div>

                        {/* Code Terminal Mock-up */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
                            <div className="relative z-10 bg-slate-800 rounded-[2.5rem] border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm">
                                <div className="h-12 bg-slate-700/50 flex items-center px-6 gap-3 border-b border-slate-700">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-400/50" />
                                    </div>
                                    <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">POST /v1/orders/create</div>
                                </div>
                                <div className="p-8 text-blue-100/80 leading-relaxed overflow-x-auto">
                                    <pre>
                                        <code>
                                            {`{
  "order": {
    "items": [
      { "sku": "AZ-8092", "qty": 1 }
    ],
    "customer": "cust_9982",
    "delivery": "same-day-autonomous"
  },
  "metadata": {
    "origin": "web-pos-v4"
  }
}`}
                                        </code>
                                    </pre>
                                    <div className="mt-8 pt-8 border-t border-slate-700 flex justify-between items-center">
                                        <div className="text-[10px] font-black uppercase text-emerald-400">Response: 201 Created</div>
                                        <button className="text-slate-400 hover:text-white transition-colors"><Copy size={16} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Features */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: "GraphQL & REST", desc: "Choose the interface that fits your frontend needs best.", icon: <Code2 className="text-blue-600" /> },
                            { title: "SDKs for Every Stack", desc: "Native libraries for Next.js, React Native, Swift, and Go.", icon: <Globe className="text-emerald-600" /> },
                            { title: "99.99% Uptime", desc: "Enterprise SLA built on multi-cloud edge infrastructure.", icon: <ShieldCheck className="text-purple-600" /> }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center p-10">
                                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 border border-slate-100">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed max-w-xs">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Search Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-200/50 flex items-center gap-6">
                        <Search className="text-slate-400" />
                        <input className="w-full bg-transparent border-none outline-none font-medium text-xl placeholder:text-slate-300" placeholder="Search API endpoints (e.g. Orders, Inventory, Webhooks)..." />
                    </div>
                </div>
            </section>

            {/* Endpoints Preview Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-display font-black text-slate-900 mb-8 leading-tight">Master every <br />endpoint.</h2>
                            <p className="text-xl text-slate-500 font-medium mb-12">Comprehensive documentation for every part of your commerce empire.</p>
                            <div className="space-y-4">
                                {["Authentication", "Orders", "Inventory", "Logistics", "Autonomous Payouts", "Webhooks"].map((cat, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer group font-bold">
                                        {cat} <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-2/3 bg-slate-50 rounded-[4rem] p-12 border border-slate-100">
                            <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3">
                                <Code2 size={24} className="text-blue-600" /> Getting Started
                            </h3>
                            <div className="space-y-10">
                                <div className="flex gap-8">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center font-black">1</div>
                                    <div>
                                        <h4 className="text-lg font-black text-slate-900 mb-3">Initialize the SDK</h4>
                                        <p className="text-slate-500 font-medium mb-6">Install our core package and initialize with your public API key found in the business portal.</p>
                                        <div className="bg-slate-900 p-6 rounded-2xl font-mono text-xs text-blue-100/70">
                                            npm install @az-commerce/sdk
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="text-lg font-black text-slate-900 mb-3">Listen for Webhooks</h4>
                                        <p className="text-slate-500 font-medium mb-6">Set up your listener to receive real-time notifications about order status, inventory levels, and logistics pulses.</p>
                                        <div className="bg-slate-900 p-6 rounded-2xl font-mono text-xs text-blue-100/70">
                                            az.webhooks.subscribe(&apos;order.created&apos;, handler);
                                        </div>
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

export default APIReferencePage;
