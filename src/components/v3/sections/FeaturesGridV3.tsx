"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const FeatureShowcase = ({
    title,
    desc,
    image,
    details,
    isReversed = false
}: {
    title: string;
    desc: string;
    image: string;
    details: { label: string; value: string }[];
    isReversed?: boolean;
}) => (
    <div className="relative w-full max-w-7xl mx-auto mb-20 group">
        {/* Main Split Container */}
        <div className={`relative grid lg:grid-cols-12 overflow-hidden bg-white min-h-[380px] ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

            {/* Image Box */}
            <div className={`lg:col-span-7 relative min-h-[320px] ${isReversed ? 'lg:order-2' : ''}`}>
                <div className={`absolute inset-0 overflow-hidden z-10 ${isReversed ? 'lg:rounded-tl-[60px]' : 'lg:rounded-tr-[60px]'}`}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                </div>
            </div>

            {/* Content Box: Bright Orange Vertical Panel */}
            <div className={`lg:col-span-5 bg-orange-600 p-10 lg:p-12 flex flex-col justify-start text-white pt-16 ${isReversed ? 'lg:order-1' : ''}`}>
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                >
                    <h3 className="text-4xl md:text-5xl font-display font-black leading-[0.85] tracking-tighter uppercase">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className="block">{word}</span>
                        ))}
                    </h3>
                    <p className="text-orange-100 font-medium leading-relaxed text-sm max-w-xs pt-2">
                        {desc}
                    </p>
                    <div className="pt-4">
                        <button className="bg-white text-[#0f172a] px-8 py-2 rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-orange-50 transition-all shadow-xl shadow-orange-700/20 active:scale-95">
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Utility Bar */}
            <div className={`absolute bottom-0 ${isReversed ? 'right-0' : 'left-0'} w-full lg:w-[35%] h-12 bg-[#c4c4bc] flex items-center px-12 gap-8 z-20 ${isReversed ? 'justify-end' : ''}`}>
                <div className="w-3 h-3 bg-white/40 rounded-sm" />
                <div className="w-3 h-3 bg-white/40 rounded-sm" />
                <div className="w-3 h-3 bg-white/40 rounded-sm" />
            </div>
        </div>

        {/* Accent Orange Under-Bar */}
        <div className={`absolute bottom-0 ${isReversed ? 'right-[25%]' : 'left-[25%]'} w-1/4 h-12 bg-orange-600 z-30 hidden lg:block ${isReversed ? 'rounded-tl-2xl' : 'rounded-tr-2xl'}`} />
    </div>
);

const FeaturesGridV3 = () => {
    return (
        <section className="py-32 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="max-w-xl mb-24">
                    <h2 className="text-sm font-black uppercase tracking-[0.6em] text-slate-600 mb-6 drop-shadow-sm">Full Stack Ecosystem</h2>
                    <h2 className="text-6xl md:text-7xl font-display font-semibold text-[#0f172a] tracking-tighter leading-none italic">
                        Everything you <br />
                        <span className="text-orange-600 not-italic">need to scale.</span>
                    </h2>
                </div>

                <FeatureShowcase
                    title="CRM AND SALES"
                    desc="Convert leads and manage deep customer relationships with integrated real-time data flow."
                    image="/images/v3/unified-commerce.png"
                    details={[
                        { label: "Flow Rate", value: "High Intensity" },
                        { label: "Leads", value: "Auto-Sync" },
                        { label: "Status", value: "Online" },
                    ]}
                />

                <FeatureShowcase
                    title="SMART INVENTORY"
                    isReversed
                    desc="Track stock in real-time across multiple warehouses and channels automatically."
                    image="/images/v3/inventory-mastery.png"
                    details={[
                        { label: "SKU Units", value: "Unlimited" },
                        { label: "Precision", value: "99.9%" },
                        { label: "Sync", value: "Active" },
                    ]}
                />

                <FeatureShowcase
                    title="POS SYSTEM BILLING"
                    desc="Lightning-fast billing terminal designed for high-velocity physical storefronts."
                    image="/images/v3/pos-retail.png"
                    details={[
                        { label: "Speed", value: "0.2s Load" },
                        { label: "Offline", value: "Supported" },
                        { label: "Hardware", value: "Unified" },
                    ]}
                />

                <FeatureShowcase
                    title="WEBSITE BUILDER"
                    isReversed
                    desc="E-commerce builder for high-conversion online stores with zero coding required."
                    image="/images/v3/web-builder.png"
                    details={[
                        { label: "Engine", value: "V3 Core" },
                        { label: "Conversion", value: "+45%" },
                        { label: "Assets", value: "Global CDN" },
                    ]}
                />

                <FeatureShowcase
                    title="VENDOR MANAGEMENT"
                    desc="Automated multi-vendor management with transparent payout and tracking flows."
                    image="/images/v3/vendor-system.png"
                    details={[
                        { label: "Vendors", value: "Verified" },
                        { label: "Payouts", value: "Instant" },
                        { label: "Network", value: "Global" },
                    ]}
                />

                <FeatureShowcase
                    title="DELIVERY REALTIME SYNC"
                    isReversed
                    desc="Real-time fleet visibility and last-mile logistics tracking for modern logistics."
                    image="/images/v3/delivery-sync.png"
                    details={[
                        { label: "Sync", value: "Live GPS" },
                        { label: "Latency", value: "<10ms" },
                        { label: "Fleet", value: "Active" },
                    ]}
                />

                <FeatureShowcase
                    title="MOBILE APPS NATIVE"
                    desc="White-labeled iOS & Android apps for your customers and internal staff."
                    image="/images/v3/mobile-apps.png"
                    details={[
                        { label: "Platform", value: "iOS/Android" },
                        { label: "Build", value: "Native" },
                        { label: "Update", value: "OTA Ready" },
                    ]}
                />

                <FeatureShowcase
                    title="ENTERPRISE CUSTOM SOLUTIONS"
                    isReversed
                    desc="Our team can build specialized modules and private cloud infrastructure for your enterprise."
                    image="/images/v3/enterprise-solution.png"
                    details={[
                        { label: "Tier", value: "Elite" },
                        { label: "SLA", value: "99.99%" },
                        { label: "Support", value: "24/7 VIP" },
                    ]}
                />
            </div>
        </section>
    );
};

export default FeaturesGridV3;
