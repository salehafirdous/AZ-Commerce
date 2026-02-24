"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavbarV1 = () => {
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
            name: "Products",
            href: "#",
            submenu: [
                { name: "Website Builder", href: "/v1/product/website-builder" },
                { name: "POS Billing", href: "/v1/product/pos-billing" },
                { name: "Inventory", href: "/v1/product/inventory" },
                { name: "Marketplace", href: "/v1/product/marketplace" },
                { name: "Delivery Tracking", href: "/v1/product/delivery-tracking" },
            ]
        },
        {
            name: "Solutions",
            href: "#",
            submenu: [
                { name: "Retail", href: "/v1/solutions/retail" },
                { name: "E-commerce", href: "/v1/solutions/e-commerce" },
                { name: "D2C Brands", href: "/v1/solutions/d2c-brands" },
                { name: "Franchises", href: "/v1/solutions/franchises" },
                { name: "Supply Chain", href: "/v1/solutions/supply-chain" },
            ]
        },
        { name: "Pricing", href: "/#pricing" },
        {
            name: "Resources",
            href: "#",
            submenu: [
                { name: "Documentation", href: "/v1/resources/documentation" },
                { name: "API Reference", href: "/v1/resources/api-reference" },
                { name: "Community", href: "/v1/resources/community" },
                { name: "Blog", href: "/v1/resources/blog" },
                { name: "Partner Program", href: "/v1/resources/partner-program" },
            ]
        },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                isScrolled ? "py-4" : "py-8"
            )}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className={cn(
                    "flex items-center justify-between px-8 py-4 transition-all duration-500",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem]"
                        : "bg-transparent border-transparent"
                )}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-56 h-14">
                            <Image
                                src="/logo.png"
                                alt="AZ Commerce Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group/nav"
                                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-bold transition-colors uppercase tracking-widest flex items-center gap-1 py-4",
                                        isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/70 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    {link.submenu && <ChevronDown size={14} className="group-hover/nav:rotate-180 transition-transform" />}
                                </Link>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {link.submenu && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                                        >
                                            <div className="bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 p-6 min-w-[240px]">
                                                <div className="flex flex-col gap-2">
                                                    {link.submenu.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className="px-6 py-4 rounded-xl hover:bg-slate-50 text-sm font-bold text-slate-600 hover:text-blue-600 transition-all whitespace-nowrap"
                                                        >
                                                            {sub.name}
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

                    {/* CTAs */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            href="/login"
                            className={cn(
                                "text-sm font-bold transition-colors uppercase tracking-widest",
                                isScrolled ? "text-slate-900 hover:text-blue-600" : "text-white hover:text-blue-400"
                            )}
                        >
                            Log in
                        </Link>
                        <Link
                            href="/signup"
                            className={cn(
                                "px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-xl uppercase tracking-widest flex items-center gap-2",
                                isScrolled
                                    ? "bg-slate-900 text-white hover:bg-blue-600 shadow-slate-200"
                                    : "bg-white text-black hover:bg-blue-600 hover:text-white shadow-black/20"
                            )}
                        >
                            Start Free
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden w-12 h-12 flex items-center justify-center text-slate-900 bg-slate-100 rounded-xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-6 right-6 lg:hidden bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-2xl border border-white/20 overflow-y-auto max-h-[80vh]"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-4">
                                    <div className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
                                        {link.name}
                                    </div>
                                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                                        {link.submenu ? (
                                            link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="text-xl font-black text-slate-900"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-xl font-black text-slate-900"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <hr className="border-slate-100" />
                            <Link
                                href="/login"
                                className="text-xl font-bold text-slate-600"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="w-full py-6 bg-blue-600 text-white rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-blue-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started Free
                                <ArrowRight size={24} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavbarV1;
