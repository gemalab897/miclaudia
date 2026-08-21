import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CBT Atlas | Clinical CBT System",
  description: "Professional clinical platform for Cognitive Behavioral Therapy. Evidence-based protocols, interactive worksheets, clinical cases, and diagnostic decision guide.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${playfair.variable}`}>
      <body className="h-full antialiased">
        {children}
      </body>
    </html>
  );
}
