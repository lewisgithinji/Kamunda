"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FIRM_INFO } from "@/lib/constants";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "@/components/ui/Logo";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group/logo">
                    <Logo
                        variant={isScrolled ? "default" : "white"}
                        className={cn(
                            "transition-all duration-300",
                            isScrolled ? "scale-90" : "scale-100"
                        )}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-semibold transition-colors hover:text-primary",
                                isScrolled ? "text-secondary" : "text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4 ml-4">
                        <a
                            href={`tel:${FIRM_INFO.contact.tel[0]}`}
                            className={cn(
                                "p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all",
                                !isScrolled && "md:bg-white md:text-primary"
                            )}
                        >
                            <Phone size={18} />
                        </a>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "lg:hidden p-2",
                        isScrolled ? "text-primary" : "text-white md:text-primary"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-border flex flex-col space-y-4">
                                <a
                                    href={`tel:${FIRM_INFO.contact.tel[0]}`}
                                    className="flex items-center space-x-3 text-primary font-medium"
                                >
                                    <Phone size={20} />
                                    <span>{FIRM_INFO.contact.tel[0]}</span>
                                </a>
                                <a
                                    href={`mailto:${FIRM_INFO.contact.email}`}
                                    className="flex items-center space-x-3 text-primary font-medium"
                                >
                                    <Mail size={20} />
                                    <span>{FIRM_INFO.contact.email}</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
