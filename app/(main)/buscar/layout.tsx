import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | CBT Atlas",
  description: "Search clinical cases, protocols, and worksheets on the platform.",
};

export default function BuscarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
