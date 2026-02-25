import Link from "next/link";
import { FIRM_INFO, PRACTICE_AREAS } from "@/lib/constants";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Firm Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex flex-col">
                            <span className="text-2xl font-serif font-bold tracking-tight">
                                KAMUNDA NJUE
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">
                                & Company Advocates
                            </span>
                        </Link>
                        <p className="text-white/70 leading-relaxed text-sm">
                            {FIRM_INFO.description.substring(0, 150)}...
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Facebook size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-serif font-semibold">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="/" className="hover:text-secondary transition-colors text-white/70">Home</Link></li>
                            <li><Link href="#about" className="hover:text-secondary transition-colors text-white/70">About Us</Link></li>
                            <li><Link href="#practice-areas" className="hover:text-secondary transition-colors text-white/70">Practice Areas</Link></li>
                            <li><Link href="#team" className="hover:text-secondary transition-colors text-white/70">Our Team</Link></li>
                            <li><Link href="#contact" className="hover:text-secondary transition-colors text-white/70">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-serif font-semibold">Practice Areas</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            {PRACTICE_AREAS.slice(0, 5).map((area) => (
                                <li key={area.id}>
                                    <Link href="#practice-areas" className="hover:text-secondary transition-colors text-white/70 text-sm">
                                        {area.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-serif font-semibold">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3 text-white/70">
                                <MapPin className="text-secondary shrink-0" size={20} />
                                <span>
                                    {FIRM_INFO.address.building},<br />
                                    {FIRM_INFO.address.street},<br />
                                    {FIRM_INFO.address.city}, {FIRM_INFO.address.poBox}
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/70">
                                <Phone className="text-secondary shrink-0" size={18} />
                                <span>{FIRM_INFO.contact.tel[0]}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/70">
                                <Mail className="text-secondary shrink-0" size={18} />
                                <span>{FIRM_INFO.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
                    <p>© {currentYear} {FIRM_INFO.name}. All Rights Reserved.</p>
                    <div className="flex items-center space-x-6">
                        <Link href="#" className="hover:text-white transition-colors text-white/50">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors text-white/50">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
