import { ReactNode } from "react";
import { Metadata } from "next";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "🎂",
  description: "Private gift page",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function GiftLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <main className="min-h-screen">{children}</main>
    </Providers>
  );
}
