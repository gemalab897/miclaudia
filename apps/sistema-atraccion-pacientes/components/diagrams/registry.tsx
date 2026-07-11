import { ComponentType } from "react";
import MatrizDiagram from "./MatrizDiagram";
import MecanismoDiagram from "./MecanismoDiagram";
import ValueStackDiagram from "./ValueStackDiagram";
import EscaleraDiagram from "./EscaleraDiagram";
import FlujoGanchoDiagram from "./FlujoGanchoDiagram";
import FlujoConversionDiagram from "./FlujoConversionDiagram";
import TimelineDiagram from "./TimelineDiagram";
import EmbudoDiagram from "./EmbudoDiagram";

export const diagramRegistry: Record<number, ComponentType> = {
  1: MatrizDiagram,
  3: MecanismoDiagram,
  5: ValueStackDiagram,
  7: EscaleraDiagram,
  8: FlujoGanchoDiagram,
  10: FlujoConversionDiagram,
  12: TimelineDiagram,
  13: EmbudoDiagram,
};
