import { notFound } from "next/navigation";
import DetailView from "@/components/DetailView";
import { crochet } from "@/lib/data/crochet";

export function generateStaticParams() {
  return crochet.map((c) => ({ slug: c.slug }));
}

export default async function CrochetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const producto = crochet.find((c) => c.slug === slug);
  if (!producto) notFound();

  return <DetailView producto={producto} backHref="/crochet" backLabel="Volver a Crochet" />;
}
