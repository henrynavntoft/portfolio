import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Header from "./components/Header";

export const metadata = {
  title: "HENRY NAVNTOFT",
  description: "",
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
      </body>
    </html>
  );
}
