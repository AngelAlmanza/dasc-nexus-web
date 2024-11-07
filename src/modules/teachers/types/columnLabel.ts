import { ITeacher } from "@/data/models";

export type KeyTeacherColumns = keyof ITeacher;
export type ColumnLabel = Record<KeyTeacherColumns, string>;
