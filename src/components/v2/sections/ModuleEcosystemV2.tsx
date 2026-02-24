"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, Globe, ShoppingBag, Smartphone, Truck, Store, BarChart3, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ModuleCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-white rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start min-h-[400px] overflow-hidden cursor-pointer"
        >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={24} className="text-blue-600" />
            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <Icon size={32} />
            </div>

            <div className="mt-auto">
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{desc}</p>

                {/* Mock UI Preview */}
                <div className="w-full h-32 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center p-4">
                    <div className="w-full space-y-2">
                        <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                        <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                        <div className="flex gap-2 mt-4">
                            <div className="h-8 w-8 bg-blue-100 rounded-lg" />
                            <div className="h-8 w-8 bg-blue-100 rounded-lg" />
                            <div className="h-8 w-8 bg-blue-100 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Glowing Border Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/30 rounded-[3rem] transition-colors pointer-events-none" />
        </motion.div>
    );
};

const ModuleEcosystemV2 = () => {
    const modules = [
        { icon: LayoutDashboard, title: "Admin Portal", desc: "Central command for all your business operations." },
        { icon: Users, title: "Vendor Portal", desc: "Empower your suppliers with live orders." },
        { icon: Globe, title: "Web Builder", desc: "No-code enterprise drag-and-drop store." },
        { icon: ShoppingBag, title: "POS System", desc: "Ultra-fast billing for physical storefronts." },
        { icon: Smartphone, title: "Customer App", desc: "White-labeled iOS & Android experiences." },
        { icon: Truck, title: "Delivery App", desc: "Real-time fleet tracking & route optimization." },
        { icon: Store, title: "Vendor App", desc: "Mobile management for third-party sellers." },
        { icon: BarChart3, title: "Sales Tracking", desc: "Live-velocity insights from all channels." }
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
                            The Connected Stack
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-display font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
                            The Modular <br />
                            <span className="text-blue-600 italic">Ecosystem.</span>
                        </h2>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-sm font-medium leading-relaxed">
                        Every touchpoint of your business centralized in one high-performance system.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {modules.map((mod, i) => (
                        <ModuleCard key={i} {...mod} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModuleEcosystemV2;
