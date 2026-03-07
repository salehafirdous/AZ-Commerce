"use client";

import { motion } from "framer-motion";
import { UserPlus, Store, PackagePlus, CreditCard, Rocket, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const OnboardingStepsV4 = () => {
    const steps = [
        {
            title: "Create Account",
            desc: "Instant signup with email or business ID.",
            icon: UserPlus,
            color: "blue"
        },
        {
            title: "Setup Store",
            desc: "Configure your logo, theme, and location.",
            icon: Store,
            color: "orange"
        },
        {
            title: "Add Products",
            desc: "Bulk upload or scan barcodes to go live.",
            icon: PackagePlus,
            color: "emerald"
        },
        {
            title: "Setup Billing",
            desc: "Activate digital payments and GST filing.",
            icon: CreditCard,
            color: "purple"
        },
        {
            title: "Go Live!",
            desc: "Orders start flowing instantly.",
            icon: Rocket,
            color: "rose"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6"
                    >
                        Go live in <span className="text-orange-600 italic">5 minutes</span>
                    </motion.h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                        A frictionless onboarding experience designed for busy business owners.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={cn(
                                    "w-20 h-20 rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
                                    step.color === "blue" && "bg-blue-50 text-blue-600",
                                    step.color === "orange" && "bg-orange-50 text-orange-600",
                                    step.color === "emerald" && "bg-emerald-50 text-emerald-600",
                                    step.color === "purple" && "bg-purple-50 text-purple-600",
                                    step.color === "rose" && "bg-rose-50 text-rose-600"
                                )}>
                                    <step.icon size={32} />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-[#0f172a] font-black text-xs flex items-center justify-center shadow-lg border border-slate-100">
                                        {i + 1}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{step.title}</h3>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider leading-relaxed px-4">
                                    {step.desc}
                                </p>

                                {/* Arrow indicator for small screens */}
                                {i < steps.length - 1 && (
                                    <div className="mt-6 lg:hidden">
                                        <ChevronRight size={24} className="text-slate-200 rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnboardingStepsV4;
