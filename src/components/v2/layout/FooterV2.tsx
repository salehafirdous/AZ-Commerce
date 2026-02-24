"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Github, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const FooterV2 = () => {
    return (
        <footer className="bg-[#050505] pt-40 pb-20 relative overflow-hidden">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">

                    {/* Brand Column - Large */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter uppercase">AZ <span className="text-blue-500 italic">Commerce</span></span>
                        </motion.div>
                        <h3 className="text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-10">
                            The commerce engine <br />
                            <span className="text-blue-500 italic">for the bold.</span>
                        </h3>

                        {/* Newsleter Compact */}
                        <div className="max-w-md">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Enter your email for the OS update"
                                    className="w-full bg-white/5 border-b-2 border-white/10 py-6 px-1 focus:border-blue-500 outline-none text-white font-medium transition-all"
                                />
                                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-500 hover:text-white transition-colors">
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-10">Ecosystem</h4>
                            <ul className="space-y-6">
                                {["Admin Portal", "Inventory AI", "POS Global"].map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-sm font-black text-white/60 hover:text-blue-500 transition-all uppercase tracking-widest flex items-center gap-2 group">
                                            {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-10">Resources</h4>
                            <ul className="space-y-6">
                                {["Documentation", "API Access", "Partner Hub"].map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-sm font-black text-white/60 hover:text-blue-500 transition-all uppercase tracking-widest flex items-center gap-2 group">
                                            {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-10">Connect</h4>
                            <div className="flex flex-wrap gap-4">
                                {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                    <Link key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:bg-blue-600 transition-all">
                                        <Icon size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} AZ Commerce — Built for the Next Billion Users
                    </div>
                    <div className="flex gap-12 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                        <Link href="#" className="hover:text-blue-500 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Security</Link>
                        <Link href="#" className="hover:text-white transition-colors">Term of Service</Link>
                    </div>
                </div>
            </div>

            {/* Background Aesthetic Blur */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full noise-bg opacity-[0.03] pointer-events-none" />
        </footer>
    );
};

export default FooterV2;
