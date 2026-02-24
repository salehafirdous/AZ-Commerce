"use client";

import { motion } from "framer-motion";
import { Heart, Target, Users2, Shield, Globe2, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutUsV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                        >
                            <Sparkles size={14} /> Our Mission & Vision
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                        >
                            Empowering the <br /> <span className="text-orange-600">Global Commerce</span> Revolution.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-500 font-medium leading-relaxed"
                        >
                            AZ Commerce isn't just a platform; it's a foundation. Since 2020, we've been building the infrastructure that allows businesses of all sizes to compete on a global stage.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 p-4 bg-white group">
                            <div className="relative w-full h-full rounded-[3rem] overflow-hidden">
                                <Image
                                    src="/images/v3/about-us.png"
                                    alt="Global Commerce Mission"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Culture & values */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                    {[
                        { title: "Customer First", desc: "Every line of code we write starts with the merchant's success in mind.", icon: Heart },
                        { title: "Radical Transparency", desc: "We believe in being open about our roadmap, our pricing, and our failures.", icon: Shield },
                        { title: "Limitless Innovation", desc: "AI, Blockchain, and Next-Gen POS are just the beginning of our journey.", icon: Target },
                    ].map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-600/20">
                                <value.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#0f172a] mb-4">{value.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Team Section Placeholder */}
                <div className="text-center mb-40">
                    <h2 className="text-4xl font-display font-semibold text-[#0f172a] mb-16">Global Talent. Local Impact.</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-4">
                                <div className="aspect-[4/5] bg-slate-100 rounded-[2.5rem] overflow-hidden" />
                                <div>
                                    <div className="text-lg font-bold text-[#0f172a]">Team Member {i}</div>
                                    <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">Leadership</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-[#0f172a] rounded-[4rem] p-12 lg:p-24 text-center">
                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            { label: "Founded In", value: "2020", icon: Globe2 },
                            { label: "Global Offices", value: "12", icon: MapPin },
                            { label: "Storefronts Powered", value: "100k+", icon: Users2 }
                        ].map((stat) => (
                            <div key={stat.label} className="space-y-4">
                                <stat.icon size={32} className="text-orange-500 mx-auto" />
                                <div className="text-5xl font-semibold text-white tracking-tighter">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

// Dummy MapPin for the example
const MapPin = ({ size, className }: { size: number, className: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);
