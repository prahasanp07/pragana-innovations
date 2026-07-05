import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import CustomCursor from "@/components/ui/CustomCursor";

// Display font
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Body font
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Mono font
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "PraGana Innovations | Digital Designer & Developer Portfolio",
  description: "🚀 Scaling brands with Enterprise-Grade Tech 💻 Web & Mobile Apps | SaaS Architecture 📈 Turning traffic into revenue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased lenis-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-bg text-text min-h-full font-body overflow-x-hidden relative selection:bg-accent selection:text-bg"
        suppressHydrationWarning
      >
        <Providers>
          <CustomCursor />
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
