import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/shared/ToastProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Hend Mohammed — Software Developer Portfolio",
  description:
    "Portfolio of Hend Mohammed, a software developer specializing in React, Next.js and full-stack web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
