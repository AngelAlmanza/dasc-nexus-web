import { COLUMN_LABELS } from "@/modules/teachers/constants";
import { KeyTeacherColumns } from "@/modules/teachers/types";

export const getColumnLabel = (column: KeyTeacherColumns) =>
  COLUMN_LABELS[column];
