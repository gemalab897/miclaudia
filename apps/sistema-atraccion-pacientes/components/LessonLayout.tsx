"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Lesson } from "@/lib/types";
import { getAdjacentLessons, getPhaseById } from "@/lib/lessons";
import { useProgress } from "@/lib/progress";
import ContentBlocks from "./ContentBlocks";

export default function LessonLayout({ lesson, tool }: { lesson: Lesson; tool: ReactNode }) {
  const { isComplete, toggle, hydrated } = useProgress();
  const phase = getPhaseById(lesson.phaseId);
  const { prev, next } = getAdjacentLessons(lesson.id);
  const done = hydrated && isComplete(lesson.id);

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-8 md:py-12">
      <div className="mb-6">
        <p className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--teal)" }}>
          Fase {phase?.id} · {phase?.title} · Lección {lesson.id}
        </p>
        <h1 className="font-heading text-2xl md:text-3xl font-bold mt-2" style={{ color: "var(--navy)" }}>
          {lesson.title}
        </h1>
        <p className="mt-2 text-sm md:text-base" style={{ color: "var(--ink-soft)" }}>
          <strong style={{ color: "var(--ink)" }}>Objetivo:</strong> {lesson.objective}
        </p>
      </div>

      <section className="card p-6 md:p-8 mb-8">
        <ContentBlocks blocks={lesson.content} />
      </section>

      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
            style={{ background: "var(--navy)", color: "#fff" }}
          >
            🛠
          </span>
          <h2 className="font-heading font-semibold text-lg" style={{ color: "var(--navy)" }}>
            Herramienta: {lesson.toolLabel}
          </h2>
        </div>
        <div className="card p-6 md:p-8">{tool}</div>
      </section>

      <div className="flex items-center justify-between gap-3 mb-10">
        <button
          onClick={() => toggle(lesson.id)}
          className="px-4 py-2.5 rounded-full text-sm font-semibold transition-colors"
          style={{
            background: done ? "var(--teal)" : "var(--navy)",
            color: "#fff",
          }}
        >
          {done ? "✓ Lección completada" : "Marcar lección como completada"}
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
        {prev ? (
          <Link
            href={`/leccion/${prev.slug}`}
            className="text-sm font-medium hover:underline"
            style={{ color: "var(--navy)" }}
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/leccion/${next.slug}`}
            className="text-sm font-medium hover:underline text-right"
            style={{ color: "var(--navy)" }}
          >
            {next.title} →
          </Link>
        ) : (
          <Link href="/" className="text-sm font-medium hover:underline" style={{ color: "var(--teal)" }}>
            Volver al inicio ✓
          </Link>
        )}
      </div>
    </div>
  );
}
