"use client";

import { useCallback, useEffect, useState } from "react";
import { lessons } from "./lessons";

const STORAGE_KEY = "sap.progress.v1";

function readCompleted(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCompleted(readCompleted());
    setHydrated(true);
  }, []);

  const persist = useCallback((next: number[]) => {
    setCompleted(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // localStorage no disponible; el progreso solo vive en memoria esta sesión.
    }
  }, []);

  const markComplete = useCallback(
    (lessonId: number) => {
      persist(Array.from(new Set([...readCompleted(), lessonId])));
    },
    [persist]
  );

  const markIncomplete = useCallback(
    (lessonId: number) => {
      persist(readCompleted().filter((id) => id !== lessonId));
    },
    [persist]
  );

  const toggle = useCallback(
    (lessonId: number) => {
      const current = readCompleted();
      if (current.includes(lessonId)) {
        persist(current.filter((id) => id !== lessonId));
      } else {
        persist(Array.from(new Set([...current, lessonId])));
      }
    },
    [persist]
  );

  const isComplete = useCallback((lessonId: number) => completed.includes(lessonId), [completed]);

  const totalLessons = lessons.length;
  const completedCount = completed.length;
  const percent = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  return {
    completed,
    hydrated,
    isComplete,
    markComplete,
    markIncomplete,
    toggle,
    totalLessons,
    completedCount,
    percent,
  };
}

export function phaseProgress(phaseId: number, completed: number[]) {
  const phaseLessons = lessons.filter((l) => l.phaseId === phaseId);
  const done = phaseLessons.filter((l) => completed.includes(l.id)).length;
  return { done, total: phaseLessons.length };
}
