"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Package, Truck, ArrowRight, Zap, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const DeliveryTrackingPage = () => {
    return (
        <main className="min-h-screen bg-white noise-bg">
            <Navbar />

            {/* Hero Tracking Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-slate-900">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-10 -skew-x-12 translate-x-32" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
                                <MapPin size={14} /> Real-time Logistics Vision
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] text-white mb-8 tracking-tighter">
                                Every move, <br />
                                <span className="text-blue-500 italic">illuminated.</span>
                            </h1>
                            <p className="text-2xl text-blue-100/60 mb-12 leading-relaxed font-medium">
                                Deliver a world-class customer experience with real-time, high-fidelity tracking. From the warehouse floor to the customer&apos;s front door.
                            </p>

                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-3xl flex items-center gap-4 group">
                                <Search className="text-white/40 ml-4" />
                                <input className="bg-transparent border-none outline-none text-white font-bold w-full" placeholder="Enter Your Tracking ID..." />
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all">Track</button>
                            </div>
                        </div>

                        {/* Interactive Map Visual */}
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                            <div className="relative z-10 w-full h-full glass-card border-white/5 rounded-[4rem] p-12 overflow-hidden flex flex-col items-center justify-center">
                                <div className="w-full h-full relative border border-white/10 rounded-[2rem] overflow-hidden bg-slate-800">
                                    {/* Simple Map Animation Mock */}
                                    <div className="absolute inset-0 opacity-40">
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,1)]" />
                                        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full" />
                                        <motion.div
                                            animate={{ x: ["25%", "75%"], y: ["25%", "65%"] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                            className="absolute w-12 h-12 flex items-center justify-center"
                                        >
                                            <div className="p-2 bg-blue-600 text-white rounded-lg shadow-xl"><Truck size={20} /></div>
                                        </motion.div>
                                        <svg className="absolute inset-0 w-full h-full">
                                            <motion.path
                                                d="M 125 125 L 375 325"
                                                stroke="rgba(96,165,250,0.3)"
                                                strokeWidth="2"
                                                strokeDasharray="5,5"
                                                fill="transparent"
                                            />
                                        </svg>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="text-[10px] font-black uppercase text-blue-400">Order #AZ-9982</div>
                                            <div className="text-[10px] font-black uppercase text-emerald-400">On Time</div>
                                        </div>
                                        <div className="text-white font-black text-lg">Expected in 8 mins</div>
                                        <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
                                            <div className="h-full bg-blue-600 w-[65%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tracking Features */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Universal Carrier Support", desc: "Native integration with 100+ global carriers including FedEx, DHL, and local delivery fleets.", icon: <Globe className="text-blue-600" /> },
                            { title: "Custom Tracking Portal", desc: "Keep customers on your site with a fully branded tracking experience.", icon: <Package className="text-purple-600" /> },
                            { title: "Automated Alerts", desc: "Proactive WhatsApp and Email notifications for every shipping milestone.", icon: <Zap className="text-amber-500" /> }
                        ].map((feature, i) => (
                            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logistics Intelligence */}
            <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { val: "4ms", label: "Api Latency" },
                                    { val: "99.9%", label: "Accuracy" },
                                    { val: "22m", label: "Avg Delivery" },
                                    { val: "98%", label: "CSAT Score" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200/50">
                                        <div className="text-4xl font-display font-black text-slate-900 mb-1">{stat.val}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-5xl font-display font-black text-slate-900 mb-8 leading-tight">Last-mile <br />Intelligence.</h2>
                            <p className="text-xl text-slate-600 font-medium mb-12">Don&apos;t just track—optimize. Our logistics brain reroutes drivers, predicts traffic, and ensures your customer&apos;s experience is flawless.</p>
                            <button className="px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-black text-lg hover:bg-blue-600 transition-all flex items-center gap-3">
                                Connect Delivery Fleet <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Branded Banner */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">The ultimate confidence builder.</h2>
                    <p className="text-xl text-slate-500 mb-14 font-medium">Brands that provide real-time tracking see a 34% increase in customer lifetime value.</p>
                    <div className="flex flex-wrap justify-center gap-12 grayscale opacity-30 mt-12 mb-12">
                        <div className="text-2xl font-black italic">FEDEX</div>
                        <div className="text-2xl font-black uppercase tracking-tighter">DHL Express</div>
                        <div className="text-2xl font-black">UPS</div>
                        <div className="text-2xl font-black">ONDC</div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default DeliveryTrackingPage;
