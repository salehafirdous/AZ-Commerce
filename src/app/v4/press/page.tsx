"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, Newspaper, Share2 } from "lucide-react";

const news = [
    { title: "AZ Commerce Raises $200M to Accelerate Global AI Research", source: "Commerce Daily", date: "Jan 15, 2024" },
    { title: "The 10 Fastest Growing Saas Companies in 2023", source: "Business Insider", date: "Dec 20, 2023" },
    { title: "How AZ Commerce is Reshaping Post-Pandemic Retail", source: "TechCrunch", date: "Nov 02, 2023" },
    { title: "AZ Commerce and GlobalShip Announce Strategic Partnership", source: "Reuters", date: "Oct 12, 2023" },
];

export default function PressV4() {
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
                        <Newspaper size={14} /> PRESS RELEASES & NEWS
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                    >
                        The Latest from <br /> <span className="text-orange-600">AZ Commerce.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium leading-relaxed"
                    >
                        Media resources, official announcements, and news fromaround the globe. For media inquiries, contact press@azcommerce.com.
                    </motion.p>
                </div>

                {/* Media Kit */}
                <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-20 mb-32 border border-slate-100 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-semibold text-[#0f172a] mb-6">Brand Assets & Media Kit.</h2>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            Download our official logos, brand guidelines, and high-resolution leadership photos for press use.
                        </p>
                        <button className="flex items-center gap-3 bg-[#0f172a] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
                            <Download size={20} /> Download Kit (.ZIP)
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square bg-white rounded-3xl border border-slate-200 flex items-center justify-center p-8 group cursor-pointer hover:border-orange-600/20 transition-all">
                                <div className="text-center text-slate-400 group-hover:text-orange-600 transition-colors">
                                    <div className="text-[10px] font-bold uppercase tracking-widest mb-4">Style {i}</div>
                                    <div className="text-3xl font-black italic">A/Z</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* News Feed */}
                <div className="mb-40">
                    <h2 className="text-4xl font-display font-semibold text-[#0f172a] mb-16">Official Announcements.</h2>
                    <div className="divide-y divide-slate-100">
                        {news.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</span>
                                        <span className="text-orange-600 font-black tracking-tighter">{item.source}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#0f172a] group-hover:text-orange-600 transition-colors leading-snug">{item.title}</h3>
                                </div>
                                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-3 bg-slate-50 rounded-xl hover:bg-orange-50 text-slate-400 hover:text-orange-600 transition-all"><Share2 size={20} /></button>
                                    <button className="p-3 bg-[#0f172a] rounded-xl text-white hover:bg-slate-800 transition-all"><ExternalLink size={20} /></button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contact Media */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-[#0f172a] mb-4">Looking for something specific?</h2>
                    <p className="text-slate-500 font-medium mb-8">Talk directly to our communication team for interviews or deeper insights.</p>
                    <a href="mailto:press@azcommerce.com" className="text-orange-600 font-bold underline text-lg">press@azcommerce.com</a>
                </div>
            </div>
        </main>
    );
}
