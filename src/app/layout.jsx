import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export const metadata = {
  title: "Henry Navntoft | Portfolio",
  description:
    "Henry Navntoft - Copenhagen based Web Developer student, aspiring to build accessible and beautiful digital solutions.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
