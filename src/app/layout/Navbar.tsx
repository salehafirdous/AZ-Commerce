"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Layout, Box, ShoppingCart, Globe, Store, Truck, Smartphone, PieChart, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
type NavItem = {
    name: string;
    desc: string;
    href: string;
    icon: LucideIcon;
};
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const products = [
        { name: "POS Billing", desc: "Omnichannel checkout solution", icon: ShoppingCart, href: "/products/pos-billing" },
        { name: "Inventory", desc: "Real-time stock management", icon: Box, href: "/products/inventory" },
        { name: "Web Builder", desc: "E-commerce store builder", icon: Globe, href: "/products/web-builder" },
        { name: "Vendor System", desc: "Multi-vendor management", icon: Store, href: "/products/vendor-system" },
        { name: "Delivery", desc: "Live order tracking", icon: Truck, href: "/products/delivery" },
        { name: "Mobile Apps", desc: "Customer & Admin apps", icon: Smartphone, href: "/products/mobile-apps" },
        { name: "Analytics", desc: "Deep business insights", icon: PieChart, href: "/products/analytics" },
        { name: "CRM", desc: "Customer relationships", icon: Users, href: "/products/crm" },
    ];


    const industries: NavItem[] = [
        { name: "Distributors", desc: "Wholesale & supply chain", icon: Store, href: "/industries/distributors" },
        { name: "Grocery Stores", desc: "Supermarkets & kirana stores", icon: Layout, href: "/industries/grocery-stores" },
        { name: "Pharmacies", desc: "Medical & drug stores", icon: ShoppingCart, href: "/industries/pharmacies" },
        { name: "Restaurants", desc: "Smart restaurant management", icon: Users, href: "/industries/restaurants" },
        { name: "Retail Shops", desc: "Clothing & general retail", icon: Smartphone, href: "/industries/retail-shops" },
        { name: "Fashion & Clothing", desc: "Warranty & serial tracking", icon: Smartphone, href: "/industries/fashion-and-clothing" },
    ];

    const resources: NavItem[] = [
        { name: "Documentation", desc: "Guides & setup instructions", icon: Layout, href: "/resources/documentation" },
        { name: "API Reference", desc: "Developer API docs", icon: Box, href: "/resources/api-reference" },
        { name: "Help Center", desc: "FAQs & support articles", icon: Users, href: "/resources/help-center" },
        { name: "Community", desc: "Join discussions & forums", icon: Globe, href: "/resources/community" },
        { name: "Video Tutorials", desc: "Watch step-by-step guides", icon: Smartphone, href: "/resources/video-tutorials" },
    ];

    return (
        <header className={cn(
            "fixed left-0 right-0 z-[100] transition-all duration-500",
            isScrolled ? "top-4 px-4" : "top-0 px-0"
        )}>
            <nav className={cn(
                "mx-auto transition-all duration-500 bg-white shadow-sm",
                isScrolled
                    ? "max-w-6xl rounded-2xl border border-slate-200/60 backdrop-blur-xl bg-white/90 py-3 px-6 shadow-xl shadow-slate-200/20"
                    : "max-w-full border-b border-transparent py-5 px-8"
            )}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                            <span className="text-white font-black text-xl italic leading-none">A</span>
                        </div>
                        <span className="text-xl font-black text-[#0f172a] tracking-tighter uppercase">
                            AZ <span className="text-orange-600 italic">Commerce</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("products")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1.5 text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors py-2 uppercase tracking-wider">
                                Products <ChevronDown size={14} className={cn("transition-transform", activeDropdown === "products" && "rotate-180")} />
                            </button>
                            <AnimatePresence>
                                {activeDropdown === "products" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 pt-4 w-[600px]"
                                    >
                                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-2 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent pointer-events-none" />
                                            {products.map((p) => (
                                                <Link key={p.name} href={p.href} className="relative flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50/50 transition-all group">
                                                    <div className="w-11 h-11 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                                        <p.icon size={22} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-[#0f172a] mb-0.5">{p.name}</div>
                                                        <div className="text-[11px] text-slate-500 font-medium leading-tight">{p.desc}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* <Link href="/industries" className="text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors uppercase tracking-wider">Industries</Link> */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("industries")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1.5 text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors py-2 uppercase tracking-wider">
                                Industries
                                <ChevronDown
                                    size={14}
                                    className={cn(
                                        "transition-transform",
                                        activeDropdown === "industries" && "rotate-180"
                                    )}
                                />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === "industries" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 pt-4 w-[600px]"
                                    >
                                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-2 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent pointer-events-none" />

                                            {industries.map((i) => (
                                                <Link
                                                    key={i.name}
                                                    href={i.href}
                                                    className="relative flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50/50 transition-all group"
                                                >
                                                    <div className="w-11 h-11 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                                        <i.icon size={22} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-[#0f172a] mb-0.5">
                                                            {i.name}
                                                        </div>
                                                        <div className="text-[11px] text-slate-500 font-medium leading-tight">
                                                            {i.desc}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <Link href="/pricing" className="text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors uppercase tracking-wider">Pricing</Link>
                        {/* <Link href="/resources" className="text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors uppercase tracking-wider">Resources</Link> */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("resources")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1.5 text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors py-2 uppercase tracking-wider">
                                Resources
                                <ChevronDown
                                    size={14}
                                    className={cn(
                                        "transition-transform",
                                        activeDropdown === "resources" && "rotate-180"
                                    )}
                                />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === "resources" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 pt-4 w-[600px]"
                                    >
                                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-3 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent pointer-events-none" />

                                            {resources.map((r) => (
                                                <Link
                                                    key={r.name}
                                                    href={r.href}
                                                    className="relative flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50/50 transition-all group"
                                                >
                                                    <div className="w-11 h-11 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                                        <r.icon size={22} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-[#0f172a] mb-0.5">
                                                            {r.name}
                                                        </div>
                                                        <div className="text-[11px] text-slate-500 font-medium leading-tight">
                                                            {r.desc}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:block text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors uppercase tracking-wider">Login</Link>
                        <Link
                            href="/signup"
                            className="bg-orange-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 active:scale-95 flex items-center gap-2 uppercase tracking-widest"
                        >
                            Start Free <ArrowRight size={14} />
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
                            className="lg:hidden mt-4 pt-4 border-t border-slate-100 overflow-hidden"
                        >
                            <div className="flex flex-col gap-2 px-2 pb-6">
                                {/* Products Dropdown */}
                                <div className="flex flex-col">
                                    <button
                                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'products' ? null : 'products')}
                                        className="flex items-center justify-between text-base font-bold text-[#0f172a] py-2"
                                    >
                                        Products
                                        <ChevronDown size={18} className={cn("transition-transform", activeMobileDropdown === 'products' && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                        {activeMobileDropdown === 'products' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-col gap-2 py-2 pl-4 border-l-2 border-slate-100 ml-2">
                                                    {products.map(p => (
                                                        <Link key={p.name} href={p.href} className="text-sm font-medium text-slate-600 py-2 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                                                            <p.icon size={16} className="text-orange-600" />
                                                            {p.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Industries Dropdown */}
                                <div className="flex flex-col">
                                    <button
                                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'industries' ? null : 'industries')}
                                        className="flex items-center justify-between text-base font-bold text-[#0f172a] py-2"
                                    >
                                        Industries
                                        <ChevronDown size={18} className={cn("transition-transform", activeMobileDropdown === 'industries' && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                        {activeMobileDropdown === 'industries' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-col gap-2 py-2 pl-4 border-l-2 border-slate-100 ml-2">
                                                    {industries.map(i => (
                                                        <Link key={i.name} href={i.href} className="text-sm font-medium text-slate-600 py-2 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                                                            <i.icon size={16} className="text-orange-600" />
                                                            {i.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link href="/pricing" className="text-base font-bold text-[#0f172a] py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>

                                {/* Resources Dropdown */}
                                <div className="flex flex-col">
                                    <button
                                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'resources' ? null : 'resources')}
                                        className="flex items-center justify-between text-base font-bold text-[#0f172a] py-2"
                                    >
                                        Resources
                                        <ChevronDown size={18} className={cn("transition-transform", activeMobileDropdown === 'resources' && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                        {activeMobileDropdown === 'resources' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-col gap-2 py-2 pl-4 border-l-2 border-slate-100 ml-2">
                                                    {resources.map(r => (
                                                        <Link key={r.name} href={r.href} className="text-sm font-medium text-slate-600 py-2 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                                                            <r.icon size={16} className="text-orange-600" />
                                                            {r.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <hr className="border-slate-100 my-2" />
                                <Link href="/login" className="text-base font-bold text-[#0f172a] py-2" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
