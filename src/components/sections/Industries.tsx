"use client";

import { motion } from "framer-motion";
import { Utensils, ShoppingBasket, Pill, Shirt, Tablet, Building2 } from "lucide-react";

const Industries = () => {
    const industries = [
        { title: "Grocery Stores", icon: <ShoppingBasket size={32} /> },
        { title: "Pharmacies", icon: <Pill size={32} /> },
        { title: "Restaurants", icon: <Utensils size={32} /> },
        { title: "Fashion Shops", icon: <Shirt size={32} /> },
        { title: "Electronics", icon: <Tablet size={32} /> },
        { title: "Distributors", icon: <Building2 size={32} /> },
    ];

    return (
        <section id="industries" className="py-60 bg-white overflow-hidden relative">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-slate-50" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="text-blue-600 font-black text-sm tracking-[0.4em] uppercase">Sector Expertise</span>
                            <div className="h-px w-20 bg-slate-100" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-[8vw] font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase"
                        >
                            Built for <br />
                            every <span className="text-blue-600">vertical.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-slate-100">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center p-16 border-r border-b border-slate-100 group hover:bg-slate-50 transition-colors duration-700 h-[320px] justify-center"
                        >
                            <div className="w-20 h-20 rounded-3xl mb-8 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-200 group-hover:-translate-y-2 group-hover:rotate-3">
                                {ind.icon}
                            </div>
                            <h3 className="font-black text-slate-400 group-hover:text-slate-900 transition-colors text-xs uppercase tracking-[0.2em]">{ind.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
