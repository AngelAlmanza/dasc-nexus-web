import { COLUMN_LABELS } from "@/modules/classrooms/constants";
import { KeysClassroomColumns } from "@/modules/classrooms/types";

export const getColumnLabel = (column: KeysClassroomColumns) =>
  COLUMN_LABELS[column];
