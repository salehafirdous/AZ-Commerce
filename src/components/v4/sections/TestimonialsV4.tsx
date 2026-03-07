"use client";

import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { motion } from "framer-motion";

const TestimonialsV4 = () => {
    const testimonials = [
        {
            quote: "AZ Commerce has completely transformed how we manage our 12 retail outlets. The real-time sync is a lifesaver.",
            name: "Rajesh Kumar",
            title: "FreshBasket Grocery"
        },
        {
            quote: "Setting up our online store took less than an hour. The vendor panel made it easy to onboard local suppliers.",
            name: "Anjali Sharma",
            title: "Ethnic Trends Fashion"
        },
        {
            quote: "The best POS system we've used in 10 years. It's fast, offline-capable, and our staff loves the interface.",
            name: "Vikram Singh",
            title: "Gourmet Hub Cafe"
        },
        {
            quote: "Automated GST billing saved us 20+ hours of manual work every month. Highly recommend for any Indian business.",
            name: "Sanjay Gupta",
            title: "Gupta Pharma"
        },
        {
            quote: "The delivery tracking feature gives our customers peace of mind and reduces support calls significantly.",
            name: "Rahul Verma",
            title: "Swift Delivery Services"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-semibold text-[#0f172a] mb-6"
                    >
                        Loved by <span className="text-orange-600 italic">10,000+</span> businesses
                    </motion.h2>
                    <p className="text-lg text-slate-500 font-medium">
                        Join the community of modern entrepreneurs scaling with AZ Commerce.
                    </p>
                </div>

                <div className="relative">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="slow"
                        className="mb-8"
                    />
                    <InfiniteMovingCards
                        items={[...testimonials].reverse()}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsV4;
