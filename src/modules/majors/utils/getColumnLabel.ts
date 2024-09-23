import { COLUMN_LABELS } from "@/modules/majors/constants";
import { KeysMajorColumns } from "@/modules/majors/types";

export const getColumnLabel = (column: KeysMajorColumns) =>
  COLUMN_LABELS[column];
