import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundProvider } from "./components/BackgroundContext";
import ThemedBody from "./components/ThemedBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernando Pacheco - Web Developer Portfolio",
  description: "Front-End Web Developer specializing in modern web applications",
  keywords: ["web developer", "portfolio", "front-end", "react", "next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}> 
      <BackgroundProvider>
        <ThemedBody>{children}</ThemedBody>
      </BackgroundProvider>
    </html>
  );
}
