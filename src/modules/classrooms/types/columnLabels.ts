import { Classroom } from "@/data/models";

export type KeysClassroomColumns = Exclude<keyof Classroom, "toJSON">;
export type ColumnLabel = Record<KeysClassroomColumns, string>;
