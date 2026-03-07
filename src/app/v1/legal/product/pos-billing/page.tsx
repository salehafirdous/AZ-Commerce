"use client";

import { motion } from "framer-motion";
import { CreditCard, Zap, Users, BarChart3, ArrowRight, ShieldCheck, Printer, CheckCircle2, Smartphone } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const POSBillingPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-32 relative overflow-hidden bg-slate-900">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-10 -skew-x-12 translate-x-32" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
                                <CreditCard size={14} /> Next-Gen Retail OS
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-white mb-8 tracking-tighter">
                                Checkout at the <br />
                                <span className="text-blue-500 italic">speed of light.</span>
                            </h1>
                            <p className="text-2xl text-blue-100/60 mb-10 leading-relaxed font-medium">
                                The world&apos;s most powerful POS system. Seamlessly handle high-volume billing, multi-vendor payouts, and inventory sync in one high-fidelity interface.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center gap-4 group">
                                    Get POS Terminal
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all">
                                    See Demo
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[150px] animate-pulse" />
                            {/* Mock POS Tablet Component */}
                            <div className="relative z-10 w-full aspect-[4/3] bg-slate-800 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-700/50">
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
                                    <div className="h-16 border-b border-slate-100 flex items-center px-8 justify-between">
                                        <div className="font-black text-slate-900">AZ POS v4.0</div>
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center"><Users size={16} /></div>
                                            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center"><BarChart3 size={16} /></div>
                                        </div>
                                    </div>
                                    <div className="flex-grow p-8 grid grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div className="h-12 bg-slate-100 rounded-xl" />
                                            <div className="grid grid-cols-2 gap-4">
                                                {[1, 2, 3, 4, 5, 6].map(i => (
                                                    <div key={i} className="aspect-square bg-slate-50 rounded-2xl border border-slate-200" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 rounded-3xl p-6 flex flex-col">
                                            <h4 className="font-black text-slate-900 mb-6">Current Ticket</h4>
                                            <div className="space-y-4 flex-grow">
                                                <div className="flex justify-between font-bold text-sm"><span>Artisan Bread x2</span><span>$24.00</span></div>
                                                <div className="flex justify-between font-bold text-sm"><span>Bottle Wine x1</span><span>$85.00</span></div>
                                            </div>
                                            <div className="pt-6 border-t border-slate-200">
                                                <div className="flex justify-between text-2xl font-black text-slate-900"><span>Total</span><span>$109.00</span></div>
                                                <button className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black mt-6">COMPLETE PAYMENT</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Offline Mode", desc: "Never stop selling. Payments sync automatically when you&apos;re back online.", icon: <Zap className="text-amber-500" /> },
                            { title: "Mobile POS", desc: "Turn any iPhone or Android device into a powerful portable terminal.", icon: <Smartphone className="text-blue-600" /> },
                            { title: "Enterprise Security", desc: "End-to-end encryption for every transaction. PCI DSS level 1 certified.", icon: <ShieldCheck className="text-emerald-500" /> },
                            { title: "Smart Receipts", desc: "Send beautiful digital receipts via email or WhatsApp and track engagement.", icon: <Printer className="text-purple-600" /> }
                        ].map((cap, i) => (
                            <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all border border-slate-100 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {cap.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{cap.title}</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hardware Integration */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-[100px]" />
                            <div className="relative z-10 bg-slate-200 w-full h-full rounded-[4rem] overflow-hidden">
                                {/* Image Placeholder - Hardware */}
                                <Image
                                    src="/builder_hero.png"
                                    alt="POS Hardware Ecosystem"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-slate-900/20" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">Elite Hardware. <br /> Unified.</h2>
                            <p className="text-xl text-slate-600 font-medium mb-12">AZ POS integrates with the terminals and accessories you already love, or choose from our custom-built elite hardware collection.</p>

                            <div className="space-y-6">
                                {[
                                    "Dual-Screen Customer Displays",
                                    "Biometric Vendor Login",
                                    "Integrated Weighing Scales",
                                    "Lightning Fast NFC Readers"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-black text-slate-900">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={18} /></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ / Simple CTA */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10">Trusted by Global Luxury Retailers.</h2>
                    <p className="text-xl text-slate-500 mb-16 font-medium">From boutique wine cellars to high-end fashion flagships, AZ POS is the digital backbone of elite retail.</p>
                    <button className="px-12 py-7 bg-slate-900 text-white rounded-[2rem] font-black text-2xl hover:bg-blue-600 transition-all shadow-xl">Start Selling Now</button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default POSBillingPage;
