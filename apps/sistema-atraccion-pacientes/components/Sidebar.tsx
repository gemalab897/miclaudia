"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { phases, getLessonsByPhase } from "@/lib/lessons";
import { useProgress, phaseProgress } from "@/lib/progress";
import ProgressBar from "./ProgressBar";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { completed, isComplete, hydrated, completedCount, totalLessons, percent } = useProgress();

  return (
    <div className="flex flex-col h-full">
      <Link
        href="/"
        onClick={onNavigate}
        className="block px-5 pt-6 pb-4 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: "var(--teal)" }}>
          Curso interactivo
        </p>
        <p className="font-heading text-lg font-semibold mt-1" style={{ color: "var(--navy)" }}>
          Sistema de Atracción de Pacientes
        </p>
      </Link>

      <div className="px-5 py-4 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-medium" style={{ color: "var(--ink-soft)" }}>
            Progreso general
          </span>
          <span className="font-semibold" style={{ color: "var(--navy)" }}>
            {hydrated ? `${completedCount}/${totalLessons}` : "…"}
          </span>
        </div>
        <ProgressBar percent={hydrated ? percent : 0} />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {phases.map((phase) => {
          const phaseLessons = getLessonsByPhase(phase.id);
          const prog = phaseProgress(phase.id, completed);
          return (
            <div key={phase.id}>
              <div className="px-2 mb-2">
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: "var(--teal)" }}>
                  Fase {phase.id}
                </p>
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11px] font-bold tracking-[0.06em] uppercase" style={{ color: "var(--navy)" }}>
                    {phase.title}
                  </p>
                  <span className="text-[11px] font-medium shrink-0" style={{ color: "var(--ink-soft)" }}>
                    {hydrated ? `${prog.done}/${prog.total}` : ""}
                  </span>
                </div>
              </div>
              <ul className="space-y-0.5">
                {phaseLessons.map((lesson) => {
                  const href = `/leccion/${lesson.slug}`;
                  const active = pathname === href;
                  const done = hydrated && isComplete(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={href}
                        onClick={onNavigate}
                        className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors"
                        style={{
                          background: active ? "var(--teal-soft)" : "transparent",
                          color: active ? "var(--teal)" : "var(--ink)",
                          fontWeight: active ? 600 : 500,
                        }}
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
                        <span className="leading-snug">{lesson.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="md:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <Link href="/" className="font-heading font-semibold text-sm" style={{ color: "var(--navy)" }}>
          Sistema de Atracción de Pacientes
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="w-9 h-9 rounded-lg flex items-center justify-center border"
          style={{ borderColor: "var(--border)" }}
        >
          <span style={{ color: "var(--navy)" }}>☰</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="w-[85vw] max-w-sm bg-white h-full shadow-xl">
            <div className="flex justify-end px-3 pt-3">
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ color: "var(--navy)" }}
              >
                ✕
              </button>
            </div>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </div>
          <div className="flex-1 bg-black/30" onClick={() => setOpen(false)} />
        </div>
      )}

      {/* Desktop sidebar */}
      <aside
        className="hidden md:block fixed left-0 top-0 h-screen w-[280px] bg-white border-r overflow-y-auto"
        style={{ borderColor: "var(--border)" }}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
