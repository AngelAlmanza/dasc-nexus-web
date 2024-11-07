import { ISubject } from "@/data/models";

export type KeysSubjectColumns = keyof ISubject;
export type ColumnLabel = Record<KeysSubjectColumns, string>;
