"use client";

import { motion } from "framer-motion";
import { ShoppingBasket, Utensils, Pill, Store, Factory, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const IndustryUseCasesV4 = () => {
    const industries = [
        {
            name: "Grocery",
            icon: ShoppingBasket,
            desc: "Barcode inventory, expiry alerts, and home delivery support.",
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            name: "Restaurant",
            icon: Utensils,
            desc: "QR ordering, kitchen display, and table management.",
            color: "bg-orange-50 text-orange-600"
        },
        {
            name: "Pharmacy",
            icon: Pill,
            desc: "Batch tracking, prescription records, and GST-ready invoices.",
            color: "bg-blue-50 text-blue-600"
        },
        {
            name: "Retail Store",
            icon: Store,
            desc: "Fast checkout, loyalty programs, and inventory sync.",
            color: "bg-purple-50 text-purple-600"
        },
        {
            name: "Distributor",
            icon: Factory,
            desc: "B2B vendor panel, credit management, and bulk orders.",
            color: "bg-slate-100 text-slate-700"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6"
                        >
                            Tailored for your <span className="text-orange-600 italic">Sector</span>
                        </motion.h2>
                        <p className="text-lg text-slate-500 font-medium">
                            We provide specific features built for high-demand business industries.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm underline underline-offset-8">
                        View all use cases <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {industries.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative h-[320px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
                        >
                            <div className={cn(
                                "absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-500 group-hover:-translate-y-full",
                                item.color
                            )}>
                                <item.icon size={64} className="mb-6 opacity-80" />
                                <h3 className="text-xl font-bold">{item.name}</h3>
                            </div>

                            <div className="absolute inset-0 bg-[#0f172a] p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white text-xl font-bold mb-4">{item.name}</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-orange-500 font-bold text-[10px] uppercase tracking-widest">
                                    Learn More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryUseCasesV4;
