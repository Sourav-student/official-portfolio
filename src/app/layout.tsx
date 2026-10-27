import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore Next.js processes this global CSS import.
import "./globals.css";
import Header from "../components/Header/Header";
import ProgressBar from "@/components/Progressbar/Progressbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import ChatWidget from "@/components/ChatWidget";
import { MotionConfig } from "motion/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourav Kumar Bera — Full-Stack Developer",
  description:
    "Portfolio of Sourav Kumar Bera, a computer science student and full-stack developer building thoughtful web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MotionConfig reducedMotion="user">
          <ScrollToTop />
          <ProgressBar />
          <Header />
          {children}
          <Footer />
          <ChatWidget />
          <ToastContainer />
        </MotionConfig>
      </body>
    </html >
  );
}
