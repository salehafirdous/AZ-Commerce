"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, BarChart3, PieChart, TrendingUp, Download, Eye, Layers, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import NavbarV4 from "@/components/v4/NavbarV4";
import AnnouncementBarV4 from "@/components/v4/sections/AnnouncementBarV4";
import { Spotlight } from "@/components/ui/Spotlight";

interface Feature {
    title: string;
    description: string;
    fullDescription: string;
    icon: LucideIcon;
    color: string;
}

/* -------------------- HERO -------------------- */

const AnalyticsHero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#f97316" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                            </span>
                            Advanced Reporting Engine
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-semibold text-[#0f172a] leading-[0.95] tracking-tight mb-8">
                            See Clearly <br />
                            <span className="text-orange-600 italic">Grow</span> <br />
                            Faster
                        </h1>

                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                            Transform complex data into actionable insights. Build custom dashboards, generate automated reports, and uncover hidden trends to drive your business forward.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="/v4/signup"
                                className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 flex items-center gap-3 group"
                            >
                                Start Free Trial
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button className="px-8 py-4 bg-white text-[#0f172a] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-lg shadow-slate-200/10">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Play size={16} className="fill-[#0f172a] translate-x-0.5" />
                                </div>
                                Explore Metrics
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-8 text-[13px] font-bold text-slate-400 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-orange-600" />
                                Real-Time Sync
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-orange-600" />
                                API Access
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="relative">
                        <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden relative z-10">
                            <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-8">
                                <div className="mx-auto bg-white px-24 py-1.5 rounded-lg border border-slate-200 text-[10px] text-slate-400 font-medium">
                                    analytics.azcommerce.com
                                </div>
                            </div>
                            <div className="aspect-[1.4/1] bg-slate-50 relative group overflow-hidden">
                                <Image
                                    src="/images/v4/v4_dashboard_preview.png"
                                    alt="Analytics Dashboard"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* -------------------- FEATURES -------------------- */

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
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
                isHovered && "shadow-2xl shadow-slate-200 -translate-y-2"
            )}
        >
            <div
                className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8",
                    feature.color === "blue" && "bg-blue-50 text-blue-600",
                    feature.color === "orange" && "bg-orange-50 text-orange-600",
                    feature.color === "emerald" && "bg-emerald-50 text-emerald-600",
                    feature.color === "purple" && "bg-purple-50 text-purple-600",
                    feature.color === "rose" && "bg-rose-50 text-rose-600",
                    feature.color === "amber" && "bg-amber-50 text-amber-600"
                )}
            >
                <feature.icon size={30} />
            </div>

            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                {feature.title}
            </h3>

            <p className="text-slate-500 font-medium leading-relaxed">
                {feature.description}
            </p>
        </motion.div>
    );
};

const AnalyticsFeaturesGrid = () => {
    const features: Feature[] = [
        { title: "Custom Dashboards", description: "Build views that matter most.", fullDescription: "", icon: Eye, color: "blue" },
        { title: "Sales Forecasting", description: "Predict future performance.", fullDescription: "", icon: TrendingUp, color: "orange" },
        { title: "Data Export", description: "Take your data anywhere.", fullDescription: "", icon: Download, color: "emerald" },
        { title: "Cohort Analysis", description: "Understand customer retention.", fullDescription: "", icon: Layers, color: "purple" },
        { title: "Performance Metrics", description: "Track campaign ROI instantly.", fullDescription: "", icon: PieChart, color: "rose" },
        { title: "Scheduled Reports", description: "Automated delivery straight to inbox.", fullDescription: "", icon: BarChart3, color: "amber" }
    ];

    return (
        <section className="py-24 bg-slate-50/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6">
                        Built for <span className="text-orange-600 italic">Insights</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                        Turn your data into a strategic advantage.
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

/* -------------------- PAGE -------------------- */

export default function AnalyticsPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-600">
            <AnnouncementBarV4 />
            <NavbarV4 />
            <AnalyticsHero />
            <AnalyticsFeaturesGrid />
        </main>
    );
}