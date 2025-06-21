import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageLoaderWrapper from "./components/LanguageLoaderWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { ReactNode } from "react";

export const metadata = {
  title: "Henry Navntoft | Portfolio",
  description:
    "Henry Navntoft - Full Stack Developer and Small Business Owner, specializing in accessible and beautiful digital solutions.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Providers>
          <LanguageLoaderWrapper />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
