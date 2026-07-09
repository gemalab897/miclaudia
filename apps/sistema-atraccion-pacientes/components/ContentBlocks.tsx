import { ContentBlock } from "@/lib/types";

export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-lesson">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
        if (block.type === "h3")
          return (
            <h3
              key={i}
              className="font-heading font-semibold text-lg mt-6 mb-2"
              style={{ color: "var(--navy)" }}
            >
              {block.text}
            </h3>
          );
        if (block.type === "quote")
          return (
            <blockquote
              key={i}
              className="my-4 px-4 py-3 rounded-lg italic"
              style={{ background: "var(--teal-soft)", color: "var(--navy)", borderLeft: "3px solid var(--teal)" }}
            >
              {block.text}
            </blockquote>
          );
        if (block.type === "list")
          return (
            <ul key={i} className="my-3 space-y-2 list-none">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-2.5" style={{ color: "var(--ink-soft)" }}>
                  <span style={{ color: "var(--teal)" }} className="mt-1 shrink-0">
                    ●
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          );
        return null;
      })}
    </div>
  );
}
