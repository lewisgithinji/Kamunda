"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TEAM } from "@/lib/constants";
import { Linkedin, Mail, BadgeCheck, X, ArrowRight } from "lucide-react";

export function Team() {
    const [selectedMember, setSelectedMember] = useState<typeof TEAM[0] | null>(null);

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {TEAM.map((member, index) => (
                        <motion.div
                            key={`${member.name}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            onClick={() => setSelectedMember(member)}
                            className="group flex flex-col md:flex-row bg-accent/30 rounded-3xl overflow-hidden border border-border cursor-pointer hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            {/* Member Photo */}
                            <div className="w-full md:w-64 h-96 relative shrink-0 overflow-hidden bg-primary/10">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={`Photo of ${member.name}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 256px"
                                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                        priority={false}
                                    />
                                ) : (
                                    <span className="absolute inset-0 flex items-center justify-center text-8xl font-serif text-primary/20 font-bold">
                                        {member.name.split(' ')[0][0]}
                                    </span>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
                                <div className="absolute top-6 left-6">
                                    <BadgeCheck className="text-secondary drop-shadow-lg" />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                                        <div className="flex space-x-3">
                                            <Linkedin className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={18} />
                                            <Mail className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={18} />
                                        </div>
                                    </div>
                                    <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-6">
                                        {member.role}
                                    </p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                                        {member.bio}
                                    </p>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-[10px] uppercase tracking-widest text-primary/50">Core Expertise</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.specialization.slice(0, 3).map((spec) => (
                                                <span key={spec} className="px-3 py-1 bg-white border border-border rounded-full text-[10px] uppercase font-bold text-primary/70">
                                                    {spec}
                                                </span>
                                            ))}
                                            {member.specialization.length > 3 && (
                                                <span className="text-[10px] text-muted-foreground font-bold pl-1">+{member.specialization.length - 3} more</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    suppressHydrationWarning
                                    className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary hover:text-secondary/80 transition-colors group/btn"
                                >
                                    View Full Profile <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
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
                            Beyond our core leadership, Kamunda Njue & Company is bolstered by a dedicated team of <span className="font-bold text-primary">Legal Pupils</span>, <span className="font-bold text-primary">Executive Secretaries</span>, and <span className="font-bold text-primary">Support Staff</span>. Our auxiliary team is meticulously trained and well-versed in legal procedures, ensuring that every case is handled with administrative precision and logistical efficiency.
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

            {/* Bio Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-black/10 rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={24} className="text-primary" />
                            </button>

                            {/* Modal Photo */}
                            <div className="w-full md:w-[40%] h-64 md:h-auto relative bg-primary/10">
                                {selectedMember.image ? (
                                    <Image
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-9xl font-serif text-primary/20 font-bold">
                                        {selectedMember.name.split(' ')[0][0]}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">{selectedMember.role}</p>
                                    <h3 className="text-3xl font-serif font-bold">{selectedMember.name}</h3>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                                <div className="max-w-2xl">
                                    <div className="flex space-x-4 mb-8">
                                        <a href="#" className="p-3 bg-accent rounded-xl hover:bg-secondary/20 transition-colors">
                                            <Linkedin size={20} className="text-primary" />
                                        </a>
                                        <a href="#" className="p-3 bg-accent rounded-xl hover:bg-secondary/20 transition-colors">
                                            <Mail size={20} className="text-primary" />
                                        </a>
                                    </div>

                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Professional Biography</h4>
                                    <p className="text-muted-foreground leading-relaxed mb-10 whitespace-pre-wrap">
                                        {selectedMember.bio}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4">Practice Areas</h4>
                                            <ul className="space-y-3">
                                                {selectedMember.specialization.map(item => (
                                                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-primary/80">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4">Professional Memberships</h4>
                                            <ul className="space-y-3">
                                                {selectedMember.memberships.map(item => (
                                                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-primary/80">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
