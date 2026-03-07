"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Layout, Box, ShoppingCart, Globe, Store, Truck, Smartphone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarV3 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const products = [
        { name: "Admin Portal", desc: "Central mission control for your business", icon: Layout, href: "/v3/products/admin-portal" },
        { name: "Inventory AI", desc: "Intelligent stock management and predictions", icon: Box, href: "/v3/products/inventory-ai" },
        { name: "POS Billing", desc: "Lightning fast checkout and offline mode", icon: ShoppingCart, href: "/v3/products/pos-billing" },
        { name: "Web Builder", desc: "Drag-and-drop headless storefronts", icon: Globe, href: "/v3/products/web-builder" },
        { name: "Vendor System", desc: "Turn your store into a global marketplace", icon: Store, href: "/v3/products/vendor-system" },
    ];

    const company = [
        { name: "About Us", href: "/v3/company/about-us" },
        { name: "Careers", href: "/v3/company/careers" },
        { name: "Customers", href: "/v3/company/customers" },
        { name: "Blog", href: "/v3/blog" },
        { name: "Press", href: "/v3/press" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
            isScrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" : "bg-white py-5"
        )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/v3" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-xl italic">A/Z</span>
                    </div>
                    <span className="text-xl font-black text-[#0f172a] tracking-tight uppercase">
                        AZ <span className="text-orange-600 italic">Commerce</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown("products")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1 text-sm font-bold text-[#0f172a] hover:text-orange-600 transition-colors py-2">
                            Products <ChevronDown size={14} />
                        </button>
                        <AnimatePresence>
                            {activeDropdown === "products" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px]"
                                >
                                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-2">
                                        {products.map((p) => (
                                            <Link key={p.name} href={p.href} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                                                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                                    <p.icon size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-[#0f172a] mb-1">{p.name}</div>
                                                    <div className="text-[10px] text-slate-500 leading-tight">{p.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown("company")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1 text-sm font-bold text-[#0f172a] hover:text-orange-600 transition-colors py-2">
                            Company <ChevronDown size={14} />
                        </button>
                        <AnimatePresence>
                            {activeDropdown === "company" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[200px]"
                                >
                                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 space-y-1">
                                        {company.map((c) => (
                                            <Link key={c.name} href={c.href} className="block px-4 py-2 text-xs font-bold text-[#0f172a] hover:bg-slate-50 hover:text-orange-600 rounded-lg transition-colors">
                                                {c.name}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/v3/pricing" className="text-sm font-bold text-[#0f172a] hover:text-orange-600 transition-colors">Pricing</Link>
                    <Link href="/v3/resources" className="text-sm font-bold text-[#0f172a] hover:text-orange-600 transition-colors">Resources</Link>
                    <Link href="/v3/contact" className="text-sm font-bold text-[#0f172a] hover:text-orange-600 transition-colors">Contact</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/v3/login" className="hidden sm:block text-sm font-bold text-[#0f172a] hover:text-orange-600 transition-colors">Login</Link>
                    <Link
                        href="/v3/signup"
                        className="bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 active:scale-95 flex items-center gap-2"
                    >
                        Start Free Trial <ArrowRight size={16} />
                    </Link>
                    <button
                        className="lg:hidden p-2 text-[#0f172a]"
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Products</div>
                                {products.map(p => (
                                    <Link key={p.name} href={p.href} className="block text-base font-bold text-[#0f172a]" onClick={() => setMobileMenuOpen(false)}>{p.name}</Link>
                                ))}
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Company</div>
                                {company.map(c => (
                                    <Link key={c.name} href={c.href} className="block text-base font-bold text-[#0f172a]" onClick={() => setMobileMenuOpen(false)}>{c.name}</Link>
                                ))}
                            </div>
                            <Link href="/v3/pricing" className="block text-base font-bold text-[#0f172a]" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                            <Link href="/v3/resources" className="block text-base font-bold text-[#0f172a]" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
                            <Link href="/v3/contact" className="block text-base font-bold text-[#0f172a]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                            <hr className="border-slate-100" />
                            <Link href="/v3/login" className="block text-base font-bold text-[#0f172a]">Login</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavbarV3;
