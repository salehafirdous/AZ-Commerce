"use client";

import { motion } from "framer-motion";
import { XCircle, AlertCircle, Clock, Zap } from "lucide-react";

const PainPoints = () => {
    const points = [
        {
            icon: <XCircle className="text-red-500" />,
            title: "Fragmented Systems",
            description: "Managing separate tools for inventory, website, POS, and delivery is a nightmare."
        },
        {
            icon: <AlertCircle className="text-orange-500" />,
            title: "Data Silos",
            description: "Inconsistent stock counts and customer data across channels lead to missed sales."
        },
        {
            icon: <Clock className="text-purple-500" />,
            title: "Lost Time",
            description: "Spending hours on manual data entry instead of growing your business."
        },
        {
            icon: <Zap className="text-blue-500" />,
            title: "High Costs",
            description: "Paying for multiple subscriptions and developers to patch everything together."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4"
                    >
                        Stop fighting with <span className="text-red-600">disconnected tools</span>
                    </motion.h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Small businesses lose up to 30% of their revenue due to operational inefficiencies and manual errors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group"
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
