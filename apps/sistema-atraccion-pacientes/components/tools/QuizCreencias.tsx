"use client";

import { useState } from "react";
import { Slider, ResultBox, Button } from "./ui";

type Creencia = {
  id: string;
  statement: string;
  reencuadre: string;
};

const creencias: Creencia[] = [
  {
    id: "cobrar",
    statement: "\"Si cobro por mis sesiones, soy codicioso/a.\"",
    reencuadre:
      "Cobrar de forma justa te permite sostener tu práctica, seguir formándote y estar disponible para más pacientes en el futuro. Un consultorio que no se sostiene económicamente termina cerrando, y eso no beneficia a nadie.",
  },
  {
    id: "promocion",
    statement: "\"Promocionarme es poco profesional.\"",
    reencuadre:
      "Comunicar con transparencia tu especialidad y tu enfoque es un acto profesional, no lo contrario. Otras áreas de la salud ya lo normalizaron sin perder seriedad.",
  },
  {
    id: "referidos",
    statement: "\"La terapia se gana por referidos, no se vende.\"",
    reencuadre:
      "Depender solo de referidos es depender de la suerte de tu red social: no lo controlás ni lo podés escalar. Un sistema de atracción no reemplaza los referidos, los complementa.",
  },
];

export default function QuizCreencias() {
  const [before, setBefore] = useState<Record<string, number>>(
    Object.fromEntries(creencias.map((c) => [c.id, 3]))
  );
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [after, setAfter] = useState<Record<string, number>>(
    Object.fromEntries(creencias.map((c) => [c.id, 3]))
  );

  const allRevealed = creencias.every((c) => revealed[c.id]);
  const totalBefore = creencias.reduce((s, c) => s + before[c.id], 0);
  const totalAfter = creencias.reduce((s, c) => s + after[c.id], 0);
  const shift = totalBefore - totalAfter;

  return (
    <div className="space-y-8">
      <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
        Para cada creencia, indicá qué tan de acuerdo estás <strong>antes</strong> de leer el
        reencuadre (1 = nada de acuerdo, 5 = totalmente de acuerdo). Después revelá el reencuadre
        y volvé a puntuar.
      </p>

      {creencias.map((c) => (
        <div key={c.id} className="pb-6 border-b" style={{ borderColor: "var(--border)" }}>
          <p className="font-medium mb-3" style={{ color: "var(--ink)" }}>
            {c.statement}
          </p>
          <Slider value={before[c.id]} onChange={(v) => setBefore({ ...before, [c.id]: v })} labels={["Nada de acuerdo", "Totalmente de acuerdo"]} />

          {!revealed[c.id] ? (
            <div className="mt-3">
              <Button variant="ghost" onClick={() => setRevealed({ ...revealed, [c.id]: true })}>
                Ver reencuadre
              </Button>
            </div>
          ) : (
            <>
              <ResultBox title="Reencuadre">
                <p className="text-sm" style={{ color: "var(--ink)" }}>
                  {c.reencuadre}
                </p>
              </ResultBox>
              <div className="mt-4">
                <p className="text-sm font-medium mb-2" style={{ color: "var(--navy)" }}>
                  Ahora que leíste el reencuadre, ¿qué tan de acuerdo estás con la creencia original?
                </p>
                <Slider value={after[c.id]} onChange={(v) => setAfter({ ...after, [c.id]: v })} labels={["Nada de acuerdo", "Totalmente de acuerdo"]} />
              </div>
            </>
          )}
        </div>
      ))}

      {allRevealed && (
        <ResultBox title="Tu cambio de perspectiva">
          <p className="text-sm mb-1" style={{ color: "var(--ink)" }}>
            Puntaje total antes: <strong>{totalBefore}/15</strong> · Puntaje total después:{" "}
            <strong>{totalAfter}/15</strong>
          </p>
          <p className="text-sm" style={{ color: "var(--ink)" }}>
            {shift > 0
              ? `Bajaste ${shift} puntos de acuerdo con las creencias limitantes. Es una buena señal de que el bloqueo mental empieza a soltarse.`
              : shift === 0
              ? "Tu puntaje no cambió todavía. Está bien — volvé a esta lección más adelante y repetí el ejercicio."
              : "Tu puntaje subió. Vale la pena releer los reencuadres con calma antes de avanzar."}
          </p>
        </ResultBox>
      )}
    </div>
  );
}
