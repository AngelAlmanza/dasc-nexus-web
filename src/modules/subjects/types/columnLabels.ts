import { Subject } from "@/data/models";

export type KeysSubjectColumns = Exclude<keyof Subject, "toJSON">;
export type ColumnLabel = Record<KeysSubjectColumns, string>;
