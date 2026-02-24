"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Sparkles, Globe, Command, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavbarV2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {
            name: "Ecosystem",
            href: "#",
            icon: <Command size={14} />,
            submenu: [
                { name: "Omni-Channel Admin", desc: "One core, infinite channels", href: "/product/admin" },
                { name: "AI Inventory", desc: "Predictive supply chain", href: "/product/inventory" },
                { name: "Global POS", desc: "Next-gen retail terminal", href: "/product/pos" },
                { name: "Marketplace Hub", desc: "Scale to multi-vendor", href: "/product/marketplace" },
            ]
        },
        {
            name: "Solutions",
            href: "#",
            icon: <Globe size={14} />,
            submenu: [
                { name: "D2C Enterprises", desc: "Brand-first architecture", href: "/solutions/d2c" },
                { name: "Franchise Networks", desc: "Multi-branch mastery", href: "/solutions/franchise" },
                { name: "Modern Retail", desc: "Experience-driven commerce", href: "/solutions/retail" },
            ]
        },
        { name: "Pricing", href: "#pricing", icon: <Zap size={14} /> },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 pointer-events-none">
            <div className="max-w-[1400px] mx-auto flex justify-center">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={cn(
                        "flex items-center justify-between px-6 py-2 transition-all duration-700 pointer-events-auto",
                        isScrolled
                            ? "bg-black text-white rounded-full shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] border border-white/10 w-full"
                            : "bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 w-full"
                    )}
                >
                    {/* Brand */}
                    <Link href="/v2" className="flex items-center gap-3 group px-2">
                        <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                            <Sparkles size={18} className="text-white group-hover:scale-125 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                        </div>
                        <span className={cn("text-lg font-black tracking-tighter uppercase", isScrolled ? "text-white" : "text-slate-900")}>
                            AZ <span className="text-blue-500 italic">Commerce</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation - Pill Style */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "flex items-center gap-2 px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                                        isScrolled
                                            ? "text-white/60 hover:text-white hover:bg-white/5"
                                            : "text-slate-900/60 hover:text-slate-900 hover:bg-black/5"
                                    )}
                                >
                                    {link.icon}
                                    {link.name}
                                    {link.submenu && <ChevronDown size={12} className={cn("transition-transform duration-500", activeDropdown === link.name ? "rotate-180" : "")} />}
                                </Link>

                                <AnimatePresence>
                                    {link.submenu && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 pt-4"
                                        >
                                            <div className={cn(
                                                "rounded-[2.5rem] p-6 shadow-2xl border min-w-[300px]",
                                                isScrolled ? "bg-zinc-900 border-white/10" : "bg-white border-slate-100"
                                            )}>
                                                <div className="grid gap-2">
                                                    {link.submenu.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className={cn(
                                                                "p-4 rounded-2xl group/sub transition-all",
                                                                isScrolled ? "hover:bg-white/5" : "hover:bg-blue-50"
                                                            )}
                                                        >
                                                            <div className={cn("font-black text-xs uppercase tracking-tight", isScrolled ? "text-white" : "text-slate-900")}>{sub.name}</div>
                                                            <div className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-wider">{sub.desc}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right CTAs */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className={cn(
                                "hidden md:flex text-[10px] font-black uppercase tracking-[0.2em] px-4",
                                isScrolled ? "text-white/60 hover:text-white" : "text-slate-900/60 hover:text-slate-900"
                            )}
                        >
                            Access OS
                        </Link>
                        <Link
                            href="/signup"
                            className={cn(
                                "px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-2",
                                isScrolled
                                    ? "bg-white text-black hover:bg-blue-600 hover:text-white"
                                    : "bg-slate-900 text-white hover:bg-blue-600"
                            )}
                        >
                            Get Started <ArrowRight size={14} />
                        </Link>
                        <button
                            className={cn("lg:hidden p-2", isScrolled ? "text-white" : "text-slate-900")}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu - Full Screen Luxury */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[150] bg-black pointer-events-auto p-12 flex flex-col justify-center"
                    >
                        <button
                            className="absolute top-12 right-12 text-white/40 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        <div className="space-y-12">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-6xl font-black text-white hover:text-blue-500 transition-colors uppercase tracking-tighter"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 pt-12 border-t border-white/10">
                            <Link href="/signup" className="text-2xl font-black text-blue-500 uppercase tracking-widest flex items-center gap-4">
                                START FREE TRIAL <ArrowRight size={24} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavbarV2;
