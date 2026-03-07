"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin, Send, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formRef.current.from_name.value,
                    from_email: formRef.current.from_email.value,
                    subject: formRef.current.subject.value,
                    message: formRef.current.message.value,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSuccessMessage("Message sent successfully!");
            formRef.current.reset();
        } catch (error) {
            console.error("Failed to send message:", error);
            setErrorMessage("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <MessageSquare size={14} /> Get in touch
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-semibold text-[#0f172a] mb-8 leading-tight tracking-tighter"
                    >
                        We're here to help you <br /> <span className="text-orange-600 italic">build the future.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
                    >
                        Have questions about our platform, pricing, or enterprise solutions? Talk to our team of experts today.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-2xl shadow-slate-200/50"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            {successMessage && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-2xl border border-green-200">
                                    {successMessage}
                                </div>
                            )}
                            {errorMessage && (
                                <div className="p-4 bg-orange-50 text-orange-700 rounded-2xl border border-orange-200">
                                    {errorMessage}
                                </div>
                            )}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input type="text" name="from_name" required placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input type="email" name="from_email" required placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                <select name="subject" required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium appearance-none">
                                    <option value="Sales Inquiry">Sales Inquiry</option>
                                    <option value="Technical Support">Technical Support</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea name="message" required rows={6} placeholder="How can we help you?" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all font-medium resize-none" />
                            </div>
                            <button disabled={isSubmitting} type="submit" className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                                {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-16 py-12">
                        <div className="space-y-12">
                            {[
                                { title: "Email Us", detail: "hello@azcommerce.com", desc: "For general inquiries and support.", icon: Mail },
                                { title: "Call Us", detail: "+1 (555) 123-4567", desc: "Mon-Fri from 9am to 6pm EST.", icon: Phone },
                                { title: "Visit Us", detail: "100 Commerce Plaza, San Francisco, CA", desc: "Our global headquarters.", icon: MapPin },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                        <item.icon size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.title}</h3>
                                        <p className="text-2xl font-semibold text-[#0f172a]">{item.detail}</p>
                                        <p className="text-slate-500 font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <hr className="border-slate-100" />

                        {/* Socials */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Follow Our Journey</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: Twitter, link: "#" },
                                    { icon: Linkedin, link: "#" },
                                    { icon: Github, link: "#" },
                                ].map((Social, i) => (
                                    <a key={i} href={Social.link} className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-all">
                                        <Social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map/Global presence teaser */}
                <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl font-display font-semibold text-white">Global Presence.</h2>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">With offices in San Francisco, London, Dubai, and Mumbai, we're building commerce for every corner of the world.</p>
                        <div className="flex items-center justify-center gap-2 text-orange-600 font-bold uppercase tracking-widest text-sm">
                            View All Locations <ArrowRight size={18} />
                        </div>
                    </div>
                    {/* World Map Background Mask/Decoration */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-t from-orange-600/20 to-transparent" />
                    </div>
                </div>
            </div>
        </main>
    );
}
