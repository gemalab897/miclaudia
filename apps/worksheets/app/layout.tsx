import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Therapy Worksheets | Professional Toolkit for Psychologists",
  description: "Interactive, printable therapy worksheets for CBT, DBT, Trauma, Anxiety, Depression, Couples, Self-Esteem, Children & Adolescents, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">
        <Navbar />
        <div className="pt-14">
          {children}
        </div>
      </body>
    </html>
  );
}
