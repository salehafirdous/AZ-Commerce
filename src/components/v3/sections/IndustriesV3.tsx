"use client";

import { motion } from "framer-motion";
import { Store, Utensils, ShoppingBasket, Pill, Truck, ArrowRight } from "lucide-react";

const industries = [
    {
        title: "Retail Stores",
        desc: "Fashion, electronics, and lifestyle boutiques.",
        icon: Store,
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "Restaurants & Cafes",
        desc: "Dine-in, takeaway, and cloud kitchens.",
        icon: Utensils,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Grocery & Supermarkets",
        desc: "High-volume inventory and barcode billing.",
        icon: ShoppingBasket,
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        title: "Pharmacies",
        desc: "Batch tracking and medical stock management.",
        icon: Pill,
        color: "bg-red-50 text-red-600"
    },
    {
        title: "Distributors",
        desc: "Bulk orders and multi-warehouse logistics.",
        icon: Truck,
        color: "bg-purple-50 text-purple-600"
    }
];

const IndustriesV3 = () => {
    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6 tracking-tight uppercase italic">
                        Built for <span className="text-orange-600">Every Vertical.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        AZ Commerce isn't one-size-fits-all. We've built specialized workflows for the world's most demanding industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={ind.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
                        >
                            <div className={`w-14 h-14 ${ind.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <ind.icon size={28} />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0f172a] mb-4 tracking-tight leading-tight uppercase group-hover:text-orange-600 transition-colors">
                                {ind.title}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">
                                {ind.desc}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-400 group-hover:text-orange-600 transition-colors tracking-widest">
                                Explore <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesV3;
