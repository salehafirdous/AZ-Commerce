"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, Shield, Globe, Zap, ArrowUpRight, Activity, Terminal } from "lucide-react";

const FooterV5 = () => {
    const sections = [
        {
            title: "Kernel_Modules",
            links: ["Standard POS", "Nexus Inventory", "Edge Web", "Logistics-X", "Intelligence Hub"]
        },
        {
            title: "Sector_Integration",
            links: ["High-Volume Retail", "Digital Dining", "Precision Life", "Luxury Shard", "Global Mesh"]
        },
        {
            title: "Core_Resources",
            links: ["Technical Docs", "System Status", "Security Vitals", "Update Logs", "Developer Node"]
        },
        {
            title: "Governance",
            links: ["Mission Control", "Engineering Hub", "Media Center", "Compliance", "Terminal Access"]
        }
    ];

    return (
        <footer className="bg-[#050505] pt-40 pb-16 border-t border-white/5 relative overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-600/5 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-20 mb-32">
                    {/* Brand Meta */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/v5" className="flex items-center gap-4 mb-10 group">
                            <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                                <span className="text-2xl font-black font-display-v5">A</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black font-display-v5 text-white tracking-widest uppercase leading-none">
                                    AZ<span className="text-cyan-500">CORE</span>
                                </span>
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em] mt-1">Global Shard V5</span>
                            </div>
                        </Link>
                        <p className="text-slate-500 font-body-v5 font-medium leading-relaxed mb-10 max-w-xs transition-colors hover:text-slate-400">
                            The industrial-grade foundation for global commerce orchestration. Engineered for the ambitious.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                                <Link key={i} href="#" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-cyan-500 transition-all duration-300">
                                    <Icon size={20} strokeWidth={1.5} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    {sections.map((section) => (
                        <div key={section.title} className="col-span-1">
                            <h4 className="text-[10px] font-black font-display-v5 text-white/20 uppercase tracking-[0.5em] mb-12">{section.title}</h4>
                            <ul className="space-y-5">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-sm font-bold font-body-v5 text-slate-500 hover:text-cyan-500 transition-all flex items-center gap-3 group">
                                            {link} <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Technical Info Banner */}
                <div className="py-10 px-12 bg-white/5 border border-white/5 rounded-[3rem] flex flex-wrap items-center justify-between gap-10 mb-20 backdrop-blur-3xl group hover:border-cyan-500/20 transition-colors duration-700">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-4 bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20">
                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                            <span className="text-[10px] font-black font-display-v5 text-cyan-500 uppercase tracking-[0.3em]">System Nominal</span>
                        </div>
                        <div className="hidden md:flex flex-col gap-1">
                            <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">Global Kernel Sync</div>
                            <div className="text-xs font-black text-white">0.002s <span className="text-cyan-500/50">STABLE</span></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-3 text-white/30 text-[10px] font-black font-display-v5 uppercase tracking-widest hover:text-cyan-500 transition-colors cursor-default">
                            <Shield size={18} className="text-cyan-500" /> AES-256 GCM
                        </div>
                        <div className="flex items-center gap-3 text-white/30 text-[10px] font-black font-display-v5 uppercase tracking-widest hover:text-cyan-500 transition-colors cursor-default">
                            <Globe size={18} className="text-blue-500" /> 192+ Edge Nodes
                        </div>
                        <div className="flex items-center gap-3 text-white/30 text-[10px] font-black font-display-v5 uppercase tracking-widest hover:text-cyan-500 transition-colors cursor-default">
                            <Terminal size={18} className="text-indigo-500" /> L5 Protocol
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-16 gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-slate-500 text-[10px] font-black font-display-v5 uppercase tracking-[0.3em] text-center md:text-left">
                            © 2026 AZ_COMMERCE_PLATFORM. ALL PROTOCOLS RESERVED.
                        </p>
                        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.5em] text-center md:text-left">SHARD_ID: V5.0.12_STX</div>
                    </div>

                    <div className="flex items-center gap-12 text-slate-500 text-[10px] font-black font-display-v5 uppercase tracking-widest">
                        <Link href="#" className="hover:text-cyan-500 transition-colors">Privacy_Protocol</Link>
                        <Link href="#" className="hover:text-cyan-500 transition-colors">Terms_of_Engagement</Link>
                        <Link href="#" className="hover:text-cyan-500 transition-colors">Node_Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV5;
