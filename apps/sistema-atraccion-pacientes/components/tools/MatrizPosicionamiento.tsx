"use client";

import { useState } from "react";
import { TextInput, Slider, Button, ResultBox } from "./ui";

type Especialidad = {
  id: string;
  nombre: string;
  urgencia: number;
  competencia: number; // 1 = mucha competencia, 5 = poca competencia
  expertise: number;
  pasion: number;
};

const makeEspecialidad = (id: string): Especialidad => ({
  id,
  nombre: "",
  urgencia: 3,
  competencia: 3,
  expertise: 3,
  pasion: 3,
});

function score(e: Especialidad) {
  return e.urgencia + e.competencia + e.expertise + e.pasion;
}

export default function MatrizPosicionamiento() {
  const [items, setItems] = useState<Especialidad[]>([makeEspecialidad("a"), makeEspecialidad("b")]);

  const update = (id: string, patch: Partial<Especialidad>) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)));

  const addItem = () => {
    if (items.length >= 3) return;
    setItems((prev) => [...prev, makeEspecialidad(Math.random().toString(36).slice(2))]);
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((it) => it.id !== id));

  const named = items.filter((it) => it.nombre.trim().length > 0);
  const winner =
    named.length > 0 ? [...named].sort((a, b) => score(b) - score(a))[0] : undefined;

  return (
    <div className="space-y-6">
      <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
        Ingresa entre 2 y 3 especialidades candidatas y puntúa cada dimensión de 1 a 5. En
        &quot;Competencia&quot;, 5 significa poca competencia (mejor para ti) y 1 significa mucha
        competencia.
      </p>

      {items.map((it, idx) => (
        <div key={it.id} className="p-4 rounded-xl" style={{ border: "1px solid var(--border)" }}>
          <div className="flex items-center gap-2 mb-3">
            <TextInput
              placeholder={`Especialidad candidata ${idx + 1}`}
              value={it.nombre}
              onChange={(e) => update(it.id, { nombre: e.target.value })}
            />
            {items.length > 2 && (
              <button
                onClick={() => removeItem(it.id)}
                aria-label="Quitar"
                className="shrink-0 w-8 h-8 rounded-full text-sm"
                style={{ color: "var(--ink-soft)", border: "1px solid var(--border)" }}
              >
                ✕
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
                Urgencia del dolor
              </p>
              <Slider value={it.urgencia} onChange={(v) => update(it.id, { urgencia: v })} />
            </div>
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
                Competencia (5 = poca)
              </p>
              <Slider value={it.competencia} onChange={(v) => update(it.id, { competencia: v })} />
            </div>
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
                Tu expertise
              </p>
              <Slider value={it.expertise} onChange={(v) => update(it.id, { expertise: v })} />
            </div>
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
                Tu pasión
              </p>
              <Slider value={it.pasion} onChange={(v) => update(it.id, { pasion: v })} />
            </div>
          </div>
          {it.nombre.trim() && (
            <p className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>
              Puntaje de viabilidad: <strong style={{ color: "var(--teal)" }}>{score(it)}/20</strong>
            </p>
          )}
        </div>
      ))}

      {items.length < 3 && (
        <Button variant="ghost" onClick={addItem}>
          + Agregar especialidad
        </Button>
      )}

      {winner && named.length >= 2 && (
        <ResultBox title="Resultado">
          <p className="text-sm" style={{ color: "var(--ink)" }}>
            Tu especialidad con mejor balance es{" "}
            <strong style={{ color: "var(--navy)" }}>{winner.nombre}</strong>, con un puntaje de
            viabilidad de <strong>{score(winner)}/20</strong>.
          </p>
        </ResultBox>
      )}
    </div>
  );
}
