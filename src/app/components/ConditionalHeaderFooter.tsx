"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

function isStandalonePage(pathname: string) {
  return (
    pathname === "/christmas-solvej" || pathname.startsWith("/gift/")
  );
}

export function ConditionalHeader() {
  const pathname = usePathname();

  if (isStandalonePage(pathname)) {
    return null;
  }

  return <Header />;
}

export function ConditionalFooter() {
  const pathname = usePathname();

  if (isStandalonePage(pathname)) {
    return null;
  }

  return <Footer />;
}

