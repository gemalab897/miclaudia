"use client";

import { useEffect, useState } from "react";

/**
 * Hook genérico de estado persistido en localStorage.
 * Usado para compartir datos entre lecciones (avatar → PVU → oferta)
 * sin necesidad de backend.
 */
export function useLocalState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw));
    } catch {
      // ignorar datos corruptos, usar el valor inicial
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage no disponible; el dato solo vive en memoria esta sesión.
    }
  }, [key, value, hydrated]);

  return [value, setValue, hydrated] as const;
}

export type AvatarFicha = {
  nombre: string;
  edad: string;
  situacion: string;
  dolorPrincipal: string;
  deseoPrincipal: string;
  objeciones: string;
  frasesTextuales: string;
};

export const emptyAvatar: AvatarFicha = {
  nombre: "",
  edad: "",
  situacion: "",
  dolorPrincipal: "",
  deseoPrincipal: "",
  objeciones: "",
  frasesTextuales: "",
};

export type PVUData = {
  avatar: string;
  resultado: string;
  metodo: string;
  objecion: string;
};

export const emptyPVU: PVUData = {
  avatar: "",
  resultado: "",
  metodo: "",
  objecion: "",
};

export function useAvatarState() {
  return useLocalState<AvatarFicha>("sap.avatar.v1", emptyAvatar);
}

export function usePVUState() {
  return useLocalState<PVUData>("sap.pvu.v1", emptyPVU);
}
