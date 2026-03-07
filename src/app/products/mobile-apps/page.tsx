"use client";

import { motion } from "framer-motion";
import { Smartphone, ShoppingBag, Store, Truck, BarChart3, ArrowRight, Play, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import NavbarV4 from "@/components/v4/NavbarV4";
import FooterV4 from "@/components/v4/FooterV4";
import AnnouncementBarV4 from "@/components/v4/sections/AnnouncementBarV4";

export default function MobileAppsPage() {
    return (
        <main className="bg-white min-h-screen selection:bg-orange-100 selection:text-orange-600">
            <AnnouncementBarV4 />
            <NavbarV4 />

            {/* Hero Section */}
            <div className="pt-32 pb-24 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </span>
                        Enterprise Mobility Suite
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                    >
                        Native apps for <span className="text-orange-600">every stakeholder</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12"
                    >
                        Deploy branded native iOS and Android apps for your customers, vendors, delivery patners and internal sales teams. Fully synced in real-time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 mb-20"
                    >
                        <Link
                            href="/v4/signup"
                            className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 flex items-center gap-3 group"
                        >
                            Start App Builder
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg shadow-slate-200/10">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                <Play size={16} className="fill-[#0f172a] translate-x-0.5" />
                            </div>
                            See Examples
                        </button>
                    </motion.div>

                    {/* App Previews Abstract Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                    >
                        <div className="aspect-[9/16] bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden relative group">
                            <div className="absolute inset-x-0 top-0 h-12 border-b border-slate-200 bg-white/50 backdrop-blur-sm flex justify-center items-center">
                                <div className="w-16 h-1.5 rounded-full bg-slate-200"></div>
                            </div>
                            <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                <ShoppingBag size={40} className="text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
                                <div className="font-bold text-slate-800">Customer</div>
                            </div>
                        </div>
                        <div className="aspect-[9/16] bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden relative group translate-y-4">
                            <div className="absolute inset-x-0 top-0 h-12 border-b border-slate-200 bg-white/50 backdrop-blur-sm flex justify-center items-center">
                                <div className="w-16 h-1.5 rounded-full bg-slate-200"></div>
                            </div>
                            <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                <Store size={40} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                                <div className="font-bold text-slate-800">Vendor</div>
                            </div>
                        </div>
                        <div className="aspect-[9/16] bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden relative group translate-y-8">
                            <div className="absolute inset-x-0 top-0 h-12 border-b border-slate-200 bg-white/50 backdrop-blur-sm flex justify-center items-center">
                                <div className="w-16 h-1.5 rounded-full bg-slate-200"></div>
                            </div>
                            <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                <Truck size={40} className="text-emerald-600 mb-3 group-hover:scale-110 transition-transform" />
                                <div className="font-bold text-slate-800">Delivery</div>
                            </div>
                        </div>
                        <div className="aspect-[9/16] bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden relative group translate-y-12">
                            <div className="absolute inset-x-0 top-0 h-12 border-b border-slate-200 bg-white/50 backdrop-blur-sm flex justify-center items-center">
                                <div className="w-16 h-1.5 rounded-full bg-slate-200"></div>
                            </div>
                            <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                <BarChart3 size={40} className="text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
                                <div className="font-bold text-slate-800">Sales</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* The Suite Details */}
            <div className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6">
                            One backend, four powerful apps.
                        </h2>
                        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                            Manage your entire ecosystem from a single dashboard while providing specialized mobile experiences for everyone involved.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Customer App */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-start"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-600 mb-8">
                                <ShoppingBag size={32} />
                            </div>
                            <h3 className="text-3xl font-display font-semibold text-[#0f172a] mb-4">Customer Storefront</h3>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8 flex-grow">
                                Your brand, natively on their phones. Fast browsing, one-tap checkout with Apple/Google Pay, and push notifications for flash sales and loyalty rewards.
                            </p>
                            <ul className="space-y-4 w-full">
                                {[
                                    "White-labeled with your branding",
                                    "Loyalty program integration",
                                    "Wishlists & saved carts"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 size={20} className="text-orange-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Vendor App */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-start"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8">
                                <Store size={32} />
                            </div>
                            <h3 className="text-3xl font-display font-semibold text-[#0f172a] mb-4">Vendor Partner App</h3>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8 flex-grow">
                                Give your suppliers and multi-vendor partners the tools to manage their catalogs, accept orders, and view payouts directly from their mobile devices.
                            </p>
                            <ul className="space-y-4 w-full">
                                {[
                                    "Mobile product uploads",
                                    "Instant order alerts",
                                    "Commission tracking"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 size={20} className="text-blue-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Delivery Partner App */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-start"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8">
                                <Truck size={32} />
                            </div>
                            <h3 className="text-3xl font-display font-semibold text-[#0f172a] mb-4">Delivery Partner App</h3>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8 flex-grow">
                                Equip your logistics fleet with optimized routing, digital proof of delivery capture, and direct customer communication channels.
                            </p>
                            <ul className="space-y-4 w-full">
                                {[
                                    "Turn-by-turn navigation",
                                    "E-signature & photo capture",
                                    "Earnings dashboard"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 size={20} className="text-emerald-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Sales Tracking App */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-start"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8">
                                <BarChart3 size={32} />
                            </div>
                            <h3 className="text-3xl font-display font-semibold text-[#0f172a] mb-4">Field Sales App</h3>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8 flex-grow">
                                Empower your B2B sales reps to take orders on the road, check live inventory, and manage client accounts while visiting physical stores.
                            </p>
                            <ul className="space-y-4 w-full">
                                {[
                                    "Offline catalog mode",
                                    "Client meeting logger",
                                    "B2B quote generation"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 size={20} className="text-purple-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>




        </main>
    );
}
