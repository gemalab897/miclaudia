import { ComponentType } from "react";
import QuizCreencias from "./QuizCreencias";
import MatrizPosicionamiento from "./MatrizPosicionamiento";
import FichaAvatar from "./FichaAvatar";
import ConstructorPVU from "./ConstructorPVU";
import ConstructorOferta from "./ConstructorOferta";
import ChecklistInstagram from "./ChecklistInstagram";
import DiagnosticoConsciencia from "./DiagnosticoConsciencia";
import LibreriaGanchos from "./LibreriaGanchos";
import ChecklistPruebaSocial from "./ChecklistPruebaSocial";
import SimuladorObjeciones from "./SimuladorObjeciones";
import CalculadoraPresupuesto from "./CalculadoraPresupuesto";
import ChecklistSemanal from "./ChecklistSemanal";
import DashboardMetricas from "./DashboardMetricas";

export const toolRegistry: Record<number, ComponentType> = {
  0: QuizCreencias,
  1: MatrizPosicionamiento,
  2: FichaAvatar,
  3: ConstructorPVU,
  4: ConstructorOferta,
  5: ChecklistInstagram,
  6: DiagnosticoConsciencia,
  7: LibreriaGanchos,
  8: ChecklistPruebaSocial,
  9: SimuladorObjeciones,
  10: CalculadoraPresupuesto,
  11: ChecklistSemanal,
  12: DashboardMetricas,
};
