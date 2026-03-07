"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Search, ArrowRight, UserPlus, Zap } from "lucide-react";

const positions = [
    { title: "Senior AI Engineer", department: "Product", type: "Remote", location: "San Francisco" },
    { title: "Backend Developer (Go)", department: "Infrastructure", type: "Full-time", location: "Global" },
    { title: "UX Designer", department: "Design", type: "Remote", location: "London" },
    { title: "Product Marketing Manager", department: "Growth", type: "Full-time", location: "Dubai" },
    { title: "Customer Success Lead", department: "Support", type: "Full-time", location: "Mumbai" },
];

export default function CareersV3() {
    return (
        <main className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <UserPlus size={14} /> WE ARE HIRING
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                    >
                        Build the Future of <br /> <span className="text-orange-600">Global Commerce.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium leading-relaxed"
                    >
                        We’re looking for ambitious, creative, and fast-moving individuals to help us build the infrastructure that powers millions of stores worldwide.
                    </motion.p>
                </div>

                {/* Benefits / Why work here */}
                <div className="grid md:grid-cols-3 gap-12 mb-40">
                    {[
                        { title: "Remote-First", desc: "Work from anywhere in the world. We value output over seat time.", icon: MapPin },
                        { title: "Day One Mentality", desc: "We move fast, take risks, and learn from our mistakes every single day.", icon: Zap },
                        { title: "Stock Options", desc: "Every employee is an owner at AZ Commerce. We win together.", icon: Briefcase },
                    ].map((item, i) => (
                        <div key={item.title} className="space-y-6">
                            <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-orange-600">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#0f172a] tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Open Positions List */}
                <div className="mb-40">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                        <h2 className="text-4xl font-display font-semibold text-[#0f172a]">Open Roles.</h2>
                        <div className="relative group max-w-sm w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search roles or departments..."
                                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {positions.map((pos, i) => (
                            <motion.div
                                key={pos.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl hover:border-orange-600/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-[#0f172a] group-hover:text-orange-600 transition-colors">{pos.title}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Briefcase size={14} /> {pos.department}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {pos.location}</span>
                                        <span className="px-2 py-0.5 bg-slate-50 rounded text-slate-500">{pos.type}</span>
                                    </div>
                                </div>
                                <ArrowRight className="text-slate-300 group-hover:text-orange-600 group-hover:translate-x-2 transition-all" size={24} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-orange-600 rounded-[4rem] p-12 lg:p-24 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-8">Don't see a fit?</h2>
                    <p className="text-xl text-orange-100 font-medium mb-12 max-w-2xl mx-auto">We're always looking for exceptional talent. If you think you'd be a great addition, send us an open application.</p>
                    <button className="bg-white text-orange-600 px-12 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-50 transition-all">Send Open Application</button>
                </div>
            </div>
        </main>
    );
}
