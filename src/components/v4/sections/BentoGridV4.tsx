"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ShoppingCart, Box, Globe, Store, Truck, Smartphone, BarChart3, Users, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
    {
        title: "Omnichannel POS",
        desc: "Seamless checkout across physical and digital storefronts.",
        icon: ShoppingCart,
        color: "orange",
        accent: "bg-orange-600"
    },
    {
        title: "Smart Inventory",
        desc: "AI-driven stock management and real-time forecasting.",
        icon: Box,
        color: "blue",
        accent: "bg-blue-600"
    },
    {
        title: "Web Builder",
        desc: "Create high-performance stores with zero code complexity.",
        icon: Globe,
        color: "emerald",
        accent: "bg-emerald-600"
    },
    {
        title: "Multi-Vendor Hub",
        desc: "Scale your inventory by onboarding third-party sellers.",
        icon: Store,
        color: "purple",
        accent: "bg-purple-600"
    },
    {
        title: "Logistics Engine",
        desc: "Real-time delivery tracking and fleet management.",
        icon: Truck,
        color: "amber",
        accent: "bg-amber-600"
    },
    {
        title: "Deep Analytics",
        desc: "Visualize your growth with advanced reporting tools.",
        icon: BarChart3,
        color: "slate",
        accent: "bg-slate-800"
    },
    {
        title: "Unified CRM",
        desc: "Master your customer relationships from one dashboard.",
        icon: Users,
        color: "rose",
        accent: "bg-rose-600"
    },
    {
        title: "Mobile Apps",
        desc: "Native experiences for your customers and delivery staff.",
        icon: Smartphone,
        color: "indigo",
        accent: "bg-indigo-600"
    }
];

const BentoGridV4 = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: mounted ? containerRef : undefined,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
    const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });

    return (
        <section
            ref={containerRef}
            className="py-32 bg-white relative overflow-hidden perspective-2000"
        >
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,orange_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
                        >
                            <Zap size={12} className="fill-orange-600" /> Professional Grade
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-display font-semibold text-[#0f172a] mb-6 leading-none"
                        >
                            Capabilities that <br />
                            <span className="text-orange-600 italic">scale</span> with you.
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 font-medium max-w-sm"
                    >
                        A high-performance modular system engineered for modern business complexity.
                    </motion.p>
                </div>

                {/* 3D Animated Grid */}
                <motion.div
                    style={{ rotateX: springRotateX }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {cards.map((card, i) => (
                        <CapabilityCard key={card.title} card={card} index={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const CapabilityCard = ({ card, index }: { card: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            whileHover={{
                y: -12,
                scale: 1.02,
                rotateY: 5,
                z: 50
            }}
            className="group relative h-[400px] rounded-[2.5rem] bg-white border border-slate-100 p-10 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 flex flex-col justify-between"
        >
            {/* Dynamic Background Glow */}
            <div className={cn(
                "absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full",
                card.accent
            )} />

            <div className="relative z-10">
                <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-slate-100",
                    card.accent,
                    "text-white"
                )}>
                    <card.icon size={30} />
                </div>

                <h3 className="text-2xl font-black text-[#0f172a] mb-4 group-hover:text-orange-600 transition-colors">
                    {card.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    {card.desc}
                </p>
            </div>

            <div className="relative z-10 pt-6">
                <div className="h-px w-full bg-slate-100 mb-8 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#0f172a] group-hover:text-orange-600 transition-all">
                    Explore Module <ArrowRight size={18} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </button>
            </div>

            {/* Decorative Index */}
            <div className="absolute top-10 right-10 text-4xl font-black text-slate-50 group-hover:text-orange-50 transition-colors select-none">
                0{index + 1}
            </div>
        </motion.div>
    );
};

export default BentoGridV4;
