"use client";

import { motion } from "framer-motion";
import { Truck, Map, Clock, ShieldCheck, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NavbarV4 from "@/components/v4/NavbarV4";
import FooterV4 from "@/components/v4/FooterV4";
import AnnouncementBarV4 from "@/components/v4/sections/AnnouncementBarV4";

export default function DeliveryPage() {
    return (
        <main className="bg-white min-h-screen selection:bg-orange-100 selection:text-orange-600">
            <AnnouncementBarV4 />
            <NavbarV4 />

            {/* Hero Section */}
            <div className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </span>
                        Delivery Tracking & Management
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                    >
                        Ship faster with <span className="text-orange-600">complete visibility</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12"
                    >
                        Take control of your logistics network. From automated dispatch and route optimization to real-time customer tracking and proof of delivery.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            href="/v4/signup"
                            className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 flex items-center gap-3 group"
                        >
                            Start Free Trial
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg shadow-slate-200/10">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                <Play size={16} className="fill-[#0f172a] translate-x-0.5" />
                            </div>
                            Watch Demo
                        </button>
                    </motion.div>
                </div>

                {/* Dashboard Preview / Illustration Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-5xl mx-auto px-6"
                >
                    <div className="bg-slate-50 rounded-[3rem] border border-slate-200 aspect-video relative overflow-hidden shadow-2xl shadow-slate-200/50 group">
                        <Image
                            src="/images/v3/delivery-sync.png"
                            alt="Live Tracking Dashboard"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                </motion.div>

                {/* Core Features */}
                <div className="max-w-7xl mx-auto px-6 mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-semibold text-[#0f172a]">Powerful Logistics Features</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Live GPS Tracking", desc: "Monitor your fleet in real-time with high-precision map overlays.", icon: Map },
                            { title: "Route Optimization", desc: "AI algorithms calculate the fastest, most fuel-efficient delivery paths.", icon: ArrowRight },
                            { title: "Automated ETAs", desc: "Send dynamic delivery updates to customers via SMS and Email.", icon: Clock },
                            { title: "Proof of Delivery", desc: "Digital signatures, photo capture, and instant notifications upon drop-off.", icon: ShieldCheck },
                        ].map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                key={item.title}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
                            >
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* API & Integration Block */}
                <div className="max-w-7xl mx-auto px-6 mt-32">
                    <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/20 to-transparent blur-3xl"></div>
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-4xl lg:text-5xl font-display font-semibold text-white mb-6">
                                Developer-ready API for custom integrations.
                            </h2>
                            <p className="text-xl text-slate-400 font-medium mb-10">
                                Connect our delivery tracking engine directly into your existing warehouse software, ERPs, or custom apps with comprehensive webhooks.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/v4/resources"
                                    className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3"
                                >
                                    Read API Docs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto px-6 mt-32 text-center">
                    <h2 className="text-4xl font-display font-semibold text-[#0f172a] mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6 text-left">
                        {[
                            { q: "Can my customers track their orders?", a: "Yes, every order generates a secure, branded tracking link sent automatically via SMS or Email." },
                            { q: "Does it work with third-party delivery services?", a: "Absolutely. You can assign orders to your own fleet or route them automatically to partners like FedEx, UPS, or local couriers via API." },
                            { q: "Is the driver app available on iOS and Android?", a: "Yes, the driver companion app is available on both App Store and Google Play for your staff to manage their deliveries." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                                <h3 className="text-lg font-bold text-[#0f172a] mb-4 flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-orange-600" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </main>
    );
}
