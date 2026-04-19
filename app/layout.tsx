import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vihaan Kulkarni | Systems Architecture & Biocomputation",
  description: "Architecting high-throughput biological systems and autonomous B2B intelligence engines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-black">
        {/* Layer 1: SVG Grid */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #808080 1px, transparent 1px),
              linear-gradient(to bottom, #808080 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at top, black 40%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top, black 40%, transparent 90%)'
          }} 
        />

        {/* Layer 2: Top Spotlight Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-1 opacity-50" />

        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
