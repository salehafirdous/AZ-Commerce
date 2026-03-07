"use client";

import { motion } from "framer-motion";
import { Package, ScanLine, Globe, BarChart2, Receipt, Bell, LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Feature {
    title: string;
    description: string;
    fullDescription: string;
    icon: LucideIcon;
    color: string;
}

const FeaturesGridV4 = () => {
    const features: Feature[] = [
        {
            title: "Real-time Inventory",
            description: "Auto-sync stock across channels.",
            fullDescription: "Track stock levels across multiple warehouses and storefronts in real-time. Automated reordering and low-stock alerts keep your business moving.",
            icon: Package,
            color: "blue"
        },
        {
            title: "Barcode Billing",
            description: "Lightning-fast checkout efficiency.",
            fullDescription: "Scan items and process payments in seconds. Support for handheld scanners and mobile camera scanning for maximum flexibility at checkout.",
            icon: ScanLine,
            color: "orange"
        },
        {
            title: "Online Orders",
            description: "Omnichannel sales management.",
            fullDescription: "Accept orders via your website, mobile app, and WhatsApp. Manage all incoming requests in a unified queue for faster fulfillment.",
            icon: Globe,
            color: "emerald"
        },
        {
            title: "Advanced Reporting",
            description: "Data-driven business decisions.",
            fullDescription: "Comprehensive reports on sales trends, customer behavior, and profit margins. Export data for accounting and strategic planning.",
            icon: BarChart2,
            color: "purple"
        },
        {
            title: "GST Billing",
            description: "Tax-compliant invoice generation.",
            fullDescription: "Automated GST calculations and tax-ready invoices. Stay compliant with local regulations without manual effort.",
            icon: Receipt,
            color: "rose"
        },
        {
            title: "Instant Notifications",
            description: "Real-time alerts for everything.",
            fullDescription: "Get notified about new orders, low stock, and delivery milestones via WhatsApp, Email, and Push notifications.",
            icon: Bell,
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
                        Built for <span className="text-orange-600 italic">Efficiency</span>
                    </motion.h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                        A comprehensive toolset designed to solve everyday retail challenges.
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

export default FeaturesGridV4;
