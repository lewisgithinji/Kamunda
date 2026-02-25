import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FIRM_INFO } from "@/lib/constants";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: {
        template: `%s | ${FIRM_INFO.name}`,
        default: `${FIRM_INFO.name} | Professional Advocates & Legal Consultants`,
    },
    description: FIRM_INFO.description,
    keywords: ["Law Firm Nairobi", "Advocates Nairobi", "Kamunda Njue", "Legal Consultants Kenya", "Civil Litigation", "Corporate Law Nairobi"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
