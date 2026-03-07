"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Play, CheckCircle2, LifeBuoy, MessageCircle, PhoneCall, Mail } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

const supportChannels = [
    {
        title: "Live Chat 24/7",
        desc: "Chat directly with our product experts anytime you need.",
        icon: MessageCircle,
        accent: "bg-orange-600"
    },
    {
        title: "Email Support",
        desc: "Send us a detailed query and we'll reply within 2 hours.",
        icon: Mail,
        accent: "bg-blue-600"
    },
    {
        title: "Phone Assistance",
        desc: "Priority voice support for Enterprise and Growth plans.",
        icon: PhoneCall,
        accent: "bg-emerald-600"
    },
    {
        title: "Knowledge Base",
        desc: "Thousands of articles covering frequently asked questions.",
        icon: LifeBuoy,
        accent: "bg-purple-600"
    }
];

export default function HelpCenterPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-600 pb-20">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="orange" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ rotate: [0, 360], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-orange-100/40 to-transparent blur-3xl rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </span>
                        Customer Support
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8"
                    >
                        How can we <br />
                        <span className="text-orange-600 italic">help you?</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto relative mb-16"
                    >
                        <div className="flex items-center bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-2 focus-within:ring-2 ring-orange-500 transition-all">
                            <Search className="text-slate-400 ml-4" size={24} />
                            <input
                                type="text"
                                placeholder="Search 'reset password' or 'add staff'..."
                                className="w-full bg-transparent border-none outline-none px-4 py-3 text-slate-700 font-medium placeholder:text-slate-400"
                            />
                            <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors">
                                Search
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="py-10 bg-white relative overflow-hidden perspective-2000">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-display font-semibold text-[#0f172a]">
                            Get in touch
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportChannels.map((channel, i) => (
                            <motion.div
                                key={channel.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative h-[320px] rounded-[2rem] bg-white border border-slate-100 p-8 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all duration-500 flex flex-col justify-between items-center text-center"
                            >
                                <div className={cn("absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full", channel.accent)} />
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-lg text-white", channel.accent)}>
                                        <channel.icon size={30} />
                                    </div>
                                    <h3 className="text-xl font-black text-[#0f172a] mb-3 group-hover:text-orange-600 transition-colors">
                                        {channel.title}
                                    </h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                        {channel.desc}
                                    </p>
                                </div>
                                <button className="mt-4 text-orange-600 font-bold text-sm uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Access <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA SECTION */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">

                        {/* Subtle Grid Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
                                Still need assistance?
                            </h2>

                            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                                Our support team is ready to help you resolve issues quickly and efficiently. Reach out and we’ll take care of the rest.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors"
                                >
                                    Contact Support <ArrowRight size={20} />
                                </Link>

                                <Link
                                    href="/resources/documentation"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f172a] rounded-xl font-bold hover:bg-slate-100 transition-colors"
                                >
                                    Browse Documentation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
