"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Truck, Users, Store, BadgeDollarSign } from "lucide-react";
import Link from "next/link";

const Modules = () => {
    const modules = [
        {
            title: "No-Code Website Builder",
            description: "Launch a stunning, high-converting online store in minutes with our drag-and-drop builder.",
            icon: <Laptop className="text-blue-600" />,
            color: "bg-blue-50",
            href: "/product/website-builder"
        },
        {
            title: "Smart POS Billing",
            description: "Advanced billing system with barcode support, offline mode, and instant receipt printing.",
            icon: <BadgeDollarSign className="text-emerald-600" />,
            color: "bg-emerald-50",
            href: "/product/pos-billing"
        },
        {
            title: "Syncronized Inventory",
            description: "Real-time stock management across your warehouse, physical shops, and online store.",
            icon: <Store className="text-purple-600" />,
            color: "bg-purple-50",
            href: "/product/inventory"
        },
        {
            title: "Multi-vendor Marketplace",
            description: "Scale your business by allowing other vendors to sell on your platform with automated payouts.",
            icon: <Users className="text-orange-600" />,
            color: "bg-orange-50",
            href: "/product/marketplace"
        },
        {
            title: "Delivery & Tracking",
            description: "Route optimization, live agent tracking, and automated delivery notifications for customers.",
            icon: <Truck className="text-indigo-600" />,
            color: "bg-indigo-50",
            href: "/product/delivery-tracking"
        },
        {
            title: "Customer Mobile App",
            description: "Fully white-labeled iOS and Android apps to keep your customers engaged and loyal.",
            icon: <Smartphone className="text-pink-600" />,
            color: "bg-pink-50",
            href: "/solutions/d2c-brands"
        }
    ];

    return (
        <section id="products" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm"
                    >
                        Core Modules
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-black text-slate-900 mt-4 mb-6"
                    >
                        Built to handle <span className="text-blue-600">every process</span>
                    </motion.h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Our modular architecture allows you to scale from a single shop to a nationwide delivery network without switching platforms.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((mod, index) => (
                        <Link key={index} href={mod.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group h-full p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-100"
                            >
                                <div className={`w-16 h-16 ${mod.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    {mod.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{mod.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {mod.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Modules;
