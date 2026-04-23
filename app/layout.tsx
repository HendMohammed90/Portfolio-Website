import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/shared/ToastProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: "#0b0b15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const title = "Hend Mohammed — Software Developer";
const description =
  "Portfolio of Hend Mohammed: a software developer specializing in React, Next.js and full-stack web development.";
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: [
    "Hend Mohammed",
    "Portfolio",
    "Software Developer",
    "Front-End Developer",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Hend Mohammed" }],
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/assets/images/me.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/images/me.png"],
  },
  icons: { icon: "/favicon.ico" },
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
