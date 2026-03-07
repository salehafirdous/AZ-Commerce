"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const columns = [
        {
            title: "Products",
            links: [
                { name: "POS Billing", href: "/products/pos-billing" },
                { name: "Inventory Management", href: "/products/inventory" },
                { name: "E-commerce Builder", href: "/products/web-builder" },
                { name: "Vendor System", href: "/products/vendor" },
                { name: "Delivery Tracking", href: "/products/delivery" },
                { name: "Mobile Apps", href: "/products/mobile-apps" },
                { name: "Admin Portal", href: "/products/admin-portal" },
                { name: "Analytics", href: "/products/analytics" },
                { name: "CRM", href: "/products/crm" }






            ]
        },
        {
            title: "Industries",
            links: [
                { name: "Grocery Stores", href: "/industries/grocery-stores" },
                { name: "Restaurants", href: "/industries/restaurents" },
                { name: "Pharmacies", href: "/industries/pharmacies" },
                { name: "Retail Shops", href: "/industries/retail-shops" },
                { name: "Distributors", href: "/industries/distributors" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "resources/documentation" },
                { name: "API Reference", href: "resources/api-reference" },
                { name: "Help Center", href: "resources/help-center" },
                { name: "Community", href: "resources/community" },
                { name: "Video Tutorials", href: "resources/video-tutorials" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/company/about-us" },
                { name: "Careers", href: "/company/careers" },
                { name: "Press Kit", href: "/press" },
                { name: "Contact", href: "/contact" },
                { name: "Patners", href: "/company/patners" }
            ]
        }
    ];

    return (
        <footer className="bg-[#0f172a] pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
                    {/* Logo and Contact */}
                    <div className="col-span-2 space-y-8">
                        <Link href="/v4" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                                <span className="text-white font-black text-2xl italic leading-none">A</span>
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter uppercase">
                                AZ <span className="text-orange-600 italic">Commerce</span>
                            </span>
                        </Link>

                        <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
                            Building the infrastructure for the next generation of global commerce. Empowering 10,000+ businesses daily.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300 group cursor-pointer hover:text-orange-500 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-orange-600/10 transition-colors">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm font-bold">hello@azcommerce.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 group cursor-pointer hover:text-orange-500 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-orange-600/10 transition-colors">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm font-bold">+91 98765 43210</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {columns.map((col) => (
                        <div key={col.title} className="col-span-1">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-orange-500 font-medium text-sm transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="border-white/5 mb-12" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                        © 2026 AZ Commerce Platforms Private Limited. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></Link>
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></Link>
                    </div>

                    <div className="flex items-center gap-8 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
