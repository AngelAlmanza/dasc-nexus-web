import { IStudent } from "@/data/models";

export type KeysStudentColumns = keyof IStudent;
export type ColumnLabel = Record<KeysStudentColumns, string>;