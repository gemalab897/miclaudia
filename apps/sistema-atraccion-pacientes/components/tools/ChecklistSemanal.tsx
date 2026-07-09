"use client";

import { useEffect, useState } from "react";
import { CheckItem, Button } from "./ui";
import ProgressBar from "@/components/ProgressBar";

const STORAGE_KEY = "sap.checklist-semanal.v1";

const items = [
  "Enviar recordatorio 72h antes de cada cita",
  "Enviar recordatorio 24h antes de cada cita",
  "Enviar recordatorio 2h antes de cada cita",
  "Confirmar que el intake digital fue enviado a pacientes nuevos",
  "Confirmar que la política de cancelación quedó comunicada",
  "Contactar al menos a 1 paciente inactivo para reactivación",
  "Revisar la agenda de la semana siguiente y cupos disponibles",
];

function getWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
}

export default function ChecklistSemanal() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const currentWeek = getWeekKey();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.weekKey === currentWeek) {
          setChecked(parsed.checked ?? {});
        }
      }
    } catch {
      // datos corruptos, arrancamos en blanco
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ weekKey: getWeekKey(), checked }));
    } catch {
      // localStorage no disponible; el checklist solo vive en memoria esta sesión.
    }
  }, [checked, hydrated]);

  const done = Object.values(checked).filter(Boolean).length;
  const percent = Math.round((done / items.length) * 100);

  if (!hydrated) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
          Semana actual ({getWeekKey()})
        </p>
        <span className="text-xs font-semibold" style={{ color: "var(--teal)" }}>
          {done}/{items.length}
        </span>
      </div>
      <ProgressBar percent={percent} />
      <div className="mt-4 space-y-1">
        {items.map((item) => (
          <CheckItem
            key={item}
            label={item}
            checked={!!checked[item]}
            onChange={(v) => setChecked({ ...checked, [item]: v })}
          />
        ))}
      </div>
      <div className="mt-4">
        <Button variant="ghost" onClick={() => setChecked({})}>
          Reiniciar checklist de esta semana
        </Button>
      </div>
      <p className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>
        Este checklist se reinicia automáticamente cada semana nueva.
      </p>
    </div>
  );
}
