import { COLUMN_LABELS } from "@/modules/buildings/constants";
import { KeyBuildingColumns } from "@/modules/buildings/types";

export const getColumnLabel = (column: KeyBuildingColumns) =>
  COLUMN_LABELS[column];
