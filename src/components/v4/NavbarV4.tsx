"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Layout, Box, ShoppingCart, Globe, Store, Truck, Smartphone, PieChart, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarV4 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

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
                    <Link href="/v4" className="flex items-center gap-2 group">
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

                        <Link href="/v4/industries" className="text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors uppercase tracking-wider">Industries</Link>
                        <Link href="/v4/pricing" className="text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors uppercase tracking-wider">Pricing</Link>
                        <Link href="/v4/resources" className="text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors uppercase tracking-wider">Resources</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link href="/v4/login" className="hidden sm:block text-[13px] font-bold text-[#0f172a] hover:text-orange-600 transition-colors uppercase tracking-wider">Login</Link>
                        <Link
                            href="/v4/signup"
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
                            <div className="space-y-6 pb-6">
                                <div className="flex flex-col gap-2 px-2">
                                    {/* Products Dropdown */}
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'products' ? null : 'products')}
                                            className="flex items-center justify-between text-base font-bold text-[#0f172a] py-2"
                                        >
                                            Products
                                            <ChevronDown size={18} className={cn("transition-transform", mobileActiveDropdown === 'products' && "rotate-180")} />
                                        </button>
                                        <AnimatePresence>
                                            {mobileActiveDropdown === 'products' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="grid grid-cols-2 gap-3 py-3">
                                                        {products.map(p => (
                                                            <Link key={p.name} href={p.href} className="flex flex-col gap-2 p-3 rounded-xl bg-slate-50" onClick={() => setMobileMenuOpen(false)}>
                                                                <p.icon size={18} className="text-orange-600" />
                                                                <span className="text-[12px] font-bold text-[#0f172a]">{p.name}</span>
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
                                            onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'industries' ? null : 'industries')}
                                            className="flex items-center justify-between text-base font-bold text-[#0f172a] py-2"
                                        >
                                            Industries
                                            <ChevronDown size={18} className={cn("transition-transform", mobileActiveDropdown === 'industries' && "rotate-180")} />
                                        </button>
                                        <AnimatePresence>
                                            {mobileActiveDropdown === 'industries' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col gap-2 py-2 pl-4 border-l-2 border-slate-100 ml-2">
                                                        <Link href="/industries/distributors" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>Distributors</Link>
                                                        <Link href="/industries/fashion-and-clothing" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>Fashion & Clothing</Link>
                                                        <Link href="/industries/grocery-stores" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>Grocery Stores</Link>
                                                        <Link href="/industries/pharmacies" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>Pharmacies</Link>
                                                        <Link href="/industries/restaurants" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>Restaurants</Link>
                                                        <Link href="/industries/retail-shops" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>Retail Shops</Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <Link href="/pricing" className="text-base font-bold text-[#0f172a] py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>

                                    {/* Resources Dropdown */}
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'resources' ? null : 'resources')}
                                            className="flex items-center justify-between text-base font-bold text-[#0f172a] py-2"
                                        >
                                            Resources
                                            <ChevronDown size={18} className={cn("transition-transform", mobileActiveDropdown === 'resources' && "rotate-180")} />
                                        </button>
                                        <AnimatePresence>
                                            {mobileActiveDropdown === 'resources' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="flex flex-col gap-2 py-2 pl-4 border-l-2 border-slate-100 ml-2">
                                                        <Link href="/resources/blog" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                                                        <Link href="/resources/help" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>Help Center</Link>
                                                        <Link href="/resources/api" className="text-sm font-medium text-slate-600 py-1" onClick={() => setMobileMenuOpen(false)}>API Docs</Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <hr className="border-slate-100 my-2" />
                                    <Link href="/login" className="text-base font-bold text-[#0f172a] py-2" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default NavbarV4;
