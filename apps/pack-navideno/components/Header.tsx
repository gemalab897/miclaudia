"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const CATEGORIAS = [
  { href: "/pijamas", label: "Pijamas", emoji: "🧦" },
  { href: "/crochet", label: "Crochet", emoji: "🧶" },
  { href: "/dulces", label: "Dulces", emoji: "🍬" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-20 border-b border-[var(--dorado)]/30 bg-[var(--verde)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-festive text-2xl text-[var(--crema)]">
          <span className="gold-text">✦ Pack Navideño ✦</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {CATEGORIAS.map((c) => {
            const active = pathname?.startsWith(c.href);
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`group relative px-4 py-2 text-sm font-semibold transition-colors ${
                  active ? "text-[var(--dorado-claro)]" : "text-[var(--crema)]/85 hover:text-[var(--dorado-claro)]"
                }`}
              >
                <span className="mr-1.5">{c.emoji}</span>
                {c.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[var(--dorado)] transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--crema)] sm:hidden"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      <nav
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out sm:hidden ${
          open ? "max-h-52" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-[var(--dorado)]/20 bg-[var(--verde)] px-5 py-3">
          {CATEGORIAS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-[var(--crema)]/90 hover:bg-white/5 hover:text-[var(--dorado-claro)]"
            >
              <span className="mr-2">{c.emoji}</span>
              {c.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
