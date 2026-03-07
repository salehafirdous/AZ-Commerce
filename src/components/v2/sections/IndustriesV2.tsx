"use client";

import { motion } from "framer-motion";
import { Store, ShoppingBasket, Pill, Utensils, Building2, Smartphone, ArrowRight } from "lucide-react";
import Image from "next/image";

const IndustryCard = ({ title, icon: Icon, image, delay }: { title: string, icon: any, image: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay }}
        className="group relative h-[500px] rounded-[3.5rem] overflow-hidden cursor-pointer shadow-xl"
    >
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

        <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                <Icon size={28} />
            </div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{title}</h3>
            <p className="text-white/60 text-sm font-medium leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                Specialized modules and workflows optimized for {title.toLowerCase()} operations.
            </p>
            <div className="flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-[.2em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Explore Solution <ArrowRight size={14} />
            </div>
        </div>
    </motion.div>
);

const IndustriesV2 = () => {
    const industries = [
        { title: "Retail Store", icon: Store, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070" },
        { title: "Grocery Hub", icon: ShoppingBasket, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2070" },
        { title: "Pharmacy", icon: Pill, image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=2070" },
        { title: "Restaurant", icon: Utensils, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" },
        { title: "Distributor", icon: Building2, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070" },
        { title: "E-commerce", icon: Smartphone, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070" }
    ];

    return (
        <section className="py-60 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-600 font-black uppercase tracking-[.4em] text-xs mb-8"
                        >
                            Vertical Expertise
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
                            Built for <br />
                            Every <span className="text-blue-600 italic">Sector.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {industries.map((ind, i) => (
                        <IndustryCard key={i} {...ind} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesV2;
