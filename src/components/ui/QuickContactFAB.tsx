"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { FIRM_INFO } from "@/lib/constants";

export function QuickContactFAB() {
    return (
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
            <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                href={`tel:${FIRM_INFO.contact.tel[0]}`}
                className="w-14 h-14 bg-secondary text-primary rounded-full shadow-2xl flex items-center justify-center hover:bg-secondary/90 transition-colors"
            >
                <Phone size={24} />
            </motion.a>
            <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                href={`mailto:${FIRM_INFO.contact.email}`}
                className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
                <MessageSquare size={24} />
            </motion.a>
        </div>
    );
}
