"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Layers, Database, Globe, Cpu, Link as LinkIcon, Share2 } from "lucide-react";

const Panel = ({ children, x, y, rotate, scale }: { children: React.ReactNode, x: any, y: any, rotate: any, scale: any }) => (
    <motion.div
        style={{ x, y, rotate, scale }}
        className="absolute w-40 h-24 bg-white rounded-xl shadow-2xl border border-slate-100 flex items-center justify-center text-slate-400 p-4"
    >
        {children}
    </motion.div>
);

const SolutionRevealV2 = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const xLeft = useTransform(springProgress, [0, 0.5], [-200, 0]);
    const xRight = useTransform(springProgress, [0, 0.5], [200, 0]);
    const yTop = useTransform(springProgress, [0, 0.5], [-200, 0]);
    const yBottom = useTransform(springProgress, [0, 0.5], [200, 0]);

    const rotate = useTransform(springProgress, [0, 0.5], [45, 0]);
    const scale = useTransform(springProgress, [0, 0.5, 0.8], [0.5, 1, 0.9]);
    const opacityCenter = useTransform(springProgress, [0.4, 0.6], [0, 1]);

    return (
        <section ref={sectionRef} className="py-60 bg-slate-900 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-40">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-black uppercase tracking-[.4em] text-xs mb-8"
                    >
                        The Great Unification
                    </motion.div>
                    <h2 className="text-6xl md:text-8xl font-display font-black text-white leading-none tracking-tighter uppercase">
                        One Platform. <br />
                        <span className="text-blue-500 italic">Total Harmony.</span>
                    </h2>
                </div>

                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Merging Panels */}
                    <Panel x={xLeft} y={yTop} rotate={rotate} scale={scale}>
                        <div className="text-[10px] font-black uppercase">Billing System</div>
                    </Panel>
                    <Panel x={xRight} y={yTop} rotate={rotate} scale={scale}>
                        <div className="text-[10px] font-black uppercase">Inventory App</div>
                    </Panel>
                    <Panel x={xLeft} y={yBottom} rotate={rotate} scale={scale}>
                        <div className="text-[10px] font-black uppercase">Marketing Tool</div>
                    </Panel>
                    <Panel x={xRight} y={yBottom} rotate={rotate} scale={scale}>
                        <div className="text-[10px] font-black uppercase">Delivery Hub</div>
                    </Panel>

                    {/* Central Unified Core */}
                    <motion.div
                        style={{ opacity: opacityCenter, scale }}
                        className="w-80 h-80 bg-blue-600 rounded-[4rem] flex flex-col items-center justify-center text-white relative shadow-[0_0_100px_rgba(37,99,235,0.4)]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white/20_0%,_transparent_70%)]" />
                        <Database size={64} className="mb-6" />
                        <div className="text-2xl font-black uppercase tracking-tighter">Unified Admin</div>
                        <div className="text-xs font-bold opacity-60 uppercase mt-2">Real-time Sync</div>

                        {/* Connecting Lines */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-20 border border-blue-500/30 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-10 border border-blue-400/20 rounded-full"
                        />
                    </motion.div>

                    {/* Background Visualizations */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10 group">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px]"
                        />
                    </div>
                </div>

                <div className="mt-40 grid md:grid-cols-3 gap-12">
                    {[
                        { title: "Pure Integration", desc: "Every module talks to each other natively. No APIs required.", icon: <LinkIcon size={24} /> },
                        { title: "Real-time Sync", desc: "A change in inventory instantly reflects in your POS and E-store.", icon: <Share2 size={24} /> },
                        { title: "Global Core", desc: "Manage multi-branch operations from a single centralized database.", icon: <Globe size={24} /> }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-colors"
                        >
                            <div className="text-blue-500 mb-6">{item.icon}</div>
                            <h4 className="text-xl font-black mb-4 text-white uppercase">{item.title}</h4>
                            <p className="text-slate-400 leading-relaxed text-sm font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionRevealV2;
