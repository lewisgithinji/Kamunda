"use client";

import { motion } from "framer-motion";
import { CLIENT_REFERENCES } from "@/lib/constants";

export function Clients() {
    return (
        <section className="py-20 bg-primary overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/50 font-bold tracking-widest uppercase text-xs mb-4 block"
                    >
                        Trusted By Industry Leaders
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-serif text-white opacity-90"
                    >
                        A Selection of <span className="text-secondary italic">Our Distinguished Clients</span>
                    </motion.h2>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 container mx-auto px-6">
                {CLIENT_REFERENCES.map((client, index) => (
                    <motion.div
                        key={client}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="px-8 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-white/80 font-serif text-lg text-center hover:bg-white/10 transition-colors group cursor-default"
                    >
                        <span className="group-hover:text-secondary transition-colors">{client}</span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 container mx-auto px-6">
                <div className="max-w-4xl mx-auto p-8 border border-secondary/20 rounded-3xl bg-secondary/5 text-center">
                    <p className="text-white/60 text-sm italic italic">
                        "The firm also acts for a number of high net worth individual clients and handles high-end constitutional petitions, ensuring discretion and robust legal protection."
                    </p>
                </div>
            </div>
        </section>
    );
}
