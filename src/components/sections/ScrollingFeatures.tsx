"use client";

import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { Box, Barcode, Users, PieChart, Layers, Globe, Zap, Shield } from "lucide-react";

interface Feature {
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: string;
    accent: string;
}

const features: Feature[] = [
    {
        title: "Enterprise ERP",
        desc: "Centralize your entire back-office. Manage vendors, purchase orders, and global operations with a unified control center.",
        icon: <Layers size={48} />,
        color: "bg-blue-600",
        accent: "from-blue-600/20 to-transparent"
    },
    {
        title: "Advanced CRM",
        desc: "Convert leads into lifetime customers with automated pipeline tracking, contact management, and deep behavioral analytics.",
        icon: <Users size={48} />,
        color: "bg-indigo-600",
        accent: "from-indigo-600/20 to-transparent"
    },
    {
        title: "Smart Accounting",
        desc: "Automate your finances with real-time tax/GST support, professional invoicing, and detailed P&L reporting on demand.",
        icon: <PieChart size={48} />,
        color: "bg-emerald-600",
        accent: "from-emerald-600/20 to-transparent"
    },
    {
        title: "Inventory Mastery",
        desc: "Multi-warehouse management with precise stock tracking, automated reordering, and instant sync across all sales channels.",
        icon: <Box size={48} />,
        color: "bg-purple-600",
        accent: "from-purple-600/20 to-transparent"
    },
    {
        title: "Global Commerce",
        desc: "Launch high-converting d2c stores with a built-in catalog, secure checkout, and full integration with your backend.",
        icon: <Globe size={48} />,
        color: "bg-orange-600",
        accent: "from-orange-600/20 to-transparent"
    }
];

const FeatureText = ({ feature, index, scrollYProgress }: { feature: Feature, index: number, scrollYProgress: MotionValue<number> }) => {
    const start = index / features.length;
    const end = (index + 1) / features.length;

    const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [-50, 0, 0, 50]);

    return (
        <motion.div
            style={{ opacity, x }}
            className="absolute inset-0 flex flex-col justify-center px-6 md:px-0"
        >
            <div className="flex items-center gap-4 mb-8">
                <div className={`w-2 h-10 ${feature.color} rounded-full`} />
                <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-xs">Module 0{index + 1}</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-[0.9] text-white uppercase tracking-tighter">
                {feature.title}
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl font-medium">
                {feature.desc}
            </p>
            <div className="mt-12 flex items-center gap-6">
                <button className="px-8 py-4 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">
                    Explore Feature
                </button>
            </div>
        </motion.div>
    );
};

const FeatureViz = ({ feature, index, scrollYProgress }: { feature: Feature, index: number, scrollYProgress: MotionValue<number> }) => {
    const start = index / features.length;
    const end = (index + 1) / features.length;

    const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.6, 1, 1, 0.6]);
    const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
    const rotate = useTransform(scrollYProgress, [start, end], [0, 90]);

    return (
        <motion.div
            style={{ scale, opacity, rotate }}
            className="absolute inset-0 flex items-center justify-center p-12"
        >
            <div className="relative w-full aspect-square max-w-[500px]">
                {/* Decorative Layers */}
                <div className={`absolute inset-0 rounded-[4rem] bg-gradient-to-br ${feature.accent} blur-[100px]`} />
                <div className="absolute inset-0 border border-white/10 rounded-[4rem] group" />

                {/* Central Card */}
                <div className="absolute inset-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 noise-bg opacity-20" />
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        className={`w-32 h-32 rounded-[2rem] ${feature.color} flex items-center justify-center text-white shadow-[0_0_50px_rgba(255,255,255,0.2)]`}
                    >
                        {feature.icon}
                    </motion.div>

                    {/* Floating accents */}
                    <div className="absolute top-10 left-10 p-4 rounded-2xl bg-white/10 border border-white/10 text-white/40"><Shield size={24} /></div>
                    <div className="absolute bottom-10 right-10 p-4 rounded-2xl bg-white/10 border border-white/10 text-white/40"><Zap size={24} /></div>
                </div>
            </div>
        </motion.div>
    );
};

const ScrollingFeatures = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-[#050505] overflow-visible">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                    <motion.h2
                        style={{ scale: useTransform(springScroll, [0, 1], [1, 1.5]) }}
                        className="text-[35vw] font-black leading-none uppercase select-none text-white whitespace-nowrap"
                    >
                        OS CORE
                    </motion.h2>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center h-[700px]">

                    {/* Text Content */}
                    <div className="relative h-full">
                        {features.map((feature, i) => (
                            <FeatureText key={i} feature={feature} index={i} scrollYProgress={springScroll} />
                        ))}
                    </div>

                    {/* Visualization Side */}
                    <div className="relative aspect-square flex items-center justify-center">
                        <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
                            {features.map((feature, i) => (
                                <FeatureViz key={i} feature={feature} index={i} scrollYProgress={springScroll} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScrollingFeatures;
