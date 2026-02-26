"use client";

import { motion } from "framer-motion";
import { TEAM } from "@/lib/constants";
import { Linkedin, Mail, BadgeCheck } from "lucide-react";

export function Team() {
    return (
        <section id="team" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block"
                        >
                            Our Leadership
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl"
                        >
                            Meet the Experts Behind <span className="text-primary italic">Our Success</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground lg:max-w-xs text-sm italic"
                    >
                        "Employing youthful energy and industry-hardened experience to secure your legal interests."
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {TEAM.map((member, index) => (
                        <motion.div
                            key={`${member.name}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group flex flex-col md:flex-row bg-accent/30 rounded-3xl overflow-hidden border border-border"
                        >
                            {/* Image Placeholder with Initial */}
                            <div className="w-full md:w-64 h-80 flex items-center justify-center bg-primary/10 relative shrink-0">
                                <span className="text-8xl font-serif text-primary/20 font-bold">
                                    {member.name.split(' ')[0][0]}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <BadgeCheck className="text-secondary" />
                                </div>
                            </div>

                            <div className="p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                                        <div className="flex space-x-3">
                                            <Linkedin className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={20} />
                                            <Mail className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={20} />
                                        </div>
                                    </div>
                                    <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-6">
                                        {member.role}
                                    </p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {member.bio}
                                    </p>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-xs uppercase tracking-widest text-primary/50">Core Expertise</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.specialization.map((spec) => (
                                                <span key={spec} className="px-3 py-1 bg-white border border-border rounded-full text-[10px] uppercase font-bold text-primary/70">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-border">
                                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-2">Professional Memberships</p>
                                    <p className="text-xs font-medium text-primary/60 italic">
                                        {member.memberships.join(" • ")}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Extended Team Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-8 md:p-12 bg-primary/5 rounded-[2rem] border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                >
                    <div className="max-w-2xl">
                        <h4 className="text-xl font-bold text-primary mb-3 leading-tight">
                            Powered by a Comprehensive Support Infrastructure
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Beyond our core leadership, Kamunda Njue & Company is bolstered by a dedicated team of <span className="font-bold text-primary">Legal Pupils</span>, <span className="font-bold text-primary">Executive Secretaries</span>, and <span className="font-bold text-primary">Support Staff</span>. Our auxiliary team is meticulously trained and well-versed in legal procedures, ensuring that every case is handled with the administrative precision and logistical efficiency it deserves.
                        </p>
                    </div>
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-primary/20 animate-pulse" />
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-4 border-white bg-secondary text-primary flex items-center justify-center text-xs font-black z-10">
                            +10
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
