"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark"
      enableSystem={true}
      storageKey="theme"
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
