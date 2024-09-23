import { Teacher } from "@/data/models";

export type KeyTeacherColumns = Exclude<keyof Teacher, "toJSON">;
export type ColumnLabel = Record<KeyTeacherColumns, string>;
