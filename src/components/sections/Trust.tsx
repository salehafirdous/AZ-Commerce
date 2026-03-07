"use client";

import { motion } from "framer-motion";

const Trust = () => {
    const brands = [
        { name: "VOLTA", style: "font-black tracking-tighter" },
        { name: "Aurelius", style: "font-serif italic" },
        { name: "NEXUS", style: "font-display font-light tracking-[0.3em]" },
        { name: "OXY", style: "font-black flex items-center gap-2" },
        { name: "ZENITH", style: "font-display font-black tracking-tight" }
    ];

    return (
        <section className="py-40 bg-white border-y border-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-50/50 mix-blend-multiply pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] mb-20"
                >
                    The operating standard for 10,000+ top-tier brands
                </motion.p>

                <div className="flex flex-wrap justify-between items-center gap-12 lg:gap-0">
                    {brands.map((brand, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className={`text-3xl md:text-4xl text-slate-300 hover:text-slate-900 transition-all duration-500 cursor-default ${brand.style}`}
                        >
                            {brand.name === "OXY" ? (
                                <>
                                    <div className="w-8 h-8 bg-current rounded-full" />
                                    <span>{brand.name}</span>
                                </>
                            ) : brand.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
