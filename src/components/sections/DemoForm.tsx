"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, User, Building, MapPin, Phone } from "lucide-react";

const DemoForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                    <div className="grid lg:grid-cols-2 items-center relative z-10">
                        <div className="p-12 lg:p-20 text-white">
                            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
                                Ready to transform your business? <span className="text-blue-400">Book a personalized demo.</span>
                            </h2>
                            <p className="text-xl text-slate-400 mb-12">
                                Our experts will walk you through the platform and show you exactly how AZ Commerce can scale your operations.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Visual walkthrough of all features",
                                    "Customized ROI analysis",
                                    "Implementation timeline discussion",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-300">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-12 lg:p-20 bg-white">
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                                    <User size={16} /> Full Name
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                                    <Building size={16} /> Business Type
                                                </label>
                                                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-colors appearance-none">
                                                    <option>Grocery</option>
                                                    <option>Pharmacy</option>
                                                    <option>Restaurant</option>
                                                    <option>Fashion</option>
                                                    <option>Electronics</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                                    <MapPin size={16} /> City
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="New York, NY"
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                                    <Phone size={16} /> Phone Number
                                                </label>
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="+1 (555) 000-0000"
                                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2 group">
                                            Book My Demo Now
                                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>

                                        <p className="text-xs text-slate-400 text-center">
                                            By submitting this form, you agree to our Terms of Service & Privacy Policy.
                                        </p>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20"
                                    >
                                        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h3>
                                        <p className="text-slate-500 text-lg">
                                            Thank you for choosing AZ Commerce. One of our experts will contact you within 24 hours to schedule your walkthrough.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-10 font-bold text-blue-600 hover:text-blue-700"
                                        >
                                            Fill another request
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;
