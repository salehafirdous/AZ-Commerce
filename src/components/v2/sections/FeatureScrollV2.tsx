"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Box, Barcode, Truck, LayoutDashboard, Store, Building2 } from "lucide-react";

const features = [
    {
        title: "Real-time Inventory",
        desc: "Precise stock tracking across all warehouses and channels. Never miss a sale due to ghost inventory.",
        icon: Box,
        color: "bg-blue-600",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
    },
    {
        title: "Barcode POS Billing",
        desc: "Ultra-fast lightning-quick checkout with full barcode and QR support. Integrated payments and loyalty.",
        icon: Barcode,
        color: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2070"
    },
    {
        title: "Live Order Tracking",
        desc: "Real-time fleet visibility for you and your customers. Watch every fulfillment step in high-fidelity.",
        icon: Truck,
        color: "bg-orange-600",
        img: "https://images.unsplash.com/photo-1586769852044-692d6e3b040e?auto=format&fit=crop&q=80&w=2070"
    },
    {
        title: "Analytics Dashboard",
        desc: "Deep-velocity insights into your business growth. AI-powered forecasting and P&L reporting.",
        icon: LayoutDashboard,
        color: "bg-purple-600",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
    },
    {
        title: "Vendor Marketplace",
        desc: "Scale into a multi-vendor giant. Automated commission payouts and seller onboarding flows.",
        icon: Store,
        color: "bg-indigo-600",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070"
    },
    {
        title: "Multi-Store Mastery",
        desc: "Manage 100+ branches from one admin. Global configurations with local granular controls.",
        icon: Building2,
        color: "bg-pink-600",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
    }
];

const FeatureItem = ({ feature, index, scrollYProgress }: { feature: any, index: number, scrollYProgress: any }) => {
    const start = index / features.length;
    const end = (index + 1) / features.length;

    const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.8]);
    const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [100, 0, 0, -100]);

    return (
        <motion.div
            style={{ opacity, scale, y }}
            className="absolute inset-0 flex flex-col justify-center px-6 lg:px-24"
        >
            <div className={`w-12 h-1 ${feature.color} mb-8`} />
            <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
                {feature.title}
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-xl">
                {feature.desc}
            </p>
        </motion.div>
    );
};

const FeatureScrollV2 = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const imageOpacity = useTransform(springProgress, (v) => {
        const index = Math.floor(v * features.length);
        return 1; // Simplified for now, or use a complex map
    });

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-[#050505] overflow-visible">
            <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">

                {/* Visual Side */}
                <div className="w-full lg:w-1/2 h-full relative">
                    {features.map((feat, i) => {
                        const start = i / features.length;
                        const end = (i + 1) / features.length;
                        const opacity = useTransform(springProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                        const scale = useTransform(springProgress, [start, start + 0.1, end - 0.1, end], [1.1, 1, 1, 1.1]);

                        return (
                            <motion.div key={i} style={{ opacity, scale }} className="absolute inset-0 p-8 lg:p-20">
                                <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl border border-white/10">
                                    <Image src={feat.img} alt={feat.title} fill className="object-cover opacity-60" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                                    <div className="absolute top-12 left-12">
                                        <div className={`w-16 h-16 rounded-2xl ${feat.color} flex items-center justify-center text-white shadow-2xl`}>
                                            <feat.icon size={32} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 h-full relative">
                    {features.map((feat, i) => (
                        <FeatureItem key={i} feature={feat} index={i} scrollYProgress={springProgress} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeatureScrollV2;
