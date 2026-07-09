"use client";

import { ReactNode } from "react";

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-semibold mb-1" style={{ color: "var(--navy)" }}>
        {label}
      </span>
      {hint && (
        <span className="block text-xs mb-1.5" style={{ color: "var(--ink-soft)" }}>
          {hint}
        </span>
      )}
      {children}
    </label>
  );
}

const fieldStyle = {
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "10px 12px",
  width: "100%",
  fontSize: 14,
  background: "#fff",
  color: "var(--ink)",
};

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={fieldStyle} className={props.className} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={3} {...props} style={fieldStyle} className={props.className} />;
}

export function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} style={fieldStyle} className={props.className} />;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: "var(--teal)", color: "#fff" },
    secondary: { background: "var(--navy)", color: "#fff" },
    ghost: { background: "transparent", color: "var(--navy)", border: "1px solid var(--border)" },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity disabled:opacity-40"
      style={styles[variant]}
    >
      {children}
    </button>
  );
}

export function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
      style={{
        background: active ? "var(--teal)" : "#fff",
        color: active ? "#fff" : "var(--ink-soft)",
        border: active ? "1px solid var(--teal)" : "1px solid var(--border)",
      }}
    >
      {label}
    </button>
  );
}

export function CheckItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      className="flex items-start gap-3 py-2.5 px-3 rounded-lg cursor-pointer transition-colors"
      style={{ background: checked ? "var(--teal-soft)" : "transparent" }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 shrink-0"
        style={{ width: 16, height: 16, accentColor: "var(--teal)" }}
      />
      <span
        className="text-sm leading-snug"
        style={{
          color: checked ? "var(--ink-soft)" : "var(--ink)",
          textDecoration: checked ? "line-through" : "none",
        }}
      >
        {label}
      </span>
    </label>
  );
}

export function ResultBox({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div
      className="mt-5 p-5 rounded-xl"
      style={{ background: "var(--teal-soft)", border: "1px solid rgba(46,125,107,0.25)" }}
    >
      {title && (
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: "var(--teal)" }}>
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

export function Slider({
  value,
  onChange,
  min = 1,
  max = 5,
  labels,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  labels?: [string, string];
}) {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: "var(--teal)" }}
      />
      <div className="flex justify-between text-[11px] mt-1" style={{ color: "var(--ink-soft)" }}>
        <span>{labels?.[0] ?? min}</span>
        <span className="font-semibold" style={{ color: "var(--navy)" }}>
          {value}
        </span>
        <span>{labels?.[1] ?? max}</span>
      </div>
    </div>
  );
}
