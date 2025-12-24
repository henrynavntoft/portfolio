"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export function ConditionalHeader() {
  const pathname = usePathname();
  const hideOnChristmasPage = pathname === "/christmas-solvej";

  if (hideOnChristmasPage) {
    return null;
  }

  return <Header />;
}

export function ConditionalFooter() {
  const pathname = usePathname();
  const hideOnChristmasPage = pathname === "/christmas-solvej";

  if (hideOnChristmasPage) {
    return null;
  }

  return <Footer />;
}

