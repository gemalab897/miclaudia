import Link from "next/link";

export default function CategoryCard({
  href,
  emoji,
  titulo,
  descripcion,
  cantidad,
  accent,
}: {
  href: string;
  emoji: string;
  titulo: string;
  descripcion: string;
  cantidad: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="category-card relative overflow-hidden rounded-3xl p-8 text-[var(--crema)] shadow-lg"
      style={{ background: accent }}
    >
      <span className="sparkle" style={{ top: "14%", right: "18%", fontSize: "14px" }}>✦</span>
      <span className="sparkle" style={{ bottom: "20%", right: "30%", fontSize: "10px", animationDelay: "0.8s" }}>✦</span>

      <span className="text-5xl">{emoji}</span>
      <h2 className="font-festive mt-4 text-3xl">{titulo}</h2>
      <p className="mt-2 text-sm text-[var(--crema)]/85">{descripcion}</p>
      <span className="mt-6 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
        {cantidad}
      </span>
    </Link>
  );
}
