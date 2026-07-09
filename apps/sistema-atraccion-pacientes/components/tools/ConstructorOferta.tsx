"use client";

import { useState } from "react";
import { CheckItem, Chip, ResultBox } from "./ui";

const stackOptions = [
  "Evaluación inicial detallada",
  "Material de apoyo entre sesiones",
  "Seguimiento por mensaje ante dudas puntuales",
  "Recursos descargables (guías, ejercicios, audios)",
  "Acceso a grupo o comunidad de apoyo",
  "Sesión de seguimiento post-programa",
];

const tipos = ["Sesión suelta", "Paquete de sesiones", "Programa con duración fija"] as const;

export default function ConstructorOferta() {
  const [stack, setStack] = useState<Record<string, boolean>>({});
  const [tipo, setTipo] = useState<(typeof tipos)[number] | null>(null);
  const [garantia, setGarantia] = useState(false);
  const [escasez, setEscasez] = useState(false);

  const stackCount = Object.values(stack).filter(Boolean).length;

  const suggestion = () => {
    if (!tipo) return null;
    const parts: string[] = [];

    if (tipo === "Sesión suelta") {
      parts.push(
        "Con sesión suelta, tu mejor palanca de valor percibido es el value stack: mostrá todo lo que rodea a la sesión (evaluación, material, seguimiento) para que no se compare solo por precio contra 'una hora de charla'."
      );
    } else if (tipo === "Paquete de sesiones") {
      parts.push(
        "Para un paquete, usá anclaje: mostrá el precio de la sesión suelta junto al precio por sesión dentro del paquete, para que el paquete se perciba como la opción más razonable."
      );
    } else {
      parts.push(
        "Un programa con duración fija funciona mejor si tu enfoque terapéutico se presta a fases (ej. evaluación → intervención → cierre). Comunicá esas fases como parte del valor del programa."
      );
    }

    if (stackCount <= 1) {
      parts.push(
        "Tu value stack todavía es delgado — marcá al menos 2 o 3 elementos más arriba para que la oferta se sienta robusta frente al precio."
      );
    } else if (stackCount >= 4) {
      parts.push("Tu value stack ya es sólido: comunicalo con claridad, es tu mejor argumento frente al precio.");
    }

    if (garantia) {
      parts.push(
        "Con tu garantía de experiencia activada, recordá comunicarla sobre la experiencia (compatibilidad, comodidad), nunca sobre el resultado clínico."
      );
    }

    if (escasez) {
      parts.push(
        "Con escasez activada, asegurate de que sea 100% real: comunicá tus cupos de agenda tal cual son, sin countdowns falsos."
      );
    }

    return parts;
  };

  const result = suggestion();

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--navy)" }}>
          1. Armá tu value stack — marcá todo lo que ya incluís (o querés incluir):
        </p>
        <div className="space-y-1">
          {stackOptions.map((opt) => (
            <CheckItem
              key={opt}
              label={opt}
              checked={!!stack[opt]}
              onChange={(v) => setStack({ ...stack, [opt]: v })}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--navy)" }}>
          2. Elegí el tipo de paquete:
        </p>
        <div className="flex flex-wrap gap-2">
          {tipos.map((t) => (
            <Chip key={t} label={t} active={tipo === t} onClick={() => setTipo(t)} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--navy)" }}>
          3. Elementos éticos adicionales:
        </p>
        <div className="space-y-1">
          <CheckItem
            label="Garantía ética sobre la experiencia (ej. primera sesión sin cargo si no hay compatibilidad)"
            checked={garantia}
            onChange={setGarantia}
          />
          <CheckItem
            label="Escasez honesta (cupos reales de agenda comunicados con transparencia)"
            checked={escasez}
            onChange={setEscasez}
          />
        </div>
      </div>

      {result && (
        <ResultBox title="Estructura sugerida para tu oferta">
          <ul className="space-y-2">
            {result.map((line, i) => (
              <li key={i} className="text-sm" style={{ color: "var(--ink)" }}>
                {line}
              </li>
            ))}
          </ul>
        </ResultBox>
      )}
    </div>
  );
}
