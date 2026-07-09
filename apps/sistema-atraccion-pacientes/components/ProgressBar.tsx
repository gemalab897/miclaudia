export default function ProgressBar({
  percent,
  height = 8,
  color = "var(--teal)",
  track = "#e3e7ed",
}: {
  percent: number;
  height?: number;
  color?: string;
  track?: string;
}) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div
      style={{ height, background: track, borderRadius: height }}
      className="w-full overflow-hidden"
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        style={{
          width: `${clamped}%`,
          height: "100%",
          background: color,
          borderRadius: height,
          transition: "width 0.4s ease",
        }}
      />
    </div>
  );
}
