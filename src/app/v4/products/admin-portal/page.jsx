"use client";

import { motion } from "framer-motion";
import { Layout, Shield, Zap, Search, Bell, Settings } from "lucide-react";
import Image from "next/image";

import { TracingBeam } from "@/components/ui/TracingBeam";

export default function AdminPortalV3() {
    return (
        <main className="pt-32 pb-24 overflow-hidden">
            <TracingBeam className="px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <div className="text-center max-w-3xl mx-auto mb-20 px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                        >
                            <Shield size={14} /> Mission Control for Your Business
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display font-semibold text-[#0f172a] mb-8 leading-tight"
                        >
                            Centralized <span className="text-orange-600">Admin Portal</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-500 font-medium"
                        >
                            One dashboard to rule them all. Manage users, track global performance, and configure every aspect of your commerce empire.
                        </motion.p>
                    </div>

                    {/* Main Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative rounded-[3.5rem] overflow-hidden bg-white p-3 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] border border-slate-100 mb-32 group mx-6"
                    >
                        <div className="relative aspect-[16/10] lg:aspect-[21/9] rounded-[2.8rem] overflow-hidden">
                            <Image
                                src="/images/v3/admin-portal.png"
                                alt="Admin Portal Dashboard"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-12 px-6">
                        {[
                            { title: "User Hierarchy", desc: "Granular permissions and audit logs for your entire team.", icon: Layout },
                            { title: "Global Settings", desc: "Update taxes, currencies, and regions across all stores instantly.", icon: Settings },
                            { title: "Live Monitoring", desc: "Watch orders and server health in real-time with zero lag.", icon: Zap },
                            { title: "Data Export", desc: "One-click CSV/PDF exports for accounting and performance reviews.", icon: Search },
                            { title: "Multi-Store Sync", desc: "Synchronize themes and data across infinite storefronts.", icon: Bell },
                            { title: "Enterprise Grade", desc: "SSO support and bank-grade encryption for all admin actions.", icon: Shield },
                        ].map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                    <f.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{f.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </TracingBeam>
        </main>
    );
}
