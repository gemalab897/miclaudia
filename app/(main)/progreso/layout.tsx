import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Progress | CBT Atlas",
  description: "Personal tracking of reviewed cases, protocols, and worksheets.",
};

export default function ProgresoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
