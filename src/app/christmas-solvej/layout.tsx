import { ReactNode } from "react";
import { Metadata } from "next";
import { Providers } from "../providers";
import LanguageLoaderWrapper from "../components/LanguageLoaderWrapper";
import CookieConsent from "../components/CookieConsent";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Merry Christmas Solvej! 🎄",
  description: "Christmas vouchers for Solvej in Hanoi",
};

export default function ChristmasLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <LanguageLoaderWrapper />
      <main className="min-h-screen">{children}</main>
      <CookieConsent />
      <Analytics />
      <SpeedInsights />
    </Providers>
  );
}
