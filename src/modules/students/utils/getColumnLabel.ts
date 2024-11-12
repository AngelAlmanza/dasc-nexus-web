import { KeysStudentColumns } from "@/modules/students/types";
import { COLUMN_LABELS } from "@/modules/students/constants";

export const getColumnLabel = (column: KeysStudentColumns) =>
  COLUMN_LABELS[column];
