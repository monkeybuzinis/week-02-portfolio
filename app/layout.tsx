import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        <header className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-semibold text-sm tracking-tight">
              My Portfolio
            </span>
            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Projects
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        <footer className="border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
