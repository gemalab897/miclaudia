"use client";

import { CheckItem } from "./ui";
import ProgressBar from "@/components/ProgressBar";
import { useLocalState } from "@/lib/sharedState";

const items = [
  "Foto de perfil con rostro visible, buena iluminación y expresión cercana",
  "Nombre de usuario visible incluye tu especialidad o público (no solo tu nombre)",
  "Bio resume tu Promesa de Venta Única en 1-2 líneas",
  "Bio incluye un llamado a la acción (CTA) claro",
  "Link en bio funcional y actualizado (agenda, WhatsApp o más info)",
  "Highlights organizados por temas (Cómo trabajo, FAQ, Sobre mí)",
  "Los primeros 9 posts comunican en conjunto a quién ayudas",
];

function MockProfile({ variant }: { variant: "antes" | "despues" }) {
  const good = variant === "despues";
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
      <div className="p-4" style={{ background: good ? "var(--teal-soft)" : "#f3f4f6" }}>
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-12 h-12 rounded-full shrink-0"
            style={{ background: good ? "var(--teal)" : "#c7cedb" }}
          />
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
              {good ? "María Pérez | Psicóloga de Parejas" : "María Pérez"}
            </p>
            <p className="text-xs" style={{ color: "var(--ink-soft)" }}>
              {good ? "Psicóloga clínica · Terapia de pareja" : "Psicóloga"}
            </p>
          </div>
        </div>
        <p className="text-xs mb-2" style={{ color: "var(--ink-soft)" }}>
          {good
            ? "Ayudo a parejas a reconstruir la conexión sin señalar culpables. 💬 Agenda tu primera sesión ⬇️"
            : "Psicóloga clínica. Atiendo diversas problemáticas."}
        </p>
        <div
          className="text-xs px-2 py-1 rounded inline-block"
          style={{
            background: good ? "var(--teal)" : "#d1d5db",
            color: good ? "#fff" : "#4b5563",
          }}
        >
          {good ? "🔗 agendar-cita.link/maria" : "🔗 link roto"}
        </div>
        <div className="grid grid-cols-3 gap-1 mt-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded"
              style={{ background: good ? `rgba(46,125,107,${0.15 + (i % 3) * 0.1})` : "#e5e7eb" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ChecklistInstagram() {
  const [checked, setChecked, hydrated] = useLocalState<Record<string, boolean>>(
    "sap.checklist-instagram.v1",
    {}
  );
  const done = Object.values(checked).filter(Boolean).length;
  const percent = Math.round((done / items.length) * 100);

  if (!hydrated) return null;

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
            Auditoría de tu perfil
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
      </div>

      <div>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--navy)" }}>
          Ejemplo ilustrativo: antes / después
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "var(--ink-soft)" }}>
              Antes
            </p>
            <MockProfile variant="antes" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "var(--teal)" }}>
              Después
            </p>
            <MockProfile variant="despues" />
          </div>
        </div>
        <p className="text-xs mt-2" style={{ color: "var(--ink-soft)" }}>
          Ejemplo genérico con fines ilustrativos, no corresponde a una cuenta real.
        </p>
      </div>
    </div>
  );
}
