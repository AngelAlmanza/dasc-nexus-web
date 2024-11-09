import { COLUMN_LABELS } from "@/modules/teacher-schedules/constants";
import { KeyTeacherScheduleColumns } from "@/modules/teacher-schedules/types";

export const getColumnLabel = (column: KeyTeacherScheduleColumns) =>
  COLUMN_LABELS[column];
