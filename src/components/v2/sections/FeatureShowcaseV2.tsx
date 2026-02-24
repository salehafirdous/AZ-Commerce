"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Box, Barcode, Truck, LayoutDashboard, Store, Building2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Real-time Inventory",
        desc: "Precise stock tracking across all warehouses and channels.",
        details: ["Automated Restock Alerts", "Multi-warehouse Sync", "Inventory Aging Reports"],
        icon: Box,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
        accent: "from-blue-600 to-indigo-600"
    },
    {
        title: "Barcode POS Billing",
        desc: "Ultra-fast lightning-quick checkout with full barcode support.",
        details: ["QR & Barcode Scanning", "Offline Mode Support", "Loyalty Integration"],
        icon: Barcode,
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2070",
        accent: "from-emerald-600 to-teal-600"
    },
    {
        title: "Live Order Tracking",
        desc: "Watch every fulfillment step in high-fidelity map views.",
        details: ["Route Optimization", "Driver Hotspots", "ETA Predictions"],
        icon: Truck,
        image: "https://images.unsplash.com/photo-1586769852044-692d6e3b040e?auto=format&fit=crop&q=80&w=2070",
        accent: "from-orange-600 to-red-600"
    },
    {
        title: "Vendor Marketplace",
        desc: "Scale into a multi-vendor giant with ease.",
        details: ["Automated Payouts", "Seller Guardrail Setup", "Marketplace Analytics"],
        icon: Store,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070",
        accent: "from-indigo-600 to-purple-600"
    },
    {
        title: "Deep Analytics",
        desc: "Deep-velocity insights into your business growth.",
        details: ["AI Revenue Prediction", "Customer LTV Tracking", "Heatmap Reports"],
        icon: LayoutDashboard,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
        accent: "from-purple-600 to-pink-600"
    },
    {
        title: "Multi-Store Mastery",
        desc: "Manage 100+ branches from one unified admin portal.",
        details: ["Branch-wise Controls", "Global Inventory Pooling", "Local Tax Compliance"],
        icon: Building2,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070",
        accent: "from-pink-600 to-rose-600"
    }
];

const FeatureSection = ({ feature, index }: { feature: any, index: number }) => {
    const sectionRef = useRef(null);
    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="py-40 lg:py-60 relative overflow-hidden bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-20 lg:gap-32",
                    !isEven && "lg:flex-row-reverse"
                )}>
                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            style={{ scale, opacity }}
                            className="relative aspect-square md:aspect-video lg:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 group"
                        >
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                            {/* Floating UI Elements */}
                            <motion.div
                                style={{ y }}
                                className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br", feature.accent)}>
                                        <feature.icon size={24} />
                                    </div>
                                    <div className="text-white text-lg font-black uppercase tracking-tighter">Live Monitor</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "70%" }}
                                            className="h-full bg-white/60"
                                        />
                                    </div>
                                    <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Decoration */}
                        <div className={cn(
                            "absolute -z-10 w-[120%] h-[120%] top-[-10%] opacity-10 blur-[100px] rounded-full",
                            isEven ? "left-[-10%] bg-blue-500" : "right-[-10%] bg-purple-500"
                        )} />
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className={cn(
                                "inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8",
                                !isEven && "bg-blue-50 text-blue-600"
                            )}>
                                <span className="w-2 h-2 rounded-full bg-current" />
                                Specialized Module
                            </div>

                            <h2 className="text-6xl md:text-8xl font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase mb-8">
                                {feature.title.split(' ')[0]} <br />
                                <span className="text-blue-600 italic font-medium">{feature.title.split(' ')[1]}</span>
                            </h2>

                            <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
                                {feature.desc}
                            </p>

                            <div className="grid sm:grid-cols-1 gap-6 mb-12">
                                {feature.details.map((detail: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-sm font-black text-slate-700 uppercase tracking-widest">{detail}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <button className="px-10 py-5 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 group flex items-center gap-3">
                                Explore Module
                                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                    →
                                </motion.div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureShowcaseV2 = () => {
    return (
        <div className="bg-white">
            {features.map((feature, index) => (
                <FeatureSection key={index} feature={feature} index={index} />
            ))}
        </div>
    );
};

export default FeatureShowcaseV2;
