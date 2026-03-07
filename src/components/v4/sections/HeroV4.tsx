"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, ShoppingCart, DollarSign, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

const HeroV4 = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Effects */}
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="orange" />

            {/* Animated Light Beams */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-orange-100/40 to-transparent blur-3xl rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-slate-100/60 to-transparent blur-3xl rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                            </span>
                            The Next Evolution of Commerce
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8"
                        >
                            One Platform <br />
                            <span className="text-orange-600 italic">Unlimited</span> <br />
                            Business Growth.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-12"
                        >
                            Master your entire business ecosystem from a single interface. Website builder, POS billing, real-time inventory, vendor management, and unified delivery tracking.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <Link
                                href="/v4/signup"
                                className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 flex items-center gap-3 group"
                            >
                                Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg shadow-slate-200/10">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Play size={16} className="fill-[#0f172a] translate-x-0.5" />
                                </div>
                                Book Demo
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-8 text-[13px] font-bold text-slate-400 uppercase tracking-widest"
                        >
                            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-orange-600" /> No credit card</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-orange-600" /> Instant Setup</div>
                        </motion.div>
                    </div>

                    {/* Right Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative perspective-1000"
                    >
                        {/* Browser Frame */}
                        <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden relative z-10 transition-transform hover:scale-[1.02] duration-700">
                            <div className="h-12 bg-slate-50/80 border-b border-slate-200 flex items-center px-8 gap-2.5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                </div>
                                <div className="mx-auto bg-white px-24 py-1.5 rounded-lg border border-slate-200 text-[10px] text-slate-300 font-medium">
                                    dashboard.azcommerce.com
                                </div>
                            </div>
                            <div className="relative aspect-[1.4/1] w-full">
                                <Image
                                    src="/images/v4/v4_dashboard_preview.png"
                                    alt="AZ Commerce Platform"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Notification Cards */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-20 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                                <DollarSign size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Payment Received</div>
                                <div className="text-xl font-bold text-slate-900">$2,450.00</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-20 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                                <Package size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Low Stock Alert</div>
                                <div className="text-sm font-bold text-slate-900">5 items remaining</div>
                            </div>
                        </motion.div>

                        {/* Backdrop Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/30 blur-[120px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroV4;
