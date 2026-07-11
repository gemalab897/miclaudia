"use client";

import { Field, TextInput, ResultBox } from "./ui";
import { useLocalState } from "@/lib/sharedState";

function pct(n: number) {
  return `${Math.round(n * 100)}%`;
}

type MetricasData = {
  leads: string;
  citasAgendadas: string;
  citasCompletadas: string;
  pacientesActivos: string;
  gastoAds: string;
};

const initial: MetricasData = {
  leads: "",
  citasAgendadas: "",
  citasCompletadas: "",
  pacientesActivos: "",
  gastoAds: "",
};

export default function DashboardMetricas() {
  const [data, setData, hydrated] = useLocalState<MetricasData>("sap.dashboard-metricas.v1", initial);
  const { leads, citasAgendadas, citasCompletadas, pacientesActivos, gastoAds } = data;

  const L = Number(leads) || 0;
  const CA = Number(citasAgendadas) || 0;
  const CC = Number(citasCompletadas) || 0;
  const PA = Number(pacientesActivos) || 0;
  const G = Number(gastoAds) || 0;

  const hasData = L > 0;

  const costoPorLead = L > 0 ? G / L : 0;
  const tasaAgendamiento = L > 0 ? CA / L : 0;
  const tasaAsistencia = CA > 0 ? CC / CA : 0;
  const tasaConversion = CC > 0 ? PA / CC : 0;
  const costoPorPaciente = PA > 0 ? G / PA : 0;

  const diagnosticos: string[] = [];
  if (hasData) {
    if (L >= 10 && tasaAgendamiento < 0.2) {
      diagnosticos.push(
        "Tienes bastantes leads pero pocos agendan cita: el cuello de botella está en la conversión (mensaje → cita). Revisa tu script de primera respuesta y manejo de objeciones — Lección 10."
      );
    }
    if (CA >= 3 && tasaAsistencia < 0.7) {
      diagnosticos.push(
        "Agendas bien, pero la asistencia es baja: el problema está en el seguimiento previo a la sesión. Refuerza tus recordatorios — Lección 12."
      );
    }
    if (CC >= 3 && tasaConversion < 0.5) {
      diagnosticos.push(
        "Tienes buena asistencia pero poca continuidad: revisa la experiencia de la primera sesión y cómo comunicas el valor de continuar el proceso — Lección 5."
      );
    }
    if (diagnosticos.length === 0) {
      diagnosticos.push(
        "Tu embudo se ve saludable en las etapas que completaste. Si ya tienes capacidad de agenda, este es un buen momento para evaluar escalar con pauta publicitaria — Lección 11."
      );
    }
  }

  if (!hydrated) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <Field label="Leads del mes">
          <TextInput
            type="number"
            min={0}
            value={leads}
            onChange={(e) => setData({ ...data, leads: e.target.value })}
          />
        </Field>
        <Field label="Citas agendadas">
          <TextInput
            type="number"
            min={0}
            value={citasAgendadas}
            onChange={(e) => setData({ ...data, citasAgendadas: e.target.value })}
          />
        </Field>
        <Field label="Citas completadas (show-up)">
          <TextInput
            type="number"
            min={0}
            value={citasCompletadas}
            onChange={(e) => setData({ ...data, citasCompletadas: e.target.value })}
          />
        </Field>
        <Field label="Pacientes activos resultantes">
          <TextInput
            type="number"
            min={0}
            value={pacientesActivos}
            onChange={(e) => setData({ ...data, pacientesActivos: e.target.value })}
          />
        </Field>
        <Field label="Gasto en publicidad (USD)">
          <TextInput
            type="number"
            min={0}
            value={gastoAds}
            onChange={(e) => setData({ ...data, gastoAds: e.target.value })}
          />
        </Field>
      </div>

      {hasData && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Kpi label="Costo por lead" value={`$${costoPorLead.toFixed(2)}`} />
            <Kpi label="Tasa de agendamiento" value={pct(tasaAgendamiento)} />
            <Kpi label="Tasa de asistencia" value={pct(tasaAsistencia)} />
            <Kpi label="Tasa de conversión a activo" value={pct(tasaConversion)} />
            <Kpi label="Costo por paciente adquirido" value={`$${costoPorPaciente.toFixed(2)}`} />
          </div>

          <ResultBox title="Diagnóstico y siguiente foco">
            <ul className="space-y-2">
              {diagnosticos.map((d, i) => (
                <li key={i} className="text-sm" style={{ color: "var(--ink)" }}>
                  {d}
                </li>
              ))}
            </ul>
          </ResultBox>
        </>
      )}
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3.5 rounded-lg" style={{ border: "1px solid var(--border)" }}>
      <p className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: "var(--ink-soft)" }}>
        {label}
      </p>
      <p className="text-lg font-bold" style={{ color: "var(--navy)" }}>
        {value}
      </p>
    </div>
  );
}
