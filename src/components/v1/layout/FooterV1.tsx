"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const FooterV1 = () => {
    const footerLinks = {
        Product: [
            { name: "Website Builder", href: "/v1/product/website-builder" },
            { name: "POS Billing", href: "/v1/product/pos-billing" },
            { name: "Inventory", href: "/v1/product/inventory" },
            { name: "Marketplace", href: "/v1/product/marketplace" },
            { name: "Delivery Tracking", href: "/v1/product/delivery-tracking" }
        ],
        Solutions: [
            { name: "Retail", href: "/v1/solutions/retail" },
            { name: "E-commerce", href: "/v1/solutions/e-commerce" },
            { name: "D2C Brands", href: "/v1/solutions/d2c-brands" },
            { name: "Franchises", href: "/v1/solutions/franchises" },
            { name: "Supply Chain", href: "/v1/solutions/supply-chain" }
        ],
        Resources: [
            { name: "Documentation", href: "/v1/resources/documentation" },
            { name: "API Reference", href: "/v1/resources/api-reference" },
            { name: "Community", href: "/v1/resources/community" },
            { name: "Blog", href: "/v1/resources/blog" },
            { name: "Partner Program", href: "/v1/resources/partner-program" }
        ],
        Legal: [
            { name: "Terms of Service", href: "/v1/legal/terms-of-service" },
            { name: "Privacy Policy", href: "/v1/legal/privacy-policy" },
            { name: "Cookie Policy", href: "/v1/legal/cookie-policy" },
            { name: "GDPR", href: "/v1/legal/gdpr" },
            { name: "Status", href: "/v1/legal/status" }
        ]
    };

    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative w-64 h-16">
                                <Image
                                    src="/logo.png"
                                    alt="AZ Commerce Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                            The world&apos;s first true commerce operating system. Empowering entrepreneurs to launch, manage, and scale their business ecosystem without manual friction.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-bold text-slate-900 mb-6">{category}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-slate-500 hover:text-blue-600 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm font-medium">
                        © 2026 AZ Commerce Platforms Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1 group">
                            Security <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1 group">
                            Compliance <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1 group">
                            Trust Center <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV1;
