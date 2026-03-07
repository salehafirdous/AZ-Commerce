"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Share2, Cloud, Smartphone, Settings, ShieldCheck } from "lucide-react";

const benefits = [
    {
        title: "All-in-One Core",
        desc: "Replace 10+ disconnected tools with one unified business platform.",
        icon: Zap,
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        title: "Real-time Sync",
        desc: "Stock, sales, and data updated instantly across every channel.",
        icon: Share2,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "Cloud Native",
        desc: "Access your entire business from anywhere, on any device, anytime.",
        icon: Cloud,
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        title: "Mobile First",
        desc: "Specialized apps for both your customers and your back-office staff.",
        icon: Smartphone,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        title: "Easy 15-min Setup",
        desc: "Get started in minutes with our intuitive onboarding and presets.",
        icon: Settings,
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        title: "Bank-grade Security",
        desc: "Enterprise-level encryption and 99.99% uptime for your data.",
        icon: ShieldCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    }
];

const WhyChooseV3 = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="bg-slate-50 py-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] mb-8 tracking-tight">
                            Built for clarity. <br />
                            <span className="text-orange-600">Engineered for speed.</span>
                        </h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                            AZ Commerce was built by business owners for business owners. We removed the complexity of enterprise software and replaced it with a simple, high-performance interface.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {benefits.slice(0, 4).map((b, i) => (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className={`w-12 h-12 ${b.bg} ${b.color} rounded-xl flex items-center justify-center shrink-0`}>
                                        <b.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#0f172a] mb-2">{b.title}</h4>
                                        <p className="text-sm text-slate-500 font-medium">{b.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        {/* Interactive Illustration Placeholder */}
                        <div className="bg-slate-50 rounded-[4rem] aspect-square relative flex items-center justify-center p-12 overflow-hidden border border-slate-100">
                            {/* Static Decorative Ring */}
                            <div className="absolute inset-12 border-2 border-dashed border-slate-200 rounded-full" />

                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                {isMounted && benefits.map((b, i) => {
                                    const angle = (i * 360) / benefits.length;
                                    const rad = (angle * Math.PI) / 180;
                                    const x = Math.cos(rad) * 150;
                                    const y = Math.sin(rad) * 150;

                                    return (
                                        <motion.div
                                            key={b.title}
                                            style={{ x, y }}
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                            className={`absolute w-16 h-16 ${b.bg} ${b.color} rounded-2xl shadow-lg border border-white flex items-center justify-center`}
                                        >
                                            <b.icon size={28} />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* Static AZ Card */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-32 h-32 bg-orange-600 rounded-3xl shadow-2xl flex items-center justify-center z-10">
                                    <span className="text-white font-semibold text-4xl">AZ</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 rounded-full blur-[100px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseV3;
