"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingCart, Box, Globe, Store, Truck, Smartphone,
    PieChart, Users, ChevronDown, ArrowRight, Zap, Menu, X, Command, Activity
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarV5 = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed left-0 right-0 z-[100] transition-all duration-700",
            isScrolled ? "top-8 px-8" : "top-0 px-0"
        )}>
            <nav className={cn(
                "mx-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isScrolled
                    ? "max-w-5xl rounded-[2.5rem] border border-white/10 backdrop-blur-3xl bg-black/60 py-4 px-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    : "max-w-7xl border-b border-white/5 py-12 px-12 bg-transparent"
            )}>
                <div className="flex items-center justify-between">
                    {/* High-End Branding */}
                    <Link href="/v5" className="flex items-center gap-4 group">
                        <div className="relative w-10 h-10 bg-white text-black rounded-2xl flex items-center justify-center font-display-v5 font-black text-2xl transition-all duration-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                            A
                            <div className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-display-v5 font-black text-white tracking-widest uppercase leading-none">
                                AZ<span className="text-cyan-500">CORE</span>
                            </span>
                            <span className="text-[8px] font-display-v5 font-black text-white/20 uppercase tracking-[0.4em] mt-1 group-hover:text-cyan-500/50 transition-colors">Digital Shard V5</span>
                        </div>
                    </Link>

                    {/* Minimalist Tech Links */}
                    <div className="hidden lg:flex items-center gap-16">
                        {["Protocol", "Architecture", "Governance"].map((link) => (
                            <Link
                                key={link}
                                href={`/v5/${link.toLowerCase()}`}
                                className="relative text-[11px] font-display-v5 font-black text-white/30 hover:text-white transition-all uppercase tracking-[0.4em] group"
                            >
                                {link}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Premium Action Call */}
                    <div className="flex items-center gap-8">
                        <button className="hidden sm:flex text-[10px] font-display-v5 font-black text-white/40 uppercase tracking-[0.2em] hover:text-cyan-500 transition-colors">
                            Terminal Login
                        </button>
                        <Link
                            href="/v5/signup"
                            className="group relative flex items-center gap-4 bg-white text-black px-10 py-4 rounded-2xl text-[11px] font-display-v5 font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5 group-hover:shadow-cyan-500/20"
                        >
                            Start Shard <Command size={16} className="group-hover:rotate-90 transition-transform" />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavbarV5;
