export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Phase = {
  id: number;
  slug: string;
  title: string;
  description: string;
};

export type Lesson = {
  id: number;
  slug: string;
  phaseId: number;
  title: string;
  objective: string;
  content: ContentBlock[];
  toolLabel: string;
};
