"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Zap, ShieldCheck, Cpu, Rocket, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const points = [
    {
        id: "ops",
        title: "Centralized Operations",
        shortTitle: "Unified Control",
        description: "No more switching between tabs. Manage your website, physical stores, warehouse, and delivery fleets from a single browser window. Total control, unified data streams.",
        icon: Cpu,
        color: "from-blue-600 to-indigo-700",
        bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "sync",
        title: "Real-time Data Sync",
        shortTitle: "Instant Sync",
        description: "When an item sells in your shop, your online stock updates instantly. Sync prices, inventory, and customer data across all channels without lifting a finger.",
        icon: Zap,
        color: "from-orange-500 to-red-600",
        bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "auto",
        title: "Reduced Manual Work",
        shortTitle: "Smart Auto",
        description: "Automate billing, tax calculations, and vendor payouts. Our AI handles the boring stuff so you can focus on building your brand and long-term strategy.",
        icon: ShieldCheck,
        color: "from-emerald-500 to-teal-700",
        bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "setup",
        title: "Faster Business Setup",
        shortTitle: "Rapid Launch",
        description: "Go from zero to live in record time. Our pre-integrated systems eliminate the need for complex custom development and expensive technical consultants.",
        icon: Rocket,
        color: "from-purple-600 to-purple-900",
        bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
    }
];

const WhySectionV4 = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="py-32 bg-[#0a0f1a] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4"
                    >
                        The Core Advantage
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-semibold text-white mb-8"
                    >
                        Why businesses <span className="text-orange-500 italic">trust</span> AZ.
                    </motion.h2>
                    <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                        Experience the architectural precision that powers 10,000+ growing commerce ecosystems worldwide.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row h-[600px] gap-4">
                    {points.map((point) => (
                        <motion.div
                            key={point.id}
                            layout
                            onMouseEnter={() => setHoveredId(point.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={cn(
                                "relative flex-grow rounded-[2.5rem] overflow-hidden transition-all duration-700 cursor-pointer group",
                                hoveredId === point.id ? "lg:flex-[4]" : "lg:flex-[1]"
                            )}
                        >
                            {/* Background with Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${point.bgImage})` }}
                            />
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-b mix-blend-multiply opacity-80 transition-opacity duration-700",
                                point.color,
                                hoveredId === point.id ? "opacity-90" : "opacity-60"
                            )} />
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-between">
                                <div>
                                    <motion.div
                                        layout
                                        className={cn(
                                            "w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-8 transition-all duration-500",
                                            hoveredId === point.id ? "scale-110 rotate-3 bg-white text-black" : ""
                                        )}
                                    >
                                        <point.icon size={32} />
                                    </motion.div>

                                    <AnimatePresence mode="wait">
                                        {hoveredId === point.id ? (
                                            <motion.div
                                                key="expanded"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="max-w-md"
                                            >
                                                <h3 className="text-4xl font-black text-white mb-6 leading-tight">
                                                    {point.title}
                                                </h3>
                                                <p className="text-white/80 text-lg leading-relaxed font-medium mb-8">
                                                    {point.description}
                                                </p>
                                                <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-2xl">
                                                    Analyze Feature <ArrowRight size={20} />
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="collapsed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="lg:[writing-mode:vertical-lr] lg:rotate-180"
                                            >
                                                <h3 className="text-2xl font-bold text-white uppercase tracking-widest whitespace-nowrap">
                                                    {point.shortTitle}
                                                </h3>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-white/40 font-black text-3xl">0{points.indexOf(point) + 1}</span>
                                    {hoveredId !== point.id && (
                                        <div className="w-2 h-2 rounded-full bg-white opacity-40 animate-pulse" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute -bottom-1/3 -right-1/3 w-[1000px] h-[1000px] border border-white/5 rounded-full pointer-events-none" />
        </section>
    );
};

export default WhySectionV4;
