import { ComponentType } from "react";
import MatrizDiagram from "./MatrizDiagram";
import ValueStackDiagram from "./ValueStackDiagram";
import EscaleraDiagram from "./EscaleraDiagram";
import FlujoGanchoDiagram from "./FlujoGanchoDiagram";
import FlujoConversionDiagram from "./FlujoConversionDiagram";
import TimelineDiagram from "./TimelineDiagram";
import EmbudoDiagram from "./EmbudoDiagram";

export const diagramRegistry: Record<number, ComponentType> = {
  1: MatrizDiagram,
  4: ValueStackDiagram,
  6: EscaleraDiagram,
  7: FlujoGanchoDiagram,
  9: FlujoConversionDiagram,
  11: TimelineDiagram,
  12: EmbudoDiagram,
};
