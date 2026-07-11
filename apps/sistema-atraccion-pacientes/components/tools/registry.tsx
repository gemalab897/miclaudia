import { ComponentType } from "react";
import QuizCreencias from "./QuizCreencias";
import MatrizPosicionamiento from "./MatrizPosicionamiento";
import FichaAvatar from "./FichaAvatar";
import FichaMecanismo from "./FichaMecanismo";
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
  3: FichaMecanismo,
  4: ConstructorPVU,
  5: ConstructorOferta,
  6: ChecklistInstagram,
  7: DiagnosticoConsciencia,
  8: LibreriaGanchos,
  9: ChecklistPruebaSocial,
  10: SimuladorObjeciones,
  11: CalculadoraPresupuesto,
  12: ChecklistSemanal,
  13: DashboardMetricas,
};
