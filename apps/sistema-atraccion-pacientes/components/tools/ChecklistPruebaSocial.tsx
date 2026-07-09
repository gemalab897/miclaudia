"use client";

import { useState } from "react";
import { CheckItem, ResultBox } from "./ui";
import ProgressBar from "@/components/ProgressBar";

const items = [
  "Comparto casos anonimizados (sin datos identificables) que ilustran cómo trabajo",
  "Muestro mi formación y certificaciones de forma natural, integrada al contenido",
  "Publico contenido que demuestra mi expertise en acción (cómo pienso, cómo abordo un caso)",
  "Pido reseñas en Google Business sobre la experiencia general, nunca sobre contenido de sesión",
  "Evito publicar testimonios explícitos que comprometan la confidencialidad de pacientes",
  "Muestro afiliaciones profesionales o colegios relevantes",
];

export default function ChecklistPruebaSocial() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const done = Object.values(checked).filter(Boolean).length;
  const percent = Math.round((done / items.length) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
          Checklist de prueba social ética
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
      {done === items.length && (
        <ResultBox title="Excelente">
          <p className="text-sm" style={{ color: "var(--ink)" }}>
            Ya cubres todos los elementos éticos de prueba social y autoridad de esta lección.
          </p>
        </ResultBox>
      )}
    </div>
  );
}
