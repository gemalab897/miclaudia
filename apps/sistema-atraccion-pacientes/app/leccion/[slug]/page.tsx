import { notFound } from "next/navigation";
import { lessons, getLessonBySlug } from "@/lib/lessons";
import { toolRegistry } from "@/components/tools/registry";
import LessonLayout from "@/components/LessonLayout";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export default async function LeccionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const Tool = toolRegistry[lesson.id];

  return <LessonLayout lesson={lesson} tool={Tool ? <Tool /> : null} />;
}
