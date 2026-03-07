"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Gallery = () => {
    const apps = [
        { title: "Admin Portal", category: "Web App", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426", size: "lg" },
        { title: "Customer App", category: "Mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070", size: "md" },
        { title: "POS System", category: "Web App", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2070", size: "md" },
        { title: "Delivery Partner", category: "Mobile", image: "https://images.unsplash.com/photo-1586769852044-692d6e3b040e?auto=format&fit=crop&q=80&w=2070", size: "lg" },
        { title: "Vendor Portal", category: "Web/Mobile", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070", size: "md" },
        { title: "Analytics", category: "Web/Mobile", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070", size: "md" }
    ];

    return (
        <section className="py-60 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="text-blue-600 font-black text-sm tracking-[0.4em] uppercase">The Ecosystem</span>
                            <div className="h-px w-20 bg-slate-100" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-[8vw] font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase"
                        >
                            One look at <br />
                            the <span className="text-blue-600 italic font-medium">future.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                    {apps.map((app, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="relative break-inside-avoid group cursor-pointer rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <div className={`relative ${app.size === "lg" ? "aspect-[4/6]" : "aspect-square"} overflow-hidden`}>
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute inset-0 p-12 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <div className="text-blue-400 font-black text-xs uppercase tracking-[.3em] mb-4">{app.category}</div>
                                    <h3 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">{app.title}</h3>
                                    <div className="flex items-center gap-3 text-white font-bold text-sm">
                                        VIEW DEMO <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
