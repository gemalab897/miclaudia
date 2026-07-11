"use client";

import { Field, TextInput, ResultBox, Slider } from "./ui";
import { useLocalState } from "@/lib/sharedState";

type CalculadoraData = {
  metaPacientes: string;
  costoPorLead: string;
  tasaAgendamiento: number;
  tasaAsistencia: number;
  tasaConversion: number;
};

const initial: CalculadoraData = {
  metaPacientes: "4",
  costoPorLead: "3",
  tasaAgendamiento: 30,
  tasaAsistencia: 80,
  tasaConversion: 70,
};

export default function CalculadoraPresupuesto() {
  const [data, setData, hydrated] = useLocalState<CalculadoraData>("sap.calculadora-presupuesto.v1", initial);
  const { metaPacientes, costoPorLead, tasaAgendamiento, tasaAsistencia, tasaConversion } = data;

  const meta = Number(metaPacientes) || 0;
  const costo = Number(costoPorLead) || 0;

  const tasaGlobal = (tasaAgendamiento / 100) * (tasaAsistencia / 100) * (tasaConversion / 100);
  const leadsNecesarios = tasaGlobal > 0 ? Math.ceil(meta / tasaGlobal) : 0;
  const citasAgendadas = Math.round(leadsNecesarios * (tasaAgendamiento / 100));
  const citasCompletadas = Math.round(citasAgendadas * (tasaAsistencia / 100));
  const presupuesto = leadsNecesarios * costo;

  const hasInputs = meta > 0 && costo > 0;

  if (!hydrated) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <Field label="Meta de pacientes nuevos / mes">
          <TextInput
            type="number"
            min={0}
            value={metaPacientes}
            onChange={(e) => setData({ ...data, metaPacientes: e.target.value })}
          />
        </Field>
        <Field label="Costo por lead estimado (USD)">
          <TextInput
            type="number"
            min={0}
            step="0.5"
            value={costoPorLead}
            onChange={(e) => setData({ ...data, costoPorLead: e.target.value })}
          />
        </Field>
      </div>

      <div>
        <p className="text-xs font-semibold mb-3" style={{ color: "var(--ink-soft)" }}>
          Tasas del embudo — ajústalas si ya tienes datos propios (lección 13), o deja los valores
          por defecto como referencia inicial.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
              % Leads → Cita agendada
            </p>
            <Slider
              value={tasaAgendamiento}
              onChange={(v) => setData({ ...data, tasaAgendamiento: v })}
              min={5}
              max={100}
              labels={["5%", "100%"]}
            />
          </div>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
              % Asistencia a la cita
            </p>
            <Slider
              value={tasaAsistencia}
              onChange={(v) => setData({ ...data, tasaAsistencia: v })}
              min={5}
              max={100}
              labels={["5%", "100%"]}
            />
          </div>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
              % Conversión a paciente activo
            </p>
            <Slider
              value={tasaConversion}
              onChange={(v) => setData({ ...data, tasaConversion: v })}
              min={5}
              max={100}
              labels={["5%", "100%"]}
            />
          </div>
        </div>
      </div>

      {hasInputs && (
        <ResultBox title="Estimación mensual">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <p className="text-[11px] uppercase font-bold tracking-wide" style={{ color: "var(--ink-soft)" }}>
                Leads necesarios
              </p>
              <p className="text-xl font-bold" style={{ color: "var(--navy)" }}>
                {leadsNecesarios}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold tracking-wide" style={{ color: "var(--ink-soft)" }}>
                Citas agendadas
              </p>
              <p className="text-xl font-bold" style={{ color: "var(--navy)" }}>
                {citasAgendadas}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold tracking-wide" style={{ color: "var(--ink-soft)" }}>
                Citas completadas
              </p>
              <p className="text-xl font-bold" style={{ color: "var(--navy)" }}>
                {citasCompletadas}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold tracking-wide" style={{ color: "var(--ink-soft)" }}>
                Presupuesto sugerido
              </p>
              <p className="text-xl font-bold" style={{ color: "var(--teal)" }}>
                ${presupuesto.toLocaleString()}
              </p>
            </div>
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--ink-soft)" }}>
            Cálculo: leads necesarios = meta de pacientes ÷ (% agendamiento × % asistencia × %
            conversión). Presupuesto = leads necesarios × costo por lead. Antes de escalar,
            confirma que estas tasas ya funcionan de forma orgánica (lección 10).
          </p>
        </ResultBox>
      )}
    </div>
  );
}
