"use client";

import Link from "next/link";
import { phases, getLessonsByPhase, lessons } from "@/lib/lessons";
import { useProgress, phaseProgress } from "@/lib/progress";
import ProgressBar from "./ProgressBar";

export default function PhaseOverview() {
  const { completed, isComplete, hydrated, completedCount, totalLessons, percent } = useProgress();

  const nextLesson =
    lessons.find((l) => !completed.includes(l.id)) ?? lessons[0];

  return (
    <div>
      <div className="card p-6 md:p-8 mb-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium mb-2" style={{ color: "var(--ink-soft)" }}>
            Tu progreso
          </p>
          <div className="flex items-center gap-3 mb-1">
            <span className="font-heading text-2xl font-bold" style={{ color: "var(--navy)" }}>
              {hydrated ? `${completedCount} / ${totalLessons}` : "…"}
            </span>
            <span className="text-sm" style={{ color: "var(--ink-soft)" }}>
              lecciones completadas
            </span>
          </div>
          <ProgressBar percent={hydrated ? percent : 0} />
        </div>
        <Link
          href={`/leccion/${nextLesson.slug}`}
          className="shrink-0 px-6 py-3 rounded-full text-sm font-semibold text-center transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--teal)", color: "#fff" }}
        >
          {hydrated && completedCount > 0 ? "Continuar curso →" : "Comenzar curso →"}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {phases.map((phase) => {
          const phaseLessons = getLessonsByPhase(phase.id);
          const prog = phaseProgress(phase.id, completed);
          return (
            <div key={phase.id} className="card p-6">
              <div className="flex items-start justify-between gap-3 mb-1">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--teal)" }}>
                  Fase {phase.id}
                </p>
                <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>
                  {hydrated ? `${prog.done}/${prog.total}` : ""}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1" style={{ color: "var(--navy)" }}>
                {phase.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--ink-soft)" }}>
                {phase.description}
              </p>
              <ul className="space-y-1.5">
                {phaseLessons.map((lesson) => {
                  const done = hydrated && isComplete(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/leccion/${lesson.slug}`}
                        className="flex items-center gap-2.5 py-1.5 text-sm group"
                      >
                        <span
                          className="flex items-center justify-center shrink-0 rounded-full text-[10px]"
                          style={{
                            width: 18,
                            height: 18,
                            background: done ? "var(--teal)" : "#fff",
                            color: done ? "#fff" : "var(--ink-soft)",
                            border: done ? "none" : "1.5px solid var(--border)",
                          }}
                        >
                          {done ? "✓" : lesson.id}
                        </span>
                        <span
                          className="group-hover:underline"
                          style={{ color: done ? "var(--ink-soft)" : "var(--ink)" }}
                        >
                          {lesson.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
