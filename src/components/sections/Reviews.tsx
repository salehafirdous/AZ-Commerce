"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
    const reviews = [
        {
            name: "Alexander Rossi",
            role: "Founder, LuxeHome",
            text: "AZ Commerce isn't just a tool; it's our entire digital backbone. We scaled from 10 to 500 orders a day without a single glitch in our inventory.",
            image: "https://i.pravatar.cc/150?u=alex"
        },
        {
            name: "Elena Gilbert",
            role: "CEO, Gilbert & Co",
            text: "The delivery tracking alone saved us thousands in support costs. Our customers love the real-time visibility and the branded experience.",
            image: "https://i.pravatar.cc/150?u=elena"
        },
        {
            name: "Marcus Thorne",
            role: "CTO, TechStore",
            text: "Finally, a platform that understands multi-vendor complexity. The automated payouts and vendor portal are truly world-class.",
            image: "https://i.pravatar.cc/150?u=marcus"
        }
    ];

    return (
        <section className="py-32 bg-slate-900 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
                        The elite choice for <br />
                        <span className="text-blue-400 italic font-medium">modern founders.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] relative group"
                        >
                            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote size={60} className="text-blue-400" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={16} className="fill-blue-400 text-blue-400" />
                                ))}
                            </div>

                            <p className="text-xl text-blue-100/80 mb-10 italic leading-relaxed">
                                &quot;{rev.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full border-2 border-blue-400/30 overflow-hidden relative">
                                    <Image
                                        src={rev.image}
                                        alt={rev.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-black text-white">{rev.name}</div>
                                    <div className="text-blue-400 text-sm font-bold uppercase tracking-wider">{rev.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
