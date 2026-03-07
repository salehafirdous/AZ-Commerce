"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Layout, ShoppingCart, Users, Truck, BarChart3, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardTabsV4 = () => {
    const tabs = [
        {
            id: "admin",
            label: "Admin Panel",
            icon: Layout,
            image: "/images/v4/v4_dashboard_preview.png",
            description: "Manage your entire business from a single command center. View sales, inventory, and analytics in real-time."
        },
        {
            id: "pos",
            label: "POS Screen",
            icon: ShoppingCart,
            image: "/images/v4/v4_pos_screen_preview.png",
            description: "Fast, intuitive billing for physical stores. Works offline and syncs automatically when reconnected."
        },
        {
            id: "vendor",
            label: "Vendor Panel",
            icon: Users,
            image: "/images/v4/v4_vendor_panel_preview.png",
            description: "Give your suppliers their own portal to manage products, view orders, and track payouts."
        },
        {
            id: "delivery",
            label: "Delivery Tracking",
            icon: Truck,
            image: "/images/v4/v4_dashboard_preview.png", // Reusing since generation failed
            description: "Track your delivery fleet in real-time and provide customers with live order updates."
        },
        {
            id: "analytics",
            label: "Analytics",
            icon: BarChart3,
            image: "/images/v4/v4_dashboard_preview.png", // Reusing since generation failed
            description: "Deep dive into your business health with advanced reporting and AI-driven growth insights."
        }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6"
                    >
                        A Dashboard for <span className="text-orange-600 italic">Every Role</span>
                    </motion.h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                        Experience the platform through tailored interfaces designed for maximum productivity.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Tab Selection */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "group flex flex-col items-start p-6 rounded-2xl transition-all duration-300 text-left relative overflow-hidden",
                                    activeTab.id === tab.id
                                        ? "bg-white shadow-xl shadow-orange-100/50 border border-orange-100"
                                        : "hover:bg-slate-50 border border-transparent"
                                )}
                            >
                                {activeTab.id === tab.id && (
                                    <motion.div
                                        layoutId="activeTabBg"
                                        className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent -z-10"
                                    />
                                )}
                                <div className="flex items-center gap-4 mb-2">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300",
                                        activeTab.id === tab.id ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                                    )}>
                                        <tab.icon size={20} />
                                    </div>
                                    <span className={cn(
                                        "font-bold transition-colors duration-300",
                                        activeTab.id === tab.id ? "text-[#0f172a]" : "text-slate-400 group-hover:text-slate-600"
                                    )}>
                                        {tab.label}
                                    </span>
                                </div>
                                {activeTab.id === tab.id && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="text-sm text-slate-500 font-medium leading-relaxed pl-14"
                                    >
                                        {tab.description}
                                    </motion.p>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Interactive Preview */}
                    <div className="w-full lg:w-2/3 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -40, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative"
                            >
                                {/* Browser Frame */}
                                <div className="bg-white rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">
                                    <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-6 gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                    </div>
                                    <div className="relative aspect-[16/10] w-full bg-slate-100">
                                        <Image
                                            src={activeTab.image}
                                            alt={activeTab.label}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-100 rounded-full blur-3xl -z-10 opacity-50" />
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardTabsV4;
