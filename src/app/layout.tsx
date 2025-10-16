import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { QueryProvider } from "@/providers/query-provider";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GridBackground } from "@/components/background/grid-bg";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { LenisProvider } from "@/providers/lenis-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "QaslyLabs",
    template: "%s | QaslyLabs",
  },
  description: "Make security simple, fast, and affordable. Built for modern startups.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/qasly.png",
    apple: "/qasly.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <NextTopLoader color="#000" showSpinner={false} height={2} crawlSpeed={120} />
        <AppRouterCacheProvider>
          <ThemeProvider defaultTheme="dark">
            <QueryProvider>
              <LenisProvider>
                <GridBackground />
                {children}
                <Analytics />
                <SpeedInsights />
              </LenisProvider>
            </QueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
