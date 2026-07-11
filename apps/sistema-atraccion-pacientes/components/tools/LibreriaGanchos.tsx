"use client";

import { useState } from "react";
import { Chip, Field, TextArea, Button } from "./ui";
import { ganchos, especialidades } from "@/lib/ganchos";
import { useLocalState } from "@/lib/sharedState";

type Filtros = { especialidad: string; nivel: number };
type Aida = { atencion: string; interes: string; deseo: string; accion: string };

const emptyAida: Aida = { atencion: "", interes: "", deseo: "", accion: "" };

const niveles = [
  { value: 0, label: "Todos los niveles" },
  { value: 1, label: "1 · Inconsciente" },
  { value: 2, label: "2 · Consciente del problema" },
  { value: 3, label: "3 · Consciente de soluciones" },
  { value: 4, label: "4 · Consciente del método" },
  { value: 5, label: "5 · Listo para decidir" },
];

export default function LibreriaGanchos() {
  const [filtros, setFiltros, hydrated] = useLocalState<Filtros>("sap.libreria-ganchos.v1", {
    especialidad: "Todas",
    nivel: 0,
  });
  const { especialidad, nivel } = filtros;
  const setEspecialidad = (especialidad: string) => setFiltros({ ...filtros, especialidad });
  const setNivel = (nivel: number) => setFiltros({ ...filtros, nivel });
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const [aida, setAida, aidaHydrated] = useLocalState<Aida>("sap.aida.v1", emptyAida);
  const [copiedAida, setCopiedAida] = useState(false);

  const filtered = ganchos.filter(
    (g) =>
      (especialidad === "Todas" || g.especialidad === especialidad) &&
      (nivel === 0 || g.nivel === nivel)
  );

  const copy = async (id: number, texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiedId(id);
      setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1500);
    } catch {
      // clipboard no disponible; el usuario puede seleccionar el texto manualmente.
    }
  };

  const postAida = [aida.atencion, aida.interes, aida.deseo, aida.accion]
    .map((s) => s.trim())
    .filter(Boolean)
    .join("\n\n");

  const copyAida = async () => {
    try {
      await navigator.clipboard.writeText(postAida);
      setCopiedAida(true);
      setTimeout(() => setCopiedAida(false), 1500);
    } catch {
      // clipboard no disponible; el usuario puede seleccionar el texto manualmente.
    }
  };

  if (!hydrated || !aidaHydrated) return null;

  return (
    <div>
      <p className="text-sm font-bold mb-3" style={{ color: "var(--navy)" }}>
        1. Librería de ganchos
      </p>
      <div className="mb-4">
        <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--ink-soft)" }}>
          Especialidad
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip label="Todas" active={especialidad === "Todas"} onClick={() => setEspecialidad("Todas")} />
          {especialidades.map((e) => (
            <Chip key={e} label={e} active={especialidad === e} onClick={() => setEspecialidad(e)} />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--ink-soft)" }}>
          Nivel de consciencia
        </p>
        <div className="flex flex-wrap gap-2">
          {niveles.map((n) => (
            <Chip key={n.value} label={n.label} active={nivel === n.value} onClick={() => setNivel(n.value)} />
          ))}
        </div>
      </div>

      <p className="text-xs mb-3" style={{ color: "var(--ink-soft)" }}>
        {filtered.length} gancho{filtered.length !== 1 ? "s" : ""} encontrados
      </p>

      <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
        {filtered.map((g) => (
          <div
            key={g.id}
            className="p-3.5 rounded-lg flex items-start justify-between gap-3"
            style={{ border: "1px solid var(--border)" }}
          >
            <div>
              <p className="text-sm mb-1.5" style={{ color: "var(--ink)" }}>
                {g.texto}
              </p>
              <div className="flex gap-1.5 flex-wrap">
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "var(--teal-soft)", color: "var(--teal)" }}
                >
                  {g.especialidad}
                </span>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "#eef1f5", color: "var(--ink-soft)" }}
                >
                  Nivel {g.nivel}
                </span>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "#eef1f5", color: "var(--ink-soft)" }}
                >
                  {g.tipo}
                </span>
              </div>
            </div>
            <button
              onClick={() => copy(g.id, g.texto)}
              className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: copiedId === g.id ? "var(--teal)" : "#fff",
                color: copiedId === g.id ? "#fff" : "var(--navy)",
                border: "1px solid var(--border)",
              }}
            >
              {copiedId === g.id ? "✓ Copiado" : "Copiar"}
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm py-6 text-center" style={{ color: "var(--ink-soft)" }}>
            No hay ganchos con esos filtros. Prueba otra combinación.
          </p>
        )}
      </div>

      <p className="text-sm font-bold mt-8 mb-1" style={{ color: "var(--navy)" }}>
        2. Constructor de post AIDA
      </p>
      <p className="text-xs mb-4" style={{ color: "var(--ink-soft)" }}>
        Completa las 4 etapas y armamos el post completo, listo para publicar.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Field label="🎯 Atención" hint="La primera línea que detiene el scroll.">
            <TextArea
              value={aida.atencion}
              onChange={(e) => setAida({ ...aida, atencion: e.target.value })}
              placeholder="¿Te cuesta dormir pensando en todo lo que dejaste pendiente?"
            />
          </Field>
          <Field label="🔍 Interés" hint="Profundiza mostrando que entiendes el problema en detalle.">
            <TextArea
              value={aida.interes}
              onChange={(e) => setAida({ ...aida, interes: e.target.value })}
              placeholder="Esa sensación de que la cabeza no se apaga ni de noche suele ser más común de lo que parece..."
            />
          </Field>
          <Field label="💭 Deseo" hint="Cómo se ve su vida del lado de después.">
            <TextArea
              value={aida.deseo}
              onChange={(e) => setAida({ ...aida, deseo: e.target.value })}
              placeholder="Imagina poder cerrar el día sin esa lista de pendientes dando vueltas en tu cabeza."
            />
          </Field>
          <Field label="👉 Acción" hint="Qué quieres que haga después: comentar, guardar, escribir, agendar.">
            <TextArea
              value={aida.accion}
              onChange={(e) => setAida({ ...aida, accion: e.target.value })}
              placeholder="Si te reconoces en esto, escríbeme — hay lugar para acompañarte."
            />
          </Field>
        </div>

        <div>
          <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--ink-soft)" }}>
            Vista previa de tu post
          </p>
          <div className="card p-5 min-h-[160px]">
            {postAida ? (
              <p className="text-sm whitespace-pre-line leading-relaxed" style={{ color: "var(--ink)" }}>
                {postAida}
              </p>
            ) : (
              <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                Completa al menos un campo para ver tu post armado acá.
              </p>
            )}
          </div>
          <div className="mt-3">
            <Button onClick={copyAida} disabled={!postAida}>
              {copiedAida ? "✓ Copiado" : "Copiar post"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
