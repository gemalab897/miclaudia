import { ContentBlock } from "@/lib/types";

type Section = {
  heading?: { text: string; icon?: string };
  blocks: ContentBlock[];
};

function groupIntoSections(blocks: ContentBlock[]): Section[] {
  const sections: Section[] = [];
  let current: Section = { blocks: [] };

  for (const block of blocks) {
    if (block.type === "h3") {
      if (current.heading || current.blocks.length > 0) sections.push(current);
      current = { heading: { text: block.text, icon: block.icon }, blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }
  if (current.heading || current.blocks.length > 0) sections.push(current);
  return sections;
}

function InnerBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
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
            <ul key={i} className="my-3 space-y-2.5 list-none">
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
    </>
  );
}

export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  const sections = groupIntoSections(blocks);
  const intro = sections.find((s) => !s.heading);
  const rest = sections.filter((s) => s.heading);

  return (
    <div className="space-y-4">
      {intro && (
        <div className="prose-lesson px-1">
          <InnerBlocks blocks={intro.blocks} />
        </div>
      )}

      <div className="space-y-4">
        {rest.map((section, i) => (
          <div key={i} className="card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="flex items-center justify-center shrink-0 rounded-xl text-lg"
                style={{ width: 40, height: 40, background: "var(--teal-soft)" }}
              >
                {section.heading?.icon ?? "▸"}
              </span>
              <h3 className="font-heading font-semibold text-base leading-snug" style={{ color: "var(--navy)" }}>
                {section.heading?.text}
              </h3>
            </div>
            <div className="prose-lesson prose-lesson-tight">
              <InnerBlocks blocks={section.blocks} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
