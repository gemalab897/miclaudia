"use client";

import { useState } from "react";
import { Field, TextInput, TextArea, Button, Slider, CheckItem, Chip, ResultBox } from "./ui";
import { useLocalState, useAvatarState } from "@/lib/sharedState";

type Par = { id: string; problema: string; solucion: string };
type Paquete = { id: string; nombre: string; sesiones: string; precio: string };
type Producto = { id: string; nombre: string; tipo: string; precio: string };

type OfertaData = {
  resultado: string;
  marcoTiempo: string;
  objecionPrincipal: string;
  pares: Par[];
  probabilidad: number;
  rapidez: number;
  facilidad: number;
  garantiaActiva: boolean;
  garantiaTexto: string;
  escasezActiva: boolean;
  escasezTexto: string;
  precioSesionSuelta: string;
  paquetes: Paquete[];
  productos: Producto[];
};

const TIPOS_PRODUCTO = ["Descargable", "Taller grupal", "Programa", "Seguimiento extra"];

const makePar = (id: string): Par => ({ id, problema: "", solucion: "" });
const makePaquete = (id: string): Paquete => ({ id, nombre: "", sesiones: "", precio: "" });
const makeProducto = (id: string): Producto => ({ id, nombre: "", tipo: TIPOS_PRODUCTO[0], precio: "" });

const emptyOferta: OfertaData = {
  resultado: "",
  marcoTiempo: "",
  objecionPrincipal: "",
  pares: [makePar("a"), makePar("b")],
  probabilidad: 3,
  rapidez: 3,
  facilidad: 3,
  garantiaActiva: false,
  garantiaTexto: "Si en la primera sesión sientes que no hay compatibilidad, esa sesión no se cobra.",
  escasezActiva: false,
  escasezTexto: "Cupo real para pacientes nuevos este mes.",
  precioSesionSuelta: "",
  paquetes: [makePaquete("p1")],
  productos: [],
};

function nivelValor(puntaje: number) {
  if (puntaje >= 12) return { label: "Irresistible", color: "var(--teal)" };
  if (puntaje >= 8) return { label: "Sólida", color: "var(--navy)" };
  return { label: "Todavía floja", color: "#b45309" };
}

function precioPorSesion(p: Paquete) {
  const sesiones = Number(p.sesiones) || 0;
  const precio = Number(p.precio) || 0;
  return sesiones > 0 ? precio / sesiones : 0;
}

function ahorroPct(p: Paquete, precioSuelta: number) {
  const porSesion = precioPorSesion(p);
  if (!precioSuelta || !porSesion) return null;
  const pct = Math.round((1 - porSesion / precioSuelta) * 100);
  return pct;
}

