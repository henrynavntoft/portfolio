import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageLoaderWrapper from "./components/LanguageLoaderWrapper";
import CookieConsent from "./components/CookieConsent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://henrynavntoft.dk'),
  title: "Henry Navntoft | Full Stack Developer & Small Business Owner",
  description: "Henry Navntoft - Full Stack Developer specializing in WordPress, Shopify, and custom web solutions. Based in Copenhagen, Denmark. Available for web development projects.",
  keywords: [
    "Henry Navntoft",
    "Full Stack Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Web Developer Copenhagen",
    "Danish Web Developer",
    "Custom Web Development",
    "React Developer",
    "Next.js Developer",
    "Small Business Owner",
    "Freelance Developer Denmark",
    "Copenhagen School of Arts and Technology",
    "Web Development Services",
    "E-commerce Development",
    "Website Redesign",
    "SEO Optimization"
  ],
  authors: [{ name: "Henry Navntoft", url: "https://henrynavntoft.dk" }],
  creator: "Henry Navntoft",
  publisher: "Henry Navntoft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'da_DK',
    url: 'https://henrynavntoft.dk',
    siteName: 'Henry Navntoft Portfolio',
    title: 'Henry Navntoft | Full Stack Developer & Small Business Owner',
    description: 'Full Stack Developer specializing in WordPress, Shopify, and custom web solutions. Based in Copenhagen, Denmark.',
    images: [
      {
        url: '/og-image.png', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Henry Navntoft - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henry Navntoft | Full Stack Developer',
    description: 'Full Stack Developer specializing in WordPress, Shopify, and custom web solutions.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://henrynavntoft.dk',
    languages: {
      'en-US': 'https://henrynavntoft.dk',
      'da-DK': 'https://henrynavntoft.dk',
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
  category: 'Web Development',
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#78933D" />
        
        {/* Structured Data for Person/Professional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Henry Navntoft',
              url: 'https://henrynavntoft.dk',
              image: 'https://henrynavntoft.dk/henry-navntoft.jpg',
              jobTitle: 'Full Stack Developer',
              description: 'Full Stack Developer specializing in WordPress, Shopify, and custom web solutions',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Copenhagen',
                addressCountry: 'Denmark',
              },
              email: 'henrylnavntoft@gmail.com',
              telephone: '+45 51982345',
              sameAs: [
                'https://www.linkedin.com/in/henry-lundberg-navntoft/',
                'https://github.com/henrynavntoft',
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Copenhagen School of Arts and Technology',
              },
              knowsAbout: [
                'WordPress Development',
                'Shopify Development',
                'React',
                'Next.js',
                'JavaScript',
                'TypeScript',
                'Web Development',
                'E-commerce Development',
                'SEO Optimization',
              ],
            }),
          }}
        />
      </head>
      <body>
        {/* Google Analytics with Consent Mode */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XB83SMWP2T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default consent state (denied)
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });
            
            gtag('config', 'G-XB83SMWP2T');
          `}
        </Script>

        <Providers>
          
          <LanguageLoaderWrapper />
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
