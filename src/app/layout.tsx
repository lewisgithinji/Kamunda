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
    metadataBase: new URL('https://www.kamundanjueadv.com'),
    title: {
        template: `%s | ${FIRM_INFO.name}`,
        default: `${FIRM_INFO.name} | Professional Advocates & Legal Consultants in Nairobi`,
    },
    description: FIRM_INFO.description,
    keywords: ["Law Firm Nairobi", "Advocates Nairobi", "Kamunda Njue", "Legal Consultants Kenya", "Civil Litigation", "Corporate Law Nairobi", "Conveyancing Kenya", "Commercial Law Nairobi"],
    authors: [{ name: FIRM_INFO.name }],
    creator: FIRM_INFO.name,
    openGraph: {
        type: "website",
        locale: "en_KE",
        url: "https://www.kamundanjueadv.com",
        title: `${FIRM_INFO.name} | Professional Advocates & Legal Consultants`,
        description: FIRM_INFO.description,
        siteName: FIRM_INFO.name,
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: FIRM_INFO.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${FIRM_INFO.name} | Professional Advocates & Legal Consultants`,
        description: FIRM_INFO.description,
        images: ["/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
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
