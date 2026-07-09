"use client";

import { Field, TextInput, TextArea, Button } from "./ui";
import { useAvatarState } from "@/lib/sharedState";

export default function FichaAvatar() {
  const [avatar, setAvatar, hydrated] = useAvatarState();

  const set = (key: keyof typeof avatar) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setAvatar({ ...avatar, [key]: e.target.value });

  const hasData = Object.values(avatar).some((v) => v.trim().length > 0);

  const download = () => {
    const text = `FICHA DE AVATAR
================
Nombre: ${avatar.nombre}
Edad: ${avatar.edad}
Situación de vida: ${avatar.situacion}

Dolor principal:
${avatar.dolorPrincipal}

Deseo principal:
${avatar.deseoPrincipal}

Objeciones y miedos:
${avatar.objeciones}

Frases textuales recolectadas:
${avatar.frasesTextuales}
`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `avatar-${(avatar.nombre || "sin-nombre").replace(/\s+/g, "-").toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!hydrated) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <Field label="Nombre ficticio">
            <TextInput value={avatar.nombre} onChange={set("nombre")} placeholder="Ej. Camila" />
          </Field>
          <Field label="Edad">
            <TextInput value={avatar.edad} onChange={set("edad")} placeholder="Ej. 34 años" />
          </Field>
        </div>
        <Field label="Situación de vida" hint="Contexto: trabajo, familia, etapa de vida.">
          <TextArea value={avatar.situacion} onChange={set("situacion")} placeholder="Ej. Gerente de marketing, madre de dos hijos pequeños..." />
        </Field>
        <Field label="Dolor principal" hint="En sus propias palabras, no en lenguaje clínico.">
          <TextArea value={avatar.dolorPrincipal} onChange={set("dolorPrincipal")} placeholder="Ej. No puede dormir pensando en todo lo que tiene pendiente..." />
        </Field>
        <Field label="Deseo principal" hint="Cómo se ve su vida si el problema se resuelve.">
          <TextArea value={avatar.deseoPrincipal} onChange={set("deseoPrincipal")} placeholder="Ej. Disfrutar una cena sin que la ansiedad le arruine la noche." />
        </Field>
        <Field label="Objeciones y miedos" hint="Estigma, miedo a ser juzgada, desconfianza, costo...">
          <TextArea value={avatar.objeciones} onChange={set("objeciones")} placeholder="Ej. Le preocupa que la terapia sea 'para casos graves'." />
        </Field>
        <Field label="Frases textuales recolectadas" hint="Copiá frases reales que viste en foros, comentarios o conversaciones.">
          <TextArea value={avatar.frasesTextuales} onChange={set("frasesTextuales")} placeholder='Ej. "Siento que estoy fallando en todo al mismo tiempo."' />
        </Field>
      </div>

      <div>
        <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--ink-soft)" }}>
          Vista previa de tu tarjeta de avatar
        </p>
        <div
          className="rounded-2xl p-6"
          style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--navy-dark) 100%)" }}
        >
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "#8fd6c4" }}>
            Ficha de avatar
          </p>
          <h3 className="font-heading text-xl font-bold text-white mb-1">
            {avatar.nombre || "Sin nombre todavía"}
            {avatar.edad ? `, ${avatar.edad}` : ""}
          </h3>
          <p className="text-sm text-white/70 mb-4">{avatar.situacion || "Situación de vida por completar."}</p>

          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/50">Dolor principal</p>
              <p className="text-sm text-white/90">{avatar.dolorPrincipal || "—"}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/50">Deseo principal</p>
              <p className="text-sm text-white/90">{avatar.deseoPrincipal || "—"}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/50">Objeciones</p>
              <p className="text-sm text-white/90">{avatar.objeciones || "—"}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/50">En sus palabras</p>
              <p className="text-sm text-white/90 italic">
                {avatar.frasesTextuales ? `"${avatar.frasesTextuales}"` : "—"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button onClick={download} disabled={!hasData}>
            ⬇ Descargar ficha (.txt)
          </Button>
        </div>
        <p className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>
          Esta ficha se guarda en tu navegador y va a estar disponible para pre-rellenar la
          lección de Promesa de Venta.
        </p>
      </div>
    </div>
  );
}
