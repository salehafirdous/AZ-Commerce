"use client";

import { motion } from "framer-motion";
import { Store, Users, ShieldCheck, Briefcase, Network, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function VendorSystemV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Network size={14} /> Multi-Vendor Ecosystem
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-semibold text-[#0f172a] mb-8 leading-tight"
                    >
                        Enterprise <span className="text-orange-600">Vendor System</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium"
                    >
                        Turn your store into a marketplace. Onboard thousands of vendors, manage commissions, and track payouts automatically.
                    </motion.p>
                </div>

                {/* Workflow */}
                <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-20 mb-32 border border-slate-100">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            { step: "01", title: "Vendor Onboarding", desc: "Automated KYC and approval workflows for new sellers.", icon: Users },
                            { step: "02", title: "Smart Payouts", desc: "Split payments at checkout and automate vendor earnings.", icon: Briefcase },
                            { step: "03", title: "Global Compliance", desc: "Tax handling and regulatory tracking for every vendor.", icon: ShieldCheck }
                        ].map((item) => (
                            <div key={item.step} className="space-y-6">
                                <div className="text-6xl font-display font-black text-orange-600/10">{item.step}</div>
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0f172a] tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dashboard View */}
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative group p-3 bg-white border border-slate-100 rounded-[3.5rem] shadow-2xl"
                    >
                        <div className="relative aspect-square rounded-[2.8rem] overflow-hidden">
                            <Image
                                src="/images/v3/vendor-system.png"
                                alt="Vendor System Intelligence"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -top-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 text-center">
                            <TrendingUp size={32} className="text-orange-600 mx-auto mb-2" />
                            <div className="text-2xl font-semibold text-[#0f172a]">+85%</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase">Growth</div>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-display font-semibold text-[#0f172a]">Scaling multi-vendor operations has never been this simple.</h2>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            AZ Commerce Vendor System provides a dedicated portal for your sellers to manage their own products, orders, and returns—leaving you to focus on growth.
                        </p>
                        <div className="pt-8 flex flex-wrap gap-8">
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex-1">
                                <div className="text-2xl font-semibold text-orange-600 mb-1">42k+</div>
                                <div className="text-xs font-bold text-slate-500 uppercase">Vendors Scaling</div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex-1">
                                <div className="text-2xl font-semibold text-blue-600 mb-1">$2.4B</div>
                                <div className="text-xs font-bold text-slate-500 uppercase">Vendor GMV</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
