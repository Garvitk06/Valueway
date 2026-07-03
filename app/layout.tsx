import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valueway HRC | Next-Gen HR Consultancy",
  description: "Futuristic HR consultancy, executive placements, and talent scaling operations for high-growth tech and industry leaders.",
  openGraph: {
    title: "Valueway HRC | Next-Gen HR Consultancy",
    description: "Futuristic HR consultancy, executive placements, and talent scaling operations for high-growth tech and industry leaders.",
    url: "https://valuewayhrc.com",
    siteName: "Valueway HRC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valueway HRC | Next-Gen HR Consultancy",
    description: "Futuristic HR consultancy, executive placements, and talent scaling operations for high-growth tech and industry leaders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
