"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Layers, Shield, Cpu } from "lucide-react";

const MaterialityCraft = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    return (
        <section ref={containerRef} className="py-60 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 text-[15vw] font-black text-slate-50 leading-none select-none pointer-events-none">
                CRAFT
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            style={{ y, rotate }}
                            className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.3)] aspect-[4/6]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                                alt="Abstract Craft"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-20 left-16 right-16">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    className="w-12 h-1 bg-blue-600 mb-8 origin-left"
                                />
                                <h3 className="text-white text-5xl font-black leading-[1.1] uppercase tracking-tighter">
                                    Precision meets <br />
                                    <span className="text-blue-500 italic">scale.</span>
                                </h3>
                            </div>
                        </motion.div>

                        {/* Decorative background element */}
                        <div className="absolute -top-20 -left-20 w-[120%] h-[120%] border border-slate-100 rounded-[6rem] -z-10" />
                    </div>

                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <span className="text-blue-600 font-black text-sm tracking-[0.4em] uppercase">Materiality & Craft</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-7xl md:text-[8vw] font-display font-black text-slate-900 mb-16 leading-[0.85] tracking-tighter uppercase"
                        >
                            The core <br />
                            of your <br />
                            <span className="text-blue-600 italic">empire.</span>
                        </motion.h2>

                        <div className="space-y-20">
                            {[
                                {
                                    icon: <Layers size={32} />,
                                    title: "Unified Single-Data Core",
                                    desc: "No more disconnected silos. Your CRM, ERP, and POS share the exact same real-time database, ensuring 100% data integrity."
                                },
                                {
                                    icon: <Cpu size={32} />,
                                    title: "Cloud-Native Infrastructure",
                                    desc: "Scaled on premium secure cloud servers with 99.99% uptime. Designed to handle millions of transactions."
                                },
                                {
                                    icon: <Shield size={32} />,
                                    title: "Bank-Grade Encryption",
                                    desc: "Every byte of your business data is encrypted at rest and in transit. Role-based permissions keep your sensitive info locked."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-12 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-slate-300 group-hover:text-blue-600 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-lg text-slate-500 leading-relaxed max-w-md font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaterialityCraft;
