"use client";

import { Fragment } from "react";
import { Check, X } from "lucide-react";

const Comparison = () => {
    const categories = [
        {
            name: "Core Features",
            items: [
                { feature: "All-in-one Platform", az: true, traditional: false },
                { feature: "No-code Customization", az: true, traditional: "Limited" },
                { feature: "Unified Inventory", az: true, traditional: false },
                { feature: "Built-in POS Billing", az: true, traditional: "Extra add-on" },
            ]
        },
        {
            name: "Operations",
            items: [
                { feature: "Delivery Management", az: true, traditional: "3rd Party" },
                { feature: "Multi-vendor Support", az: true, traditional: "Plugin needed" },
                { feature: "Real-time Tracking", az: true, traditional: "Extra cost" },
                { feature: "White-label Mobile Apps", az: true, traditional: "Expensive build" },
            ]
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-black text-slate-900 mb-4">Why choose AZ Commerce?</h2>
                    <p className="text-lg text-slate-600">The clear advantage against traditional, fragmented setups.</p>
                </div>

                <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-8 text-left text-xl font-black">Feature Set</th>
                                <th className="p-8 text-center text-xl font-black bg-blue-600">AZ Commerce</th>
                                <th className="p-8 text-center text-xl font-black">Traditional Setup</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((cat, i) => (
                                <Fragment key={`cat-group-${i}`}>
                                    <tr className="bg-slate-50/50">
                                        <td colSpan={3} className="px-8 py-4 font-black uppercase tracking-widest text-sm text-slate-400">
                                            {cat.name}
                                        </td>
                                    </tr>
                                    {cat.items.map((item, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/30 transition-colors">
                                            <td className="p-8 font-bold text-slate-700">{item.feature}</td>
                                            <td className="p-8 bg-blue-50/30">
                                                <div className="flex justify-center">
                                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                                                        <Check size={20} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-8">
                                                <div className="flex justify-center flex-col items-center">
                                                    {typeof item.traditional === "boolean" ? (
                                                        item.traditional ? (
                                                            <div className="w-8 h-8 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center">
                                                                <Check size={20} />
                                                            </div>
                                                        ) : (
                                                            <div className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                                                                <X size={20} />
                                                            </div>
                                                        )
                                                    ) : (
                                                        <span className="text-slate-500 font-medium text-sm text-center">{item.traditional}</span>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
