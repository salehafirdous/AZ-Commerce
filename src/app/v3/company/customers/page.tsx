"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight, Globe } from "lucide-react";
import Image from "next/image";

const stories = [
    {
        customer: "Velvet & Co",
        industry: "Luxury Fashion",
        metric: "+240% Growth",
        desc: "How a boutique brand scaled from 1 to 50 global locations using AZ Commerce POS and Inventory AI.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
    },
    {
        customer: "Foodie Hub",
        industry: "Restaurant Chain",
        metric: "3.2M Orders/Year",
        desc: "Managing high-volume checkout and a complex vendor system across multi-regional food courts.",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000"
    },
    {
        customer: "TechSource",
        industry: "B2B Electronics",
        metric: "$1.2B GMV",
        desc: "Simplifying complex B2B procurement with custom vendor portals and deep ERP integration.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    },
];

export default function CustomersV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Globe size={14} /> TRUSTED BY 10,000+ BRANDS
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                    >
                        Success Stories from <br /> <span className="text-orange-600">Every Industry.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium leading-relaxed"
                    >
                        See how the world’s most ambitious brands use AZ Commerce to streamline their operations and scale their revenue globally.
                    </motion.p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-20 text-xs font-bold uppercase tracking-widest">
                    {["All Work", "Retail", "E-commerce", "Multi-vendor", "Restaurant", "Enterprise"].map((cat) => (
                        <button key={cat} className="px-6 py-3 rounded-full bg-slate-50 border border-slate-100 hover:bg-orange-600 hover:text-white transition-all">
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Case Studies Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
                    {stories.map((s, i) => (
                        <motion.div
                            key={s.customer}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8">
                                <Image src={s.image} alt={s.customer} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={40} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">{s.industry}</div>
                                    <div className="text-sm font-bold text-[#0f172a]">{s.metric}</div>
                                </div>
                                <h3 className="text-3xl font-semibold text-[#0f172a] group-hover:text-orange-600 transition-colors">{s.customer}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial Big */}
                <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-24 border border-slate-100 relative overflow-hidden">
                    <Quote className="absolute top-10 right-10 text-orange-600/5 w-64 h-64 -z-10" />
                    <div className="max-w-4xl">
                        <div className="flex gap-1 mb-8">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-orange-600 text-orange-600" />)}
                        </div>
                        <p className="text-2xl md:text-4xl font-display font-semibold text-[#0f172a] mb-12 leading-tight tracking-tight italic">
                            "Switching to AZ Commerce was the best decision for our warehouse. We reduced stock errors by 90% in the first three months. The automated reordering is a game-changer."
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-slate-200 rounded-full" />
                            <div>
                                <div className="text-xl font-bold text-[#0f172a]">Sarah Jenkins</div>
                                <div className="text-sm font-bold text-orange-600 uppercase tracking-widest">Operations Director, GlobalMart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
