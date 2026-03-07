"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, Smartphone, Receipt, Zap, Wifi } from "lucide-react";
import Image from "next/image";

export default function POSBillingV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Zap size={14} /> Lightning Fast Transactions
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-semibold text-[#0f172a] mb-8 leading-tight"
                    >
                        Cloud-First <span className="text-orange-600">POS System</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium"
                    >
                        The world's fastest billing experience. Work offline, sync online, and manage high-volume sales with zero friction.
                    </motion.p>
                </div>

                {/* POS Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative bg-slate-100 rounded-[4rem] p-12 lg:p-20 mb-32 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-semibold text-[#0f172a] mb-8">Hardware Independent.</h2>
                            <p className="text-lg text-slate-500 mb-10">Run your POS on iPads, Android tablets, specialized checkout hardware, or even a basic smartphone.</p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Wifi, title: "Offline Mode", desc: "Keep selling even when the internet goes out." },
                                    { icon: CreditCard, title: "Unified Payments", desc: "Accept UPI, Cards, and Cash in one flow." },
                                    { icon: Receipt, title: "Digital Bills", desc: "Send receipts via WhatsApp or Email instantly." },
                                    { icon: Smartphone, title: "Staff Sync", desc: "Manage 100+ terminals on a single account." }
                                ].map((item) => (
                                    <div key={item.title} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                                        <item.icon size={24} className="text-orange-600 mb-4" />
                                        <h4 className="font-bold text-[#0f172a] mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, rotate: 2 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            className="relative"
                        >
                            <div className="w-full aspect-[4/3] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 p-3 group">
                                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
                                    <Image
                                        src="/images/v3/pos-billing.png"
                                        alt="POS Billing System"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600/10 rounded-3xl blur-2xl -z-10" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Benefits */}
                <div className="text-center">
                    <h2 className="text-3xl font-display font-semibold text-[#0f172a] mb-16">Why Global Retailers trust AZ POS.</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {["0.2s Transaction Time", "10,000+ Stores", "24/7 Priority Support", "99.99% Uptime"].map((benefit) => (
                            <div key={benefit} className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                                <Zap size={16} className="text-orange-600" /> {benefit}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
