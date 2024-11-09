import { ITeacherSchedule } from "@/data/models";

export type KeyTeacherScheduleColumns = keyof ITeacherSchedule;
export type ColumnLabel = Record<KeyTeacherScheduleColumns, string>;
