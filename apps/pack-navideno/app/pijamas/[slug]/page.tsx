import { notFound } from "next/navigation";
import DetailView from "@/components/DetailView";
import { pijamas } from "@/lib/data/pijamas";

export function generateStaticParams() {
  return pijamas.map((p) => ({ slug: p.slug }));
}

export default async function PijamaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const producto = pijamas.find((p) => p.slug === slug);
  if (!producto) notFound();

  return <DetailView producto={producto} backHref="/pijamas" backLabel="Volver a Pijamas" />;
}
