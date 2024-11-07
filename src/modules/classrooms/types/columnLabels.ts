import { IClassroom } from "@/data/models";

export type KeysClassroomColumns = keyof IClassroom;
export type ColumnLabel = Record<KeysClassroomColumns, string>;