export default function DesarrolladorOferta() {
  const [oferta, setOferta, hydrated] = useLocalState<OfertaData>("sap.oferta-irresistible.v1", emptyOferta);
  const [avatar] = useAvatarState();
  const [prefilled, setPrefilled] = useState(false);

  const canPrefill = hydrated && !prefilled && !oferta.resultado && avatar.deseoPrincipal;

  const applyPrefill = () => {
    setOferta({ ...oferta, resultado: avatar.deseoPrincipal });
    setPrefilled(true);
  };

  const updatePar = (id: string, patch: Partial<Par>) =>
    setOferta({ ...oferta, pares: oferta.pares.map((p) => (p.id === id ? { ...p, ...patch } : p)) });

  const addPar = () => {
    if (oferta.pares.length >= 5) return;
    setOferta({ ...oferta, pares: [...oferta.pares, makePar(Math.random().toString(36).slice(2))] });
  };

  const removePar = (id: string) => setOferta({ ...oferta, pares: oferta.pares.filter((p) => p.id !== id) });

  const updatePaquete = (id: string, patch: Partial<Paquete>) =>
    setOferta({ ...oferta, paquetes: oferta.paquetes.map((p) => (p.id === id ? { ...p, ...patch } : p)) });

  const addPaquete = () => {
    if (oferta.paquetes.length >= 4) return;
    setOferta({ ...oferta, paquetes: [...oferta.paquetes, makePaquete(Math.random().toString(36).slice(2))] });
  };

  const removePaquete = (id: string) =>
    setOferta({ ...oferta, paquetes: oferta.paquetes.filter((p) => p.id !== id) });

  const updateProducto = (id: string, patch: Partial<Producto>) =>
    setOferta({ ...oferta, productos: oferta.productos.map((p) => (p.id === id ? { ...p, ...patch } : p)) });

  const addProducto = () => {
    if (oferta.productos.length >= 5) return;
    setOferta({ ...oferta, productos: [...oferta.productos, makeProducto(Math.random().toString(36).slice(2))] });
  };

  const removeProducto = (id: string) =>
    setOferta({ ...oferta, productos: oferta.productos.filter((p) => p.id !== id) });

  if (!hydrated) return null;

  const puntaje = oferta.probabilidad + oferta.rapidez + oferta.facilidad;
  const nivel = nivelValor(puntaje);
  const palancas = [
    { label: "Probabilidad percibida", valor: oferta.probabilidad },
    { label: "Rapidez percibida", valor: oferta.rapidez },
    { label: "Poco esfuerzo percibido", valor: oferta.facilidad },
  ];
  const masDebil = [...palancas].sort((a, b) => a.valor - b.valor)[0];

  const soluciones = oferta.pares.filter((p) => p.solucion.trim().length > 0);
  const nombreOferta =
    oferta.resultado || oferta.marcoTiempo || oferta.objecionPrincipal
      ? `${oferta.resultado || "[resultado deseado]"} en ${oferta.marcoTiempo || "[marco de tiempo]"}, sin ${
          oferta.objecionPrincipal || "[objeción principal]"
        }`
      : "";

  const hasEnoughForResult = nombreOferta && soluciones.length > 0;

  const precioSuelta = Number(oferta.precioSesionSuelta) || 0;
  const paquetesCompletos = oferta.paquetes.filter((p) => p.nombre.trim() && p.sesiones && p.precio);
  const productosCompletos = oferta.productos.filter((p) => p.nombre.trim() && p.precio);
  const hasMenu = precioSuelta > 0 || paquetesCompletos.length > 0 || productosCompletos.length > 0;

  const download = () => {
    const lineasPaquetes = paquetesCompletos
      .map((p) => {
        const porSesion = precioPorSesion(p);
        const ahorro = ahorroPct(p, precioSuelta);
        return `- ${p.nombre}: ${p.sesiones} sesiones · $${p.precio} total ($${porSesion.toFixed(0)}/sesión${
          ahorro !== null ? ` · ahorra ${ahorro}% vs. sesión suelta` : ""
        })`;
      })
      .join("\n");
    const lineasProductos = productosCompletos.map((p) => `- ${p.nombre} (${p.tipo}): $${p.precio}`).join("\n");

    const text = `OFERTA IRRESISTIBLE — MÉTODO HORMOZI
=====================================
${nombreOferta}

Incluye:
${soluciones.map((s) => `- ${s.solucion}`).join("\n")}

Ecuación de valor: ${puntaje}/15 (${nivel.label})
${oferta.garantiaActiva ? `\nGarantía: ${oferta.garantiaTexto}` : ""}
${oferta.escasezActiva ? `\nEscasez: ${oferta.escasezTexto}` : ""}

MENÚ DE SERVICIOS
=====================================
${precioSuelta > 0 ? `Sesión suelta: $${oferta.precioSesionSuelta}\n` : ""}
${lineasPaquetes ? `Paquetes de sesiones:\n${lineasPaquetes}\n` : ""}
${lineasProductos ? `Productos adicionales:\n${lineasProductos}\n` : ""}`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "oferta-y-menu-de-servicios.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        {canPrefill && (
          <div
            className="mb-5 p-3.5 rounded-lg flex items-center justify-between gap-3 flex-wrap"
            style={{ background: "var(--teal-soft)" }}
          >
            <p className="text-sm" style={{ color: "var(--navy)" }}>
              Detectamos el deseo principal de tu ficha de avatar. ¿Lo usamos para pre-rellenar?
            </p>
            <Button variant="secondary" onClick={applyPrefill}>
              Pre-rellenar
            </Button>
          </div>
        )}

        <p className="text-sm font-bold mb-3" style={{ color: "var(--navy)" }}>
          1. Tu oferta principal
        </p>
        <Field label="Resultado soñado de tu paciente" hint="En términos de vida, no clínicos.">
          <TextInput
            value={oferta.resultado}
            onChange={(e) => setOferta({ ...oferta, resultado: e.target.value })}
            placeholder="recuperar el control de su día a día"
          />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <Field label="Marco de tiempo" hint="Ej. 8 semanas.">
            <TextInput
              value={oferta.marcoTiempo}
              onChange={(e) => setOferta({ ...oferta, marcoTiempo: e.target.value })}
              placeholder="8 semanas"
            />
          </Field>
          <Field label="Objeción principal a desactivar" hint="La barrera más fuerte de tu avatar.">
            <TextInput
              value={oferta.objecionPrincipal}
              onChange={(e) => setOferta({ ...oferta, objecionPrincipal: e.target.value })}
              placeholder="tener que dejar el trabajo que ama"
            />
          </Field>
        </div>

        <p className="text-sm font-semibold mt-6 mb-2" style={{ color: "var(--navy)" }}>
          De problema a solución incluida
        </p>
        <p className="text-xs mb-3" style={{ color: "var(--ink-soft)" }}>
          Por cada obstáculo de tu avatar, define qué incluye tu oferta para resolverlo.
        </p>
        <div className="space-y-3">
          {oferta.pares.map((par, idx) => (
            <div key={par.id} className="p-3.5 rounded-xl" style={{ border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold" style={{ color: "var(--ink-soft)" }}>
                  #{idx + 1}
                </span>
                {oferta.pares.length > 2 && (
                  <button
                    onClick={() => removePar(par.id)}
                    aria-label="Quitar"
                    className="w-7 h-7 rounded-full text-xs"
                    style={{ color: "var(--ink-soft)", border: "1px solid var(--border)" }}
                  >
                    ✕
                  </button>
                )}
              </div>
              <TextInput
                className="mb-2"
                value={par.problema}
                onChange={(e) => updatePar(par.id, { problema: e.target.value })}
                placeholder="Problema u obstáculo (ej. 'no tengo tiempo')"
              />
              <TextInput
                value={par.solucion}
                onChange={(e) => updatePar(par.id, { solucion: e.target.value })}
                placeholder="Lo que incluye tu oferta para resolverlo"
              />
            </div>
          ))}
        </div>
        {oferta.pares.length < 5 && (
          <div className="mt-2">
            <Button variant="ghost" onClick={addPar}>
              + Agregar problema
            </Button>
          </div>
        )}

        <p className="text-sm font-semibold mt-6 mb-3" style={{ color: "var(--navy)" }}>
          Ecuación de valor
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
              Probabilidad percibida de lograrlo
            </p>
            <Slider value={oferta.probabilidad} onChange={(v) => setOferta({ ...oferta, probabilidad: v })} />
          </div>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
              Rapidez percibida del resultado
            </p>
            <Slider value={oferta.rapidez} onChange={(v) => setOferta({ ...oferta, rapidez: v })} />
          </div>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>
              Poco esfuerzo percibido para empezar
            </p>
            <Slider value={oferta.facilidad} onChange={(v) => setOferta({ ...oferta, facilidad: v })} />
          </div>
        </div>

        <div className="mt-6 space-y-1">
          <CheckItem
            label="Agregar garantía ética"
            checked={oferta.garantiaActiva}
            onChange={(v) => setOferta({ ...oferta, garantiaActiva: v })}
          />
          {oferta.garantiaActiva && (
            <TextArea
              value={oferta.garantiaTexto}
              onChange={(e) => setOferta({ ...oferta, garantiaTexto: e.target.value })}
            />
          )}
          <CheckItem
            label="Agregar escasez honesta"
            checked={oferta.escasezActiva}
            onChange={(v) => setOferta({ ...oferta, escasezActiva: v })}
          />
          {oferta.escasezActiva && (
            <TextArea
              value={oferta.escasezTexto}
              onChange={(e) => setOferta({ ...oferta, escasezTexto: e.target.value })}
            />
          )}
        </div>

        <p className="text-sm font-bold mt-8 mb-3" style={{ color: "var(--navy)" }}>
          2. Paquetes de sesiones
        </p>
        <Field label="Precio de tu sesión suelta (USD)" hint="La referencia para calcular el ahorro de tus paquetes (anclaje).">
          <TextInput
            type="number"
            min={0}
            value={oferta.precioSesionSuelta}
            onChange={(e) => setOferta({ ...oferta, precioSesionSuelta: e.target.value })}
            placeholder="80"
          />
        </Field>
        <div className="space-y-3">
          {oferta.paquetes.map((p, idx) => {
            const porSesion = precioPorSesion(p);
            const ahorro = ahorroPct(p, precioSuelta);
            return (
              <div key={p.id} className="p-3.5 rounded-xl" style={{ border: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold" style={{ color: "var(--ink-soft)" }}>
                    Paquete #{idx + 1}
                  </span>
                  {oferta.paquetes.length > 1 && (
                    <button
                      onClick={() => removePaquete(p.id)}
                      aria-label="Quitar"
                      className="w-7 h-7 rounded-full text-xs"
                      style={{ color: "var(--ink-soft)", border: "1px solid var(--border)" }}
                    >
                      ✕
                    </button>
                  )}
                </div>
                <TextInput
                  className="mb-2"
                  value={p.nombre}
                  onChange={(e) => updatePaquete(p.id, { nombre: e.target.value })}
                  placeholder="Nombre (ej. 'Paquete de 4 sesiones')"
                />
                <div className="grid grid-cols-2 gap-2">
                  <TextInput
                    type="number"
                    min={0}
                    value={p.sesiones}
                    onChange={(e) => updatePaquete(p.id, { sesiones: e.target.value })}
                    placeholder="N.º de sesiones"
                  />
                  <TextInput
                    type="number"
                    min={0}
                    value={p.precio}
                    onChange={(e) => updatePaquete(p.id, { precio: e.target.value })}
                    placeholder="Precio total (USD)"
                  />
                </div>
                {porSesion > 0 && (
                  <p className="text-xs mt-2" style={{ color: "var(--ink-soft)" }}>
                    ${porSesion.toFixed(0)}/sesión
                    {ahorro !== null && ahorro > 0 && (
                      <span style={{ color: "var(--teal)" }}> · ahorra {ahorro}% vs. sesión suelta</span>
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        {oferta.paquetes.length < 4 && (
          <div className="mt-2">
            <Button variant="ghost" onClick={addPaquete}>
              + Agregar paquete
            </Button>
          </div>
        )}

        <p className="text-sm font-bold mt-8 mb-3" style={{ color: "var(--navy)" }}>
          3. Productos adicionales
        </p>
        <p className="text-xs mb-3" style={{ color: "var(--ink-soft)" }}>
          Guías, talleres o programas que complementan tu oferta principal.
        </p>
        <div className="space-y-3">
          {oferta.productos.map((p, idx) => (
            <div key={p.id} className="p-3.5 rounded-xl" style={{ border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold" style={{ color: "var(--ink-soft)" }}>
                  Producto #{idx + 1}
                </span>
                <button
                  onClick={() => removeProducto(p.id)}
                  aria-label="Quitar"
                  className="w-7 h-7 rounded-full text-xs"
                  style={{ color: "var(--ink-soft)", border: "1px solid var(--border)" }}
                >
                  ✕
                </button>
              </div>
              <TextInput
                className="mb-2"
                value={p.nombre}
                onChange={(e) => updateProducto(p.id, { nombre: e.target.value })}
                placeholder="Nombre (ej. 'Guía de manejo de ansiedad')"
              />
              <div className="flex flex-wrap gap-1.5 mb-2">
                {TIPOS_PRODUCTO.map((tipo) => (
                  <Chip key={tipo} label={tipo} active={p.tipo === tipo} onClick={() => updateProducto(p.id, { tipo })} />
                ))}
              </div>
              <TextInput
                type="number"
                min={0}
                value={p.precio}
                onChange={(e) => updateProducto(p.id, { precio: e.target.value })}
                placeholder="Precio (USD)"
              />
            </div>
          ))}
        </div>
        {oferta.productos.length < 5 && (
          <div className="mt-2">
            <Button variant="ghost" onClick={addProducto}>
              + Agregar producto adicional
            </Button>
          </div>
        )}
      </div>

      <div>
        <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--ink-soft)" }}>
          Vista previa de tu oferta
        </p>
        <div
          className="rounded-2xl p-6"
          style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--navy-dark) 100%)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: "#8fd6c4" }}>
              Oferta irresistible
            </p>
            <span
              className="text-[10px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: nivel.color, color: "#fff" }}
            >
              {puntaje}/15 · {nivel.label}
            </span>
          </div>
          <h3 className="font-heading text-lg font-bold text-white mb-4 leading-snug">
            {nombreOferta || "Completa los campos para armar el nombre de tu oferta"}
          </h3>
          {soluciones.length > 0 && (
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/50 mb-1.5">Incluye</p>
              <ul className="space-y-1.5">
                {soluciones.map((s) => (
                  <li key={s.id} className="text-sm text-white/90 flex gap-2">
                    <span style={{ color: "#8fd6c4" }}>✓</span> {s.solucion}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {oferta.garantiaActiva && oferta.garantiaTexto && (
            <div className="mb-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/50">🛡️ Garantía</p>
              <p className="text-sm text-white/90">{oferta.garantiaTexto}</p>
            </div>
          )}
          {oferta.escasezActiva && oferta.escasezTexto && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/50">⏳ Escasez</p>
              <p className="text-sm text-white/90">{oferta.escasezTexto}</p>
            </div>
          )}
        </div>

        {hasEnoughForResult && (
          <ResultBox title="Cómo mejorar tu ecuación de valor">
            <p className="text-sm" style={{ color: "var(--ink)" }}>
              Tu palanca más débil es <strong style={{ color: "var(--navy)" }}>{masDebil.label}</strong>. Es
              donde más rápido puedes subir el valor percibido sin tocar el precio.
            </p>
          </ResultBox>
        )}

        {hasMenu && (
          <div className="mt-5">
            <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--ink-soft)" }}>
              Tu menú de servicios completo
            </p>
            <div className="card p-5">
              {precioSuelta > 0 && (
                <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: "var(--border)" }}>
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                    Sesión suelta
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                    ${oferta.precioSesionSuelta}
                  </span>
                </div>
              )}
              {paquetesCompletos.map((p) => {
                const porSesion = precioPorSesion(p);
                const ahorro = ahorroPct(p, precioSuelta);
                return (
                  <div key={p.id} className="py-2 border-b" style={{ borderColor: "var(--border)" }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                        {p.nombre}
                      </span>
                      <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                        ${p.precio}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "var(--ink-soft)" }}>
                      {p.sesiones} sesiones · ${porSesion.toFixed(0)}/sesión
                      {ahorro !== null && ahorro > 0 && (
                        <span style={{ color: "var(--teal)" }}> · ahorra {ahorro}%</span>
                      )}
                    </p>
                  </div>
                );
              })}
              {productosCompletos.map((p) => (
                <div key={p.id} className="flex items-center justify-between py-2">
                  <span className="text-sm" style={{ color: "var(--ink)" }}>
                    {p.nombre} <span style={{ color: "var(--ink-soft)" }}>({p.tipo})</span>
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                    ${p.precio}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4">
          <Button onClick={download} disabled={!hasEnoughForResult && !hasMenu}>
            ⬇ Descargar oferta y menú (.txt)
          </Button>
        </div>
      </div>
    </div>
  );
}
