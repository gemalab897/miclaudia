import { notFound } from "next/navigation";
import DetailView from "@/components/DetailView";
import { dulces } from "@/lib/data/dulces";

export function generateStaticParams() {
  return dulces.map((d) => ({ slug: d.slug }));
}

export default async function DulceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const producto = dulces.find((d) => d.slug === slug);
  if (!producto) notFound();

  return <DetailView producto={producto} backHref="/dulces" backLabel="Volver a Dulces" />;
}
