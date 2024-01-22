import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Henry Navntoft | Portfolio",
  description:
    "Henry Navntoft - Copenhagen based Web Developer student, aspiring to build accessible and beautiful digital solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-foreground bg-background">
        <Providers>
          <Header />
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
