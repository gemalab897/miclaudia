import { notFound } from "next/navigation";
import { categories, getWorksheetById, worksheets } from "@/app/data/worksheets";
import WorksheetClient from "./WorksheetClient";

interface Props {
  params: Promise<{ category: string; id: string }>;
}

export async function generateStaticParams() {
  return worksheets.map((w) => ({ category: w.category, id: w.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const ws = getWorksheetById(id);
  if (!ws) return {};
  return { title: `${ws.title} | Therapy Worksheets` };
}

export default async function WorksheetPage({ params }: Props) {
  const { category, id } = await params;
  const cat = categories.find((c) => c.id === category);
  const ws = getWorksheetById(id);
  if (!cat || !ws || ws.category !== category) notFound();

  return (
    <WorksheetClient
      worksheet={ws}
      categoryId={category}
      categoryTitle={cat.title}
      categoryColor={cat.color}
      categoryIcon={cat.icon}
    />
  );
}
