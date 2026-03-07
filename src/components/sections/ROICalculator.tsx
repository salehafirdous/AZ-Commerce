"use client";

import { useState } from "react";
import { DollarSign, TrendingUp, Users, Clock } from "lucide-react";

const ROICalculator = () => {
    const [revenue, setRevenue] = useState(10000);
    const [efficiency, setEfficiency] = useState(20);

    const monthlySavings = (revenue * (efficiency / 100)) * 0.4;
    const yearlyGrowth = revenue * 12 * (1 + (efficiency / 100));

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight">
                            See how much your business can <span className="text-blue-600">grow.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            AZ Commerce doesn&apos;t just organize your business—it accelerates it. Our automated inventory and delivery systems reduce operational leaks by up to 40%.
                        </p>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="flex justify-between font-bold">
                                    <span className="text-slate-900 uppercase tracking-widest text-sm">Monthly Revenue</span>
                                    <span className="text-blue-600 text-xl">${revenue.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1000"
                                    max="1000000"
                                    step="1000"
                                    value={revenue}
                                    onChange={(e) => setRevenue(Number(e.target.value))}
                                    className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between font-bold">
                                    <span className="text-slate-900 uppercase tracking-widest text-sm">Efficiency Gain</span>
                                    <span className="text-blue-600 text-xl">{efficiency}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="100"
                                    step="5"
                                    value={efficiency}
                                    onChange={(e) => setEfficiency(Number(e.target.value))}
                                    className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <DollarSign size={24} />
                            </div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Monthly Savings</div>
                            <div className="text-3xl font-black text-slate-900">${Math.round(monthlySavings).toLocaleString()}</div>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <TrendingUp size={24} />
                            </div>
                            <div className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-2">Yearly Revenue</div>
                            <div className="text-3xl font-black">${Math.round(yearlyGrowth).toLocaleString()}</div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                <Users size={24} />
                            </div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Customer Retention</div>
                            <div className="text-3xl font-black text-slate-900">+{efficiency * 2}%</div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <Clock size={24} />
                            </div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Time Saved / Week</div>
                            <div className="text-3xl font-black text-slate-900">{Math.round(efficiency * 0.8)} hrs</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
