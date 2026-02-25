"use client";

import { motion } from "framer-motion";
import { FIRM_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
                            Start Your Legal <span className="text-primary italic">Journey With Us</span>
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
                            Visit our offices at Ojijo Plaza or reach out through our digital channels. Our team is ready to provide the legal support you need.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {FIRM_INFO.address.building},<br />
                                        {FIRM_INFO.address.street}, {FIRM_INFO.address.landmark},<br />
                                        {FIRM_INFO.address.poBox}, {FIRM_INFO.address.city}, {FIRM_INFO.address.country}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                                    <div className="flex flex-col space-y-1">
                                        {FIRM_INFO.contact.tel.map((num) => (
                                            <a key={num} href={`tel:${num}`} className="text-muted-foreground hover:text-primary transition-colors">
                                                {num}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                    <div className="flex flex-col space-y-1">
                                        <a href={`mailto:${FIRM_INFO.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                            {FIRM_INFO.contact.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                                    <Clock className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Mon - Fri: 8:00 AM - 5:00 PM<br />
                                        Sat: By Appointment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-accent/30 p-8 md:p-12 rounded-3xl border border-border"
                    >
                        <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-border rounded-lg p-4 outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                        suppressHydrationWarning
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-border rounded-lg p-4 outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                        suppressHydrationWarning
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-border rounded-lg p-4 outline-none focus:border-primary transition-colors"
                                    placeholder="Legal Consultation"
                                    suppressHydrationWarning
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary/70">Message</label>
                                <textarea
                                    className="w-full bg-white border border-border rounded-lg p-4 min-h-[150px] outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="How can we help you?"
                                    suppressHydrationWarning
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                                suppressHydrationWarning
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
