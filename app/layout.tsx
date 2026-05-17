import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import MobileMenu from "./ui/MobileMenu";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khanh Le — Portfolio",
  description: "CS student and AI engineering graduate student at CSTU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans">
        <header className="border-b border-slate-800 relative">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-semibold text-sm tracking-tight text-white">
              Khanh Le
            </span>

            <nav className="hidden sm:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/interests"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Interests
              </Link>
            </nav>

            <MobileMenu />
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        <footer className="border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Khanh Le. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
