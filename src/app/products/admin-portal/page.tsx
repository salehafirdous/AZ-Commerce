"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Shield, Users, Settings, Database, Lock, Activity, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Assuming these exist based on the import paths in page.tsx
import NavbarV4 from "@/components/v4/NavbarV4";
import FooterV4 from "@/components/v4/FooterV4";
import AnnouncementBarV4 from "@/components/v4/sections/AnnouncementBarV4";
import { Spotlight } from "@/components/ui/Spotlight";

interface Feature {
    title: string;
    description: string;
    fullDescription: string;
    icon: LucideIcon;
    color: string;
}

const AdminPortalHero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="orange" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-orange-100/40 to-transparent blur-3xl rounded-full"
                />
                <motion.div
                    animate={{ rotate: [360, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-slate-100/60 to-transparent blur-3xl rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                            </span>
                            Enterprise Control Center
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8"
                        >
                            Total Control<br />
                            <span className="text-orange-600 italic">Absolute</span> <br />
                            Security
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-12"
                        >
                            Govern your entire commerce architecture from one centralized portal. Manage roles, enforce compliance, and configure your system with enterprise-grade precision.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <Link href="/v4/signup" className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 flex items-center gap-3 group">
                                Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg shadow-slate-200/10">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Play size={16} className="fill-[#0f172a] translate-x-0.5" />
                                </div>
                                Book Demo
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-8 text-[13px] font-bold text-slate-400 uppercase tracking-widest"
                        >
                            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-orange-600" /> SOC2 Compliant</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-orange-600" /> 99.99% Uptime</div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative perspective-1000"
                    >
                        <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden relative z-10 transition-transform hover:scale-[1.02] duration-700">
                            <div className="h-12 bg-slate-50/80 border-b border-slate-200 flex items-center px-8 gap-2.5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                                </div>
                                <div className="mx-auto bg-white px-24 py-1.5 rounded-lg border border-slate-200 text-[10px] text-slate-300 font-medium">
                                    admin.azcommerce.com
                                </div>
                            </div>
                            <div className="relative aspect-[1.4/1] w-full bg-slate-50 flex flex-col items-center justify-center p-8 text-center border-t border-slate-100">
                                {/* Simulated Admin Dashboard Graphic since we don't have a specific image */}
                                <div className="w-full h-full border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-white shadow-sm relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent"></div>
                                    <Shield size={48} className="text-orange-600 mb-4 animate-bounce relative z-10" />
                                    <div className="text-xl font-bold text-slate-800 mb-2 relative z-10">Admin Access Verified</div>
                                    <div className="text-sm text-slate-500 font-medium relative z-10">Secure Dashboard Environment Active</div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-20 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                                <Users size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Users</div>
                                <div className="text-xl font-bold text-slate-900">1,204 Roles</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-20 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                                <Lock size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Security Status</div>
                                <div className="text-sm font-bold text-slate-900">Protected</div>
                            </div>
                        </motion.div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/30 blur-[120px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ feature, index }: { feature: Feature, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "group p-8 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 shadow-sm",
                isHovered ? "shadow-2xl shadow-slate-200 -translate-y-2" : ""
            )}
        >
            <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500",
                isHovered ? "scale-110 shadow-lg" : "",
                feature.color === "blue" && "bg-blue-50 text-blue-600",
                feature.color === "orange" && "bg-orange-50 text-orange-600",
                feature.color === "emerald" && "bg-emerald-50 text-emerald-600",
                feature.color === "purple" && "bg-purple-50 text-purple-600",
                feature.color === "rose" && "bg-rose-50 text-rose-600",
                feature.color === "amber" && "bg-amber-50 text-amber-600"
            )}>
                <feature.icon size={30} />
            </div>

            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{feature.title}</h3>

            <p className="text-slate-500 font-medium leading-relaxed">
                {feature.description}
            </p>

            <motion.div
                initial={false}
                animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                    marginTop: isHovered ? 16 : 0
                }}
                className="overflow-hidden"
            >
                <p className="text-sm text-slate-400 font-medium leading-relaxed border-t border-slate-50 pt-4">
                    {feature.fullDescription}
                </p>
            </motion.div>
        </motion.div>
    );
};

const AdminFeaturesGrid = () => {
    const features: Feature[] = [
        {
            title: "Role-Based Access Control",
            description: "Granular permissions management.",
            fullDescription: "Define precise access levels for different teams and individuals. Ensure your staff only sees what they need to see.",
            icon: Users,
            color: "blue"
        },
        {
            title: "Audit Logging",
            description: "Track every system action.",
            fullDescription: "Comprehensive logs of all system activities, changes, and access. Perfect for compliance and security monitoring.",
            icon: Activity,
            color: "orange"
        },
        {
            title: "Global Configuration",
            description: "Configure system-wide settings.",
            fullDescription: "Manage multiple storefronts, payment gateways, and shipping providers from a single unified configuration panel.",
            icon: Settings,
            color: "emerald"
        },
        {
            title: "Data Management",
            description: "Bulk imports and exports.",
            fullDescription: "Easily manage large catalogs, customer lists, and transaction histories. Securely export data for external use.",
            icon: Database,
            color: "purple"
        },
        {
            title: "Security & Compliance",
            description: "Enterprise-grade protection.",
            fullDescription: "Advanced security features including IP whitelisting, 2FA enforcement, and automated compliance checks.",
            icon: Shield,
            color: "rose"
        },
        {
            title: "API Keys",
            description: "Manage system integrations.",
            fullDescription: "Generate and revoke API keys securely. Connect third-party applications with precise scope limitations.",
            icon: Lock,
            color: "amber"
        }
    ];

    return (
        <section className="py-24 bg-slate-50/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6"
                    >
                        Built for <span className="text-orange-600 italic">Governance</span>
                    </motion.h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                        Tools designed specifically for operational oversight and system integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <FeatureCard key={feature.title} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function AdminPortalPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-600">
            <AnnouncementBarV4 />
            <NavbarV4 />
            <AdminPortalHero />
            <AdminFeaturesGrid />

        </main>
    );
}
