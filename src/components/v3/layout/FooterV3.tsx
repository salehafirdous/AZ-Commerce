"use client";

import Link from "next/link";
import { Sparkles, Twitter, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const FooterV3 = () => {
    return (
        <footer className="bg-[#0f172a] pt-24 pb-12 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/v3" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-xl italic">A/Z</span>
                            </div>
                            <span className="text-xl font-black tracking-tight uppercase">
                                AZ <span className="text-orange-600 italic">Commerce</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-8 font-medium leading-relaxed">
                            The all-in-one business management platform built for modern retailers, distributors, and creators.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6">Product</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Admin Portal", href: "/v3/products/admin-portal" },
                                { name: "Inventory AI", href: "/v3/products/inventory-ai" },
                                { name: "POS Billing", href: "/v3/products/pos-billing" },
                                { name: "Web Builder", href: "/v3/products/web-builder" },
                                { name: "Vendor System", href: "/v3/products/vendor-system" }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-medium text-slate-400 hover:text-orange-600 transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "About Us", href: "/v3/company/about-us" },
                                { name: "Careers", href: "/v3/company/careers" },
                                { name: "Customers", href: "/v3/company/customers" },
                                { name: "Blog", href: "/v3/blog" },
                                { name: "Press", href: "/v3/press" }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-medium text-slate-400 hover:text-orange-600 transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6">Support</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Help Center", href: "/v3/resources" },
                                { name: "API Docs", href: "/v3/resources" },
                                { name: "Pricing", href: "/v3/pricing" },
                                { name: "Contact", href: "/v3/contact" },
                                { name: "Status", href: "#" }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-medium text-slate-400 hover:text-orange-600 transition-colors uppercase tracking-tighter">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-medium text-slate-500">
                        © {new Date().getFullYear()} AZ Commerce. All rights reserved. Built for creators.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-xs font-medium text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs font-medium text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-xs font-medium text-slate-500 hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV3;
