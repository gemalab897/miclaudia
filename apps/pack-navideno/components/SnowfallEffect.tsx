"use client";

import { useEffect, useState } from "react";

type Flake = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  drift: number;
  symbol: string;
};

const SYMBOLS = ["❄", "❅", "❆", "✦"];

export default function SnowfallEffect() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 9 + Math.random() * 10,
      delay: Math.random() * 12,
      size: 10 + Math.random() * 14,
      drift: Math.random() * 60 - 30,
      symbol: SYMBOLS[i % SYMBOLS.length],
    }));
    setFlakes(generated);
  }, []);

  return (
    <div className="snowfall no-print" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            // @ts-expect-error custom property used by keyframes
            "--drift": `${f.drift}px`,
          }}
        >
          {f.symbol}
        </span>
      ))}
    </div>
  );
}
