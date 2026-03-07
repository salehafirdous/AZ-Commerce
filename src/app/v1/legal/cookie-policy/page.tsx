"use client";

import { motion } from "framer-motion";
import { Cookie, ShieldCheck, Eye, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CookiePolicyPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            <section className="pt-40 pb-20 relative overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                            <Cookie size={14} /> Tracking & Personalization
                        </div>
                        <h1 className="text-6xl font-display font-black text-slate-900 mb-8 tracking-tighter">
                            Cookie <br />
                            <span className="text-amber-500 italic">Policy.</span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            How we use data to personalize your experience and optimize our high-performance commerce engine.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-slate prose-xl max-w-none">
                        <p className="text-slate-600 font-medium mb-12">
                            This Cookie Policy explains how AZ Commerce (&quot;we&quot;, &quot;us&quot;, and &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm"><ShieldCheck className="text-emerald-500" /></div>
                                <h3 className="text-xl font-black text-slate-900 mb-4">Essential Cookies</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">Required for core functionality like secure checkout, inventory sync, and account authentication.</p>
                            </div>
                            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm"><Eye className="text-blue-500" /></div>
                                <h3 className="text-xl font-black text-slate-900 mb-4">Performance Cookies</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">Used to analyze traffic and site speed, ensuring our global node network is running at peak efficiency.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-black text-slate-900 mb-8">What are cookies?</h2>
                        <p className="text-slate-600 font-medium mb-12">
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                        </p>

                        <h2 className="text-3xl font-black text-slate-900 mb-8">How to control cookies?</h2>
                        <p className="text-slate-600 font-medium mb-12">
                            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject.
                        </p>

                        <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                                <div>
                                    <h3 className="text-2xl font-black mb-4">Manage Preferences</h3>
                                    <p className="text-slate-400 font-medium">Instantly toggle your tracking settings for this session.</p>
                                </div>
                                <button className="px-10 py-6 bg-amber-500 text-slate-900 rounded-2xl font-black text-lg flex items-center gap-4 hover:bg-white transition-all whitespace-nowrap">
                                    Open Consent Manager <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CookiePolicyPage;
